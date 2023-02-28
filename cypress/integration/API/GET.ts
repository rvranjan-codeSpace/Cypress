///<reference types = "Cypress"/>

describe("API tests", () => {

    const API_TOKEN="2ba8948bae5ac4e9103070382d4b3d3659cfba217e3b46c5bfbb510f55d90a96"


    it("Simple REST API GET", () => {
        cy.request('GET',"https://reqres.in/api/users?page=2").then((resp) => {
            expect(resp.status).equal(200)
            expect(resp.body.page).equal(2)
            expect(resp.body.support.url).equal("https://reqres.in/#support-heading")
            expect(resp.body.data[0].id).gt(0)
        })
    })

    xit("Uncomment the base URL https://reqres.in/api in cypress.config.ts file and make test work", () => {
           cy.request("/users?page=2").as("pageRequest")
           cy.get('@pageRequest').its('body').should('have.a.property','page')
           cy.get('@pageRequest').its('body.data[0]').should('have.a.property','id')
           cy.get('@pageRequest').its('body').its('data[0].id').then((id)=>{
                expect(id).to.be.equal(7)
           })
    })
   
})
