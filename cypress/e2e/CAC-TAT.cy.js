describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
    cy.visit('./src/index.html')
    // no .vist() o caminho é relativo ao arquivo cypress.config.js
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    //.title() é um comando do Cypress que verifica o título da página
    //.should('be.equal', 'informação esperada')
    // not.be.equal é a negativa. should() = deve.
  })
})
