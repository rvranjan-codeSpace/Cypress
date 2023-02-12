 
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe("Test Custom command",()=>{
    it("Lognin to Google.com remove Sigin frame",()=>{
        cy.visit("https://www.google.com")
        cy.get("iframe[role='presentation']").then(($frame=>{
            if($frame.length > 0){
                cy.frameLoaded("iframe[role='presentation']")
                cy.iframe().contains("No Thanks").click()
            }
            else{
                cy.log("Sigin frame doesnot exists")
            }
        }))

    })
})
