// Login
Cypress.Commands.add('login', (user, pwd) => {
    cy.get('input[formcontrolname="userName"]').clear().type(user, {
        logs: false
    })
    cy.get('input[formcontrolname="password"]').clear().type(pwd, {
        logs: false
    })
    cy.get('button[type="submit"]').click()
})