/// <reference types="cypress" />    


describe('this is test suit title',function(){

this.beforeEach('This will run before start', ()=>{
    cy.visit('/demo/signup/');
    cy.get('#username').as('uname');
})

  it('this is test case block',function(){
   
  cy.url().should('include','https://qavbox.github.io/demo/signup/');  //assertion
  cy.get('@uname').type('Sindhu Mitta',{force:true});

  cy.get('@uname').should('have.value','Sindhu Mitta');

  // cy.pause();
  cy.get('#email').type('kushalava@gmail.com');

 cy.contains('telephone: ',{ matchCase: false }).type('503-915-8540');
 cy.get('#fax').should('be.disabled');   //assertion
 
 //cy.get('input[name="datafile"]').selectFile('cypress/fixtures/caffiene.jpg',{ force: true });
 cy.fixture('caffiene.jpg', { encoding: null }).as('myFixture');
 cy.get('input[name="datafile"]').selectFile('@myFixture');

 cy.get('[name="sgender"]').select('male');

 //cy.get('#tools').select(['Selenium','Cypress']);

 cy.get('[value="manualtesting"]').check()

  })


  it.only('this is test then  block',function(){


  cy.get('@uname').type('Sindhu Mitta',{force:true}).invoke('val').then((myValue)=>{
  cy.log(myValue);
  //non cypress explicit assertion
  expect(myValue).eq('Sindhu Mitta'); 
  })
  
});

});