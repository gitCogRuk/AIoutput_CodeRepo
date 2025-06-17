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
}