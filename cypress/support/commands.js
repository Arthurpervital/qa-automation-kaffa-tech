Cypress.Commands.add('start', () => {
    cy.visit('../../../index.html')
})

Cypress.Commands.add('submitBugdet', function () {
 //utilizando function sem aerow function para ter acesso ao this e pegar os dados do fixture

    const contatoForm = this.contactFormData.contato

        cy.get('#nome').type(contatoForm.nome)
        cy.get('#email').type(contatoForm.email)
        cy.get('#telefone').type(contatoForm.telefone)
        cy.get('#assunto').select(contatoForm.assunto[0])
        cy.get('#mensagem').type(contatoForm.mensagem)
        cy.contains('button', 'Enviar Mensagem').click()

        //valida o alert padrão do navegador
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Mensagem enviada com sucesso!')
            return true; //clica no ok do alert
        })

})

Cypress.Commands.add('TestsubmitBugdet', function () {
 //utilizando function sem aerow function para ter acesso ao this e pegar os dados do fixture

    const contatoForm = this.contactFormData.contato
    const assuntoForm = this.assuntoFormData.assunto

        cy.get('#nome').type(contatoForm.nome)
        cy.get('#email').type(contatoForm.email)
        cy.get('#telefone').type(contatoForm.telefone)
        cy.get('#assunto').select(contatoForm.assunto[0])
        cy.get('#mensagem').type(contatoForm.mensagem)
        cy.contains('button', 'Enviar Mensagem').click()

        //valida o alert padrão do navegador
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Mensagem enviada com sucesso!')
            return true; //clica no ok do alert
        })

})

Cypress.Commands.add('successfullyRequestQuote', () =>{

    //Nesse caso também poderia ser utilizado fixtures, mas como são poucos campos, irei manter hardcode para fins de exemplo

    const budgetData = {
      valorPassagem: 1500,
      numeroPessoas: 3,
      diasHospedagem: 5,
      dataNascimento: '1990-06-15'
    }

    cy.get('#valorPassagem').type(budgetData.valorPassagem).not.null
    cy.get('#numeroPessoas').type(budgetData.numeroPessoas).not.null
    cy.get('#diasHospedagem').type(budgetData.diasHospedagem).not.null
    cy.get('#dataNascimento').type(budgetData.dataNascimento).not.null
    cy.contains('button','Calcular Orçamento').click()
    cy.get('#resultadoOrcamento').should('contain.text','Orçamento total: R$ 8000.00')

})

Cypress.Commands.add('failedRequestQuote', () =>{

    const budgetData = {
      valorPassagem: 'abc',
      numeroPessoas: 'djdsnjdnjd',
      diasHospedagem: 'mksmk',
      dataNascimento: '1000-06-15'
    }

    cy.get('#valorPassagem').type(budgetData.valorPassagem)
    cy.get('#numeroPessoas').type(budgetData.numeroPessoas)
    cy.get('#diasHospedagem').type(budgetData.diasHospedagem)
    cy.get('#dataNascimento').type(budgetData.dataNascimento)
    cy.contains('button','Calcular Orçamento').click()
    cy.get('#resultadoOrcamento').should('contain.text','Orçamento total: R$ NaN')

})