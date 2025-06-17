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