import { order, orderInline } from "../../src/cap-6-primeiro-conjunto-refatoracoes/152-inline-variable";

it("Inline Variable", () => {
   expect(order()).toBeFalsy();
   expect(orderInline()).toBeFalsy();
});
