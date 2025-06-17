# Java REST API endpoint for deleting order
import org.springframework.web.bind.annotation.;
import org.springframework.beans.factory.annotation.Autowired;
@RestController
@RequestMapping("/api/orders")
public class OrderController {
@Autowired
private OrderService orderService;
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
}
}
# Unit Test
import static org.mockito.Mockito.;
import org.junit.jupiter.api.Test;
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
}