## Código de exemplo para testar

-  Código para ser observado e testado que oferece uma aplicação simples que permite a um usuário analisar e manipular um plano de produção.
-  Vou me concentrar somente na parte da logica de negocios do software - isto é, nas classes que calculam o lucro e o déficit, e não no código que gera o HTML e vincula as mudanças nos campos com logica de negócios subjacente.

### Funcionamento

-  O plano de produção tem uma demanda e o preço para cada província.
-  Cada provincia tem produtores, e cada um deles é capaz de produzir determinado número de unidades a um preço específico.
-  A UI também mostra a receita que cada produtor teria se vendesse toda a sua produção.
-  A tela mostra o deficit (shotfall) na produção (a demanda menos a produção total) e o lucro (profit) para esseplano.
-  A UI permite o usuário manipular a demanda e o preço, além da produção e o custo individual para ver o efeito no deficit de produção e nos lucros.
-  Sempre que um usuario mudar qualquer numero na tela, todos os demais se atualizarão imediatamente.

### Classes

-  Esse código da logica de negócios envolve duas classes:
   -  Uma que representa um unico produtor.
   -  Outra que representa toda uma província.
-  O construtor da província aceita um objeto JavaScript - que pderíamos supor que seja fornecido por um documento JSON.
