///<reference types="cypress"/>


import loginPageObj from "../pages/login"
import homePageObj from "../pages/homepage"
import billingDetailsObject from "../pages/billing"

let data;

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

    it('TC-02 To validate the registration feature working successfully', () => {
        cy.visit("https://demowebshop.tricentis.com/register")
        cy.get('#gender-male').check()
        cy.get('#FirstName').type('Tejas')
        cy.get('#LastName').type('Waghmare')
        cy.get('#Email').type(`tejaswaghmare@15${Math.floor(Math.random() * 600)}ce.com`)
        cy.get('#Password').type('tejas@123')
        cy.get('#ConfirmPassword').type('tejas@123')
        cy.get('#register-button').invoke("removeAttr", "href").click()
        cy.get('.result').contains('Your registration completed')
    })

    it('TC-03 To validate all mandatory required fields provided by the user or not  ', () => {
        cy.visit("https://demowebshop.tricentis.com/register")
        cy.get('#gender-male').check()
        cy.get('#FirstName').type('Tejas')
        cy.get('#LastName').type('Waghmare')
        cy.get('#Password').type('tejas@123')
        cy.get('#ConfirmPassword').type('tejas@123')
         cy.get('#register-button').click()
         cy.get('.field-validation-error').should('contain',"Email is required.")
        
    })

    it('TC-04 To validate the messagerrror of already existed email while registration process', () => {
        cy.visit("https://demowebshop.tricentis.com/register")
        cy.get('#gender-male').check()
        cy.get('#FirstName').type('Tejas')
        cy.get('#LastName').type('Waghmare')
        cy.get('#Email').type('tejaswaghmare358@gmail.com')
        cy.get('#Password').type('tejas@123')
        cy.get('#ConfirmPassword').type('tejas@123')
         cy.get('#register-button').click()
         cy.get('.validation-summary-errors').find('li').should('have.text',"The specified email already exists")
         
    })


    it('TC -05 Validate the login functionality with correct credentials', () => {
        cy.visit("https://demowebshop.tricentis.com/login")
        cy.get('#Email').type('tejaswaghmare3@gmail.com')
        cy.get('#Password').type('tejas@123')
        cy.get('.button-1.login-button').click()
    })

    it('TC -06 validate login functionality with incorrect credentials', () => {
        cy.visit("https://demowebshop.tricentis.com/login")
        cy.get('#Email').type('tejaswaghmare3@gmail.com')
        cy.get('#Password').type('tejas@12')
        cy.get('.button-1.login-button').click()
        cy.get('.validation-summary-errors').find('span').should('have.text',"Login was unsuccessful. Please correct the errors and try again.")

    })

    it('TC -07 validate the logo and title is visible or not', () => {
        cy.visit("https://demowebshop.tricentis.com/login")
        cy.get('#Email').type('tejaswaghmare3@gmail.com')
        cy.get('#Password').type('tejas@123')
        cy.get('.button-1.login-button').click()
        cy.get('.header-logo').should('be.visible')
        cy.title().then((title)=>{
            expect(title).to.eql("Demo Web Shop")
        })
    })

    it('TC-08 Validate the different category list is visible and get clicked ', () => {
        cy.loginn('https://demowebshop.tricentis.com/login', 'tejaswaghmare3@gmail.com', 'tejas@123')
        cy.get('.list').first().should('be.visible')
        cy.get('.list').first().children()
        cy.get('.list').first().children().eq(1).click({force:true})

        
    })

    it('TC-09 Validate top Menu feature is visible or not and get clicked any of the category ', () => {
        cy.loginn('https://demowebshop.tricentis.com/login', 'tejaswaghmare3@gmail.com', 'tejas@123')
        cy.get('.top-menu').should('be.visible')
         cy.get('.top-menu').children().first().invoke("removeAttr", "href").click()
         cy.get('.product-grid').children().eq(4).find('input').click()
         cy.get('.content').should('contain',"The product has been added to your ").should('be.visible')
         cy.get('.content').should('be.visible')


   })

   it('TC-10 Validate top Menu feature is visible or not and get clicked any of the category ', () => {
    cy.loginn('https://demowebshop.tricentis.com/login', 'tejaswaghmare3@gmail.com', 'tejas@123')
    cy.get('.top-menu').should('be.visible')
     cy.get('.top-menu').children().eq(3).invoke("removeAttr", "href").click()
     cy.get('.product-title').eq(2).should('contain',"Blue Jeans")
     cy.get('.product-grid').children().eq(2).find('input').click()
     cy.get('.content').should('be.visible')

   })


   it('TC-11 Validate top Menu feature is visible or not and get clicked any of the category ', () => {
    cy.loginn('https://demowebshop.tricentis.com/login', 'tejaswaghmare3@gmail.com', 'tejas@123')
    cy.get('.top-menu').should('be.visible')
     cy.get('.top-menu').children().last().invoke("removeAttr", "href").click()
     cy.get('.product-title').eq(3).should('contain',"$100 Physical Gift Card")
     cy.get('.product-grid').children().last().find('input').click()
     

   })

   it('TC-12 validate the search functionality and add one product to cart', () => {
    cy.loginn('https://demowebshop.tricentis.com/login', 'tejaswaghmare3@gmail.com', 'tejas@123')
    cy.get('.button-1.search-box-button').type('computer')
    cy.wait(2000)
    cy.get('.ui-menu-item').each((el) => {
    cy.wait(2000)
    if (el.text().trim() == "Build your own cheap computer") {
        cy.wrap(el).invoke("removeAttr", "href").click()
        }

 }).then(()=>{
    cy.get('#add-to-cart-button-72').click()
    cy.get('.content').should('contain',"The product has been added to your ")
    cy.get('#topcartlink').find('span').first().should('contain',"Shopping cart")
    cy.get('#topcartlink').find('span').eq(1).should('have.class',"cart-qty")
    
    
 })

})

