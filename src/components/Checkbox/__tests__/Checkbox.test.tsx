import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '../index';

describe('Checkbox Component', () => {
  test('renders correctly with default props', () => {
    render(<Checkbox label="Checkbox" />);
    const checkboxElement = screen.getByText('Checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('renders correctly with small size', () => {
    render(<Checkbox label="Checkbox" size="small" />);
    const checkboxElement = screen.getByText('Checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('renders correctly with default size', () => {
    render(<Checkbox label="Checkbox" size="default" />);
    const checkboxElement = screen.getByText('Checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('renders correctly with large size', () => {
    render(<Checkbox label="Checkbox" size="large" />);
    const checkboxElement = screen.getByText('Checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('renders correctly when disabled', () => {
    render(<Checkbox label="Checkbox" disabled />);
    const checkboxElement = screen.getByText('Checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('renders correctly when checked', () => {
    render(<Checkbox label="Checkbox" checked />);
    const checkboxElement = screen.getByText('Checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('calls onChange handler when clicked', () => {
    const onChange = jest.fn();
    render(<Checkbox label="Checkbox" onChange={onChange} />);
    const checkboxElement = screen.getByText('Checkbox');
    fireEvent.click(checkboxElement);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('calls onCheck handler when clicked', () => {
    const onCheck = jest.fn();
    render(<Checkbox label="Checkbox" onCheck={onCheck} />);
    const checkboxElement = screen.getByText('Checkbox');
    fireEvent.click(checkboxElement);
    expect(onCheck).toHaveBeenCalledTimes(1);
  });

  test('renders correctly with custom className', () => {
    render(<Checkbox label="Checkbox" className="custom-class" />);
    const checkboxElement = screen.getByText('Checkbox');
    expect(checkboxElement.closest('label')).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { color: 'red', fontSize: '16px' };
    render(<Checkbox label="Checkbox" style={customStyle} />);
    const checkboxElement = screen.getByText('Checkbox');
    expect(checkboxElement.closest('label')).toHaveStyle(
      'color: rgb(255, 0, 0)',
    );
    expect(checkboxElement.closest('label')).toHaveStyle('font-size: 16px');
  });
});
