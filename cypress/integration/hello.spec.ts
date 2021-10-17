describe("praneat.com", () => {
  it('contain "Digital innovation hub" in the page', () => {
    cy.visit("https://praneat.com");
    cy.contains("Digital innovation hub");
  });
});
