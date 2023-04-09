describe("Login", () => {
  it("navigates and uses the web", () => {
    cy.login();
    cy.wait(1000);
    cy.get('[data-testid="home"]').should("exist");
    cy.wait(1000);
    cy.get('a[href="/products"]').click();
    cy.wait(3000);
    cy.get('[data-testid="item-list-test"]').should("exist");
    cy.get('[data-testid="item-test"]').first().click();

    cy.wait(2000);

    cy.get('[data-testid="item-detail-test"]').should("exist");
    cy.get('[data-testid="add-to-cart-button"]').click();
    cy.wait(2000);
    cy.get('[data-testid="cart-count"]').should("have.text", "1");
  });
});
