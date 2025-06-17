import React, { useState } from 'react';
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
});