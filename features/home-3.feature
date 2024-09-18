Feature: Home Herokuapps Website 

Background: Redirect to Herokuapps homepage
    Given I am on the home page

@id:7 @chrome
Scenario: as user , i can acces Herokuapps Broken Image Page
    When I click Context Menu menu at homepage
    Then Verify i am at ContextMenu page
