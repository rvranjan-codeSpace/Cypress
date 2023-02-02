 
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe("Test Custom command to get the links on google after typing cypress",()=>{
    xit("count and print number of links after typing google search",()=>{
        cy.visit("https://www.google.com")

        //parent custom command
        cy.removeNoThanksframe()
        cy.get('.gLFyf').type("cypress")

        //dual command . This is used with .get() and also with cy directly
       cy.get('.gLFyf').getLinks();
       cy.wait(2000)
       cy.get('.gLFyf').clear()
       cy.getLinks( )

    })

    it("login to gmail and write a custom childcommand to contain text",()=>{
        cy.visit("https://gmail.com/")
        cy.get("input[type='email']").type("secret_Sauce")
        // the below two lines are the usual
        cy.get("input[type='email']").invoke('val').then((p)=>{cy.log("text entred ="+p)})
        cy.get("input[type='email']").parents().contains("Email or phone").invoke('text').then((p)=>{cy.log("text entred ="+p)})

        cy.get("input[type='email']").getText().then((p:any)=>{
            cy.log("Text with custom command:"+p)
        })

        cy.get("input[type='email']").parents().contains("Email or phone").getText().then((p:any)=>{
            cy.log("Email or Phone:Text with custom command "+p)
        })

    })
})