# C# Playwright Step Definitions for REST API interaction
using Microsoft.Playwright;
using TechTalk.SpecFlow;
[Binding]
public class OrderApiSteps
{
private readonly IPage _page;
public OrderApiSteps(IPage page)
{
_page = page;
}
[When(@"I delete the order via API")]
public async Task WhenIDeleteTheOrderViaApi()
{
var response = await _page.Request.Delete("http:#api_url/api/orders/1");
Assert.Equal(200, response.Status);
}