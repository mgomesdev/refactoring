interface Performances {
   playID: string;
   audience: number;
}

interface Play {
   name: string;
   type: "tragedy" | "comedy";
}

interface Invoice {
   customer: string;
   performances: Performances[];
}

export type Plays = { [key: string]: Play };

export default function statement(invoice: Invoice, plays: Plays) {
   let totalAmount = 0;
   let volumeCredits = 0;
   let result = `Statement for ${invoice.customer}\n`;
   const format = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 })
      .format;

   function playFor(performance: Performances) {
      return plays[performance.playID];
   }

   function amountFor(performance: Performances) {
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

   function volumeCreditsFor(perf: Performances) {
      let volumeCredits = 0;
      volumeCredits += Math.max(perf.audience - 30, 0);

      if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

      return volumeCredits;
   }

   for (let perf of invoice.performances) {
      volumeCredits += volumeCreditsFor(perf);

      // soma um crédito extra para cada dez espectadores de comédia
      if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

      // exibe a linha para esta requisição
      result += ` ${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${perf.audience} seats)\n`;
      totalAmount += amountFor(perf);
   }

   result += `Amount owed is ${format(totalAmount / 100)}\n`;
   result += `You earned ${volumeCredits} credits\n`;
   return result;
}
