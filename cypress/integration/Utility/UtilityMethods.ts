

export function getTextFromLinkIndexUsingAlias(index: number): any {
    //cy.visit("https://www.google.com")
    cy.get('a').then($el => {
        for (var i = 0; i < $el.length; i++) {
            if (i === index) {
                cy.wrap($el.text()).as("indexTxt")
            }
        }
    })
}

export function getTextFromLinkIndexUsingPromise(index: number): any {
    return new Cypress.Promise((resolve, reject) => {
        cy.get('a').then($el => {
            for (var i = 0; i < $el.length; i++) {
                if (i === index) {
                    resolve($el.text())
                }
                if (index > $el.length)
                    reject("Index out of bound")
            }
        })
    })

}