# Function to add a new bank account to a portfolio
function addBankAccountToPortfolio(portfolioId, bankAccount) {
const bankAccountStatus = getBankAccountStatus(bankAccount.externalId);
if (bankAccountStatus === 'In Review') {
updatePortfolioStatus(portfolioId, 'In Review');
showErrorMessage("Cannot link unverified bank account to active portfolio.");
} else {
linkBankAccountToPortfolio(portfolioId, bankAccount);
showSuccessMessage("Bank account linked successfully.");
}
}
function getBankAccountStatus(externalId) {
# Logic to retrieve bank account status
return database.query(`SELECT status FROM bank_accounts WHERE external_id = ${externalId}`);
}
function updatePortfolioStatus(portfolioId, status) {
# Logic to update portfolio status in the database
database.update(`UPDATE portfolios SET status = ${status} WHERE id = ${portfolioId}`);
}