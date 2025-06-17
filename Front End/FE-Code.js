import React, { useState } from 'react';
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
}
};
return (
<form onSubmit={handleSubmit}>
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