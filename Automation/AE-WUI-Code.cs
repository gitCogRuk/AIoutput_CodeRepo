public class OrderPage
{
private readonly IPage page;
public OrderPage(IPage page)
{
this.page = page;
}
public async Task SubmitOrder(string portfolioType, string orderInstrument)
{
await page.FillAsync("#portfolioType", portfolioType);
await page.FillAsync("#orderInstrument", orderInstrument);
await page.ClickAsync("#submit");
}
public async Task<string> GetErrorMessage()
{
return await page.InnerTextAsync("#errorMessage");
}
}
# Step Definitions
[Binding]
public class OrderSteps
{
private readonly OrderPage orderPage;
public OrderSteps(OrderPage orderPage)
{
this.orderPage = orderPage;
}
[When(@"the user submits the order with portfolio type '(.)' and order instrument '(.)'")]
public async Task WhenTheUserSubmitsTheOrder(string portfolioType, string orderInstrument)
{
await orderPage.SubmitOrder(portfolioType, orderInstrument);
}
[Then(@"an error message should be displayed '(.)'")]
public async Task ThenAnErrorMessageShouldBeDisplayed(string expectedMessage)
{
var errorMessage = await orderPage.GetErrorMessage();
Assert.AreEqual(expectedMessage, errorMessage);
}
}