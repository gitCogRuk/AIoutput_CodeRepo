public class PortfolioPage
{
private readonly IPage _page;
public PortfolioPage(IPage page)
{
_page = page;
}
public async Task FillCoLMemberAndPortfolio(string member)
{
await _page.FillAsync("input[name='colMember']", member);
}
public async Task FillCoLCitiSettlementNo(string settlementNo)
{
await _page.FillAsync("input[name='colSettlementNo']", settlementNo);
}
public async Task SavePortfolio()
{
await _page.ClickAsync("button[type='submit']");
}
public async Task<string> GetErrorMessage()
{
return await _page.InnerTextAsync(".error-message");
}
}