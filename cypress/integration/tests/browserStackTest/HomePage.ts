/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

class HomePage{


    elements ={
        loginBtn : () => cy.get("#signin"),
        logOffBtn : () => cy.get("#logout")
    }

    clickOnSignin(){
        this.elements.loginBtn().click()
    }
}

module.exports = new HomePage();
// or export default HomePage

//module.exports : used when exporting single class 

//use exports for multiple methods or objs:
/*

exports.add = (a, b) => a + b;
exports.divide = (a, b) => {
    if (b != 0) {
        return a / b;
    }
    return `Divided by zero !!!`;
}

and other side :
const Arithmetic = require('./calculator.js');
*/
