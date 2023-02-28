///<reference types = "Cypress"/>

const userData = require('../../fixtures/User')

describe("API testsPOTS", () => {

    const API_TOKEN = "2ba8948bae5ac4e9103070382d4b3d3659cfba217e3b46c5bfbb510f55d90a96"
    let randomText=""
    let testEmail= ""
    //url =
    it("Simple REST API POST to create a user", () => {

        var PATTERN = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkalmanopqrstuvwxyz";
        for(var i = 0; i<10; i++){
            randomText+=PATTERN.charAt(Math.floor(Math.random()* PATTERN.length))
        }
        testEmail = randomText+"@abcd.com"

        cy.fixture('User').then(UserData=>{
            // if we use this approach then entire cy.request we need to write it in this block
            cy.log("In the fixture name="+UserData.name+" gender="+UserData.gender+" status="+UserData.status)
        })
        cy.request(
            {
                method: 'POST',
                url: "https://gorest.co.in/public/v2/users",
                headers: {
                    "Authorization": "Bearer " + API_TOKEN
                },
                body: {
                    "email": testEmail,
                    "gender": userData.gender,
                    "name": userData.name,
                    "status": userData.status
                }
            }).then((resp)=>{
              // expect(resp.body.data).has.property('email',testEmail)
              expect(resp.status).to.equal(201)
              expect(resp.body.gender).to.equal("male")
              expect(resp.body.email).to.equal(testEmail)
               cy.log(JSON.stringify(resp))
            })

    })

    it("get respone from custom command",()=>{
        cy.getUsers("userId");
        cy.get('@resp').then((data:any)=>{
            cy.log("response:"+data.body.name)
            cy.log("response:"+data.body.email)
            cy.log("response:"+data.body.gender)
            cy.log("response:"+data.body.status)
        })

    })    

    it("get  Objecy from custom command",()=>{
        cy.getUsersObject("userId");
        cy.get('@resp').then((data:any)=>{
            cy.log("response:"+data.name)
            cy.log("response:"+data.email)
           
        })

    })    
})