import Producer from "./Producer";

export type Producers = { production: number; name: string; cost: number };

type Doc = {
   producers: Producers[];
   demand: number;
   price: number;
   name: string;
};

class Province {
   private _totalProduction;
   private _producers: Producer[] = [];
   private _demand;
   private _price;
   private _name;
   private _demandValue: number = 0;
   private _demandCost: number = 0;
   private _satisfiedDemand: number = 0;

   constructor(doc: Doc) {
      this._totalProduction = 0;
      this._demand = doc.demand;
      this._price = doc.price;
      this._name = doc.name;
      doc.producers.forEach((d) => this.addProducers(new Producer(this, d)));
   }

   addProducers(arg: Producer) {
      this._producers.push(arg);
   }

   get name() {
      return this._name;
   }

   get producers() {
      return this._producers.slice();
   }

   get totalProduction() {
      return this._totalProduction;
   }

   set totalProduction(arg: number) {
      this._totalProduction = arg;
   }

   get demand() {
      return this._demand;
   }

   set demand(arg: number) {
      this._demand = arg;
   }

   get price() {
      return `${this._price}`;
   }

   set price(arg: string) {
      this._price = parseInt(arg);
   }

   get shortfall() {
      return this._demand - this.totalProduction;
   }

   get profit() {
      return this._demandValue - this._demandCost;
   }

   get demandCost() {
      let remainingDemand = this.demand;
      let result = 0;
      this.producers
         .sort((a, b) => {
            const aCost = Number(a.cost);
            const bCost = Number(b.cost);
            return aCost - bCost;
         })
         .forEach((p) => {
            const contribution = Math.min(remainingDemand, Number(p.production));
            remainingDemand -= contribution;
            result += contribution * Number(p.cost);
         });

      return result;
   }

   get demandValue() {
      return this._satisfiedDemand * Number(this.price);
   }

   get satisfiedDemand() {
      return this._satisfiedDemand;
   }
}

export default Province;
