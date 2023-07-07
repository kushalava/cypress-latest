
/// <reference types="cypress" />
import "cypress-iframe";

describe('This is your test project title', () => {
   beforeEach(() => {
    cy.visit("https://jqueryui.com/draggable/");
   })

   it('test case description', () => {
       // code here

       cy.frameLoaded(".demo-frame");

       cy.wait(3000);
            //shifting focus
      cy.iframe().find("#draggable").then(function(t){
        const frmtxt = t.text()
        //assertion to verify text
        expect(frmtxt).to.contains('Drag me around');
        cy.log(frmtxt);
    
      })
   })
})