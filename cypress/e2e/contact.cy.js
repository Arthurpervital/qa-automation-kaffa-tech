describe('describe contact page', () => {

    beforeEach(() => {
        cy.start()
        cy.contains('a', 'Contato').click()
        cy.fixture('contatoForm').as('contactFormData')

    })

    it('Request a quote via the contact page', function () {
        //utilizando this para ter acesso ao objeto definido externamente, nesse caso o fixture carregado no beforeEach
        cy.submitBugdet(this.contactFormData.contato)


    })

})