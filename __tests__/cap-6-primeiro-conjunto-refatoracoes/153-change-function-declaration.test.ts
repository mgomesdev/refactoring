import {
   inNewEngland,
   inNewEngandChange,
   someCustomers,
} from "../../src/cap-6-primeiro-conjunto-refatoracoes/153-change-function-declaration";
it("Change Function Declaration", () => {
   const newEnglanders = someCustomers.filter((c) => inNewEngland(c));
   const newEnglandersChange = someCustomers.filter((c) => inNewEngandChange(c.address.state));
   expect(newEnglanders).toEqual([{ address: { state: "MA" } }]);
   expect(newEnglandersChange).toEqual([{ address: { state: "MA" } }]);
});
