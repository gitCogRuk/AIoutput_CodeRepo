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
}
};
return (
<form onSubmit={handleSubmit}>
<label>
Bank Account External ID:
<input name="externalId" type="text" />
</label>
<button type="submit">Add Bank Account</button>
{error && <p>{error}</p>}
</form>
);
};