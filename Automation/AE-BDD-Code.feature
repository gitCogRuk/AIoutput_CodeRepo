Feature: Rebalancing Returned User
Scenario Outline: User able to delete order returned to originator
Given Login to eximius new UI
When I Select the 'Individual order' from the Create New Entity field shown at the bottom left
When I Select '<Transaction Type>' on Create New Order Page
When I select '<Order Type>' on Create New Order page
When I Enter valid '<Portfolio>' with valid '<Security>' on Create New Order Page
When I Enter '<Quantity>' on Create New Order Page
When I Enter Dealer Note as 'Test' on Create New Order Page
When I Click 'Validate' button and ensure that the order is Successfully Validated
When I Click the 'Route' button and if the Soft Warning pop up appears, I Click Continue with logging any Soft Warnings
Then I Verify that the order appears in the follow-up queue
Then I verify the order should not have check box for delete action
When I Enter order number in the search bar on top left of the page
When I select the order and Returned to Originator
When I click on 'Follow-up' tab
Then I verify the order should have action check box and delete
Examples:
| Transaction Type | Portfolio   | Security | Quantity | Order Type |
| Buy              | 00483984010 | BF09MZ0  | 1        | Buy        |
| Sell             | ALLIA0260   | BF09MZ0  | 1        | Sell       |
| Buy              | 00483984010 | BF09MZ0  | 1        | Invest     |
| Sell             | ALLIA0260   | BF09MZ0  | 1        | Raise      |