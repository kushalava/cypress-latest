

describe('test description', () => {
   // code here
 
    it('Cypress Wrap with synchronized Javascript code', () => {
        //validate the variable is equal to the expected value
        const header = "Sign In";
        cy.wrap(header).should('eq', 'Sign In');
        });

        it('Cypress Wrap with synchronized Javascript code', () => {
            // Check Object has a certain Property and Value
            const pageHeader = { header: "Sign In" }
            cy.wrap(pageHeader).should("have.property", "header", "Sign In")
            });

            it('Cypress Wrap with synchronized Javascript code', () => {
                // Check Array contains an Item
                const wso2Products = ["WSO2 Enterprise Integratort", "WSO2 API Manager", "WSO2 Identity Server", "Choreo", "Asgardeo", "Ballerina"]
                cy.wrap(wso2Products).should("contains", "Asgardeo")
                });
   });
