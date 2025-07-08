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
}
};
return (
<form onSubmit={handleSubmit}>
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