Feature: Add Remove Element Page 

Background: Redirect to Add Remove Page 
    Given I am on the home page   
    When I click Add/Remove Elements menu at homepage

@id:1 @chrome
Scenario: I can add element 
    When I click button 'Add Element'
    Then I will see an element is added

@id:2 @chrome
Scenario: I can delete added element 
    When I click button 'Add Element'
    When I click first button 'Delete' the element will removed
    Then I will see list element is empty
    
@id:3 @chrome
Scenario:I can add several element 
    When I click button 'Add Element' for 5 times
    Then I will see 5 element is added

    
