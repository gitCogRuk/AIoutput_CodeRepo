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
}
}
# Unit Test
import static org.mockito.Mockito.;
import org.junit.jupiter.api.Test;
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
}