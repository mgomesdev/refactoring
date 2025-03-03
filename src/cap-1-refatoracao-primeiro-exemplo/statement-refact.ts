interface Performance {
   playID: string;
   audience: number;
   play?: Play;
   amount?: number;
   volumeCredits?: number;
}

interface Play {
   name: string;
   type: "tragedy" | "comedy";
}

interface Invoice {
   customer: string;
   performances: Performance[];
}

export type Plays = { [key: string]: Play };

type RenderData = { [key: string]: string | Performance[] };

export default function statement(invoice: Invoice, plays: Plays) {
   const statementData: RenderData = {};
   statementData.customer = invoice.customer;
   statementData.performances = invoice.performances.map(enrichPerformance);

   return renderPlainText(statementData, plays);

   function enrichPerformance(performance: Performance) {
      const result: Performance = Object.assign({}, performance);
      result.play = playFor(result);
      result.amount = amountFor(result);
      result.volumeCredits = volumeCreditsFor(result);
      return result;
   }

   function playFor(performance: Performance) {
      return plays[performance.playID];
   }

   function amountFor(performance: Performance) {
      let result = 0;

      switch (performance.play?.type) {
         case "tragedy":
            result = 40000;
            if (performance.audience > 30) {
               result += 1000 * (performance.audience - 30);
            }
            break;
         case "comedy":
            result = 30000;
            if (performance.audience > 20) {
               result += 1000 + 500 * (performance.audience - 20);
            }
            result += 300 * performance.audience;
            break;

         default:
            throw new Error(`unknown type: ${performance.play?.type}`);
      }

      return result;
   }

   function volumeCreditsFor(perf: Performance) {
      let result = 0;
      result += Math.max(perf.audience - 30, 0);

      if ("comedy" === perf.play?.type) result += Math.floor(perf.audience / 5);

      return result;
   }
}

function renderPlainText(data: RenderData, plays: Plays) {
   let result = `Statement for ${data.customer}\n`;

   for (let perf of data.performances) {
      result += ` ${(perf as Performance).play?.name}: ${usd(Number((perf as Performance).amount) / 100)} (${
         (perf as Performance).audience
      } seats)\n`;
   }

   result += `Amount owed is ${usd(totalAmount() / 100)}\n`;
   result += `You earned ${totalVolumeCredits()} credits\n`;
   return result;

   function totalAmount() {
      let result = 0;

      for (let perf of data.performances) {
         result += Number((perf as Performance).amount);
      }

      return result;
   }

   function totalVolumeCredits() {
      let result = 0;

      for (let perf of data.performances) {
         result += Number((perf as Performance).volumeCredits);
      }

      return result;
   }

   function usd(number: number) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(
         number
      );
   }
}
