//intellisense
/// <reference types="cypress" />


//test suite block
describe('My nike application',()=>{

    beforeEach('visit portal',()=>{
        cy.visit('/signup/');
    })

    //test case
it('This is my first test',()=>{
  cy.log("This is my first test")
  cy.log("this is my third statement");
  //console.log('THIS IS FROM JAVA')
})

it('This is my first test',()=>{
    cy.log("This is my 2nd  test")
})

it('This is my first test',()=>{
    cy.log("This is my 3rd  test");
})

})
