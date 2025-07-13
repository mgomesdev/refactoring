/// XXX: caso os dados sejam mutaveis, separar em um arquivo especifico ex: 'defaul-owner-data.ts' e exportar o data.
let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };

const spaceship = {
   owner: defaultOwner(),
};
spaceship.owner;

defaultOwnerData = { firstName: "Rebecca", lastName: "Parsons" };

spaceship.owner = defaultOwner();

setDefaultOwner({
   firstName: "Matheus",
   lastName: "Gomes",
});

// XXX: prefira não utilizar 'get' no nome para getters (seja mais explicito)
export function defaultOwner() {
   return Object.assign({}, defaultOwnerData);
}

/// XXX: prefira não utilizar Overloaded Getter Setter (prefira 'set....).
function setDefaultOwner(arg: typeof defaultOwnerData) {
   defaultOwnerData = arg;
}

/* XXX:
 ** Quando dados que mudam (mutaveis) estão sendo compartilhados e manipulados em varios locais no sistema.
 ** Crie arquivos especificos para cada local especifico
 ** e exporte métodos que acessem os dados originais por meio de cópias (Object.assign).
 ** assim será evitado que um arquivo modifique os dados globais e afetem todos os outros que estão utilizando.
 ** manipular e acessas a cópia neste contexto, isola as responsabilidades evitando grandes problemas.
 */
