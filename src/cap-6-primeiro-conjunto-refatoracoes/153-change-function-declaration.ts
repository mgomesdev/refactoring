export function circum(radius: number) {
   return circumference(radius);
}

export function circumference(radius: number) {
   return 2 * Math.PI * radius;
}

/* XXX:
 * em alguns casos, quando uma função possui um nome que não corresponde exatamente ao que se espera.
 * precisamos atualizar essa função (nomes, parametros etc...) para que ela atenda a nossos requisitos.
 * pode ser que ela esteja sendo utilizada em diversos locais separados, nesses casos.
 * migre aos poucos, e sempre rode os testes para certificar de que o sistema continua funcionando corretamente.
 * DICA: utilize o recurso de 'pesquisa' da sua IDE para buscar em todo o projeto os locais onde o método que será alterado está sendo utilizado.
 */

type StateCode = "MA" | "SP";

type Customer = {
   address: {
      state: StateCode;
   };
};

export function inNewEngland(customer: Customer) {
   return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(customer.address.state);
}

export function inNewEngandChange(stateCode: StateCode) {
   return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

export const someCustomers: Customer[] = [
   {
      address: { state: "MA" },
   },
];

/* XXX:
 * prefira especificar exatamente as propriedades que as funções irão utilizar.
 * evite dependencias desnecessarias, por ex: 'inNewEngland' só utiliza a prop 'state' de customer.
 * portanto, o parametro da função deverá ser apenas 'state', evitando dependencias desnecessarias (objeto customer inteiro).
 * isso facilita a reutilização do código em diversos contextos diferentes.
 * DICA: quando estiver refatorando, trabelhe em cima de copias da função original, e assim que tiver finalizado, substitua a antiga pela nova.
 */
