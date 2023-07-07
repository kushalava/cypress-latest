/// <reference types="cypress" />    

describe('this is test suit title',function(){
    //let userDetails;
    beforeEach(function() {
     cy.log('This is my before each block')
    })



    it('This is my first it block',()=>{

        cy.log('This is my before each block-1')

    })
    it('This is my first it block',()=>{

        cy.log('This is my before each block-2')

    })
    it('This is my first it block',()=>{

        cy.log('This is my before each block-3')

    })

})
