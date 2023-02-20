///<reference types = "Cypress"/>
///<reference types = "cypress-iframe"/>

describe('Waits',()=>{

    xit("Implicit_Explicit waits",()=>{
        cy.visit('https://reactjs.org/')
    
        //Implcit wait : This should have "should.have along with timeouts" This does not wait for 2o seconds buts just as much as its required
        cy.get('.css-1053yfl').contains('Get Started',{timeout:20000}).should('have.text','Get Started');

        //Explicit wait. This does not wait for 2o seconds buts just as much as its required
        cy.get('.css-1053yfl').contains('Get Started',{timeout:20000}).should(($el)=>{
            expect($el).to.have.class('css-1053yfl')
        })
    })

    it("Conditional Wait 1: click only if the element exists: Using Body",()=>{
        cy.visit("https://www.flipkart.com/")
        cy.get('body').then(($body)=>{
           var notpresent =  $body.find("button[class='_2KpZ6l _2doB4z']").length
           console.log("length of not present should be 0="+notpresent)
           var present =  $body.find("img[title='Flipkart']").length
           console.log("length of not present should non 0="+present)

           //conditinoal clicking
           if( $body.find("button[class='_2KpZ6l _2doB4z']").length > 0){
              return $body.find("button[class='_2KpZ6l _2doB4z']")
           }
           else return null;
        }).then(($el)=>{
            if(null != $el){
                cy.wrap($el).click();
            }
            else{
                console.log("Element not available")
            }
        })
    })

    it("Conditional Wait 2: click only if the element exists: using window",()=>{
        cy.visit("https://www.flipkart.com/")

        cy.window().then(($window)=>{
            var p =  $window.document.querySelector("button[class='_2KpZ6l _2doB4z']")
         //   var p =  $window.document.querySelector("img[title='Flipkart']")
           
            return cy.wrap(p).as('elem')
        }).then(($el)=>{
            if($el !=null){
                console.log("Element available")
                cy.wrap($el).click();
            }
            else {
                console.log("Element not available")
            }
        })
  
    })
   

})