describe("empty spec", () => {
  it("passes", () => {
    cy.appFactories({
      factory: "todo_list",
      factory_method: "create",
      attributes: {
        name: "My Todo List",
      },
    });
    cy.visit("/");
    cy.findByText("Todo Lists").should("be.visible");
    cy.findByText("My Todo List").should("be.visible");
  });

  it("passes too", () => {
    cy.appFactories({
      factory: "todo_list",
      factory_method: "create_list",
      list_count: 2,
      attributes: {
        name: "My Todo List",
      },
    });
    cy.visit("/");
    cy.findByText("Todo Lists").should("be.visible");
    cy.findAllByText("My Todo List").should("have.length", 2);
  });
});
