describe('empty spec', () => {
  beforeEach('go to BetterMe app', () => {
    cy.visit('localhost:3000')
  })
  it('renderizar elementos pantalla de inicio y sobre nosotros ', () => {
    cy.contains('BetterMe');
    cy.contains('INICIAR');
    //Cambiar colores del boton de iniciar con respecto a la paleta de colores
    cy.contains('Sé fuerte cuando seas débil, valiente cuando tengas miedo y humilde cuando seas victorioso');
    cy.contains('SOBRE NOSOTROS')

  })

  it('navegar con boton de inicio ', () => {
    cy.contains('INICIAR').click();
    cy.contains('INICIAR SESION');
  })

})