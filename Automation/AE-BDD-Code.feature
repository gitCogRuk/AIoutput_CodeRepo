Feature: SEPA Instant Payments
Scenario: Successful SEPA Instant payment
Given I have a valid SEPA Instant payment request
When I submit the payment
Then I should receive a confirmation notification
And my account balance should be updated instantly
Scenario: Invalid currency
Given I have a payment request with currency "USD"
When I submit the payment
Then I should see an error message "Invalid currency. Only Euro (€) is supported."
Scenario: Exceeds maximum transaction limit
Given I have a payment request with amount 150000
When I submit the payment
Then I should see an error message "Transaction exceeds the maximum limit of €100,000."