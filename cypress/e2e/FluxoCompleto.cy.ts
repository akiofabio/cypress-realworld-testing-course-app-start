describe('Fluxo de Completo', () => {
  it('Fluxo Normal', () => {
    cy.visit('http://localhost:3000/')
    
    //Pesquisar Produto
    cy.get("[name='pesquisa_input']").type("Produto 1")
    cy.get("[name='pesquisa_button']").click()

    //Adionar Produto no Carrinho
    cy.get("[name='produto_res1']").click()
    cy.get("[name='quantidate_input']").clear()
    cy.get("[name='quantidate_input']").type("4")
    cy.get("[name='cep_input']").type("1111111111")
    cy.get("[name='add_produto_car_button']").click()
    cy.get("[name='home_button']").click()
    cy.get("[name='add_produto_des_car_button2']").click()
    cy.get("[name='quantidade_input1']").clear()
    cy.get("[name='quantidade_input1']").type("6")
    cy.get("[name='home_button']").click()
    cy.get("[name='add_produto_des_car_button5']").click()
    cy.get("[name='quantidade_input2']").clear()
    cy.get("[name='quantidade_input2']").type("5")
    cy.get("[name='finalizar_button']").click()

    //Efetuar Login Cliente
    cy.location("pathname").should("equal","/login")
    cy.get("[name='email_input']").type("cliente1@mail.com")
    cy.get("[name='senha_input']").type("Senha01-")
    cy.get("[name='entrar_button']").click()

    //Checkout
    cy.location("pathname").should("equal","/carrinho")
    cy.wait(200)
    cy.get("[name='finalizar_button']").click()

    //Cartão de Credito
    cy.wait(200)
    cy.get("[name='interar_valor_car_button0']").click()
    
    //Filanlizar Compra
    cy.get("[name='finalizar_button']").click()

    //Logout Cliente
    cy.get("[name='login_button']").click()
    cy.get("[name='sair_login_button']").click()
    
    //Efetuar Login do Admin
    cy.get("[name='login_button']").click()
    cy.location("pathname").should("equal","/login")
    cy.get("[name='email_input']").type("admin@mail.com")
    cy.get("[name='senha_input']").type("admin123")
    cy.get("[name='entrar_button']").click()

    //Aprovar Pedido
    cy.get("[name='pedidos_menu_button']").click()
    cy.get("[name='pedido_aprovado_button0']").click()
    cy.wait(300)
    cy.get("[name='pedido_em_preparo_button0']").click()
    cy.wait(300)
    cy.get("[name='pedido_enviado_button0']").click()
    cy.wait(300)
    cy.get("[name='pedido_entregue_button0']").click()

    //Logout Admin
    cy.get("[name='login_button']").click()
    cy.get("[name='sair_login_button']").click()

    //Efetuar Login Cliente
    cy.get("[name='login_button']").click()
    cy.location("pathname").should("equal","/login")
    cy.get("[name='email_input']").type("cliente1@mail.com")
    cy.get("[name='senha_input']").type("Senha01-")
    cy.get("[name='entrar_button']").click()
    
    //Devolver Pedido na Area do CLiente
    cy.get("[name='login_button']").click()
    cy.get("[name='menu_login_button']").click()
    cy.get("[name='meus_pedidos_button']").click()
    cy.get("[name='devolver_pedido_parcial_button0']").click()
    cy.get("[name='quantidade_input0']").clear()
    cy.get("[name='quantidade_input0']").type("1")
    cy.get("[name='quantidade_input1']").clear()
    cy.get("[name='quantidade_input1']").type("1")
    cy.get("[name='quantidade_input2']").clear()
    cy.get("[name='quantidade_input2']").type("0")
    cy.get("[name='confimar_button']").click()
    
    //Logout Cliente
    cy.get("[name='login_button']").click()
    cy.get("[name='sair_login_button']").click()
    
    //Efetuar Login do Admin
    
    cy.get("[name='login_button']").click()
    cy.location("pathname").should("equal","/login")
    cy.get("[name='email_input']").type("admin@mail.com")
    cy.get("[name='senha_input']").type("admin123")
    cy.get("[name='entrar_button']").click()

     //Aprovar Troca
     cy.get("[name='pedidos_menu_button']").click()
     cy.get("[name='troca_pacial_aprovada_button0']").click()
     cy.get("[name='trocado_parcialmente_button0']").click()

     //Logout Admin
    cy.get("[name='login_button']").click()
    cy.get("[name='sair_login_button']").click()

    //Efetuar Login Cliente
    cy.get("[name='login_button']").click()
    cy.location("pathname").should("equal","/login")
    cy.get("[name='email_input']").type("cliente1@mail.com")
    cy.get("[name='senha_input']").type("Senha01-")
    cy.get("[name='entrar_button']").click()

    //Adionar Produto no Carrinho

    cy.get("[name='add_produto_des_car_button0']").click()
    cy.wait(500)
    cy.get("[name='quantidade_input0']").clear()
    cy.wait(500)
    cy.get("[name='quantidade_input0']").type("9")
    cy.get("[name='finalizar_button']").click()

    //Checkout
    cy.get("[name='finalizar_button']").click()

    //Adicionar Cupom de Troca
    cy.get("[name='add_cupom_troca_button']").click()
    cy.get("[name='escolher_cupom_troca_button0']").click()

    //Cartão de Credito
    cy.get("[name='valor_car_input0']").clear()
    cy.get("[name='valor_car_input0']").type("1000")
    cy.get("[name='add_car_button']").click()
    cy.get("[name='escolher_car_button0']").click()
    cy.get("[name='interar_valor_car_button1']").click()
    
    //Filanlizar Compra
    cy.get("[name='finalizar_button']").click()

    /*
    cy.visit('')
    cy.get("[name='']").click()
    cy.get("[name='']").type("")
    cy.get("[name='']").clear()

    */
  })
})