declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Makes a request to the server to clean the database.
     * @example
     * cy.cleanDatabase()
     */
    cleanDatabase(): Chainable<any>;

    /**
     * Makes a request to the server to clean the database.
     * @example
     * cy.create()
     */
    create(args: Object): Chainable<any>;
    createList({
      factory,
      listCount,
      attributes,
    }: {
      factory: String;
      listCount: Number;
      traits?: [String];
      attributes?: Object;
    }): Chainable<any>;
  }
}
