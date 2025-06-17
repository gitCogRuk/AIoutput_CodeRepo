using Microsoft.Playwright;
using System.Threading.Tasks;
public class OrdersApi
{
private readonly IPage _page;
public OrdersApi(IPage page)
{
_page = page;
}
public async Task DeleteOrderAsync(string orderId)
{
await _page.DeleteAsync($"/api/orders/{orderId}");
}
public async Task<bool> IsOrderReturnedToOriginator(string orderId)
{
var response = await _page.GetAsync($"/api/orders/{orderId}");
return response.Status == 200 && response.Body.Contains("Returned to Originator");
}
}