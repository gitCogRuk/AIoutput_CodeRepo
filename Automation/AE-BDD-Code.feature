Feature: SEPA Instant Payment Processing
Scenario: Successful SEPA Instant payment
Given the customer initiates a SEPA Instant payment of €50,000
When the payment is processed
Then the customer's account balance should be updated immediately
And a notification should be sent to the customer
Scenario: Exceeding transaction limit
Given the customer initiates a SEPA Instant payment of €150,000
When the payment is processed
Then the payment should be rejected
And an error message should be returned to the customer