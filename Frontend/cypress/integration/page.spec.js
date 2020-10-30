import moveNames from '../fixtures/moveNames';
describe('pagination', () => {

   
        beforeEach(() => {
            // Go to website
            cy.visit(Cypress.config('appUrl'));
          });
   

    it('gets movie of page2', () => {
        cy.fixture('second24movies').as('second24movies');
        cy.server();
        cy.route('http://localhost:8000/api/movies/Sort/2');
        cy.get('.heo').click();
        cy.wait(200);
        //cy.get('.card-content').should('length',24);
        //for(let i=0; i<24; i++){
        //    cy.get('.card-content').eq(i).should('have.text',moveNames[i]);
        //}
        cy.get('div[class = card]').should('length', 24);
        
        
      });

    });
    

    
  

