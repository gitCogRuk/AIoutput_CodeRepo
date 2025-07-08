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
}