
//custom parent command
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

//custom dual command command. for Dual command : prevSubject: 'optional'
Cypress.Commands.add('getLinks', { prevSubject: 'optional' }, (subject) => {
    if (subject) {
        cy.wrap(subject).then(($el) => {
            // invoking an atribute
            cy.wrap($el).invoke('attr','maxlength').then((p:any)=>console.log("lenght="+p))
            // calling the parents . parents is actually a jquerry commnad.
            cy.wrap($el).parents().find('.OBMEnb:nth-child(1) ul li .wM6W7d span').each(($el)=>{
            cy.log("All elements \n"+$el.text())
            })
        })
    }
    else {
        cy.log("I am in Else. No search found")
    
    }
})

//custom child command command. for Dual command : prevSubject: 'optional'
Cypress.Commands.add('getText', { prevSubject: 'element' }, (element) => {
    cy.wrap(element).invoke('text').then((text)=>{
        if(text === ''){
            cy.wrap(element).invoke('attr','autocomplete')
        }
        else{
            cy.wrap(element).invoke('text')
        }
    })
    
    
})

//custom  overwrite command
Cypress.Commands.overwrite('visit', (originalFn, options) => { 
  cy.visit

})