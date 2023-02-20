///<reference types = "Cypress"/>
///<reference types = "cypress-iframe"/>

describe('Waits',()=>{



    it("click only if the element exists",()=>{
        cy.visit("https://www.flipkart.com/")

       //cy.contains('Login').realo

        cy.contains('Sign Up').click({force:true})
    

    })
   

})