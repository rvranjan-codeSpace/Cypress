///<reference types = "Cypress"/>
///<reference types = "cypress-iframe"/>

import 'cypress-wait-until'

describe('Waits', () => {

    xit("Implicit_Explicit waits", () => {
        cy.visit('https://reactjs.org/')

        //Implcit wait : This should have "should.have along with timeouts" This does not wait for 2o seconds buts just as much as its required
        cy.get('.css-1053yfl').contains('Get Started', { timeout: 20000 }).should('have.text', 'Get Started');

        //Explicit wait. This does not wait for 2o seconds buts just as much as its required
        cy.get('.css-1053yfl').contains('Get Started', { timeout: 20000 }).should(($el) => {
            expect($el).to.have.class('css-1053yfl')
        })
    })

    xit("Conditional Wait 1: click only if the element exists: Using Body", () => {
        cy.visit("https://www.flipkart.com/")
        cy.get('body').then(($body) => {
            var notpresent = $body.find("button[class='_2KpZ6l _2doB4z']").length
            console.log("length of not present should be 0=" + notpresent)
            var present = $body.find("img[title='Flipkart']").length
            console.log("length of not present should non 0=" + present)

            //conditinoal clicking
            if ($body.find("button[class='_2KpZ6l _2doB4z']").length > 0) {
                return $body.find("button[class='_2KpZ6l _2doB4z']")
            }
            else return null;
        }).then(($el) => {
            if (null != $el) {
                cy.wrap($el).click();
            }
            else {
                console.log("Element not available")
            }
        })
    })

    xit("Conditional Wait 2: click only if the element exists: using window", () => {
        cy.visit("https://www.flipkart.com/")

        cy.window().then(($window) => {
            var p = $window.document.querySelector("button[class='_2KpZ6l _2doB4z']") // This element doesnot exitsts

            //   var p =  $window.document.querySelector("img[title='Flipkart']") // : this element exisits

            return cy.wrap(p).as('elem')
        }).then(($el) => {
            if ($el != null) {
                console.log("Element available")
                cy.wrap($el).click();
            }
            else {
                console.log("Element not available")
            }
        })

    })

    xit("wait for page load or element to appear", () => {
        //cy.intercept('GET','  https://api.demoblaze.com/entries').as("waitUntil")

        //or
        cy.intercept({
            method: 'GET',
            url: '/entries'
        }).as("waitUntil")

        cy.visit("https://demoblaze.com/")

        //Under noraml cirucmstances while we get lattop the page is still not loaded

        // cy.wait('@waitUntil').its('response.statusCode').should('eq',200)
        cy.wait('@waitUntil').its('response.body').then((body) => {
            cy.log("Body=" + body.Items[0].desc)
        })
        cy.get(".list-group").contains("Laptop")

    })

    xit("Dynamic wait using waitUntil", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
        cy.get("#start > button").click()
        //cy.wait(6000)
        //  cy.get('#finish >h4').should('be.visible')
        cy.waitUntil(() => {
            cy.window().then((win) => {
                var some = win.document.querySelector('#finish >h4')?.textContent
                console.log("text content = " + some)
                if (win.document.querySelector('#finish >h4')?.textContent == 'Hello World!') {
                    var some = win.document.querySelector('#finish >h4')?.textContent
                    console.log("Got the element")
                    return true
                }
                else {
                    console.log("Element not found")
                    return false
                }
            })
        },
            {
                errorMsg: 'This is a custom error message', // overrides the default error message
                timeout: 6000, // waits up to 2000 ms, default to 5000
                interval: 2000 // performs the check every 500 ms, default to 200
            }).then(() =>
                cy.get('#finish >h4').should('have.text', 'Hello World!')
            )
    })



    it("Dynamic wait using waitUntil Final", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
        cy.get("#start > button").click()
        cy.waitUntil(() => {
            cy.get('#finish >h4').getText()
        }, {
            errorMsg: "My error message",
            timeout: 8000, // waits up to 2000 ms, default to 5000
            interval: 3000,// performs the check every 500 ms, default to 200,
            customMessage: "custom Message"
        })
    })
    
    xit("Dynamic wait using waitUntil", () => {
        //  cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
        //  cy.get("#start > button").click()
        cy.visit('https://www.programsbuzz.com/')
        cy.waitUntil(() => cy.get("li[data-id ='0ee2f378-8a34-4979-9048-7df6e96762f2']"), {
            errorMsg: "My error message",
            timeout: 2000, // waits up to 2000 ms, default to 5000
            interval: 500,// performs the check every 500 ms, default to 200,
            customMessage: "custom Message"

        })

    })

})