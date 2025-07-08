using Microsoft.Playwright;
using System.Threading.Tasks;
public class PortfolioPage
{
private readonly IPage _page;
public PortfolioPage(IPage page)
{
_page = page;
}
public async Task FillPortfolioForm(string serviceType, string member, string accountNumber)
{
await _page.SelectOptionAsync("select#serviceType", serviceType);
if (serviceType == "Corporation of Lloyds")
{
await _page.FillAsync("input#member", member);
await _page.FillAsync("input#accountNumber", accountNumber);
}
}
public async Task SubmitForm()
{
await _page.ClickAsync("button#savePortfolio");
}
public async Task<string> GetErrorMessage()
{
return await _page.InnerTextAsync("p.error");
}
}