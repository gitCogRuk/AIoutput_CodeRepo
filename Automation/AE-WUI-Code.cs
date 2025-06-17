using Microsoft.Playwright;
using NUnit.Framework;
public class Pacs008Page
{
private readonly IPage _page;
public Pacs008Page(IPage page)
{
_page = page;
}
public async Task FillTransactionData(string msgId, string creDtTm, string pmtId, string amt, string ccy)
{
await _page.FillAsync("input[name='MsgId']", msgId);
await _page.FillAsync("input[name='CreDtTm']", creDtTm);
await _page.FillAsync("input[name='PmtId']", pmtId);
await _page.FillAsync("input[name='Amt']", amt);
await _page.FillAsync("input[name='Ccy']", ccy);
}
public async Task<string> GetXmlOutput()
{
return await _page.TextContentAsync("pre");
}
}
[TestFixture]
public class Pacs008Tests
{
private IBrowser _browser;
private IPage _page;
[SetUp]
public async Task Setup()
{
_browser = await Playwright.CreateAsync().Chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = true });
_page = await _browser.NewPageAsync();
await _page.GotoAsync("http:#localhost:3000"); # Adjust as necessary
}
[Test]
public async Task TestGeneratePacs008Xml()
{
var pacs008Page = new Pacs008Page(_page);
await pacs008Page.FillTransactionData("12345", "2023-10-01T12:00:00Z", "98765", "1000", "USD");
await _page.ClickAsync("button[type='submit']");
string xmlOutput = await pacs008Page.GetXmlOutput();
Assert.IsTrue(xmlOutput.Contains("<MsgId>12345</MsgId>"));
}
[TearDown]
public async Task TearDown()
{
await _browser.CloseAsync();
}
}