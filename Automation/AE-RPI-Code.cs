public class PortfolioApi
{
public async Task<string> AddBankAccount(string portfolioId, BankAccount bankAccount)
{
var response = await HttpClient.PostAsync($"/api/portfolio/{portfolioId}/bankAccount", new StringContent(JsonConvert.SerializeObject(bankAccount), Encoding.UTF8, "application/json"));
return await response.Content.ReadAsStringAsync();
}
}
# Unit Testing for REST API
[Test]
public async Task TestAddInvalidBankAccount()
{
var portfolioApi = new PortfolioApi();
var bankAccount = new BankAccount { Status = "In Review" };
var response = await portfolioApi.AddBankAccount("portfolio123", bankAccount);
Assert.AreEqual("Cannot link an unverified bank account to an active portfolio.", response);
}