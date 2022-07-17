describe("empty spec", () => {
  it("passes", () => {
    cy.createList({
      factory: "todo_list",
      listCount: 2,
      attributes: {
        name: "My Todo List",
      },
    });
    cy.visit("/");
    cy.findByText("Todo Lists").should("be.visible");
    cy.findAllByText("My Todo List").should("be.visible");
  });

  it("passes too", () => {
    cy.create({
      factory: "todo_list",
      attributes: {
        name: "My Todo List",
      },
    }).as("list");
    cy.get<{ id: Number }>("@list").then(({ id: listId }) => {
      cy.create({
        factory: "task",
        attributes: { todoListId: listId, title: "My task" },
      });
    });

    cy.visit("/");

    cy.findByText("Todo Lists").should("be.visible");
    cy.findByText("My Todo List").should("be.visible");
    cy.findByText("My task").should("be.visible");
  });
});
