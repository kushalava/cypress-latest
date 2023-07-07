/// <reference types="cypress" />
import 'cypress-plugin-api'

describe("API testing", ()=>{
    it("test GET method",()=>{
    cy.request("https://chercher.tech/sample/api/product/read?id=90")
        //  .its("body")
        //  .should("have.property","id")
        //  .should("have.property","name")
        //  .should("have.property", "price")
         //cy.log(its("body"));
    })
    
    it("test GET", () => {
        cy.request("GET", "https://chercher.tech/sample/api/product/read?", {
        }).then((response) => {
          // response.body is automatically serialized into JSON
          cy.log(response.body);
        });
      });
    })