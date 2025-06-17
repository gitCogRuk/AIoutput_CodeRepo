<<<<<<< HEAD
# Not applicable for this request
=======
<<<<<<< HEAD
# CoL Portfolio Field Validation Logic
function validateCoLFields(serviceType, colMember, colPortfolio, colSettlementAcc) {
const colMemberPattern = /^[A-Z0-9]{1,12}$/;
const colSettlementAccPattern = /^\d{10}$/;
if (serviceType === 'Corporation of Lloyds') {
if (!colMemberPattern.test(colMember)) {
throw new Error("CoL Member and Portfolio must be 12 characters or less and alphanumeric.");
}
if (!colSettlementAccPattern.test(colSettlementAcc)) {
throw new Error("CoL Citi Settlement Account Number must be exactly 10 digits.");
}
}
}
# Example usage:
try {
validateCoLFields('Corporation of Lloyds', 'ABC123', 'Portfolio1', '1234567890');
console.log('Validation successful');
} catch (error) {
console.error(error.message);
}
=======
<<<<<<< HEAD
import xml.etree.ElementTree as ET
from lxml import etree
def generate_pacs008(transaction_data):
# Define the root element
pacs008 = ET.Element("Document")
pacs008.set("xmlns", "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.02")
# Create and append child elements based on transaction_data
for key, value in transaction_data.items():
ET.SubElement(pacs008, key).text = str(value)
# Convert to string
xml_str = ET.tostring(pacs008, encoding='utf-8', method='xml')
# Validate the XML against the schema (not included here)
# validate_xml(xml_str)
return xml_str
# Example transaction data
transaction_data = {
"GrpHdr": {"MsgId": "12345", "CreDtTm": "2023-10-01T12:00:00Z"},
"PmtInf": {"PmtId": "98765", "Amt": "1000", "Ccy": "USD"}
}
xml_output = generate_pacs008(transaction_data)
print(xml_output)
=======
<<<<<<< HEAD
function isISAEligible(orderInstrument, portfolioType) {
const eligibleInstruments = ['InstrumentA', 'InstrumentB', 'InstrumentC']; # Example list
if (portfolioType === 'ISA') {
if (!eligibleInstruments.includes(orderInstrument)) {
throw new Error(`Product type '${orderInstrument}' is not ISA/PEP eligible for: SubPortfolio: <PortfolioExternalID> SubPortfolioType: <SubPortfolioTypeID>`);
}
}
return true; # Eligible
=======
# Business logic to handle bank account validation
class BankAccountManager {
public void linkBankAccountToPortfolio(Portfolio portfolio, BankAccount bankAccount) {
if (bankAccount.getStatus().equals("In Review")) {
throw new IllegalArgumentException("Cannot link an unverified bank account to an active portfolio.");
}
# Proceed with linking bank account...
}
public void validatePortfolio(Portfolio portfolio) {
for (BankAccount account : portfolio.getBankAccounts()) {
if (account.getStatus().equals("In Review")) {
throw new ValidationException("Portfolio contains unverified bank accounts.");
}
}
}
>>>>>>> dd813f0b7d965ce25010caa34abc9a0c565bec47
}
>>>>>>> 1857fc971ca817d8b58cd07a08cc4e0ebbed4452
>>>>>>> 66a350be040457f267d8d99b0875610e3c70d01b
>>>>>>> c0b261b5d67e5440a649c56f17a582e4f68a2483
