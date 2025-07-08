<<<<<<< HEAD
import org.springframework.web.bind.annotation.;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
@RestController
@RequestMapping("/api/portfolios")
public class PortfolioController {
@Autowired
private PortfolioService portfolioService;
@PostMapping
public ResponseEntity<Portfolio> createPortfolio(@RequestBody Portfolio portfolio) {
try {
portfolioService.validatePortfolio(portfolio);
Portfolio savedPortfolio = portfolioService.savePortfolio(portfolio);
return ResponseEntity.ok(savedPortfolio);
} catch (ValidationException e) {
return ResponseEntity.badRequest().body(null);
}
=======
<<<<<<< HEAD
@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {
@PostMapping
public ResponseEntity<String> createPortfolio(@RequestBody PortfolioDto portfolioDto) {
if(!isValidCoLMember(portfolioDto.getColMember())) {
return ResponseEntity.badRequest().body("Invalid CoL Member and Portfolio");
}
if(!isValidSettlementAccount(portfolioDto.getColSettlementNo())) {
return ResponseEntity.badRequest().body("Invalid CoL Citi Settlement account No");
}
# Proceed to save the portfolio
portfolioService.save(portfolioDto);
return ResponseEntity.ok("Portfolio created successfully");
}
private boolean isValidCoLMember(String colMember) {
return colMember != null && colMember.matches("^[A-Za-z0-9]{1,12}$");
}
private boolean isValidSettlementAccount(String colSettlementNo) {
return colSettlementNo != null && colSettlementNo.matches("^\\d{10}$");
}
=======
<<<<<<< HEAD
@RestController
@RequestMapping("/api/payments")
public class SEPAInstantPaymentController {
@Autowired
private PaymentService paymentService;
@PostMapping("/instant")
public ResponseEntity<String> processInstantPayment(@RequestBody PaymentRequest paymentRequest) {
try {
String response = paymentService.processPayment(paymentRequest);
return ResponseEntity.ok(response);
} catch (PaymentException e) {
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
# Java REST API endpoint for deleting order
import org.springframework.web.bind.annotation.;
import org.springframework.beans.factory.annotation.Autowired;
@RestController
=======
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
>>>>>>> c0b261b5d67e5440a649c56f17a582e4f68a2483
@RequestMapping("/api/orders")
public class OrderController {
@Autowired
private OrderService orderService;
<<<<<<< HEAD
@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteOrder(@PathVariable String id) {
boolean isDeleted = orderService.deleteOrderById(id);
return isDeleted ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
}
}
# Order Service
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class OrderService {
@Autowired
private OrderRepository orderRepository;
public boolean deleteOrderById(String id) {
if (orderRepository.existsById(id)) {
orderRepository.deleteById(id);
return true;
}
return false;
>>>>>>> 0a2cf2c6fe7988e887fe14c17959eb7d06d073dd
}
}
# Unit Test
import static org.mockito.Mockito.;
import org.junit.jupiter.api.Test;
<<<<<<< HEAD
public class PortfolioControllerTest {
@Test
public void testCreatePortfolio() {
PortfolioController controller = new PortfolioController();
PortfolioService mockService = mock(PortfolioService.class);
controller.setPortfolioService(mockService);
Portfolio portfolio = new Portfolio("Corporation of Lloyds", "VALID123", "1234567890");
when(mockService.savePortfolio(portfolio)).thenReturn(portfolio);
ResponseEntity<Portfolio> response = controller.createPortfolio(portfolio);
assertEquals(HttpStatus.OK, response.getStatusCode());
assertEquals(portfolio, response.getBody());
}
=======
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
@SpringBootTest
@AutoConfigureMockMvc
public class OrderControllerTest {
@Autowired
private MockMvc mockMvc;
@MockBean
private OrderService orderService;
@Test
public void testDeleteOrder() throws Exception {
doNothing().when(orderService).deleteOrderById("1");
mockMvc.perform(delete("/api/orders/1"))
.andExpect(status().isOk());
verify(orderService, times(1)).deleteOrderById("1");
=======
@PostMapping
public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest) {
try {
orderService.validateOrder(orderRequest);
return ResponseEntity.ok("Order created successfully");
} catch (InvalidOrderException e) {
>>>>>>> 852197170c855352e92cce1fa7f2fd59effb0da6
return ResponseEntity.badRequest().body(e.getMessage());
}
}
}
<<<<<<< HEAD
# Service Implementation
@Service
public class PaymentService {
public String processPayment(PaymentRequest paymentRequest) throws PaymentException {
# Validate and process payment
if (!"EUR".equals(paymentRequest.getCurrency())) {
throw new PaymentException("Invalid currency. Only Euro (€) is supported.");
}
if (paymentRequest.getAmount() > 100000) {
throw new PaymentException("Transaction exceeds the maximum limit of €100,000.");
}
# Logic to initiate payment and update the database
return "Payment processed successfully.";
}
}
# Unit Testing
@SpringBootTest
public class PaymentServiceTest {
@Autowired
private PaymentService paymentService;
@Test
public void testInvalidCurrency() {
PaymentRequest request = new PaymentRequest("USD", 50000);
assertThrows(PaymentException.class, () -> paymentService.processPayment(request));
}
=======
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
>>>>>>> c0b261b5d67e5440a649c56f17a582e4f68a2483
>>>>>>> 01754ed891c935dfd02b2efa191a9a5268277804
>>>>>>> 852197170c855352e92cce1fa7f2fd59effb0da6
>>>>>>> 4c9315e970cd3b1b7fcda73e18796c23fd478d78
>>>>>>> 0a2cf2c6fe7988e887fe14c17959eb7d06d073dd
}