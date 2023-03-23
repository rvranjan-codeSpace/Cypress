///<reference types = "Cypress"/>
///<reference types = "cypress-iframe" />

describe("wait until demo",()=>{
    it("our own wait until implementaton",()=>{
        cy.visit("https://the-internet.herokuapp.com/")
        cy.xpath("//h1[@class='heading']").invoke('text').then(heading=>cy.log(heading))
        cy.waitForElement(() => {
          return Cypress.$('.heading').length > 0;
        },'.heading', 1000, 5000)
        
        cy.get('.heading').should('have.text',"Welcome to the-internet")

        cy.waitForElement(() => {
          return Cypress.$('ul > :nth-child(2) > a').length > 0;
        },'ul > :nth-child(2) > a', 1000, 5000).click()

        cy.waitForElement(() => {
          return Cypress.$('ul > :nth-child(2) > a').is(":")
        },'ul > :nth-child(2) > a', 1000, 5000).click()
       
    })
})

