
///<reference types = "cypress"/>
const uData = require('../fixtures/User')

Cypress.Commands.add('getUsers',(userid:string)=>{
    const API_TOKEN = "2ba8948bae5ac4e9103070382d4b3d3659cfba217e3b46c5bfbb510f55d90a96"
    let randomText=""
    let testEmail= ""

    var PATTERN = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkalmanopqrstuvwxyz";
    for(var i = 0; i<10; i++){
        randomText+=PATTERN.charAt(Math.floor(Math.random()* PATTERN.length))
    }
    testEmail = randomText+"@abcd.com"

    cy.request(
        {
        method: "POST",
        url:"https://gorest.co.in/public/v2/users",
        headers:{
            "Authorization": "Bearer " + API_TOKEN
        },
        body:{
            "email": testEmail,
            "gender": uData.gender,
            "name": uData.name,
            "status": uData.status
        }

    }).then(resp=>{
       return cy.wrap(resp).as('resp')
    })
})

Cypress.Commands.add('getUsersObject',(userid:string)=>{
    const API_TOKEN = "2ba8948bae5ac4e9103070382d4b3d3659cfba217e3b46c5bfbb510f55d90a96"
    let randomText=""
    let testEmail= ""

    var PATTERN = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkalmanopqrstuvwxyz";
    for(var i = 0; i<10; i++){
        randomText+=PATTERN.charAt(Math.floor(Math.random()* PATTERN.length))
    }
    testEmail = randomText+"@abcd.com"

    cy.request(
        {
        method: "POST",
        url:"https://gorest.co.in/public/v2/users",
        headers:{
            "Authorization": "Bearer " + API_TOKEN
        },
        body:{
            "email": testEmail,
            "gender": uData.gender,
            "name": uData.name,
            "status": uData.status
        }

    }).then(resp=>{
       return cy.wrap({name: resp.body.name, email:resp.body.email}).as('resp')
    })
})