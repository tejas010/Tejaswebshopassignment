class login{
    Email_txt = "#Email"
    password_txt = "#Password"
    login_btn = ".button-1.login-button"
    launchApp(url){
        cy.visit(url)
    }
    login(loginObj){
        cy.get(this.Email_txt).type(loginObj.Email)
        cy.get(this.password_txt).type(loginObj.password)
        cy.get(this.login_btn).click()
    }
}
let loginPageObj=new login()
export default loginPageObj