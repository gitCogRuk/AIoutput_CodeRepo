import React, { useState } from 'react';
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