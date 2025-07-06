type Invoice = {
   dueDate: Date;
   customer: string;
   orders: {
      amount: number;
   }[];
};

export function printOwingWithoutVarOutScope(invoice: Invoice) {
   const outstanding = calculateOutsanding(invoice);
   printBanner();

   // registra a data de vencimento (due date)
   recordDueDate();

   // exibe detalhes
   return pritDetails(invoice, outstanding);

   // calcula o valor a pagar (outstanding)
   function calculateOutsanding(invoice: Invoice) {
      let result = 0;

      for (const o of invoice.orders) {
         result += o.amount;
      }

      return result;
   }

   function recordDueDate() {
      const today = new Date();
      invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
   }
}

function pritDetails(invoice: Invoice, outstanding: number) {
   return `name: ${invoice.customer} - amount: ${outstanding} - due: ${invoice.dueDate.toLocaleDateString()}`;
}

/* XXX: correto
 ** neste exemplo 'printOwingCorrect' isolamos as responsabilidades.
 ** agora existem duas funções, uma para 'mostrar na tela' e outra para 'preparar os dados'.
 ** isso está de acordo com o SRP.
 */
export function printOwingCorrect(invoice: Invoice) {
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
export function printOwingWrong(invoice: Invoice) {
   printBanner();
   let outstanding = calculateOutstanding();
   // exibe detalhes
   return `name: ${invoice.customer} - amount: ${outstanding}`;
}

function calculateOutstanding() {
   return 7;
}

function printBanner() {
   return "Customer Owes";
}
