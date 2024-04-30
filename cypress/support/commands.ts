/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
declare namespace Cypress {
  interface Chainable {
    login(): void;
  }
}
Cypress.Commands.add('login',() => {
  cy.visit("https://test-new.fullsession.io/login");
  cy.get('[formcontrolname="username"]').type("wonfs@protonmail.com");
  cy.get('[type="password"]').type("fFtybgE928^BRtJ");
  cy.get("button[type='submit']").click();
  
  cy.url().should('not.contain', '/login');
  
  cy.window().then((win) => {
    const authToken = win.localStorage.getItem('token');
    
    if (authToken) {
      const token = JSON.parse(authToken);
      Cypress.env('token', token.access_token);
      localStorage.setItem("token", JSON.stringify(token));
    }
  });
});

