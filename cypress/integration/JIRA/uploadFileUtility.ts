/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import { stat, Stats } from "fs";

import * as fs from 'fs'
//const fs = require('fs').promises;



export function uploadCypressReport(){
return new Promise((resolve, reject)=>{
    cy.log("In upload")
    const filePath = "cypress\\integration\\JIRA\\mochawesome.json"
    const formData = new FormData();
    cy.log(__dirname)
    cy.readFile(filePath).then(content=>cy.log(content))
   
//    / const fileStream = cy.createReadStream(filePath);
   // debugger;
    resolve("2")

})
}