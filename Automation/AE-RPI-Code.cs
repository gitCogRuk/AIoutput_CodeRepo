# REST API Step Definition for SEPA Instant Payment
[Binding]
public class SEPAInstantPaymentApiSteps
{
private readonly HttpClient _client;
public SEPAInstantPaymentApiSteps(HttpClient client)
{
_client = client;
}
[When("I send a payment request with amount (.) and currency (.)")]
public async Task WhenISendAPaymentRequestWithAmountAndCurrency(decimal amount, string currency)
{
var paymentRequest = new { amount, currency };
var response = await _client.PostAsJsonAsync("api/payments/instant", paymentRequest);
response.EnsureSuccessStatusCode();
}
[Then("I should receive an error response with message (.)")]
public async Task ThenIShouldReceiveAnErrorResponseWithMessage(string expectedMessage)
{
var response = await _client.PostAsJsonAsync("api/payments/instant", new { amount = 150000, currency = "USD" });
var actualMessage = await response.Content.ReadAsStringAsync();
Assert.AreEqual(expectedMessage, actualMessage);
}
}