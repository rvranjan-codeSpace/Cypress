/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

 function uploadCypressReport(){
    return new Promise((resolve, reject)=>{
        cy.log("In upload")
        const filePath = "cypress/reports/html/index.html"
        const formData = new FormData();
    
        const fileSizeInBytes = fs.statSync(filePath)
    //    / const fileStream = cy.createReadStream(filePath);
       // debugger;
        resolve(fileSizeInBytes)
    
    })
    }

