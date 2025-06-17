using Microsoft.Playwright;
using System.Threading.Tasks;
public class PortfolioPage
{
private readonly IPage _page;
public PortfolioPage(IPage page)
{
_page = page;
}
public async Task FillCoLFields(string colMember, string colSettlementAcc)
{
await _page.FillAsync("input[name='colMember']", colMember);
await _page.FillAsync("input[name='colSettlementAcc']", colSettlementAcc);
}
public async Task SubmitForm()
{
await _page.ClickAsync("button[type='submit']");
}
public async Task<string> GetErrorMessage()
{
return await _page.TextContentAsync(".error");
}
}
# Step Definition
[Binding]
public class PortfolioSteps
{
private readonly PortfolioPage _portfolioPage;
public PortfolioSteps(PortfolioPage portfolioPage)
{
_portfolioPage = portfolioPage;
}
[When(@"I fill in CoL fields with ""(.)"" and ""(.)""")]
public async Task WhenIFillInCoLFields(string colMember, string colSettlementAcc)
{
await _portfolioPage.FillCoLFields(colMember, colSettlementAcc);
}
[When(@"I submit the form")]
public async Task WhenISubmitTheForm()
{
await _portfolioPage.SubmitForm();
}
[Then(@"I should see error message")]
public async Task ThenIShouldSeeErrorMessage(string expectedError)
{
var actualError = await _portfolioPage.GetErrorMessage();
Assert.AreEqual(expectedError, actualError);
}
}