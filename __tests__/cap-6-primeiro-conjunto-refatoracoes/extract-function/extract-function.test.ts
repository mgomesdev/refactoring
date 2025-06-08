import {
   printOwingCorrect,
   printOwingWrong,
} from "../../../src/cap-6-primeiro-conjunto-refatoracoes/extract-function/extract-function";

describe("Extract Function", () => {
   it("printOWing", () => {
      const invoice = {
         customer: "Matheus",
      };

      const correct = printOwingCorrect(invoice);
      const wrong = printOwingWrong(invoice);

      expect(correct).toEqual("name: Matheus - amount: 7");
      expect(wrong).toEqual("name: Matheus - amount: 7");
   });
});
