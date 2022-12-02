describe('Buscar fotos e dados', () => {

    beforeEach(() =>

        cy.intercept('POST', 'https://alura-fotos.herokuapp.com/login', {
            statusCode: 400
        }).as('stubPost400')
    )
    it('Deve trazer fotos de usuário logado', () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
            expect(response.body[0]).to.have.property('description')
        })
    })

    it('Validar login e usuário logado', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/#/user/login',
            body: Cypress.env()
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
            expect(response.body.id).to.be('1')
        })
    })

    it('Deve retornar 400 com usuário inválido', () => {

    })
})