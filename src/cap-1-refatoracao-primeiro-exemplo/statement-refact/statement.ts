import { createStatementData } from "./createStatementData";

export interface Performance {
   playID: string;
   audience: number;
   play?: Play;
   amount?: number;
   volumeCredits?: number;
   totalAmount?: number;
   totalVolumeCredits?: number;
}

interface Play {
   name: string;
   type: "tragedy" | "comedy";
}

export interface Invoice {
   customer: string;
   performances: Performance[];
}

export type Plays = { [key: string]: Play };

export type RenderData = { [key: string]: string | Performance[] };

export default function statement(invoice: Invoice, plays: Plays) {
   return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data: RenderData) {
   let result = `Statement for ${data.customer}\n`;

   for (let perf of data.performances) {
      result += ` ${(perf as Performance).play?.name}: ${usd(Number((perf as Performance).amount) / 100)} (${
         (perf as Performance).audience
      } seats)\n`;
   }

   result += `Amount owed is ${usd(Number(data.totalAmount))}\n`;
   result += `You earned ${data.totalVolumeCredits} credits\n`;
   return result;
}

function htmlStatement(invoice: Invoice, plays: Plays) {
   return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data: RenderData) {
   let result = `<h1>Statement for ${data.customer}</h1>\n`;
   result += "<table>\n";
   result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>";

   for (let perf of data.performances) {
      result += ` <tr><td>${(perf as Performance).play?.name}</td><td>${(perf as Performance).audience}</td>`;
      result += ` <td>${usd(Number((perf as Performance).amount))}</td></tr>\n`;
   }

   result += "<table>\n";
   result += `<p>Amount owed is <em>${usd(Number(data.totalVolumeCredits))}</em> credits</p>\n`;
   return result;
}

function usd(number: number) {
   return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(
      number
   );
}
