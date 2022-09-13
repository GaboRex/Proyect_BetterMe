describe('Testing login screen', () => {
  beforeEach('go to BetterMe app', () => {
    cy.visit('localhost:3000/signin')
  })
  it('renderizar elementos pantalla de login', () => {
    cy.contains('INICIAR SESION');
    cy.contains('Nombre de Usuario*');
    cy.contains('Clave');
    cy.contains('Iniciar Sesión')
    cy.contains('Cancelar')
    //Boton de crear cuenta no esta acorede a la paleta de colores de la aplicacion, no tiene buena visibilidad
    cy.contains('Crear una cuenta')
    //Espacio en blanco en la parte inferior de la pagina de login


  })

  it('navegar con boton de cancelar ', () => {
    cy.contains('Cancelar').click();
    cy.contains('BetterMe');
    cy.contains('INICIAR');

  })

  it('login con usuario inexistente ', () => {
    cy.get('input[name="usuario"]').type("@");
    cy.get('input[name="clave"]').type("@");
    cy.contains('Crear una cuenta').click();
    //cy.contains('Iniciar Sesión')

  })
  it('login con usuario existente ', () => {
    cy.get('input[name="usuario"]').type("@");
    cy.get('input[name="clave"]').type("@");
    cy.contains('Crear una cuenta').click();
    //cy.contains('REGISTRATE')

  })



})