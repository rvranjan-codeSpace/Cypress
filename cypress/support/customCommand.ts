
//custom parent command
Cypress.Commands.add('removeNoThanksframe', () => {
    cy.get("iframe[role='presentation']").then(($frame=>{
        if($frame.length > 0){
            cy.frameLoaded("iframe[role='presentation']")
            cy.iframe().contains("No thanks").click()
          // cy.iframe().get('iframe').click();
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
            cy.wrap(element).invoke('text')
        }
        else{
        }
    }) 
})

//custom  overwrite command
Cypress.Commands.overwrite('visit', (originalFn, options) => { 
    console.log("visiting URL")
    return originalFn(options);
})

/*
Cypress.Commands.add('waitForElement', (condition, pollingTime, timeout) => {
  console.log("condition:"+condition)
  let numOFPolls:number =0;
  let startTime = Date.now();
  return cy.get('body').then(() => {
    return cy.wrap(null, { timeout }).should(() => {
      return new Cypress.Promise(resolve => {
        const checkCondition = () => {
          const elapsedTime = Date.now() - startTime;
          if (elapsedTime >= timeout) {
            console.log("checked for the function"+numOFPolls)
            throw new Error(`Timed out after ${timeout}ms waiting for element`);
          }
          if (condition()) {
            resolve();
            return;
          }
          console.log("rechecking...")
          setTimeout(checkCondition, pollingTime);
        };
        numOFPolls++
        
        checkCondition();
      });
    });
  });
});
*/
Cypress.Commands.add('waitForElement', (condition,elem, pollingTime, timeout) => {
  let startTime = Date.now();
  return cy.get('body').then(() => {
    return new Cypress.Promise(resolve => {
      const checkCondition = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= timeout) {
          throw new Error(`Timed out after ${timeout}ms waiting for element`);
        }
        const element = Cypress.$(elem);
        if (condition()) {
          resolve(cy.wrap(element));
          return;
        }
        setTimeout(checkCondition, pollingTime);
      };
      checkCondition();
    });
  });
});




