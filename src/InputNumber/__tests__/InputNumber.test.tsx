import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import InputNumber from '../index';

describe('InputNumber Component', () => {
  it('should render correctly', () => {
    render(<InputNumber />);
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  it('should handle number change', async () => {
    const onChange = jest.fn();
    render(<InputNumber onChange={onChange} />);
    
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '10' } });
    
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(10);
    });
  });

  it('should support disabled state', () => {
    render(<InputNumber disabled />);
    const input = screen.getByRole('spinbutton');
    expect(input).toBeDisabled();
  });

  it('should display default value', () => {
    render(<InputNumber defaultValue={5} />);
    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue(5);
  });
});