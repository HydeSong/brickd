import React from 'react';
import { render, screen } from '@testing-library/react';
import Statistic from '../index';

describe('Statistic Component', () => {
  test('renders Statistic component', () => {
    render(<Statistic value={100} />);
    
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  test('renders Statistic with title', () => {
    render(<Statistic title="Active Users" value={100} />);
    
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  test('renders Statistic with prefix and suffix', () => {
    render(<Statistic value={100} prefix="$" suffix="K" />);
    
    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('K')).toBeInTheDocument();
  });

  test('formats value with precision', () => {
    render(<Statistic value={100.1234} precision={2} />);
    
    expect(screen.getByText('100.12')).toBeInTheDocument();
  });

  test('formats value with thousand separator', () => {
    render(<Statistic value={1000} thousandSeparator="," />);
    
    expect(screen.getByText('1,000')).toBeInTheDocument();
  });

  test('uses custom formatter', () => {
    const formatter = jest.fn((value) => `$${value}`);
    render(<Statistic value={100} formatter={formatter} />);
    
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(formatter).toHaveBeenCalledWith(100);
  });

  test('applies custom value style', () => {
    render(
      <Statistic value={100} valueStyle={{ color: 'red' }} />
    );

    const value = screen.getByText('100');
    expect(value).toHaveStyle('color: rgb(255, 0, 0)');
  });

  test('applies custom className', () => {
    const { container } = render(
      <Statistic value={100} className="custom-statistic" />
    );

    const statistic = container.querySelector('.statistic');
    expect(statistic).toHaveClass('custom-statistic');
  });

  test('applies custom style', () => {
    const { container } = render(
      <Statistic value={100} style={{ border: '2px solid blue' }} />
    );

    const statistic = container.querySelector('.statistic');
    expect(statistic).toHaveStyle('border: 2px solid blue');
  });
});
