import { order, orderExtract } from "../../src/cap-6-primeiro-conjunto-refatoracoes/147-extract-variable";

describe("Extract variavel", () => {
   it("Order", () => {
      const newOrder = order({
         quantity: 5,
         itemPrice: 10,
      });

      const newOrderExtract = orderExtract({
         quantity: 5,
         itemPrice: 10,
      });

      expect(newOrder).toBe(55);
      expect(newOrderExtract).toBe(55);
   });
});
