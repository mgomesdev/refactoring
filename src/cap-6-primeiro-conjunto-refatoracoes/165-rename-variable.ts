const height = 1;
const width = 2;

// XXX: prefira nomes explicativos (explicitos)
let a = height * width;
let area = height * width;

let tpHd = "untitled";

const obj = {
   articleTitle: "Titulo do artigo",
};

export function showTitle() {
   let result = "";
   result += `<h1>${title()}</h1>`;
   setTitle(obj["articleTitle"]);

   return result;

   function title() {
      return tpHd;
   }
   function setTitle(arg: string) {
      tpHd = arg;
   }
}

/* XXX:
 ** em alguns casos onde será complexo alterar o nome da variavel e os locais onde é utilizado
 ** vocẽ pode criar uma variavel explicativa e atribuir a ela, ficando mais facil o entendimento.
 */
const companyName = "Acme Gooseberries";
const cpyNm = companyName;

/* XXX:
 ** Dependendo do escopo, quando precisamos alterar o nome de uma variavel,
 ** seja porque o projeto evoluiu, as regras mudaram etc...,
 ** se a variavel sofre mutação (mutanças) prefira encapsular em uma função.
 ** assim todo o código referencia a uma função,
 ** e fica mais facil realizar alterações sem afetar o funciomento final
 */
