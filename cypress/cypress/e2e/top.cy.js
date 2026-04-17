describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://172.30.32.1:5173/JS3-exam/')
      cy.get('.topRatedBtn').click();
    cy.get('.link-cards').should('exist').first().click();

});

    
    })
  