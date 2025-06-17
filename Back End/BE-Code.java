@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {
@PostMapping("/{id}/bankAccount")
public ResponseEntity<String> addBankAccount(@PathVariable String id, @RequestBody BankAccount bankAccount) {
Portfolio portfolio = portfolioService.getPortfolioById(id);
if (bankAccount.getStatus().equals("In Review")) {
return ResponseEntity.badRequest().body("Cannot link an unverified bank account to an active portfolio.");
}
portfolioService.linkBankAccount(portfolio, bankAccount);
return ResponseEntity.ok("Bank account linked successfully.");
}
}
# Unit Testing
@Test
public void testAddBankAccountInvalidStatus() {
Portfolio portfolio = new Portfolio("Active");
BankAccount bankAccount = new BankAccount("In Review");
assertThrows(IllegalArgumentException.class, () -> {
portfolioController.addBankAccount(portfolio.getId(), bankAccount);
});
}