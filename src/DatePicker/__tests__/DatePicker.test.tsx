import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DatePicker from '../index';

describe('DatePicker Component', () => {
  it('should render correctly', () => {
    render(<DatePicker placeholder="Select a date" />);
    expect(screen.getByText('Select a date')).toBeInTheDocument();
  });

  it('should handle date change', async () => {
    const onChange = jest.fn();
    render(<DatePicker placeholder="Select a date" onChange={onChange} />);
    
    const input = screen.getByText('Select a date');
    fireEvent.click(input);
    
    await waitFor(() => {
      const days = screen.getAllByText('1');
      fireEvent.click(days[0]);
    });
    
    await waitFor(() => {
      const confirmButton = screen.getByText('确定');
      fireEvent.click(confirmButton);
    });
    
    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('should support disabled state', () => {
    render(<DatePicker placeholder="Select a date" disabled />);
    const input = screen.getByText('Select a date');
    expect(input).toBeInTheDocument();
  });

  it('should display default value', () => {
    render(<DatePicker placeholder="Select a date" defaultValue="2024-01-01" />);
    const input = screen.getByText('2024-01-01');
    expect(input).toBeInTheDocument();
  });
});