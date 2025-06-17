Feature: Generate pacs.008 XML Message
Scenario: Generate valid pacs.008 XML
Given I have transaction details
| MsgId | CreDtTm           | PmtId | Amt  | Ccy |
| 12345 | 2023-10-01T12:00:00Z | 98765 | 1000 | USD |
When I submit the transaction details
Then I should receive a valid pacs.008 XML message