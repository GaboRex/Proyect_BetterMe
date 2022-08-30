describe('Testing login screen', () => {
  beforeEach('go to BetterMe app', () => {
    cy.visit('localhost:3000/signin')
  })
  it('renderizar elementos pantalla de registro', () => {
    cy.contains('REGISTRARSE');
    cy.contains('Nombre');
    cy.contains('Apellido');
    cy.contains('Nombre de usuario')
    cy.contains('Contraseña')
    cy.contains('Confirmar contraseña')
    //Boton de registro no esta acorde a la paleta de colores ni a la dimension del boton
    //Boton de registrarse y cancelar no estan centrados
    cy.contains('Registrarse')
    cy.contains('Cancelar')





  })

  it('navegar con boton de cancelar ', () => {
    cy.contains('Cancelar').click();
    cy.contains('Crear cuenta');
    cy.contains('INICIAR SESION');

  })

})