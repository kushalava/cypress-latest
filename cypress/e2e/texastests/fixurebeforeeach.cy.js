/// <reference types="cypress" />    

describe('this is test suit title',function(){
   let userDetails;
   beforeEach(()=>{
    cy.visit('https://react-redux.realworld.io/#/login?_k=hvgbqt')
     cy.fixture('userlogin.json').then((user)=>{
        userDetails=user;
     })
    })


    it('this is  fixture example',function(){
        

    cy.get('input[type="email"]').type(userDetails.email);
 
    cy.get('input[type="password"]').type(userDetails.password);

    cy.get('button[type="submit"]').click();

    cy.contains(userDetails.text).should('be.visible');

    })
})

