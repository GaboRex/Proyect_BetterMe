require('cypress-xpath')
describe('Testing activities screen', () => {
    beforeEach('go to BetterMe app activities', () => {
        cy.visit('localhost:3000/ejercicios')
    })
    it('renderizar elementos pantalla de ejercicios ', () => {
        cy.contains('Ejercicios');
        cy.contains('Busca el ejercicio que deseas y empieza a trabajarlo');
        cy.contains('BRAZOS');
        cy.contains('PIERNAS');
        cy.contains('ABDOMEN');
        cy.contains('HOMBROS');
        for (let i = 0; i < 4; i++) {
            cy.get('*[class^="btn"]').eq(i);
        }


    })
    it('verificar navegacion de cada seccion de ejercicio ', () => {
        for (let i = 0; i < 4; i++) {
            cy.get('button').eq(i).click({force: true});
            switch(i) {
                case 0:
                    cy.contains('Flexiones diamante con banco');
                    break;
                case 1:
                    cy.contains('Sentadillas de una pierna');
                    break;
                case 2:
                    cy.contains('Plancha Superman');
                    break;
                case 3:
                    cy.contains('Encogimientos de hombros');
                    break;
                default:
                    break;
            }
            cy.go('back');

        }



    })


})