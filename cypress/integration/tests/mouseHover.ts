///<reference types = "Cypress"/>
///<reference types = "cypress-iframe"/>

import "cypress-real-events"

describe('mousehover simple', () => {

    xit("mouseover :normal", () => {
        cy.visit("https://www.flipkart.com/")
        cy.contains('Login').trigger('mouseover')
        cy.contains('My Profile').invoke('show')
        cy.contains('My Profile').click()
    })

    it("mouseover :using cypress-real-events", () => {
        cy.visit("https://www.flipkart.com/")
        //npm install -D cypress-real-events
        //import "cypress-real-events/support";

        cy.contains('Login').realHover('mouse')
         cy.contains('My Profile').should('be.visible').wait(1000)
    })

})