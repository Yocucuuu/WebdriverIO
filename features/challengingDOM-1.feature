Feature: Challenging DOM Page

Background: Redirect to Checkboxes page 
    Given I am on the home page
    When I click Challenging DOM menu at homepage

@id:1 @chrome
Scenario: I can click the blue button
    When I click the blue button
    Then I can see the number at canvas is changging
