public class BankAccountPage
{
public async Task AddBankAccount(string accountStatus)
{
await Page.ClickAsync("button#addBankAccount");
await Page.FillAsync("input#accountStatus", accountStatus);
await Page.ClickAsync("button#save");
}
public async Task<string> GetStatusMessage()
{
return await Page.InnerTextAsync("p#statusMessage");
}
}
[Binding]
public class BankAccountSteps
{
private readonly BankAccountPage _bankAccountPage;
public BankAccountSteps(BankAccountPage bankAccountPage)
{
_bankAccountPage = bankAccountPage;
}
[Given("I add a new bank account with status {string}")]
public async Task GivenIAddANewBankAccountWithStatus(string status)
{
await _bankAccountPage.AddBankAccount(status);
}
[Then("I should see a status message {string}")]
public async Task ThenIShouldSeeAStatusMessage(string expectedMessage)
{
var actualMessage = await _bankAccountPage.GetStatusMessage();
Assert.AreEqual(expectedMessage, actualMessage);
}
}