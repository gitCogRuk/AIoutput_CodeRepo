import React, { useState } from 'react';
<<<<<<< HEAD
const CoLPortfolioForm = ({ serviceType }) => {
const [colMember, setColMember] = useState('');
const [colSettlementAcc, setColSettlementAcc] = useState('');
const [error, setError] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
try {
validateCoLFields(serviceType, colMember, colSettlementAcc);
# Proceed with form submission
} catch (e) {
setError(e.message);
=======
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
>>>>>>> 66a350be040457f267d8d99b0875610e3c70d01b
}
};
return (
<form onSubmit={handleSubmit}>
<<<<<<< HEAD
{serviceType === 'Corporation of Lloyds' && (
<>
<div>
<label>CoL Member and Portfolio:</label>
<input
type="text"
value={colMember}
onChange={(e) => setColMember(e.target.value)}
required
/>
</div>
<div>
<label>CoL Citi Settlement Account No:</label>
<input
type="text"
value={colSettlementAcc}
onChange={(e) => setColSettlementAcc(e.target.value)}
required
/>
</div>
{error && <div className="error">{error}</div>}
<button type="submit">Submit</button>
</>
)}
</form>
);
};
export default CoLPortfolioForm;
# Unit Test
import { render, fireEvent } from '@testing-library/react';
import CoLPortfolioForm from './CoLPortfolioForm';
test('displays error on invalid inputs', () => {
const { getByLabelText, getByText } = render(<CoLPortfolioForm serviceType="Corporation of Lloyds" />);
fireEvent.change(getByLabelText(/CoL Member and Portfolio/i), { target: { value: 'Invalid@Input' } });
fireEvent.change(getByLabelText(/CoL Citi Settlement Account No/i), { target: { value: '123' } });
fireEvent.click(getByText(/Submit/i));
expect(getByText(/CoL Member and Portfolio must be 12 characters or less and alphanumeric/i)).toBeInTheDocument();
});
=======
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
>>>>>>> 66a350be040457f267d8d99b0875610e3c70d01b
