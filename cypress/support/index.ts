
declare namespace Cypress {
    interface Chainable {
        removeNoThanksframe():Chainable<Element>
        getLinks():Chainable<Element>
        getText():any
        getUsers(userid:string):any
        getUsersObject(userid:string):any
    }
  }

