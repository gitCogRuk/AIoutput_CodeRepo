import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PortfolioForm from './PortfolioForm';
test('renders PortfolioForm and validates inputs', () => {
const { getByLabelText, getByText } = render(<PortfolioForm />);
const memberInput = getByLabelText(/CoL Member and Portfolio/i);
fireEvent.change(memberInput, { target: { value: 'InvalidMember!' } });
const settlementInput = getByLabelText(/CoL Citi Settlement Account No/i);
fireEvent.change(settlementInput, { target: { value: '123' } });
fireEvent.click(getByText(/Save/i));
expect(getByText(/must be 1-12 characters long/i)).toBeInTheDocument();
expect(getByText(/must be exactly 10 digits/i)).toBeInTheDocument();
fireEvent.change(memberInput, { target: { value: 'Valid123' } });
fireEvent.change(settlementInput, { target: { value: '1234567890' } });
fireEvent.click(getByText(/Save/i));
# Expect no error messages now
});