describe("handle a new tab",()=>{
        /*
           In console we use this jquery method
           document.getElementsByTagName("H1")[0].removeAttribute("class"); In cypress we have remove.Attr
        */
    
    it("handling a new tab",()=>{

        // for a new tab.  target="_blank" is 
        cy.visit("https://practice.automationbro.com/");
        cy.get('#contact-us').
        invoke("removeAttr","target").click();
        cy.get("h1[class='tg-page-header__title']").should('have.text','Contact')
    
    })
})