import { Invoice, Performance, Play, Plays, RenderData } from "./statement";

export function createStatementData(invoice: Invoice, plays: Plays) {
   const statementData: RenderData = {};
   statementData.customer = invoice.customer;
   statementData.performances = invoice.performances.map(enrichPerformance);
   statementData.totalAmount = String(totalAmount(statementData));
   statementData.totalVolumeCredits = String(totalVolumeCredits(statementData));
   return statementData;

   function enrichPerformance(performance: Performance) {
      const calculator = new PerformanceCalculator(performance, playFor(performance));
      const result: Performance = Object.assign({}, performance);
      result.play = calculator.play;
      result.amount = calculator.amount;
      result.volumeCredits = volumeCreditsFor(result);
      return result;
   }

   function playFor(performance: Performance) {
      return plays[performance.playID];
   }

   function amountFor(performance: Performance) {
      return new PerformanceCalculator(performance, playFor(performance)).amount;
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

class PerformanceCalculator {
   private performance: Performance;
   public play: Play;

   constructor(performance: Performance, play: Play) {
      this.performance = performance;
      this.play = play;
   }

   get amount() {
      let result = 0;

      switch (this.play.type) {
         case "tragedy":
            result = 40000;
            if (this.performance.audience > 30) {
               result += 1000 * (this.performance.audience - 30);
            }
            break;
         case "comedy":
            result = 30000;
            if (this.performance.audience > 20) {
               result += 1000 + 500 * (this.performance.audience - 20);
            }
            result += 300 * this.performance.audience;
            break;

         default:
            throw new Error(`unknown type: ${this.play.type}`);
      }

      return result;
   }
}
