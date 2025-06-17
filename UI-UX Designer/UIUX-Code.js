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