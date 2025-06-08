import {
   printOwingWithoutVarOutScope,
   printOwingCorrect,
   printOwingWrong,
} from "../../../src/cap-6-primeiro-conjunto-refatoracoes/extract-function/extract-function";

describe("Extract Function", () => {
   it("printOWing", () => {
      const invoice = {
         dueDate: new Date(),
         customer: "Matheus",
         orders: [
            {
               amount: 7,
            },
         ],
      };

      const withoutVarOutScope = printOwingWithoutVarOutScope(invoice);
      const correct = printOwingCorrect(invoice);
      const wrong = printOwingWrong(invoice);

      expect(withoutVarOutScope).toEqual("name: Matheus - amount: 7 - due: 08/07/2025");
      expect(correct).toEqual("name: Matheus - amount: 7");
      expect(wrong).toEqual("name: Matheus - amount: 7");
   });
});
