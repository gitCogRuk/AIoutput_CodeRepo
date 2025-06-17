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
}
};
return (
<form onSubmit={handleSubmit}>
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