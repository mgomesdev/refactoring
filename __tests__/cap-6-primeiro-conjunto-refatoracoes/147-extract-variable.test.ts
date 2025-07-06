import {
   order,
   orderExtract,
   OrderClass,
   OrderClassExtract,
} from "../../src/cap-6-primeiro-conjunto-refatoracoes/147-extract-variable";

describe("Extract variavel", () => {
   const item = {
      quantity: 5,
      itemPrice: 10,
   };

   it("Order", () => {
      const newOrder = order(item);
      const newOrderExtract = orderExtract(item);

      expect(newOrder).toBe(55);
      expect(newOrderExtract).toBe(55);
      expect(new OrderClass(item).price).toBe(55);
      expect(new OrderClassExtract(item).price).toBe(55);
   });
});
