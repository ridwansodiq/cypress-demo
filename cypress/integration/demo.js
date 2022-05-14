describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:3000') // change URL to match your dev URL
    })

    it('check landing page text', () => {

        cy.visit('http://localhost:3000') // change URL to match your dev URL
        cy.get('#web-title').contains('Cypress Demo Webapp')
    })
})
