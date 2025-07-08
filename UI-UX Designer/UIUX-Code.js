# Business Logic for CoL Fields Validation
function validateCoLFields(serviceType, member, accountNumber) {
const memberRegex = /^[A-Z0-9]{1,12}$/; # 12 characters, letters A-Z, and numbers 0-9
const accountNumberRegex = /^\d{10}$/; # Exactly 10 digits
if (serviceType === "Corporation of Lloyds") {
if (!memberRegex.test(member)) {
throw new Error("CoL Member and Portfolio must be 12 characters long and alphanumeric.");
}
if (!accountNumberRegex.test(accountNumber)) {
throw new Error("CoL Citi Settlement account number must be exactly 10 digits.");
}
}
return true; # Validation success
}