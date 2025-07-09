const anOrder = {
   basePrice: 10,
};

export function order() {
   let basePrice = anOrder.basePrice;
   return basePrice > 1000;
}

export function orderInline() {
   return anOrder.basePrice > 1000;
}
