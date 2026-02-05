describe('budget calculator', () => {
  beforeEach(() => {
    //Acessa a página inicial da aplicação antes de cada teste
    cy.start()

  })
  it('successfully request a quote', () => {
    //para que o código fique mais limpo e reaproveitável, criei um comando customizado para cada cenário
    cy.successfullyRequestQuote()

  })

  it('fails-Inputting letters into fields that should only accept numbers', () => {
    //falha intencional, o formulário está aceitando caracteres que não deveria, conforme relatei no arquivo de report para mais detalhes
    cy.failedRequestQuote()

  })

})