import Shrek from "../fixtures/shrek";
describe("Searchbar", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("appUrl"));
  });

  it("accepts input", () => {
    const typeInput = "shrek";
    cy.get(".searchbarInput").type(typeInput).should("have.value", typeInput);
  });

  it("Gets the correct elements", () => {
    const typeInput = "Shrek";
    cy.fixture("Shrek").as("Shrek");
    cy.server();
    cy.route("/api/movies/:sort/1//?title=shrek", "@Shrek").as("search");
    cy.get(".searchbarInput").type(typeInput).should("have.value", typeInput);
    cy.wait(200);
    cy.get("div[class = card]").should("length", 4);
    //searchShrek er data som ligger i fixtures
  });
});
