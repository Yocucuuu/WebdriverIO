Feature: Checkboxes Page

Background: Redirect to Checkboxes page 
    Given I am on the home page
    And I click Checkboxes menu at homepage

@id:1 @chrome
Scenario: I can click checkbox 1 and it will checked
    When I click checkbox 1
    Then I can see checkbox 1 is checked


@id:2 @chrome
Scenario: I can click checkbox 2 and it will unchecked
    When I click checkbox 2
    Then I can see checkbox 2 is not checked

@id:3 @chrome
Scenario: I can click checkbox 1 twice and it will back to unchecked 
    When I click checkbox 1
    And I click checkbox 1 
    Then I can see checkbox 1 is not checked

@id:4 @chrome
Scenario: I can click checkbox 2 twice and it will back to checked
    When I click checkbox 2
    And I click checkbox 2
    Then I can see checkbox 2 is checked


