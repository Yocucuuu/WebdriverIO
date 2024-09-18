Feature: Home Herokuapps Website 

Background: Redirect to Herokuapps homepage
    Given I am on the home page

@id:4 @chrome
Scenario: as user , i can acces Herokuapps Broken Image Page
    When I click Broken Images menu at homepage
    Then Verify i am at BrokenImages page

@id:5 @chrome
Scenario: as user , i can acces Herokuapps Challenging DOM Page
    When I click Challenging DOM menu at homepage
    Then Verify i am at ChallengingDOM page

@id:6 @chrome
Scenario: as user , i can acces Herokuapps Checkboxes Page
    When I click Checkboxes menu at homepage
    Then Verify i am at Checkboxes page