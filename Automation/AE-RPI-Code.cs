using Microsoft.Playwright;
using System.Threading.Tasks;
public class PortfolioApi
{
private readonly HttpClient _client;
public PortfolioApi(HttpClient client)
{
_client = client;
}
public async Task<HttpResponseMessage> CreatePortfolio(Portfolio portfolio)
{
return await _client.PostAsJsonAsync("/api/portfolio/create", portfolio);
}
}
# Step Definition
[Binding]
public class PortfolioApiSteps
{
private readonly PortfolioApi _portfolioApi;
public PortfolioApiSteps(PortfolioApi portfolioApi)
{
_portfolioApi = portfolioApi;
}
[When(@"I create portfolio with ""(.)"" and ""(.)""")]
public async Task WhenICreatePortfolioWith(string colMember, string colSettlementAcc)
{
var portfolio = new Portfolio
{
ServiceType = "Corporation of Lloyds",
ColMember = colMember,
ColSettlementAcc = colSettlementAcc
};
var response = await _portfolioApi.CreatePortfolio(portfolio);
Assert.IsTrue(response.IsSuccessStatusCode);
}
}