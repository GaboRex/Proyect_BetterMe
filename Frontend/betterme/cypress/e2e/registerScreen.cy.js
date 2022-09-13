
function makeid(length) {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
  }
  return result;
}
describe('Testing login screen', () => {
  beforeEach('go to BetterMe app', () => {
    cy.visit('localhost:3000/signup')
  })
  it('renderizar elementos pantalla de registro', () => {
    cy.contains('REGISTRARSE');
    cy.contains('Nombre');
    cy.contains('Apellido');
    cy.contains('Nombre de usuario')
    cy.contains('Contraseña')
    cy.contains('Confirmar contraseña')
    cy.contains('Registrarse')
    cy.contains('Cancelar')

  })

  it('navegar con boton de cancelar ', () => {
    cy.contains('Cancelar').click();
    cy.contains('Crear una cuenta');
    cy.contains('INICIAR SESION');

  })
  it('intentar crear usuario invalido ', () => {
    cy.get('input[name="nombre"]').type("@###__!_");
    cy.get('input[name="apellido"]').type("@###!___");
    cy.get('input[name="usuario"]').type("@###_!__");
    cy.get('input[name="clave"]').type("@###___!");
    cy.get('input[name="claveC"]').type("@###__!_");
    cy.contains('Registrarse').click();

  })
  it('intentar crear usuario valido ', () => {
    cy.get('input[name="nombre"]').type("testing"+makeid(5));
    cy.get('input[name="apellido"]').type("testing"+makeid(5));
    cy.get('input[name="usuario"]').type("testing"+makeid(5));
    cy.get('input[name="clave"]').type("1234567890");
    cy.get('input[name="claveC"]').type("1234567890");
    cy.contains('Registrarse').click();
    cy.contains('Actividades').click();

  })



})