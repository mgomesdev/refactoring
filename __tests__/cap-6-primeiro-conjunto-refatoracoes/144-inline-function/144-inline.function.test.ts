import {
   getRating,
   getRatingInline,
} from "../../../src/cap-6-primeiro-conjunto-refatoracoes/144-inline-function/144-inline-function";

describe("Internalizar função (Inline function)", () => {
   it("getRating", () => {
      const rating = getRating({ numberOfLateDeliveries: 5 });
      const ratingInline = getRatingInline({ numberOfLateDeliveries: 7 });
      expect(rating).toBe(1);
      expect(ratingInline).toBe(2);
   });
});
