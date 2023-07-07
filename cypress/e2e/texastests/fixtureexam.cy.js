/// <reference types="cypress" />    

describe('this is test suit title',function(){

    it('this is non fixture example',function(){
       cy.visit('https://react-redux.realworld.io/#/login?_k=hvgbqt')
       cy.get('input[type="email"]').type("qaboxletstest@gmail.com");

       cy.get('input[type="password"]').type('password123');

       cy.get('button[type="submit"]').click();

       cy.contains('No articles are here... yet.').should('be.visible');

    })

    it.only('this is  fixture example',function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=hvgbqt')

  cy.fixture('userlogin.json').then(user=>{
    cy.get('input[type="email"]').type(user.email);
 
    cy.get('input[type="password"]').type(user.password);

    cy.get('button[type="submit"]').click();

    cy.contains('No articles are here... yet.').should('be.visible');

  })


  
  it.only('this is  fixture example',function(){
    cy.visit('https://react-redux.realworld.io/#/login?_k=hvgbqt')

cy.fixture('userlogin.json').then(user=>{
cy.get('input[type="email"]').type(user.email);

cy.get('input[type="password"]').type(user.password);

cy.get('button[type="submit"]').click();

cy.contains('No articles are here... yet.').should('be.visible');

})

 
     })


})