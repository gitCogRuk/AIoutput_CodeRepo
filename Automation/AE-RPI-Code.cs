using Microsoft.Playwright;
using System.Threading.Tasks;
public class PaymentApiTests
{
private readonly IApiRequestContext _request;
public PaymentApiTests(IApiRequestContext request)
{
_request = request;
}
public async Task<Response> InitiatePayment(string lei, string purposeCode)
{
var response = await _request.PostAsync("/api/chaps/initiate", new
{
lei = lei,
purposeCode = purposeCode
});
return response;
}
public async Task<string> GetResponseBody(Response response)
{
return await response.TextAsync();
}
}