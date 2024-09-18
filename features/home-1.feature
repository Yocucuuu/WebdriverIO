Feature: Home Herokuapps Website 

Background: Redirect to Herokuapps homepage
    Given I am on the home page

@id:1 @chrome
Scenario: as user , i can acces Herokuapps A/B Testing Page
    When I click A/B Testing menu at homepage
    Then Verify i am at ABTesting page

@id:2 @chrome
Scenario: as user , i can acces Herokuapps Add/Remove Element
    When I click Add/Remove Elements menu at homepage
    Then Verify i am at AddRemoveElements page

@skip() @id:3 @chrome
Scenario: as user , i can acces Herokuapps Basic Auth 
    When I click Basic Auth menu at homepage
    Then Verify i am at BasicAuth page

@skip() @chrome
Scenario: Just a Skiped Scenario  
    When I click Basic Auth menu at homepage
    Then Verify i am at BasicAuth page