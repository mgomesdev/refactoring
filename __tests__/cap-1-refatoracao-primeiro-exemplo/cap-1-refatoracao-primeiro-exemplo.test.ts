import invoice from "../../src/cap-1-refatoracao-primeiro-exemplo/invoices.json";
import plays from "../../src/cap-1-refatoracao-primeiro-exemplo/plays.json";
import statement, {
   htmlStatement,
   Plays,
} from "../../src/cap-1-refatoracao-primeiro-exemplo/statement-refact/statement";

describe("Cap. 1 - Refatoração - Primeiro Exemplo", () => {
   it("Deve resultar na saida correta de Statement for BigCo", () => {
      const result = statement(invoice[0], plays as Plays);
      expect(result).toBe(
         `Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $490.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $164,000.00\nYou earned 47 credits\n`
      );
   });

   it("Deve resultar na saida correta de htmlStatement", () => {
      const result = htmlStatement(invoice[0], plays as Plays);
      expect(result.replace(/\s+/g, " ").trim()).toEqual(
         `<h1>Statement for BigCo</h1> <table> <tr><th>play</th><th>seats</th><th>cost</th></tr> <tr><td>Hamlet</td><td>55</td> <td>$65,000.00</td></tr> <tr><td>As You Like It</td><td>35</td> <td>$49,000.00</td></tr> <tr><td>Othello</td><td>40</td> <td>$50,000.00</td></tr> <table> <p>Amount owed is <em>$47.00</em> credits</p>`
      );
   });

   it.todo("Status: separando em dois arquivos (e fases)");

   it.todo("Reorganizando os calculos por tipo");

   it.todo("Criando uma calculadora de apresentação");

   it.todo("Passando funções para a calculadora");

   it.todo("Deixando a calculadora de apresentação polimorfica");

   it.todo("Status: criando os dados com a calculadora polimorfica");

   it.todo("Considerações finais");
});
