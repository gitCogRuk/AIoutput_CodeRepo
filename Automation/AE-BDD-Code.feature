Feature: Deleting orders returned to originator
Scenario Outline: User able to delete order returned to originator
Given Login to eximius new UI
When I select the 'Individual order' from the Create New Entity field
When I select '<Transaction Type>' on Create New Order Page
When I select '<Order Type>' on Create New Order Page
When I enter valid '<Portfolio>' with valid '<Security>' on Create New Order Page
When I enter '<Quantity>' on Create New Order Page
When I enter Dealer Note as 'Test' on Create New Order Page
When I click 'Validate' button and ensure order is successfully validated
When I click the 'Route' button
And I handle any soft warnings
Then I verify that the order appears in the follow-up queue
Then I verify the order does not have a delete checkbox
When I enter order number in the search bar
And I select the order marked as 'Returned to Originator'
When I click on 'Follow-up' tab
Then I verify the order has a delete checkbox
And I delete the order
Then I verify the order is removed from the follow-up queue
Examples:
| Transaction Type | Portfolio   | Security | Quantity | Order Type |
| Buy              | 00483984010 | BF09MZ0  | 1        | Buy        |
| Sell             | ALLIA0260   | BF09MZ0  | 1        | Sell       |
| Buy              | 00483984010 | BF09MZ0  | 1        | Invest     |
| Sell             | ALLIA0260   | BF09MZ0  | 1        | Raise      |