describe('Teste de login alura fotos', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    afterEach(() => {
        cy.clearCookies()
    })
    it('Login sem user name deve retornar field required', () => {
        cy.get(':nth-child(1) > .form-control').click()
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })
    it.only('Login válido', () => {
        cy.login(Cypress.env('username'), Cypress.env('password'), )
        cy.contains('a', '(Logout)').should('be.visible')


    })
    it.skip('login inválido', () => {
        cy.login(Cypress.env('username'), 1)
        cy.contains()
    })
    it.skip('Redirecionar usuário novo para a página de registro', () => {
        cy.contains("p", "Register now").click()
    })
})