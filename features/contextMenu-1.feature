Feature: Context Menu Page

Background: Redirect to Context Menu Page
    Given I am on the home page
    And I click Context Menu menu at homepage

# Bug on WDIO alert, its auto closing the alert
@id:1  @chrome
Scenario: I can right click the Context Menu and opening the alert 
    When I right click the context menu
    Then I can see alert is opening
