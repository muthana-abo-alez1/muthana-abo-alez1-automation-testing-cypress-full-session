import { When, Then, Given, Before, BeforeAll } from "@badeball/cypress-cucumber-preprocessor";
Before( () => {
cy.login()

});
Given("given the user made login with  business email address for the company",()=>{
  
})
Given("given the user made login with  business email address for the companyand have a domian and one session or more",()=>{

})
Given("given the use have a funnel",()=>{

})
When("Visit page",()=>{
  cy.visit("https://test-new.fullsession.io/insights")

})
When("click on FUNNELS & CONVERSIONS button", () => {
  cy.get(":nth-child(4) > span.ng-tns-c152-0").click()
});
When("click on Create New Funnel button", () => {
  cy.get(".add-funnel-txt").click()
});
When("visit website",()=>{
  cy.visit("")
})

When("enter values for two steps {string}", (text:string) => {
  cy.get(":nth-child(1) > visitor-filter > .filter-container > .step-name").type("step 1")
  cy.get('.ng-tns-c180-78.ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
  cy.contains('Visited page').click();
  cy.get(":nth-child(1) > visitor-filter > .filter-container > .step-operation > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input").click()
  cy.contains("Is").click()
  cy.get(":nth-child(1) > visitor-filter > .filter-container > .step-value > .fs-input-autocomplete-container > .ant-dropdown-trigger").type("/")
if(text =="all input"){
  cy.get(":nth-child(2) > visitor-filter > .filter-container > .step-name").type("step 2")
   cy.get('.ng-tns-c180-80.ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
   cy.contains('Click').click();
   cy.get('.ant-select-selection-search-input').eq(3).click()
   cy.contains("Text").click();
   cy.get(':nth-child(2) > visitor-filter > .filter-container > .step-operation > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click();
   cy.contains("Contains").click();
   cy.get(":nth-child(2) > visitor-filter > .filter-container > .step-value > .fs-input-autocomplete-container > .ant-dropdown-trigger").type("test")
}
});

When("click on + button", () => {
  cy.get("plus-circle").click()
});
When ("select funnel {string}",(name:string)=>{
  cy.get(".side-bar").contains(name).click()
})
When("click on Update Funnel button", () => {
  cy.get(".funnel-secondPart > .ng-star-inserted").click()
});
When("click on submit button", () => {
  cy.get("div.ng-star-inserted > .ant-btn-primary > .ng-star-inserted").click()
});
When("enter name for funnel {string}",(name:string)=>{
  cy.get(".ant-col > .ant-input").type(name)
})
When("change the name of funnel {string}",(newName:string)=>{
  cy.get(".ant-col > .ant-input").clear();
  cy.get(".ant-col > .ant-input").type(newName);
})

Then("the system must add new step with empty values", () => {
  cy.get(':nth-child(3) > visitor-filter > .filter-container').should('exist');
});
Then("then the system must close side nav for create new funnel", () => {
  cy.get(".ant-drawer-content-wrapper").should("not.have.class", "open");
});
Then("then the system must appear erroe msg {string}", (errorMessage:string) => {
  cy.get('.error-message').should('contain', errorMessage);
});
Then("the funnel shoude appear in funnel list {string}",(name)=>{
  cy.wait(1000)
  cy.get(".side-bar").should("contain",name)
})
Then("change the name of the specific funnel in the funnel list {string}",(name)=>{
  cy.wait(1000)
  cy.get(".side-bar").should("contain",name)
})