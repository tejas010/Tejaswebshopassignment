class Billing{
    firstName='#BillingNewAddress_FirstName'
    lastName='#BillingNewAddress_LastName'
    Email='#BillingNewAddress_Email'
    country='#BillingNewAddress_CountryId'
    city='#BillingNewAddress_City'
    addressOne='#BillingNewAddress_Address1'
    postalCode='#BillingNewAddress_ZipPostalCode'
    phoneNumber='#BillingNewAddress_PhoneNumber'
    continueOne='#billing-buttons-container'
    continueTwo='input[title="Continue"]'
    inStorePickup='#PickUpInStore'
    continueThree='input[value="Continue"]'

    typeFirstName(text){
        cy.get(this.firstName,).type(text,{force:true})
    }
    
    typeLastName(text){
        cy.get(this.lastName).type(text,{force:true})
    }

    typeEmail(text){
        cy.get(this.Email).type(text,{force:true})
    }
    

    selectFromList(Element,value){
        Element.each((el)=>{
            if(el.text().trim().includes(value)){
                cy.wrap(el).click({force:true})
                return false
            }

        })
    }

    selectCountry(value){
        this.selectFromList(cy.get(this.country).children(),value)
    }

    typeCity(text,){
        cy.get(this.city).type(text,{force:true})
    }
    
    typeAddressnOe(text){
        cy.get(this.addressOne).type(text,{force:true})
    }

    typepostalCode(text){
        cy.get(this.postalCode).type(text,{force:true})
    }

    typePhoneNo(text){
        cy.get(this.phoneNumber).type(text,{force:true})
    }

    clickContinueOne(){
        cy.get(this.continueOne).click({force:true})
    }

    clickcontinueTwo(){
        cy.get(this.continueTwo).first().click({force:true})
    }

    clickinStorePickup(){
        cy.get(this.inStorePickup).click()
    }

    clickcontinueThree(){
        cy.get(this.continueThree).eq(1).click({force:true})
    }


    
    
        
}

let billingDetailsObject=new Billing
export default billingDetailsObject