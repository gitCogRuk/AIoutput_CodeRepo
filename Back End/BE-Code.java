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
return ResponseEntity.badRequest().body(e.getMessage());
}
}
}
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
}