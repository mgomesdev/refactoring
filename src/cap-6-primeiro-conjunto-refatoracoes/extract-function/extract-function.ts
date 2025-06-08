/* XXX: correto
 ** neste exemplo 'printOwingCorrect' isolamos as responsabilidades.
 ** agora existem duas funções, uma para 'mostrar na tela' e outra para 'preparar os dados'.
 ** isso está de acordo com o SRP.
 */
export function printOwingCorrect(invoice: { customer: string }) {
   printBanner();
   let outstanding = calculateOutstanding();
   return printDetails(outstanding);

   function printDetails(outstanding: number) {
      return `name: ${invoice.customer} - amount: ${outstanding}`;
   }
}

/* XXX: errado
 ** neste exemplo, 'printOwingWrong' está com duas responsabilidades:
 ** 'printar na tela' e 'preparar os dados para serem printados'.
 ** isso fere o SRP (Single Responsability) => SOLID.
 ** cada função deve fazer uma e apenas uma coisa.
 */
export function printOwingWrong(invoice: { customer: string }) {
   printBanner();
   let outstanding = calculateOutstanding();
   // exibe detalhes
   return `name: ${invoice.customer} - amount: ${outstanding}`;
}

function calculateOutstanding() {
   return 7;
}

function printBanner() {
   return "printBanner";
}
