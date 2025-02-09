import invoice from "../../src/cap-1-refatoracao-primeiro-exemplo/invoices.json";
import plays from "../../src/cap-1-refatoracao-primeiro-exemplo/plays.json";
import statement from "../../src/cap-1-refatoracao-primeiro-exemplo/statement";

// const invoice = require("../../src/cap-1-refatoracao-primeiro-exemplo/invoices.json");
// const plays = require("../../src/cap-1-refatoracao-primeiro-exemplo/plays.json");

describe("Cap. 1 - Refatoração - Primeiro Exemplo", () => {
   describe("Ponto de partida", () => {
      it("Deve resultar na saida correta de Statement for BigCo", () => {
         const result = statement({ invoice, plays });
      });
   });

   it.todo("Comentários sobre o programa inicial");

   it.todo("Primeiro passo na refatoração");

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
