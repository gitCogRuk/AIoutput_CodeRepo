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
}