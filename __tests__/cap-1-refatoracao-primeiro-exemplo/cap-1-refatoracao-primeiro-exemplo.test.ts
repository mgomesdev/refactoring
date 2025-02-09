import invoice from "../../src/cap-1-refatoracao-primeiro-exemplo/invoices.json";
import plays from "../../src/cap-1-refatoracao-primeiro-exemplo/plays.json";
import statement, { Plays } from "../../src/cap-1-refatoracao-primeiro-exemplo/statement-refact";

describe("Cap. 1 - Refatoração - Primeiro Exemplo", () => {
   describe("Ponto de partida", () => {
      it("Deve resultar na saida correta de Statement for BigCo", () => {
         const result = statement(invoice[0], plays as Plays);

         expect(result).toBe(
            `Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $490.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,640.00\nYou earned 47 credits\n`
         );
      });
   });

   it.todo("Decompondo a função statement");

   it.todo("Removendo a variável play");

   it.todo("Extraindo créditos por volume");

   it.todo("Removendo a variável format");

   it.todo("Status: muitas funções aninhadas");

   it.todo("Separando as fases de calculo e de formatação");

   it.todo("Status: separando em dois arquivos (e fases)");

   it.todo("Reorganizando os calculos por tipo");

   it.todo("Criando uma calculadora de apresentação");

   it.todo("Passando funções para a calculadora");

   it.todo("Deixando a calculadora de apresentação polimorfica");

   it.todo("Status: criando os dados com a calculadora polimorfica");

   it.todo("Considerações finais");
});
