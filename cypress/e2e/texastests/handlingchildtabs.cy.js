/// <reference types="cypress" />    

describe("My Second Test Suite", function () {
    it("Handling child tabs and browser controls", function () {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
      cy.visit("https://chercher.tech/practice/popups");
      cy.get("#two-window")
         .invoke("removeAttr", "target")  //interview to handle new tabs.
        .click();

    });
  });