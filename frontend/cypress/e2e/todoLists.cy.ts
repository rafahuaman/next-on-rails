describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.findByText("Todo Lists").click();
  });
});
