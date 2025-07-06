type Order = {
   quantity: number;
   itemPrice: number;
};

export function order(order: Order) {
   return (
      order.quantity * order.itemPrice -
      Math.max(0, order.quantity - 500) * order.itemPrice * 0.005 +
      Math.min(order.quantity * order.itemPrice * 0.1, 100)
   );
}

// Extract Variable
export function orderExtract(order: Order) {
   const basePrice = order.quantity * order.itemPrice;
   const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.005;
   const shipping = Math.min(basePrice * 0.1, 100);
   return basePrice - quantityDiscount + shipping;
}

export class OrderClass {
   private data: Order;

   constructor(order: Order) {
      this.data = order;
   }

   get quantity() {
      return this.data.quantity;
   }

   get itemPrice() {
      return this.data.itemPrice;
   }

   get price() {
      return (
         this.quantity * this.itemPrice -
         Math.max(0, this.quantity - 500) * this.itemPrice * 0.005 +
         Math.min(this.quantity * this.itemPrice * 0.1, 100)
      );
   }
}

// Extract Variable
export class OrderClassExtract {
   private data: Order;
   constructor(order: Order) {
      this.data = order;
   }

   get quantity() {
      return this.data.quantity;
   }

   get itemPrice() {
      return this.data.itemPrice;
   }

   get price() {
      return this.basePrice - this.quantityDiscount - this.shipping;
   }

   get basePrice() {
      return this.quantity * this.itemPrice;
   }

   get quantityDiscount() {
      return Math.max(0, this.quantity - 500) * this.itemPrice * 0.005;
   }

   get shipping() {
      return Math.min(this.basePrice * 0.1, 100);
   }
}
