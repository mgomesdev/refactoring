import {
   amountInvoicedParamObject,
   amountInvoiced,
   readingsOutsideRange,
   stationData,
   NumberRange,
} from "../../src/cap-6-primeiro-conjunto-refatoracoes/168-introduce-parameter-object";

it("168 - Introduce Parameter Object", () => {
   const date = {
      startDate: "21/01/2025",
      endDate: "21/01/2028",
   };

   const operatingPlan = {
      temparetureFloor: 10,
      temperatureCeilling: 20,
   };

   const range = new NumberRange({ min: operatingPlan.temparetureFloor, max: operatingPlan.temperatureCeilling });
   const alertsRange = readingsOutsideRange(stationData, range);
   const alerts = readingsOutsideRange(stationData, range);

   expect(amountInvoicedParamObject(date)).toBe("21/01/2025 - 21/01/2028");
   expect(amountInvoiced(date.startDate, date.endDate)).toBe("21/01/2025 - 21/01/2028");
   expect(alerts).toEqual([
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 47, time: "2016-11-10 09:20" },
      { temp: 47, time: "2016-11-10 09:30" },
      { temp: 47, time: "2016-11-10 09:40" },
      { temp: 47, time: "2016-11-10 09:50" },
   ]);
   expect(alertsRange).toEqual([
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 47, time: "2016-11-10 09:20" },
      { temp: 47, time: "2016-11-10 09:30" },
      { temp: 47, time: "2016-11-10 09:40" },
      { temp: 47, time: "2016-11-10 09:50" },
   ]);
});
