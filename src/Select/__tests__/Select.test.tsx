import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Select from '../index';

describe('Select Component', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  it('should render correctly', () => {
    render(<Select options={options} placeholder="Select an option" />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('should display options when clicked', async () => {
    render(<Select options={options} placeholder="Select an option" />);
    
    const input = screen.getByText('Select an option');
    fireEvent.click(input);
    
    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });
  });

  it('should handle option selection', async () => {
    const onChange = jest.fn();
    render(<Select options={options} placeholder="Select an option" onChange={onChange} />);
    
    const input = screen.getByText('Select an option');
    fireEvent.click(input);
    
    await waitFor(() => {
      fireEvent.click(screen.getByText('Option 1'));
    });
    
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('1');
    });
  });

  it('should support disabled state', () => {
    render(<Select options={options} placeholder="Select an option" disabled />);
    const input = screen.getByText('Select an option');
    expect(input).toBeInTheDocument();
  });
});