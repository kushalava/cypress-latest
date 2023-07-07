describe("My Second Test Suite", function () {
    it("Handling child tabs and browser controls", function () {
cy.visit('https://iframetester.com/?url=https://www.lambdatest.com/blog')
//let's test iframe
cy.get('#iframe-window')
    .should('be.visible')
    .should('not.be.empty')
    .then(($iframe) => {
        const $body = $iframe.contents().find('body')

cy.wrap($body)
    .find(`input[name='s']`)
    .type('Cypress{enter}')

})
    })
})