it('TC-13 To check whether shoping cart visible or not on UI', () => {
 cy.loginn('https://demowebshop.tricentis.com/login', 'tejaswaghmare3@gmail.com', 'tejas@123')
 cy.get('#topcartlink').should('be.visible')

})


it('TC-14 validate cart details  ', () => {
 cy.loginn('https://demowebshop.tricentis.com/login', 'tejaswaghmare3@gmail.com', 'tejas@123')
 cy.get('#topcartlink').should('be.visible')
 cy.get('input[value="Go to cart"]').invoke("removeAttr", "href").click({force:true})
 cy.url().should('contain','cart')
 cy.get('.cart-total').should('be.visible')


})

it('TC-15 validate the checkout and terms of service  ', () => {
    cy.loginn('https://demowebshop.tricentis.com/login', 'tejaswaghmare3@gmail.com', 'tejas@123')
    cy.get('input[value="Go to cart"]').invoke("removeAttr", "href").click({force:true})
    cy.get('#termsofservice').click({force:true})
    cy.get('#checkout').invoke("removeAttr", "href").click()
    cy.get('.step-title').eq(0).find('h2').should('have.text',"Billing address")

    
})

// POM
it('Tc 16 validate billing details and click on continue',()=>{
    loginPageObj.launchApp(Cypress.config().baseUrl)
    loginPageObj.login(Cypress.config().credentials)
    homePageObj.clickGotoCart()
    homePageObj.clicktermsOfService()
    homePageObj.clickcheckOut()
    billingDetailsObject.typeFirstName(data.firstName)
    billingDetailsObject.typeLastName(data.lastName)
    billingDetailsObject.typeEmail(data.Email)
    billingDetailsObject.selectCountry(data.country)
    billingDetailsObject.typeCity(data.city)
    billingDetailsObject.typeAddressnOe(data.addressOne)
    billingDetailsObject.typepostalCode(data.postalCode)
    billingDetailsObject.typePhoneNo(data.phoneNumber)
    billingDetailsObject.clickContinueOne()
    billingDetailsObject.clickcontinueTwo()
    billingDetailsObject.clickinStorePickup()
    billingDetailsObject.clickcontinueThree()
})

})