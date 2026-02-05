describe('budget calculator', () => {
  beforeEach(() => {
    cy.start()

  })
  it('successfully request a quote', () => {
    //para que o código fique mais limpo e reaproveitável, criei um comando customizado para cada cenário
    cy.successfullyRequestQuote()


  })

  it('fails-Inputting letters into fields that should only accept numbers', () => {

    cy.failedRequestQuote()


  })

})