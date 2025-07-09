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

/* XXX:
 * em alguns casos, não precisamos reter o valor em uma variavel explicativa
 * em casos como esse, faz mais sentido retornar a expressao completa de uma vez.
 * isso reduz o código, e fica mais facil de entender.
 */
