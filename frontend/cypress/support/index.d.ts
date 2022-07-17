declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Makes a request to the server to clean the database.
     * @example
     * cy.cleanDatabase()
     */
    cleanDatabase(): Chainable<any>;
  }
}
