/// <reference types="cypress" />    

describe('this is test suit title',function(){
    //let userDetails;
    beforeEach(function() {
        cy.visit('https://react-redux.realworld.io/#/login?_k=hvgbqt')
      cy.fixture('userlogin.json').as('userDetails')

    
    })
 
 
     it('this is  fixture example',function(){
       
 
     cy.get('input[type="email"]').type(this.userDetails.email);
  
     cy.get('input[type="password"]').type(this.userDetails.password);
 
     cy.get('button[type="submit"]').click();
 
     cy.contains(this.userDetails.text).should('be.visible');
 
     })
 })
 