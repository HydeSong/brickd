import { fireEvent, render, screen } from '@testing-library/react';
import Switch from '../index';

describe('Switch Component', () => {
  test('renders correctly with default props', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeInTheDocument();
  });

  test('renders correctly with label', () => {
    render(<Switch label="Switch" />);
    const switchElement = screen.getByText('Switch');
    expect(switchElement).toBeInTheDocument();
  });

  test('renders correctly with small size', () => {
    render(<Switch label="Switch" size="small" />);
    const switchElement = screen.getByText('Switch');
    expect(switchElement).toBeInTheDocument();
  });

  test('renders correctly with default size', () => {
    render(<Switch label="Switch" size="default" />);
    const switchElement = screen.getByText('Switch');
    expect(switchElement).toBeInTheDocument();
  });

  test('renders correctly with large size', () => {
    render(<Switch label="Switch" size="large" />);
    const switchElement = screen.getByText('Switch');
    expect(switchElement).toBeInTheDocument();
  });

  test('renders correctly when disabled', () => {
    render(<Switch label="Switch" disabled />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toBeDisabled();
  });

  test('renders correctly when checked', () => {
    render(<Switch label="Switch" checked />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toBeChecked();
  });

  test('calls onChange handler when clicked', () => {
    const onChange = jest.fn();
    render(<Switch label="Switch" onChange={onChange} />);
    const switchElement = screen.getByRole('checkbox');
    fireEvent.click(switchElement);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('calls onCheck handler when clicked', () => {
    const onCheck = jest.fn();
    render(<Switch label="Switch" onCheck={onCheck} />);
    const switchElement = screen.getByRole('checkbox');
    fireEvent.click(switchElement);
    expect(onCheck).toHaveBeenCalledTimes(1);
  });

  test('renders correctly with custom className', () => {
    render(<Switch label="Switch" className="custom-class" />);
    const switchElement = screen.getByText('Switch');
    expect(switchElement.closest('label')).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { color: 'red', fontSize: '16px' };
    render(<Switch label="Switch" style={customStyle} />);
    const switchElement = screen.getByText('Switch');
    expect(switchElement.closest('label')).toHaveStyle('color: rgb(255, 0, 0)');
    expect(switchElement.closest('label')).toHaveStyle('font-size: 16px');
  });
});
