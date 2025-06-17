# React component for Follow-up queue
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FollowUpQueue = () => {
const [orders, setOrders] = useState([]);
useEffect(() => {
const fetchOrders = async () => {
const result = await axios('/api/orders/followup');
setOrders(result.data);
};
fetchOrders();
}, []);
const handleDelete = async (orderId) => {
const confirmed = window.confirm('Are you sure you want to delete this order?');
if (confirmed) {
await axios.delete(`/api/orders/${orderId}`);
setOrders(orders.filter(order => order.id !== orderId));
}
};
return (
<div>
<h1>Follow-up Queue</h1>
<ul>
{orders.map(order => (
<li key={order.id}>
{order.description}
{order.status === 'Returned to Originator' && (
<input
type="checkbox"
onChange={() => handleDelete(order.id)}
/>
)}
</li>
))}
</ul>
</div>
);
};
export default FollowUpQueue;
# Unit Test
import { render, screen, fireEvent } from '@testing-library/react';
import FollowUpQueue from './FollowUpQueue';
import axios from 'axios';
jest.mock('axios');
test('deletes an order when checkbox is checked', async () => {
axios.get.mockResolvedValueOnce({ data: [{ id: 1, description: 'Order 1', status: 'Returned to Originator' }] });
axios.delete.mockResolvedValueOnce({});
render(<FollowUpQueue />);
const checkbox = await screen.findByRole('checkbox');
fireEvent.click(checkbox);
expect(axios.delete).toHaveBeenCalledWith('/api/orders/1');
});