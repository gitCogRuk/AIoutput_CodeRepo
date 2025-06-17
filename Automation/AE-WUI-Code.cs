public class SEPAInstantPaymentPage
{
private readonly IPage _page;
public SEPAInstantPaymentPage(IPage page)
{
_page = page;
}
public async Task FillPaymentForm(decimal amount, string currency)
{
await _page.FillAsync("input[name='amount']", amount.ToString());
await _page.SelectOptionAsync("select[name='currency']", currency);
}
public async Task SubmitPayment()
{
await _page.ClickAsync("button[type='submit']");
}
public async Task<string> GetErrorMessage()
{
return await _page.TextContentAsync(".error");
}
}
# Step Definitions
[Binding]
public class SEPAInstantPaymentSteps
{
private readonly SEPAInstantPaymentPage _paymentPage;
public SEPAInstantPaymentSteps(SEPAInstantPaymentPage paymentPage)
{
_paymentPage = paymentPage;
}
[Given("I fill the payment form with amount (.) and currency (.)")]
public async Task GivenIFillThePaymentFormWithAmountAndCurrency(decimal amount, string currency)
{
await _paymentPage.FillPaymentForm(amount, currency);
}
[When("I submit the payment")]
public async Task WhenISubmitThePayment()
{
await _paymentPage.SubmitPayment();
}
[Then("I should see an error message (.)")]
public async Task ThenIShouldSeeAnErrorMessage(string expectedMessage)
{
var actualMessage = await _paymentPage.GetErrorMessage();
Assert.AreEqual(expectedMessage, actualMessage);
}
}