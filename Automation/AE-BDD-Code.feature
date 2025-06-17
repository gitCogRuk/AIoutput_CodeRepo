Feature: Prevent Invalid Bank Accounts
Scenario: Validate that error message appears when users try to add unverified bank account to active portfolio
Given I am on the most recently created Individual with an active portfolio
When I add a new bank account with external ID "unverifiedId"
Then the bank account status should be "In Review"
And I save and close the newly added bank account
When I validate the portfolio
Then an error message should appear "Cannot link unverified bank account to active portfolio."