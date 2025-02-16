interface Performance {
   playID: string;
   audience: number;
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

export default function statement(invoice: Invoice, plays: Plays) {
   let totalAmount = 0;
   let volumeCredits = 0;
   let result = `Statement for ${invoice.customer}\n`;

   function usd(number: number) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(
         number
      );
   }

   function playFor(performance: Performance) {
      return plays[performance.playID];
   }

   function amountFor(performance: Performance) {
      let result = 0;

      switch (playFor(performance).type) {
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
            throw new Error(`unknown type: ${playFor(performance).type}`);
      }

      return result;
   }

   function volumeCreditsFor(perf: Performance) {
      let result = 0;
      result += Math.max(perf.audience - 30, 0);

      if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

      return result;
   }

   for (let perf of invoice.performances) {
      volumeCredits += volumeCreditsFor(perf);

      // soma um crédito extra para cada dez espectadores de comédia
      if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

      // exibe a linha para esta requisição
      result += ` ${playFor(perf).name}: ${usd(amountFor(perf) / 100)} (${perf.audience} seats)\n`;
      totalAmount += amountFor(perf);
   }

   result += `Amount owed is ${usd(totalAmount / 100)}\n`;
   result += `You earned ${volumeCredits} credits\n`;
   return result;
}
