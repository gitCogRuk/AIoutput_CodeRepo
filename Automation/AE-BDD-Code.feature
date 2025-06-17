Feature: Prevent Invalid Bank accounts
Scenario: Validate that error message appears when users tries to add unverified BA to active portfolio
Given I am on the most recently created Individual which has a profile and Client Relationship that has an existing portfolio attached
Then I navigate to the attached single portfolio
Then I verify that the portfolio status should be in 'Active'
When I navigate to individual
When I add a new bank account
And I get the bank account external id
And I validate that the bank account status should be 'In Review'
When I save and close the newly added bank account
Then I navigate to the attached single portfolio
And a portfolio bank account has been created
And I verify that the portfolio status should be in 'In Review'
When I validate the portfolio or mandate
Then Validate the error message appears when users tries to add unverified BA to a portfolio