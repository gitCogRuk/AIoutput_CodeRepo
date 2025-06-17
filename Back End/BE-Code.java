@RestController
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
}