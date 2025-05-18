import Province, { Producers } from "./Province";

class Producer {
   private _production;
   private _province;
   private _cost: number = 0;
   private _name;

   constructor(province: Province, data: Producers) {
      this._production = data.production;
      this._province = province;
      this._cost = data.cost;
      this._name = data.name;
   }

   get name() {
      return this._name;
   }

   get cost() {
      return `${this._cost}`;
   }

   set cost(arg: string) {
      this._cost = parseInt(arg);
   }

   get production() {
      return `${this._production}`;
   }

   set production(amountStr: string) {
      const amount = parseInt(amountStr);
      const newProduction = Number.isNaN(amount) ? 0 : amount;
      this._province.totalProduction += newProduction - this._production;
      this._production = newProduction;
   }
}

export default Producer;
