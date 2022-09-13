describe('Testing activities screen', () => {
    beforeEach('go to BetterMe app activities', () => {
        cy.visit('localhost:3000/menu')
    })
    it('renderizar elementos pantalla de iactividades ', () => {
        cy.contains('Actividades');
        cy.contains('Ejercicios recomendados');
        cy.contains('Crear tu rutina');
        cy.contains('Dieta saludable');
        cy.get('button[type="button"]').first();
        cy.get('button[type="button"]').eq(1);
        cy.get('button[type="button"]').last();

    })

    it('navegar con boton de ir al menu de ejercicios ', () => {
        cy.get('button[type="button"]').eq(0).click();
       cy.contains('Busca el ejercicio que deseas y empieza a trabajarlo');

    })

})