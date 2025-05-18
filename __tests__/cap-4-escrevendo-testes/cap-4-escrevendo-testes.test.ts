import Producer from "../../src/cap-4-escrevendo-testes/Producer";
import Province from "../../src/cap-4-escrevendo-testes/Province";

describe("Aplicação simples que permite um usuario analisar e manipular um plano de produção", () => {
   it("O plano de produção tem uma demanda e o preço para cada província.", () => {
      const producers = new Producer(
         new Province({
            producers: [],
            demand: 30,
            price: 20,
            name: "Sinope",
         }),
         {
            production: 9,
            cost: 10,
            name: "Byzantium",
         }
      );

      expect(producers.production).toBe("9");
      expect(producers.cost).toBe("10");
      expect(producers.name).toBe("Byzantium");
   });

   it("Cada provincia tem produtores, e cada um deles é capaz de produzir determinado número de unidades a um preço específico.", () => {
      const province = new Province({
         producers: [
            {
               production: 9,
               cost: 10,
               name: "Byzantium",
            },
         ],
         demand: 30,
         price: 20,
         name: "Sinope",
      });

      const producers = province.producers;

      expect(producers[0].production).toBe("9");
      expect(producers[0].cost).toBe("10");
      expect(producers[0].name).toBe("Byzantium");
      expect(province.demand).toBe(30);
      expect(province.price).toBe("20");
      expect(province.name).toBe("Sinope");
   });
   it.todo("A UI também mostra a receita que cada produtor teria se vendesse toda a sua produção.");
   it.todo(
      "A tela mostra o deficit (shotfall) na produção (a demanda menos a produção total) e o lucro (profit) para esseplano."
   );
   it.todo(
      "A UI permite o usuário manipular a demanda e o preço, além da produção e o custo individual para ver o efeito no deficit de produção e nos lucros."
   );
   it.todo("Sempre que um usuario mudar qualquer numero na tela, todos os demais se atualizarão imediatamente.");
});
