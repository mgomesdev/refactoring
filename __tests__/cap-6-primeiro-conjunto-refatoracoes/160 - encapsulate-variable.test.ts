import { defaultOwner } from "../../src/cap-6-primeiro-conjunto-refatoracoes/160-encapsulate-variable";
it("Encapsulate Variable", () => {
   const owner1 = defaultOwner();
   expect(owner1.lastName).toBe("Gomes");
   const owner2 = defaultOwner();
   owner2.lastName = "Parsons";
   expect(owner1.lastName).not.toBe("Parsons");
});
