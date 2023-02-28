///<reference types = "Cypress"/>
///<reference types = "cypress-iframe"/>


import "cypress-real-events"
import * as util from '../Utility/UtilityMethods'

describe('mousehover simple', () => {

    it("simple xpath example", () => {
        cy.visit("https://the-internet.herokuapp.com/")
         cy.xpath("//h1[@class='heading']").invoke('text').then(heading=>cy.log(heading))
         getText("//h1[@class='heading']").then((heading2:string )=>cy.log("Heading2="+heading2))
         getHeading("//h1[@class='heading']","xpath").should('equal','Welcome to the-internet')
         getHeading("//h1[@class='heading']","xpath").then((text:any)=>cy.log("Text here is "+text))
       
    })

    it("Calling utility function from different file .Return type is alias",()=>{
        cy.visit("https://www.google.com")
        util.getTextFromLinkIndexUsingAlias(3)
        cy.get('@indexTxt').then(p=>expect(p).to.contain('Gmail'))
    })

    it("Calling utility function from different file.Return type is Promise",()=>{
        cy.visit("https://www.google.com")
        util.getTextFromLinkIndexUsingPromise(3).then((p:string)=>cy.log(p))
        util.getTextFromLinkIndexUsingPromise(1000000).then((p:string)=>cy.log(p))
    })

    /*
    From utitliy function we always return a chain of command and not the value
    */
    function getText(loc:string):any{
       return cy.xpath("//h1[@class='heading']").invoke('text')

        /*
        This is wrong. Here we are returning a value
        cy.xpath("//h1[@class='heading']").invoke('text').then(heading=>
        {
            headingText = heading
            cy.log("Headinng1="+headingText)
            return headingText;
        })
        */
    }

    function getHeading(locator:string, type:string):any{
        cy.log("Locator:"+locator+" :"+type)
        if(type == "xpath"){
            return  cy.xpath("//h1[@class='heading']").invoke('text').then(com=>
             {  
               // cy.log("com here is :"+com)
              return com
             })
        }
        else{
           return  cy.xpath("//h1[@class='heading']").invoke('text').then(kan=>
            {
              return kan
            })
        }
    }
})
