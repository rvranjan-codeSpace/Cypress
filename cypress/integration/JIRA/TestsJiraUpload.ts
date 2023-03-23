/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import cypress from 'cypress'
import * as uploads from './uploadFileUtility'
//import * as uploads from './uploadFileUtility'
//const uploads = require('./uploadFileUtility')

describe("uplaod",()=>{
    it("test upload",()=>{
        cy.log("test")
        uploads.uploadCypressReport()
       // cy.wrap(uploads.uploadCypressReport()).then((resp:any)=>{
       // cy.log(resp)
        })

})


