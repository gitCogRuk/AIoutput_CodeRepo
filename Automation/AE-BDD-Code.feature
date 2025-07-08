Feature: Lloyds Single Portfolio Fields
Scenario Outline: Verify CoL Member and Portfolio and CoL Citi Settlement account No fields are visible and mandatory
Given I am on the most recently created Organisation with a Client Relationship
When I quick create a linked '<ServiceManagementType>' Mandate and navigate to it
When I quick create a linked Single 'CorporationofLloyds' Portfolio
Then I save the portfolio and navigate to it
Then I verify the service type as 'Corporation of Lloyds'
Then I verify corporation of Lloyds fields are visible and mandatory
Examples:
| ServiceManagementType |
| Discretionary         |
| ExecutionOnly         |
| ManagedAdvisory       |