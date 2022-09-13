require('cypress-xpath')
describe('Testing activities screen', () => {
    beforeEach('go to BetterMe app activities', () => {
        cy.visit('localhost:3000/ejercicios')
    })
    it('renderizar elementos pantalla de ejercicios especificos ', () => {

        for (let i = 0; i < 4; i++) {
            switch (i){
                case 0:
                    cy.visit('localhost:3000/brazos')
                    cy.contains('Curl para biceps con barra olimpica')
                    cy.contains('Curl con barra Z')
                    cy.contains('Remo reverso con mancuernas')
                    cy.contains('Flexiones diamante con banco')
                    break;
                case 1:
                    cy.visit('localhost:3000/piernas')
                    cy.contains('Sentadillas sobre pelota')
                    cy.contains('Salto de zumo')
                    cy.contains('Estocada lateral')
                    cy.contains('Sentadillas de una pierna')
                    break;
                case 2:
                    cy.visit('localhost:3000/abdomen')
                    cy.contains('Plancha')
                    cy.contains('Escalada de montaña')
                    cy.contains('Hollow hold')
                    cy.contains('Plancha Superman')
                    break;
                case 3:
                    cy.visit('localhost:3000/hombros')
                    cy.contains('Press Militar')
                    cy.contains('Remo al mentón')
                    cy.contains('Elevaciones laterales con mancuernas')
                    cy.contains('Encogimientos de hombros')
                    break;

                default:
                    break;
            }
            for (let i = 0; i < 4; i++) {
                cy.get('button').eq(i);
            }
        }



    })
    it('navegacion de cada ejercicio a su pantalla respectiva ', () => {

        for (let i = 0; i < 4; i++) {
            switch (i){
                case 0:
                    cy.visit('localhost:3000/brazos')
                    for (let i = 0; i < 4; i++) {
                        cy.get('button').eq(i).click();
                        switch (i){
                            case 0:
                                cy.contains('Curl para bíceps con barra olímpica')
                                break;
                            case 1:
                                cy.contains('Curl con barra Z')
                                break;
                            case 2:
                                cy.contains('Remo reverso con mancuernas')
                                break;
                            case 3:
                                cy.contains('Flexiones diamante con banco')
                                break;

                            default:break;

                        }
                        cy.go('back');
                    }
                    break;
                case 1:
                    cy.visit('localhost:3000/piernas')
                    for (let i = 0; i < 4; i++) {
                        cy.get('button').eq(i).click();
                        switch (i){
                            case 0:
                                cy.contains('Sentadillas sobre pelota')
                                break;
                            case 1:
                                cy.contains('Salto de zumo')
                                break;
                            case 2:
                                cy.contains('Estocada lateral')
                                break;
                            case 3:
                                cy.contains('Sentadillas de una pierna')
                                break;

                            default:break;

                        }
                        cy.go('back');
                    }
                    break;
                case 2:
                    cy.visit('localhost:3000/abdomen')
                    for (let i = 0; i < 4; i++) {
                        cy.get('button').eq(i).click();
                        switch (i){
                            case 0:
                                cy.contains('Plancha')
                                break;
                            case 1:
                                cy.contains('Escalada de montaña')
                                break;
                            case 2:
                                cy.contains('Hollow hold')
                                break;
                            case 3:
                                cy.contains('Plancha Superman')
                                break;

                            default:break;

                        }
                        cy.go('back');
                    }
                    break;
                case 3:
                    cy.visit('localhost:3000/hombros')
                    for (let i = 0; i < 4; i++) {
                        cy.get('button').eq(i).click();
                        switch (i){
                            case 0:
                                cy.contains('Press Militar')
                                break;
                            case 1:
                                cy.contains('Elevaciones laterales con mancuernas')
                                break;
                            case 2:
                                cy.contains('Remo al mentón')
                                break;
                            case 3:
                                cy.contains('Encogimientos de hombros')
                                break;

                            default:break;

                        }
                        cy.go('back');
                    }
                    break;
                default:
                    break;
            }

        }



    })


})