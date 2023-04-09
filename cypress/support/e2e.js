Cypress.Commands.add("login", () => {
  cy.visit("/"); // visita la página de inicio de sesión
  cy.get('input[name="email"]').type("test@test.es"); // escribe el nombre de usuario
  cy.get('input[name="password"]').type("123456789"); // escribe la contraseña
  cy.get('button[type="submit"]').click(); // haz clic en el botón de inicio de sesión
});
