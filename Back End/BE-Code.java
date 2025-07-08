# Java code for REST API handling SEPA Instant Payments
@RestController
@RequestMapping("/api/payment")
public class SEPAInstantPaymentController {
@PostMapping("/receive")
public ResponseEntity<?> receivePayment(@RequestBody PaymentDetails paymentDetails) {
try {
validatePayment(paymentDetails);
# Logic to credit account
sendNotification(paymentDetails.getAccountId(), paymentDetails);
logTransaction(paymentDetails);
return ResponseEntity.ok("Payment processed successfully");
} catch (PaymentException e) {
return ResponseEntity.badRequest().body(e.getMessage());
}
}
private void validatePayment(PaymentDetails paymentDetails) {
if (!paymentDetails.getCurrency().equals("EUR")) {
throw new PaymentException("Invalid currency. Only Euro (€) is accepted.");
}
if (paymentDetails.getAmount() > 100000) {
throw new PaymentException("Transaction exceeds €100,000 limit.");
}
}
}