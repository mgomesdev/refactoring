interface Driver {
   numberOfLateDeliveries: number;
}

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
