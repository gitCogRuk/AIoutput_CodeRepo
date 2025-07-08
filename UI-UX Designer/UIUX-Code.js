import React, { useState } from 'react';
const PortfolioForm = () => {
const [colMember, setColMember] = useState('');
const [colSettlementNo, setColSettlementNo] = useState('');
const [errors, setErrors] = useState({});
const validateForm = () => {
let formErrors = {};
if (!/^[A-Za-z0-9]{1,12}$/.test(colMember)) {
formErrors.colMember = 'CoL Member and Portfolio must be 1-12 characters long (letters and numbers only).';
}
if (!/^\d{10}$/.test(colSettlementNo)) {
formErrors.colSettlementNo = 'CoL Citi Settlement account No must be exactly 10 digits.';
}
return formErrors;
};
const handleSubmit = (event) => {
event.preventDefault();
const formErrors = validateForm();
if (Object.keys(formErrors).length === 0) {
# Submit the form
console.log("Form submitted successfully");
} else {
setErrors(formErrors);
}
};
return (
<form onSubmit={handleSubmit}>
<label>
CoL Member and Portfolio:
<input
type="text"
value={colMember}
onChange={(e) => setColMember(e.target.value)}
/>
{errors.colMember && <span>{errors.colMember}</span>}
</label>
<label>
CoL Citi Settlement Account No:
<input
type="text"
value={colSettlementNo}
onChange={(e) => setColSettlementNo(e.target.value)}
/>
{errors.colSettlementNo && <span>{errors.colSettlementNo}</span>}
</label>
<button type="submit">Save</button>
</form>
);
};
export default PortfolioForm;