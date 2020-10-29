describe('Searchbar', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('appUrl'));

    });
    

    it('accepts input', () => {
        const typeInput = 'shrek';
        cy.get('.searchbar')
          .type(typeInput)
          .should('have.value', typeInput);
      });

    it('Gets the correct element', () =>{
        const typeInput = 'shrek';
        cy.fixture('searchShrek').as(typeInput);
        cy.server();
        cy.route('route');
        cy.get('.searchbar')
    });
  
    });
  