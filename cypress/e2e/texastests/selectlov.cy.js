
/// <reference types="cypress" />    

describe('this is test suit title',function(){

  it('this is multiple selection',()=>{
  cy.visit('https://on.cypress.io/select');
  // select multiple values by passing an array
  cy.get('#my-states').select(['MA', 'VT', 'CT']);

})
})
