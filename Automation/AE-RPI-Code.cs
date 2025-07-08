using Microsoft.Playwright;
using System.Threading.Tasks;
public class PortfolioControllerTests
{
private readonly IPage _page;
public PortfolioControllerTests(IPage page)
{
_page = page;
}
[Fact]
public async Task CreatePortfolio_ShouldReturnBadRequest_WhenInvalidData()
{
var portfolioPage = new PortfolioPage(_page);
await portfolioPage.FillPortfolioForm("Corporation of Lloyds", "INVALID123456", "12345");
await portfolioPage.SubmitForm();
var errorMessage = await portfolioPage.GetErrorMessage();
Assert.Contains("must be 12 characters long and alphanumeric", errorMessage);
}
}