describe('Fetch Weather API', () => {
  it('should call api', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Buenos Aires').click();
    cy.get('.weatherDisplay_container').should(
      'contain',
      'Temperature for the following days is:'
    );
  });
});
