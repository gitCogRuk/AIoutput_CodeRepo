import React, { useState } from 'react';
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
});