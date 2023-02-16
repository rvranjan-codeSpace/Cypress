/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe("test cross domain", () => {
    xit("test cross domain", () => {
        cy.visit("https://www.google.com")

        //parent custom command
        cy.removeNoThanksframe()
        cy.get('.gLFyf').type("cypress:youtube{enter}")
        cy.wait(3000)
        cy.contains('Web Automation using Cypress', { timeout: 5000 }).should('be.visible').click()
        ///below code is not working.
        cy.origin('https://www.youtube.com', () => {
            cy.get('Subscribe')
        })
    })

    xit("should navigate to Founder's website from Saeloun's teams page", () => {
        // should render Saeloun's website
        cy.visit("https://www.saeloun.com/team");

        // click on image containing attribute alt as 'Vipul AM'
        cy.get('img[alt="Vipul A M"]').click();

        // on clicking the founder's image, user should be navigated to Vipul's website'
        cy.url().should("contain", "https://vipulnsward.com/");

        cy.get('#text03').then(($el) => {
            cy.log($el.text())
        })
    })

    xit('version12- Test1', () => {
        cy.visit('https://automationpanda.com/bdd/') //primary origin
        cy.get('a[href="https://cucumber.io/"]').click() //click the link, which navigates to the new cross origin in new tab
        cy.visit('https://cucumber.io/')//new cross origin
        cy.origin('https://cucumber.io/', () => {  //pass the argument of the secondary origin
            cy.get('.nav-main-toggle').click()
            cy.contains('Learn BDD')
            cy.contains('Learn BDD')
            cy.contains('Try CucumberStudio')
        })
    });

    it('version12- Test1 without Origin', () => {
        // This fails only for firefox browser
        cy.visit('https://automationpanda.com/bdd/') //primary origin
        cy.get('a[href="https://cucumber.io/"]').click() //click the link, which navigates to the new cross origin in new tab
        cy.visit('https://cucumber.io/')//new cross origin

        cy.get('.nav-main-toggle').click()
        cy.contains('Learn BDD')
        cy.contains('Learn BDD')
        cy.contains('Try CucumberStudio')

    });

})