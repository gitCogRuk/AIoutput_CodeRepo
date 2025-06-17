@RestController
@RequestMapping("/api/bank-accounts")
public class BankAccountController {
@Autowired
private BankAccountService bankAccountService;
@PostMapping("/add")
public ResponseEntity<String> addBankAccount(@RequestBody BankAccount bankAccount) {
String status = bankAccountService.getAccountStatus(bankAccount.getExternalId());
if (status.equals("In Review")) {
return ResponseEntity.badRequest()
.body("Cannot link unverified bank account to active portfolio.");
}
bankAccountService.linkToPortfolio(bankAccount);
return ResponseEntity.ok("Bank account linked successfully.");
}
}
@Test
public void testAddBankAccountInvalid() {
BankAccount bankAccount = new BankAccount("unverifiedId");
ResponseEntity<String> response = bankAccountController.addBankAccount(bankAccount);
assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
assertEquals("Cannot link unverified bank account to active portfolio.", response.getBody());
}