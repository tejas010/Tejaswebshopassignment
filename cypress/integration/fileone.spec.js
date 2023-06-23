describe('To check overall functionality of demoshop ', () => {
    before('before hook',()=>{
        cy.fixture('testData').then((el)=>{
            data=el;
        })
    })

    it('TC-01 To validate the register feature is visible  or not  ', () => {
        cy.visit("https://demowebshop.tricentis.com/")
        cy.get('.header-links').find('ul').children().first().contains('Register').
            invoke("removeAttr", "href").click()
        cy.get('input[type="submit"]').should('be.visible')

    })
})
