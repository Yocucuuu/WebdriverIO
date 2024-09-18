Feature: Broken Image Page

Background: Redirect to Broken Image Page 
    Given I am on the home page
    When I click Broken Images menu at homepage


@id:1 @chrome #fail image 
Scenario: Verify first image
    Then I can see image 1 is not broken

@id:2  @chrome #fail image 
Scenario: Verify second image
    Then I can see image 2 is not broken

@id:3 @chrome 
Scenario: Verify first image
    Then I can see image 3 is not broken