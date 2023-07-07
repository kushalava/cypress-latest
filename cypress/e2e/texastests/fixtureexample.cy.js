/// <reference types="cypress" />

import user from '../../../fixtures/user.json';

describe("Overriding the fixture file", function () {
    it("try to login", () => {
      cy.visit("http://zero.webappsecurity.com/login.html");
      cy.fixture(user).then((user) => {
        const username = user.username;
        //it is mentioned like user.username since
         //we are getting the details form the user.json file
        const password = user.password;
        cy.get("#user_login").type(username);
        cy.get("#user_password").type(password);
        cy.contains("Sign in").click();
      });
    });
  });