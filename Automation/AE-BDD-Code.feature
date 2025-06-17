Feature: ISA Eligibility Check
Scenario: User attempts to purchase a non-eligible instrument in an ISA portfolio
Given the user is on the order submission page
When the user selects "ISA" as the portfolio type
And the user enters "NonEligibleInstrument" as the order instrument
And the user submits the order
Then an error message should be displayed "Product type 'NonEligibleInstrument' is not ISA/PEP eligible"