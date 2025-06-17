using Microsoft.Playwright;
using System.Threading.Tasks;
public class FollowUpQueuePage
{
private readonly IPage _page;
public FollowUpQueuePage(IPage page)
{
_page = page;
}
public async Task NavigateToFollowUpQueue()
{
await _page.Click("text='Follow-up'");
}
public async Task<bool> IsOrderPresent(string orderId)
{
return await _page.Locator($"text='{orderId}'").CountAsync() > 0;
}
public async Task DeleteOrder(string orderId)
{
await _page.Locator($"text='{orderId}'").Locator("button:text('Delete')").ClickAsync();
}
public async Task<bool> IsDeleteCheckboxVisible(string orderId)
{
return await _page.Locator($"text='{orderId}'").Locator("input[type='checkbox']").IsVisibleAsync();
}
}