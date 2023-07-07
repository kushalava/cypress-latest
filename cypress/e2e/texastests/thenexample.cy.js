
/// <reference types="cypress" />


describe('Automate AutoPract',()=>{
    before(() => {
        cy.visit('http://www.autopract.com/#/home/fashion')
        cy.get("button[aria-label='Close'] ").as('Popup')
        
        })
    it('Should click POPUP',function(){
        this.Popup.click()

    })
    it('Log Price And Verify Dress Name',()=>{
        cy.get("body > app-root:nth-child(1) > app-fashion-one:nth-child(3) > section:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > owl-carousel-o:nth-child(1) > div:nth-child(1) > div:nth-child(1) > owl-stage:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-product-box-one:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(4)").as('Dress')
        cy.get('@Dress').then($Price => {
            const Dprice = $Price.text();
            cy.log(Dprice)
            expect(Dprice).to.equal(' $87.00  $145.00')
        })
    })


})