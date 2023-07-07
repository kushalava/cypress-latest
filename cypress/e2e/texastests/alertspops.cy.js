/// <reference types="cypress"/>

describe("Handling alerts and popups", () => {
    it("should handle the alerts automatically", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
      cy.visit("https://chercher.tech/practice/popups");
      //clicking the button which throws the alert popup
     //As we are not handling,cypress selects OK
      cy.get('[name="alert"]').click();
    });


    it("should handle the confirm automatically", () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
          return false;
        });
        cy.visit("https://chercher.tech/practice/popups");
        //window:confirm is the event which get fired on alert open
        cy.get('[name="confirmation"]').click();
        cy.on("window:confirm", (str) => {
          expect(str).to.equal("I am confirm");
        });
      });


      it.only("prompt type", function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
          return false;
        });
        cy.visit("https://chercher.tech/practice/popups");
        cy.window().then(function(promptelement){
          cy.stub(promptelement, "prompt").returns("Hello");
          cy.get('[name="prompt"]').click()
        });
      });
  });