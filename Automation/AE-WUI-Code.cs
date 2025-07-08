using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
public class SEPAInstantPaymentPage {
private IWebDriver driver;
public SEPAInstantPaymentPage(IWebDriver driver) {
this.driver = driver;
}
public void SubmitPayment(string amount, string currency) {
driver.FindElement(By.Id("amount")).SendKeys(amount);
driver.FindElement(By.Id("currency")).SendKeys(currency);
driver.FindElement(By.Id("submit")).Click();
}
public string GetNotificationMessage() {
return driver.FindElement(By.Id("notification")).Text;
}
}