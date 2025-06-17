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