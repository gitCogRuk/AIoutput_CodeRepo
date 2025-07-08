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