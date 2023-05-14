class homePage{
    GotoCart='input[value="Go to cart"]'
    termsOfService="#termsofservice"
    checkOutButton="#checkout"

    clickGotoCart(){
        cy.get(this.GotoCart).invoke("removeAttr", "href").click({force:true})
    }

    clicktermsOfService(){
        cy.get(this.termsOfService).click({force:true})
    }

    clickcheckOut(){
        cy.get(this.checkOutButton).invoke("removeAttr", "href").click()
    }

  

}

let homePageObj= new homePage()
export default homePageObj