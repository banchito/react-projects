/// <reference types="cypress" />

describe("Search", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("maintains searched value in input", () => {
    cy.get("input").type("test");
    cy.get("[data-testid='search']").click();
    cy.get("input").should("contain.value", "test");
  });
});
