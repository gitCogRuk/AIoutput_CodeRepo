public class BankAccountPage
{
private readonly IPage _page;
public BankAccountPage(IPage page)
{
_page = page;
}
public async Task AddBankAccount(string externalId)
{
await _page.FillAsync("input[name='externalId']", externalId);
await _page.ClickAsync("button[type='submit']");
}
public async Task<string> GetErrorMessage()
{
return await _page.InnerTextAsync("p.error");
}
}