import React, { useState } from 'react';
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