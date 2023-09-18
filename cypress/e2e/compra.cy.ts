describe('Fluxo de Compra', () => {
  it('Fluxo de Compra Normal', () => {
    cy.visit('http://localhost:3000/')
    
    //Pesquisar Produto
    cy.get("[name='pesquisa_input']").type("Produto 1")
    cy.get("[name='pesquisa_button']").click()

    //Adionar Produto no Carrinho
    cy.get("[name='produto_res1']").click()
    cy.get("[name='quantidate_input']").clear()
    cy.get("[name='quantidate_input']").type("2")
    cy.get("[name='cep_input']").type("1111111111")
    cy.get("[name='add_produto_car_button']").click()
    cy.get("[name='remover_button0']").click()
    cy.get("[name='home_button']").click()
    cy.get("[name='add_produto_des_car_button0']").click()
    cy.get("[name='home_button']").click()
    cy.get("[name='add_produto_des_car_button2']").click()
    cy.get("[name='quantidade_input0']").clear()
    cy.get("[name='quantidade_input0']").type("2")
    cy.get("[name='finalizar_button']").click()

    //Efetuar Login
    cy.location("pathname").should("equal","/login")
    cy.get("[name='email_input']").type("cliente1@mail.com")
    cy.get("[name='senha_input']").type("Senha01-")
    cy.get("[name='entrar_button']").click()

    cy.get("[name='finalizar_button']").click()
    /*
    cy.visit('')
    cy.get("[name='']").click()
    cy.get("[name='']").type("")
    cy.get("[name='']").clear()

    */
  })
})