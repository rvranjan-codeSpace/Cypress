
Cypress.Commands.add('removeNoThanksframe', () => {
    cy.get("iframe[role='presentation']").then(($frame=>{
        if($frame.length > 0){
            cy.frameLoaded("iframe[role='presentation']")
            cy.iframe().contains("No thanks").click()
        }
        else{
            cy.log("Sigin frame doesnot exists")
        }
    }))
})

Cypress.Commands.add('getLinks', { prevSubject: 'element' }, (subject) => {
    if (subject) {
        console.log("I am in if")
        cy.wrap(subject).then((log)=>console.log("subject="+log))
        cy.wrap(subject).then(($el) => {
            cy.wrap($el).invoke('attr','maxlength').then((p:any)=>console.log("lenght="+p))
            cy.wrap($el).parents().find('ul')
        })
    }
    else {
        console.log("I am in Else")
        cy.get('a')
    }
})