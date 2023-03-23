
declare namespace Cypress {
    interface Chainable {
        removeNoThanksframe():Chainable<Element>
        getLinks():Chainable<Element>
        getText():any
        getUsers(userid:string):any
        waitForElement(condition:()=>boolean, elem:string,pollingTime:number, timeout:number):any
      
    }
  }

