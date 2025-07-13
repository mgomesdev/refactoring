import { showTitle } from "../../src/cap-6-primeiro-conjunto-refatoracoes/165-rename-variable";
it("Rename Variable", () => {
   const title = showTitle();
   expect(title).toBe("<h1>untitled</h1>");
});
