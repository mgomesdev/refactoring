export function amountInvoiced(startDate: string, endDate: string) {
   return `${startDate} - ${endDate}`;
}

export function amountInvoicedParamObject(date: { startDate: string; endDate: string }) {
   return `${date.startDate} - ${date.endDate}`;
}

export const stationData = {
   name: "ZB1",
   readings: [
      {
         temp: 47,
         time: "2016-11-10 09:10",
      },
      {
         temp: 47,
         time: "2016-11-10 09:20",
      },
      {
         temp: 47,
         time: "2016-11-10 09:30",
      },
      {
         temp: 47,
         time: "2016-11-10 09:40",
      },
      {
         temp: 47,
         time: "2016-11-10 09:50",
      },
   ],
};

export function readingsOutsideRange(station: typeof stationData, range: { min: number; max: number }) {
   return station.readings.filter((r) => r.temp < range.min || r.temp > range.max);
}

type Range = {
   min: number;
   max: number;
};

export class NumberRange {
   private _data: Range;

   constructor({ min, max }: Range) {
      this._data = { min, max };
   }

   get min() {
      return this._data.min;
   }

   get max() {
      return this._data.max;
   }
}

/* XXX: agrupe parametros comuns em objetos
 ** agrupar traz mais coesao, diminui a quantidade de parametros e facilita a carga cognitiva.
 ** prefira 'value objects' como parametros.
 */
