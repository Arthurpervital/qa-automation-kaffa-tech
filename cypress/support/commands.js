Cypress.Commands.add('start', () => {
    cy.visit('../../../index.html')
})

Cypress.Commands.add('submitBugdet', function () {
 //utilizando function sem aerow function para ter acesso ao this e pegar os dados do fixture

    const contatoForm = this.contactFormData.contato

        cy.get('#nome').type(contatoForm.nome).should('be.visible').and('not.null')
        cy.get('#email').type(contatoForm.email).should('be.visible').and('not.null')
        cy.get('#telefone').type(contatoForm.telefone).should('be.visible').and('not.null')
        cy.get('#assunto').select(contatoForm.assunto[0]).should('be.visible')
        cy.get('#mensagem').type(contatoForm.mensagem).should('have.value', contatoForm.mensagem).and('not.null')
        cy.contains('button', 'Enviar Mensagem').click().should('be.visible')

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

    cy.get('#valorPassagem').type(budgetData.valorPassagem).should('be.visible').and('not.null')
    cy.get('#numeroPessoas').type(budgetData.numeroPessoas).should('be.visible').and('not.null')
    cy.get('#diasHospedagem').type(budgetData.diasHospedagem).should('be.visible').and('not.null')
    cy.get('#dataNascimento').type(budgetData.dataNascimento).should('be.visible').and('not.null')
    cy.contains('button','Calcular Orçamento').click().should('be.visible')
    cy.get('#resultadoOrcamento').should('contain.text','Orçamento total: R$ 8000.00')

})

Cypress.Commands.add('failedRequestQuote', () =>{

    const budgetData = {
      valorPassagem: 'abc',
      numeroPessoas: 'djdsnjdnjd',
      diasHospedagem: 'mksmk',
      dataNascimento: '1000-06-15'
    }

    cy.get('#valorPassagem').type(budgetData.valorPassagem).should('be.visible').and('not.null')
    cy.get('#numeroPessoas').type(budgetData.numeroPessoas).should('be.visible').and('not.null')
    cy.get('#diasHospedagem').type(budgetData.diasHospedagem).should('be.visible').and('not.null')
    cy.get('#dataNascimento').type(budgetData.dataNascimento).should('be.visible').and('not.null')
    cy.contains('button','Calcular Orçamento').click()
    cy.get('#resultadoOrcamento').should('contain.text','Orçamento total: R$ NaN').should('be.visible')

})