/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe("Test async commands",()=>{
    it("Way1 using aliases",()=>{
        let arr:any = [];
        cy.visit("https://www.google.com")

        //parent custom command
        cy.removeNoThanksframe()
        cy.get('.gLFyf').type("secret_Sauce")
        cy.get("a").each(($el)=>{
            arr.push(($el.text()))
        }).as("myArray")

        cy.get("@myArray").then(()=>
        {
            console.log("Anchor tags count = "+arr.length);
            console.log(`Anchor tag texts string- ${arr.join(", ")}`)
        })
    
        // the below console.log will always give a wrong value as these commands are by nature aynchorouns
        // so commenting them out. 
        console.log("Anchor tags count = "+arr.length);
        console.log(`Anchor tag texts string- ${arr.join(", ")}`)
    })

    it("Way2",()=>{
        let arr:any = [];
        cy.visit("https://www.google.com")

        //parent custom command
        cy.get("a").then(($el)=>{
            for(let index =0; index <$el.length ;index++){
                arr.push(Cypress.$($el[index]).text( ));
            }
            return arr;
        }).then((newArr)=>{
            console.log("Another ways:Anchor tags count = "+newArr.length);
            console.log(`Another ways:Anchor tag texts string- ${newArr.join(", ")}`)
        })
     
    })
})
