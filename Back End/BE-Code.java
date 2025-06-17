<<<<<<< HEAD
import org.springframework.web.bind.annotation.;
import org.springframework.http.ResponseEntity;
@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {
@PostMapping("/create")
public ResponseEntity<String> createPortfolio(@RequestBody Portfolio portfolio) {
if ("Corporation of Lloyds".equals(portfolio.getServiceType())) {
validateCoLFields(portfolio.getColMember(), portfolio.getColSettlementAcc());
}
# Save portfolio to MongoDB
return ResponseEntity.ok("Portfolio created successfully");
}
private void validateCoLFields(String colMember, String colSettlementAcc) {
if (!colMember.matches("[A-Z0-9]{1,12}")) {
throw new IllegalArgumentException("CoL Member and Portfolio must be 12 characters or less and alphanumeric.");
}
if (!colSettlementAcc.matches("\\d{10}")) {
throw new IllegalArgumentException("CoL Citi Settlement Account Number must be exactly 10 digits.");
}
}
}
# Unit Test
import static org.junit.jupiter.api.Assertions.;
import org.junit.jupiter.api.Test;
public class PortfolioControllerTest {
@Test
public void testCreatePortfolio_ValidInputs() {
PortfolioController controller = new PortfolioController();
Portfolio portfolio = new Portfolio("Corporation of Lloyds", "ABC123", "1234567890");
assertDoesNotThrow(() -> controller.createPortfolio(portfolio));
}
@Test
public void testCreatePortfolio_InvalidColMember() {
PortfolioController controller = new PortfolioController();
Portfolio portfolio = new Portfolio("Corporation of Lloyds", "Invalid@Input", "1234567890");
Exception exception = assertThrows(IllegalArgumentException.class, () -> controller.createPortfolio(portfolio));
assertEquals("CoL Member and Portfolio must be 12 characters or less and alphanumeric.", exception.getMessage());
}
=======
<<<<<<< HEAD
import org.springframework.web.bind.annotation.;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
@RestController
@RequestMapping("/api")
public class Pacs008Controller {
@PostMapping("/generate-pacs008")
public ResponseEntity<String> generatePacs008(@RequestBody TransactionData transactionData) {
try {
String xmlOutput = XmlGenerator.generate(transactionData);
return new ResponseEntity<>(xmlOutput, HttpStatus.OK);
} catch (Exception e) {
return new ResponseEntity<>("Error generating XML: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
}
}
}
class TransactionData {
private String MsgId;
private String CreDtTm;
private String PmtId;
private String Amt;
private String Ccy;
# Getters and Setters
=======
@RestController
<<<<<<< HEAD
@RequestMapping("/api/orders")
public class OrderController {
@Autowired
private OrderService orderService;
@PostMapping
public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest) {
try {
orderService.validateOrder(orderRequest);
return ResponseEntity.ok("Order created successfully");
} catch (InvalidOrderException e) {
return ResponseEntity.badRequest().body(e.getMessage());
}
}
}
@Service
public class OrderService {
public void validateOrder(OrderRequest orderRequest) {
if (orderRequest.getPortfolioType().equals("ISA")) {
if (!isISAEligible(orderRequest.getOrderInstrument())) {
throw new InvalidOrderException(
String.format("Product type '%s' is not ISA/PEP eligible", orderRequest.getOrderInstrument()));
}
}
}
private boolean isISAEligible(String orderInstrument) {
List<String> eligibleInstruments = Arrays.asList("InstrumentA", "InstrumentB", "InstrumentC");
return eligibleInstruments.contains(orderInstrument);
}
}
# Unit Test
@SpringBootTest
public class OrderServiceTest {
@Autowired
private OrderService orderService;
@Test
public void testValidateOrder_ThrowsException_WhenInstrumentNotEligible() {
OrderRequest request = new OrderRequest("NonEligibleInstrument", "ISA");
assertThrows(InvalidOrderException.class, () -> {
orderService.validateOrder(request);
});
}
=======
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
>>>>>>> dd813f0b7d965ce25010caa34abc9a0c565bec47
>>>>>>> 1857fc971ca817d8b58cd07a08cc4e0ebbed4452
>>>>>>> 66a350be040457f267d8d99b0875610e3c70d01b
}