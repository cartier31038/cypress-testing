describe('Mocha', () => {
    describe('Hooks', () => {
        before(() => {
            console.log('Before All')
        })

        beforeEach(() => {
            console.log('Before Each')
        })

        afterEach(() => {
            console.log('After Each')
        })

        after(() => {
            console.log('After All')
        })

        it('calculates 1 + 1 correctly', () => {
            console.log('1+1')

            expect(1 + 1).to.equal(2)
        })

        it('calculates 1 + 2 correctly', () => {
            console.log('1+2')
            expect(1 + 2).to.equal(3)
        })
    })

    describe('Assertions', () => {
        it('handler assertions correctly', () => {
            expect(1 + 1).to.eq(2)

            expect('hello').to.be.a('string')
            expect([1, 2]).to.be.a('array')

            expect({ age: 24 }).to.has.property('age')
            expect({ name: 'Somchai', age: 24 }).to.have.property('name')

            expect({ name: 'Somchai' }).to.deep.eq({ name: 'Somchai' })

            expect([]).to.be.empty

            //Should form
            cy.wrap(1 + 1).should('eq', 2)
            cy.wrap('hello').should('be.a', 'string')
            cy.wrap([1, 2]).should('be.a', 'array')
            cy.wrap({ name: 'Somchai' }).should('have.property', 'name')

            cy.wrap([]).should('be.empty')
        })
    })
})
