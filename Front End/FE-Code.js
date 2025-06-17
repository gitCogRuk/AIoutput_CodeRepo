import React, { useState } from 'react';
<<<<<<< HEAD
const Pacs008Generator = () => {
const [transactionData, setTransactionData] = useState({
MsgId: '',
CreDtTm: '',
PmtId: '',
Amt: '',
Ccy: ''
});
const [xmlOutput, setXmlOutput] = useState('');
const handleChange = (e) => {
const { name, value } = e.target;
setTransactionData({ ...transactionData, [name]: value });
};
const handleSubmit = (e) => {
e.preventDefault();
# Call the backend API to generate XML and set the output
fetch('/api/generate-pacs008', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(transactionData),
})
.then(response => response.text())
.then(data => setXmlOutput(data))
.catch(error => console.error('Error:', error));
};
return (
<div>
<form onSubmit={handleSubmit}>
<input name="MsgId" onChange={handleChange} placeholder="Message ID" required />
<input name="CreDtTm" onChange={handleChange} placeholder="Creation Date Time" required />
<input name="PmtId" onChange={handleChange} placeholder="Payment ID" required />
<input name="Amt" onChange={handleChange} placeholder="Amount" required />
<input name="Ccy" onChange={handleChange} placeholder="Currency" required />
<button type="submit">Generate XML</button>
</form>
<pre>{xmlOutput}</pre>
</div>
);
};
export default Pacs008Generator;
=======
<<<<<<< HEAD
import PropTypes from 'prop-types';
const OrderForm = ({ onSubmit }) => {
const [orderInstrument, setOrderInstrument] = useState('');
const [portfolioType, setPortfolioType] = useState('ISA');
const [errorMessage, setErrorMessage] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
try {
isISAEligible(orderInstrument, portfolioType);
onSubmit(orderInstrument);
} catch (error) {
setErrorMessage(error.message);
}
};
return (
<form onSubmit={handleSubmit}>
<input
type="text"
value={orderInstrument}
onChange={(e) => setOrderInstrument(e.target.value)}
placeholder="Order Instrument"
/>
<select value={portfolioType} onChange={(e) => setPortfolioType(e.target.value)}>
<option value="ISA">ISA</option>
<option value="Non-ISA">Non-ISA</option>
</select>
<button type="submit">Submit</button>
{errorMessage && <p>{errorMessage}</p>}
</form>
);
};
OrderForm.propTypes = {
onSubmit: PropTypes.func.isRequired,
};
export default OrderForm;
# Unit Test
test('displays error message for non-eligible instruments', () => {
render(<OrderForm onSubmit={jest.fn()} />);
fireEvent.change(screen.getByPlaceholderText(/Order Instrument/i), { target: { value: 'NonEligibleInstrument' } });
fireEvent.click(screen.getByText(/Submit/i));
expect(screen.getByText(/not ISA\/PEP eligible/i)).toBeInTheDocument();
=======
function AddBankAccount({ portfolio }) {
const [statusMessage, setStatusMessage] = useState('');
const addBankAccount = (newAccount) => {
try {
BankAccountManager.linkBankAccountToPortfolio(portfolio, newAccount);
setStatusMessage('Bank account linked successfully.');
} catch (error) {
setStatusMessage(error.message);
}
};
return (
<div>
<button onClick={() => addBankAccount(newAccount)}>Add Bank Account</button>
{statusMessage && <p>{statusMessage}</p>}
</div>
);
}
# Unit Testing
test('should prevent linking unverified bank accounts', () => {
const portfolio = { status: 'Active' };
const newAccount = { status: 'In Review' };
expect(() => addBankAccount(portfolio, newAccount)).toThrow("Cannot link an unverified bank account to an active portfolio.");
>>>>>>> dd813f0b7d965ce25010caa34abc9a0c565bec47
});
>>>>>>> 1857fc971ca817d8b58cd07a08cc4e0ebbed4452
