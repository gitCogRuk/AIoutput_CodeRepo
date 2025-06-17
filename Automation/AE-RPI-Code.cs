public class BankAccountApi
{
private readonly HttpClient _client;
public BankAccountApi(HttpClient client)
{
_client = client;
}
public async Task<string> AddBankAccount(string externalId)
{
var response = await _client.PostAsync("/api/bank-accounts/add", new StringContent(JsonConvert.SerializeObject(new { externalId }), Encoding.UTF8, "application/json"));
return await response.Content.ReadAsStringAsync();
}
}