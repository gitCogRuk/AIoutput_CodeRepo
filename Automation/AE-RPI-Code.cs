public class PortfolioApi
{
private readonly HttpClient _client;
public PortfolioApi(HttpClient client)
{
_client = client;
}
public async Task<HttpResponseMessage> CreatePortfolio(PortfolioDto portfolioDto)
{
var json = JsonConvert.SerializeObject(portfolioDto);
var content = new StringContent(json, Encoding.UTF8, "application/json");
return await _client.PostAsync("/api/portfolio", content);
}
}