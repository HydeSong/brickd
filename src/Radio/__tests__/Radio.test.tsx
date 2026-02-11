import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Radio from '../index';

describe('Radio Component', () => {
  test('renders correctly with default props', () => {
    render(<Radio label="Radio" />);
    const radioElement = screen.getByText('Radio');
    expect(radioElement).toBeInTheDocument();
  });

  test('renders correctly with small size', () => {
    render(<Radio label="Radio" size="small" />);
    const radioElement = screen.getByText('Radio');
    expect(radioElement).toBeInTheDocument();
  });

  test('renders correctly with default size', () => {
    render(<Radio label="Radio" size="default" />);
    const radioElement = screen.getByText('Radio');
    expect(radioElement).toBeInTheDocument();
  });

  test('renders correctly with large size', () => {
    render(<Radio label="Radio" size="large" />);
    const radioElement = screen.getByText('Radio');
    expect(radioElement).toBeInTheDocument();
  });

  test('renders correctly when disabled', () => {
    render(<Radio label="Radio" disabled />);
    const radioElement = screen.getByText('Radio');
    expect(radioElement).toBeInTheDocument();
  });

  test('renders correctly when checked', () => {
    render(<Radio label="Radio" checked />);
    const radioElement = screen.getByText('Radio');
    expect(radioElement).toBeInTheDocument();
  });

  test('calls onChange handler when clicked', () => {
    const onChange = jest.fn();
    render(<Radio label="Radio" onChange={onChange} />);
    const radioElement = screen.getByText('Radio');
    fireEvent.click(radioElement);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('calls onCheck handler when clicked', () => {
    const onCheck = jest.fn();
    render(<Radio label="Radio" onCheck={onCheck} />);
    const radioElement = screen.getByText('Radio');
    fireEvent.click(radioElement);
    expect(onCheck).toHaveBeenCalledTimes(1);
  });

  test('renders correctly with custom className', () => {
    render(<Radio label="Radio" className="custom-class" />);
    const radioElement = screen.getByText('Radio');
    expect(radioElement.closest('label')).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { color: 'red', fontSize: '16px' };
    render(<Radio label="Radio" style={customStyle} />);
    const radioElement = screen.getByText('Radio');
    expect(radioElement.closest('label')).toHaveStyle('color: rgb(255, 0, 0)');
    expect(radioElement.closest('label')).toHaveStyle('font-size: 16px');
  });

  test('renders correctly with value prop', () => {
    render(<Radio label="Radio" value="option1" />);
    const radioElement = screen.getByText('Radio');
    expect(radioElement).toBeInTheDocument();
  });
});
