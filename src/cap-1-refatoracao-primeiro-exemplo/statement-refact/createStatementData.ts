import { Invoice, Performance, Play, Plays, RenderData } from "./statement";

export function createStatementData(invoice: Invoice, plays: Plays) {
   const statementData: RenderData = {};
   statementData.customer = invoice.customer;
   statementData.performances = invoice.performances.map(enrichPerformance);
   statementData.totalAmount = String(totalAmount(statementData));
   statementData.totalVolumeCredits = String(totalVolumeCredits(statementData));
   return statementData;

   function enrichPerformance(performance: Performance) {
      const calculator = createPerformanceCalculator(performance, playFor(performance));
      const result: Performance = Object.assign({}, performance);
      result.play = calculator.play;
      result.amount = calculator.amount;
      result.volumeCredits = calculator.volumeCredits;
      return result;
   }

   function playFor(performance: Performance) {
      return plays[performance.playID];
   }

   function totalAmount(data: RenderData) {
      return (data.performances as Performance[]).reduce((total, p) => total + Number(p.amount), 0);
   }

   function totalVolumeCredits(data: RenderData) {
      return (data.performances as Performance[]).reduce((total, p) => total + Number(p.volumeCredits), 0);
   }
}

function createPerformanceCalculator(performance: Performance, play: Play) {
   switch (play.type) {
      case "tragedy":
         return new TragedyCalculator(performance, play);
      case "comedy":
         return new ComedyCalculator(performance, play);
      default:
         throw new Error(`unknown type: ${play.type}`);
   }
}

class PerformanceCalculator {
   protected performance: Performance;
   public play: Play;

   constructor(performance: Performance, play: Play) {
      this.performance = performance;
      this.play = play;
   }

   get amount(): unknown {
      throw new Error("subclass responsability");
   }

   get volumeCredits() {
      return Math.max(this.performance.audience - 30, 0);
   }
}

class TragedyCalculator extends PerformanceCalculator {
   constructor(performance: Performance, play: Play) {
      super(performance, play);
   }

   get amount() {
      let result = 40000;

      if (this.performance.audience > 30) {
         result += 1000 * (this.performance.audience - 30);
      }

      return result;
   }
}

class ComedyCalculator extends PerformanceCalculator {
   constructor(performance: Performance, play: Play) {
      super(performance, play);
   }

   get amount() {
      let result = 30000;

      if (this.performance.audience > 20) {
         result += 1000 + 500 * (this.performance.audience - 20);
      }
      result += 300 * this.performance.audience;

      return result;
   }

   get volumeCredits() {
      return super.volumeCredits + Math.floor(this.performance.audience / 5);
   }
}

/* NOTE:
 * para fins de estudo, esta seria mais ou menos a representação do mesmo exemplo sem a utilização de classes.
 * o objetivo foi pensando em projetos react.js que por convenção não costuma utilizar classes.
 * é um esboço, nao está funcionando, precisará corrigir os tipos e fazer o teste passar.
 */

type CalculatorReturn = {
   performance: Performance;
   play: Play;
   amount: () => unknown;
   volumeCredits: () => number;
};

interface PerformanceCalculatorSchema {
   default: (performance: Performance, play: Play) => CalculatorReturn;
   tragedyCalculator: (performance: Performance, play: Play) => CalculatorReturn;
   comedyCalculator: (performance: Performance, play: Play) => CalculatorReturn;
}

const performanceCalculator: PerformanceCalculatorSchema = {
   default: (performance, play) => ({
      performance,
      play,
      amount: () => {
         throw new Error("subclass responsability");
      },
      volumeCredits: () => Math.max(performance.audience - 30, 0),
   }),
   tragedyCalculator: (performance, play) => ({
      performance,
      play,
      amount: (): number => {
         let result = 40000;

         if (performance.audience > 30) {
            result += 1000 * (performance.audience - 30);
         }

         return result;
      },
      volumeCredits: () => performanceCalculator.default(performance, play).volumeCredits(),
   }),
   comedyCalculator: (performance, play) => ({
      performance,
      play,
      amount: () => {
         let result = 30000;

         if (performance.audience > 20) {
            result += 1000 + 500 * (performance.audience - 20);
         }
         result += 300 * performance.audience;

         return result;
      },
      volumeCredits: () =>
         performanceCalculator.default(performance, play).volumeCredits() + Math.floor(performance.audience / 5),
   }),
};
