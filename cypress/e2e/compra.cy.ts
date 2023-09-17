describe('Fluxo de Compra', () => {
  it('Fluxo de Compra Noemal', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[name='pesquisa_input']").type("Produto 1")
    cy.get("[name='pesquisa_button']").click()
    /*
    cy.visit('')
    cy.get("[name='']").click()
    cy.get("[name='']").type("")
    cy.get("[name='']").clear()

    */
  })
})