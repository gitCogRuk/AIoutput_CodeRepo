# C# Playwright Step Definitions for deleting order
using Microsoft.Playwright;
using TechTalk.SpecFlow;
[Binding]
public class OrderSteps
{
private readonly IPage _page;
public OrderSteps(IPage page)
{
_page = page;
}
[Given(@"Login to eximius new UI")]
public async Task GivenLoginToEximiusNewUI()
{
await _page.Goto("url_to_login");
await _page.Fill("input[name='username']", "testUser");
await _page.Fill("input[name='password']", "testPassword");
await _page.Click("button[type='submit']");
}
[When(@"I select the '(.)' from the Create New Entity field")]
public async Task WhenISelectTheEntity(string entity)
{
await _page.SelectOption("select[name='entity']", entity);
}
# Other steps...
[Then(@"I verify the order has a delete checkbox")]
public async Task ThenIVerifyTheOrderHasADeleteCheckbox()
{
var deleteCheckbox = await _page.QuerySelector("input[type='checkbox']");
Assert.NotNull(deleteCheckbox);
}
[When(@"I delete the order")]
public async Task WhenIDeleteTheOrder()
{
await _page.Click("button[type='delete']");
}
[Then(@"I verify the order is removed from the follow-up queue")]
public async Task ThenIVerifyTheOrderIsRemoved()
{
var order = await _page.QuerySelector(".order-class");
Assert.Null(order);
}