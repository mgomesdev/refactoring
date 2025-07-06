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
