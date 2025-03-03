import { Invoice, Performance, Plays, RenderData } from "./statement";

export function createStatementData(invoice: Invoice, plays: Plays) {
   const statementData: RenderData = {};
   statementData.customer = invoice.customer;
   statementData.performances = invoice.performances.map(enrichPerformance);
   statementData.totalAmount = String(totalAmount(statementData));
   statementData.totalVolumeCredits = String(totalVolumeCredits(statementData));
   return statementData;

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

   function totalAmount(data: RenderData) {
      return (data.performances as Performance[]).reduce((total, p) => total + Number(p.amount), 0);
   }

   function totalVolumeCredits(data: RenderData) {
      return (data.performances as Performance[]).reduce((total, p) => total + Number(p.volumeCredits), 0);
   }
}
