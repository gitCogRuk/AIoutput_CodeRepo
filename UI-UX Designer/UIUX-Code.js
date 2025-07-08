# Pseudocode for Business Logic Implementation
class SEPAInstantPayment {
function processIncomingPayment(paymentDetails) {
if (!isValidCurrency(paymentDetails.currency)) {
throw new Error('Invalid currency. Only Euro (€) is accepted.');
}
if (paymentDetails.amount > MAX_TRANSACTION_LIMIT) {
throw new Error('Transaction exceeds €100,000 limit.');
}
creditsAccount(paymentDetails.accountId, paymentDetails.amount);
sendNotification(paymentDetails.accountId, paymentDetails);
logTransaction(paymentDetails);
}
function sendNotification(accountId, paymentDetails) {
# Logic to send notifications
}
function logTransaction(paymentDetails) {
# Logic to create an audit log
}
}