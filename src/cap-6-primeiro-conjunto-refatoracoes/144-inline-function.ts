type Driver = {
   numberOfLateDeliveries: number;
};

export function getRating(driver: Driver) {
   return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver: Driver) {
   return driver.numberOfLateDeliveries > 5;
}

// Inline Function
export function getRatingInline(driver: Driver) {
   return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

/* XXX:
 * as vezes não precisamos manter uma função isolada para retornar um processamento.
 * se o resultado dessa função só é utilizado em um local e essa função é simples, retorne ela diretamente no local.
 * caso o sistema evolua e você precise fazer esse processamento em mais de 1 local, ai sim, você isola em uma função;
 */
