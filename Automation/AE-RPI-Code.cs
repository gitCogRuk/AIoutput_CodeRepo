public class ApiClient
{
private readonly HttpClient client;
public ApiClient(HttpClient client)
{
this.client = client;
}
public async Task<HttpResponseMessage> CreateOrder(OrderRequest orderRequest)
{
var content = new StringContent(JsonConvert.SerializeObject(orderRequest), Encoding.UTF8, "application/json");
return await client.PostAsync("/api/orders", content);
}
}
# Step Definitions
[Binding]
public class ApiSteps
{
private readonly ApiClient apiClient;
private HttpResponseMessage response;
public ApiSteps(ApiClient apiClient)
{
this.apiClient = apiClient;
}
[When(@"the user creates an order")]
public async Task WhenTheUserCreatesAnOrder(OrderRequest orderRequest)
{
response = await apiClient.CreateOrder(orderRequest);
}
[Then(@"the response should be '(.)'")]
public void ThenTheResponseShouldBe(string expectedStatus)
{
Assert.AreEqual(expectedStatus, response.StatusCode.ToString());
}
}