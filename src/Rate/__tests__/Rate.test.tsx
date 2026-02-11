import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Rate from '../index';

describe('Rate Component', () => {
  it('should render correctly', () => {
    render(<Rate />);
    const stars = screen.getAllByText('★');
    expect(stars.length).toBeGreaterThan(0);
  });

  it('should handle rate change', async () => {
    const onChange = jest.fn();
    render(<Rate onChange={onChange} />);
    
    const rateItems = screen.getAllByText('★');
    fireEvent.click(rateItems[3]); // Click on the 4th star (0-indexed)
    
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(4);
    });
  });

  it('should support disabled state', () => {
    render(<Rate disabled />);
    const rateItems = screen.getAllByText('★');
    expect(rateItems.length).toBeGreaterThan(0);
  });

  it('should display default value', () => {
    render(<Rate defaultValue={3} />);
    const rateItems = screen.getAllByText('★');
    expect(rateItems.length).toBeGreaterThan(0);
  });
});