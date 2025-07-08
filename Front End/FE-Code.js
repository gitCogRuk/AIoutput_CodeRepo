<<<<<<< HEAD
# React component for displaying transaction status
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const TransactionStatus = () => {
const [transaction, setTransaction] = useState(null);
useEffect(() => {
const fetchTransaction = async () => {
const response = await axios.get('/api/transaction/status');
setTransaction(response.data);
};
fetchTransaction();
}, []);
return (
<div>
{transaction ? (
<div>
<h3>Transaction Status</h3>
<p>Amount: {transaction.amount}</p>
<p>Status: {transaction.status}</p>
<p>Confirmation: {transaction.confirmation}</p>
</div>
) : (
<p>Loading...</p>
)}
</div>
);
};
export default TransactionStatus;
# Unit Testing for TransactionStatus Component
import { render, screen } from '@testing-library/react';
import TransactionStatus from './TransactionStatus';
test('renders loading state', () => {
render(<TransactionStatus />);
expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
=======
<<<<<<< HEAD
import React, { useState } from 'react';
const PortfolioForm = () => {
const [serviceType, setServiceType] = useState('');
const [member, setMember] = useState('');
const [accountNumber, setAccountNumber] = useState('');
const [errors, setErrors] = useState({});
const handleSubmit = (event) => {
event.preventDefault();
try {
validateCoLFields(serviceType, member, accountNumber);
# Submit form logic here
} catch (error) {
setErrors({ ...errors, general: error.message });
=======
<<<<<<< HEAD
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PortfolioForm from './PortfolioForm';
test('renders PortfolioForm and validates inputs', () => {
const { getByLabelText, getByText } = render(<PortfolioForm />);
const memberInput = getByLabelText(/CoL Member and Portfolio/i);
fireEvent.change(memberInput, { target: { value: 'InvalidMember!' } });
const settlementInput = getByLabelText(/CoL Citi Settlement Account No/i);
fireEvent.change(settlementInput, { target: { value: '123' } });
fireEvent.click(getByText(/Save/i));
expect(getByText(/must be 1-12 characters long/i)).toBeInTheDocument();
expect(getByText(/must be exactly 10 digits/i)).toBeInTheDocument();
fireEvent.change(memberInput, { target: { value: 'Valid123' } });
fireEvent.change(settlementInput, { target: { value: '1234567890' } });
fireEvent.click(getByText(/Save/i));
# Expect no error messages now
});
=======
<<<<<<< HEAD
import React, { useState } from 'react';
const SEPAInstantPaymentForm = () => {
const [amount, setAmount] = useState('');
const [currency, setCurrency] = useState('EUR');
const [error, setError] = useState('');
const handleSubmit = async (e) => {
e.preventDefault();
setError('');
try {
const response = await processPayment({ amount, currency });
alert(response);
} catch (error) {
setError(error.message);
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import BankAccountForm from './BankAccountForm';
test('displays error when adding unverified bank account', () => {
const { getByLabelText, getByText } = render(<BankAccountForm />);
fireEvent.change(getByLabelText(/Bank Account External ID/i), { target: { value: 'unverifiedId' } });
fireEvent.click(getByText(/Add Bank Account/i));
expect(getByText(/Cannot link unverified bank account to active portfolio/i)).toBeInTheDocument();
});
# BankAccountForm Component
const BankAccountForm = () => {
const [error, setError] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
const externalId = e.target.elements.externalId.value;
if (validateBankAccount(externalId) === 'In Review') {
setError('Cannot link unverified bank account to active portfolio.');
} else {
# Logic to link the bank account
=======
<<<<<<< HEAD
# React component for Follow-up queue
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FollowUpQueue = () => {
const [orders, setOrders] = useState([]);
useEffect(() => {
const fetchOrders = async () => {
const result = await axios('/api/orders/followup');
setOrders(result.data);
};
fetchOrders();
}, []);
const handleDelete = async (orderId) => {
const confirmed = window.confirm('Are you sure you want to delete this order?');
if (confirmed) {
await axios.delete(`/api/orders/${orderId}`);
setOrders(orders.filter(order => order.id !== orderId));
=======
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
>>>>>>> 01754ed891c935dfd02b2efa191a9a5268277804
>>>>>>> 852197170c855352e92cce1fa7f2fd59effb0da6
>>>>>>> 0a2cf2c6fe7988e887fe14c17959eb7d06d073dd
}
};
return (
<form onSubmit={handleSubmit}>
<<<<<<< HEAD
<label>
Service Type:
<select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
<option value="">Select</option>
<option value="Corporation of Lloyds">Corporation of Lloyds</option>
{/ Other options /}
</select>
</label>
{serviceType === "Corporation of Lloyds" && (
<>
<label>
CoL Member and Portfolio:
<input
type="text"
value={member}
onChange={(e) => setMember(e.target.value)}
required
/>
</label>
<label>
CoL Citi Settlement Account No:
<input
type="text"
value={accountNumber}
onChange={(e) => setAccountNumber(e.target.value)}
required
/>
</label>
</>
)}
<button type="submit">Save Portfolio</button>
{errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
</form>
);
};
export default PortfolioForm;
# Unit Testing
import { render, screen, fireEvent } from '@testing-library/react';
import PortfolioForm from './PortfolioForm';
test('renders form and validates inputs', () => {
render(<PortfolioForm />);
fireEvent.change(screen.getByLabelText(/Service Type/i), { target: { value: 'Corporation of Lloyds' } });
fireEvent.change(screen.getByLabelText(/CoL Member and Portfolio/i), { target: { value: 'INVALID123456' } });
fireEvent.click(screen.getByText(/Save Portfolio/i));
expect(screen.getByText(/must be 12 characters long and alphanumeric/i)).toBeInTheDocument();
});
=======
<<<<<<< HEAD
<input
type="number"
value={amount}
onChange={(e) => setAmount(e.target.value)}
placeholder="Enter amount in EUR"
required
/>
<select value={currency} onChange={(e) => setCurrency(e.target.value)}>
<option value="EUR">Euro (€)</option>
</select>
<button type="submit">Send Payment</button>
{error && <p className="error">{error}</p>}
</form>
);
};
# Unit testing
test('displays error for invalid currency', () => {
const { getByText, getByRole } = render(<SEPAInstantPaymentForm />);
fireEvent.change(getByRole('textbox'), { target: { value: '150000' } });
fireEvent.click(getByRole('button', { name: /send payment/i }));
expect(getByText(/Transaction exceeds the maximum limit/i)).toBeInTheDocument();
});
=======
<<<<<<< HEAD
<label>
Bank Account External ID:
<input name="externalId" type="text" />
</label>
<button type="submit">Add Bank Account</button>
{error && <p>{error}</p>}
</form>
);
};
=======
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
>>>>>>> c0b261b5d67e5440a649c56f17a582e4f68a2483
}
};
return (
<div>
<<<<<<< HEAD
<h1>Follow-up Queue</h1>
<ul>
{orders.map(order => (
<li key={order.id}>
{order.description}
{order.status === 'Returned to Originator' && (
<input
type="checkbox"
onChange={() => handleDelete(order.id)}
/>
)}
</li>
))}
</ul>
</div>
);
};
export default FollowUpQueue;
# Unit Test
import { render, screen, fireEvent } from '@testing-library/react';
import FollowUpQueue from './FollowUpQueue';
import axios from 'axios';
jest.mock('axios');
test('deletes an order when checkbox is checked', async () => {
axios.get.mockResolvedValueOnce({ data: [{ id: 1, description: 'Order 1', status: 'Returned to Originator' }] });
axios.delete.mockResolvedValueOnce({});
render(<FollowUpQueue />);
const checkbox = await screen.findByRole('checkbox');
fireEvent.click(checkbox);
expect(axios.delete).toHaveBeenCalledWith('/api/orders/1');
});
=======
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
>>>>>>> c0b261b5d67e5440a649c56f17a582e4f68a2483
>>>>>>> 01754ed891c935dfd02b2efa191a9a5268277804
>>>>>>> 852197170c855352e92cce1fa7f2fd59effb0da6
>>>>>>> 4c9315e970cd3b1b7fcda73e18796c23fd478d78
>>>>>>> 0a2cf2c6fe7988e887fe14c17959eb7d06d073dd
>>>>>>> f08459ae45e5c641013b077c38b53126050d3df8
