/// <reference types="cypress" />



describe('Fileupload',function(){

    it('Fileupload', function(){
// //file to be uploaded path in project folder
// const p = 'caffiene.png'
// // launch URL
 cy.visit("https://the-internet.herokuapp.com/upload")
// //upload file with attachFile
 cy.get('#file-upload').invoke('show').selectFile('cypress/fixtures/caffiene.png',{force:true});

// cy.visit('http://www.autopract.com/#/home/fashion')
//        cy.get("button[aria-label='Close'] ").click()
//        cy.get('.btn.btn-success').scrollIntoView()
       
//        cy.get('input[type="file"]').selectFile('caffiene.png', {force:true})
        
    })
})

