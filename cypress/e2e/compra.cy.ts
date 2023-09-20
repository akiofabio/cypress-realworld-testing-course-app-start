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
    cy.get("[name='quantidade_input0']").type("6")
    cy.get("[name='finalizar_button']").click()

    //Efetuar Login
    cy.location("pathname").should("equal","/login")
    cy.get("[name='email_input']").type("cliente1@mail.com")
    cy.get("[name='senha_input']").type("Senha01-")
    cy.get("[name='entrar_button']").click()

    cy.get("[name='finalizar_button']").click()
    
    //Novo Endereço
    cy.get("[name='mostrar_end_button']").click()
    cy.get("[name='escolher_novo_end_button']").click()
    cy.get("[name='nome_end_input']").type("Trabalho")
    cy.get("[name='cep_end_input']").type("2222222222222")
    cy.get("[name='pais_end_input']").type("Brazil")
    cy.get("[name='estado_end_input']").type("São Paulo")
    cy.get("[name='cidade_end_input']").type("Mogi Das Cruzes")
    cy.get("[name='bairro_end_input']").type("Auto Teste")
    cy.get("[name='tipo_logradouro_end_input']").type("Av")
    cy.get("[name='logradouro_end_input']").type("Do Meu Trabalho")
    cy.get("[name='numero_end_input']").type("2")
    cy.get("[name='tipo_end_input']").type("Edificio")
    cy.get("[name='observacao_end_input']").type("Onde eu Trabalho")
    cy.get("[name='salvar_end_button']").click()
    cy.get("[name='escolher_end_button2']").click()

    //Cartão de Credito
    cy.get("[name='valor_car_input0']").type("1000")

    //Cupom Promocional
    cy.get("[name='add_cupom_promo_button']").click()
    cy.get("[name='escolher_cupom_promo_button0']").click()

    //Cupom Promocional
    cy.get("[name='add_cupom_troca_button']").click()
    cy.get("[name='escolher_cupom_troca_button0']").click()

    //Novo Cartão de Credito
    cy.get("[name='add_car_button']").click()
    cy.get("[name='escolher_novo_car_button']").click()
    cy.get("[name='bandeira_car_select']").select(0)
    cy.get("[name='nome_car_input']").clear()
    cy.get("[name='nome_car_input']").type("Cliente Alterar Teste")
    cy.get("[name='numero_car_input']").clear()
    cy.get("[name='numero_car_input']").type("222222222222")
    cy.get("[name='data_validade_car_input']").clear()
    cy.get("[name='data_validade_car_input']").type("2050-06")
    cy.get("[name='codigo_seguranca_car_input']").clear()
    cy.get("[name='codigo_seguranca_car_input']").type("222")
    cy.get("[name='salvar_car_button']").click()
    cy.get("[name='escolher_car_button1']").click()
    cy.get("[name='interar_valor_car_button1']").click()

    cy.get("[name='finalizar_button']").click()

    //Acessar Menu Cliente
    cy.get("[name='login_button']").click()
    cy.get("[name='menu_login_button']").click()
    cy.get("[name='meus_pedidos_button']").click()
    /*
    cy.visit('')
    cy.get("[name='']").click()
    cy.get("[name='']").type("")
    cy.get("[name='']").clear()

    */
  })
})