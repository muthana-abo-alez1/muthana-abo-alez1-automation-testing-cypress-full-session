Feature: Funnels
  Scenario: Successful create new funnel
  Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
  Given given the user made login with  business email address for the companyand have a domian and one session or more
    When click on FUNNELS & CONVERSIONS button
    When click on Create New Funnel button
    When enter name for funnel "New Test (muthana)"
    When enter values for two steps "all input"
    When click on submit button
    Then  then the system must close side nav for create new funnel
    Then the funnel shoude appear in funnel list "Test-mohammed"


     Scenario: Failed create new funnel 
Verify the failure conditions of the new funnel creation test when it contains only one step, and the name field is left empty
  Given given the user made login with  business email address for the companyand have a domian and one session or more
    When click on FUNNELS & CONVERSIONS button
    When click on Create New Funnel button
    When enter values for two steps "all input"
    When click on submit button
    Then then the system must appear erroe msg "Please enter a funnel name"

     Scenario: Failed create new funnel 
Verify the failure conditions of the new funnel creation test when only one step is included, and a name is provided.
  Given given the user made login with  business email address for the companyand have a domian and one session or more
    When click on FUNNELS & CONVERSIONS button
    When click on Create New Funnel button
    When enter name for funnel "New Test (muthana)"
    When enter values for two steps "some input"
    When click on submit button
    Then then the system must appear erroe msg "Please fill all inputs or delete empty filters"

     Scenario: Failed create new funnel 
Verify the failure conditions of the new funnel creation test when only one step is included, and a name is provided.
  Given given the user made login with  business email address for the companyand have a domian and one session or more
    When click on FUNNELS & CONVERSIONS button
    When click on Create New Funnel button
    When enter name for funnel "New Test (muthana)"
    When enter values for two steps "all input"
    When click on submit button
    Then then the system must appear erroe msg "This name is already taken"

    Scenario: Successful update  funnel
Verify the successful update of the name of a specific funnel
  Given given the use have a funnel
    When click on FUNNELS & CONVERSIONS button
    When select funnel "New Test (Muthana)"
    When click on Update Funnel button
    When change the name of funnel "new name (muthana)"
    When click on submit button
    Then change the name of the specific funnel in the funnel list "new name (muthana)"

  Scenario: Successful add new step
  Verify the functionality of the 'Add New Step' button to ensure it successfully adds a new step 
  Given given the user made login with  business email address for the company
    When click on FUNNELS & CONVERSIONS button
    When click on Create New Funnel button
    When enter name for funnel "New Test (muthana)"
    When enter values for two steps "all input"
    When click on + button
    Then  the system must add new step with empty values


  Scenario: Failed add new step
  Verify the functionality of the 'Add New Step' button to ensure it failure adds a new step   
   Given given the user made login with  business email address for the company
    When click on FUNNELS & CONVERSIONS button
    When click on Create New Funnel button
    When enter name for funnel "New Test (muthana)"
    When click on + button
    Then then the system must appear erroe msg "Please fill all inputs or delete the empty filter"

  Scenario: Failed add new step
  Verify the functionality of the 'Add New Step' button to ensure that it fails to add a new step when add values for the first step just
    Given given the user made login with  business email address for the company
    When click on FUNNELS & CONVERSIONS button
    When click on Create New Funnel button 
    When enter name for funnel "New Test (muthana)"
    When enter values for two steps "some input"
    When click on + button
    Then then the system must appear erroe msg "Please fill all inputs or delete the empty filter"