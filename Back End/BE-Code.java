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
}