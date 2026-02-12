import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../index';

describe('Input Component', () => {
  test('renders correctly with default props', () => {
    render(<Input placeholder="Input" />);
    const inputElement = screen.getByPlaceholderText('Input');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders correctly with small size', () => {
    render(<Input placeholder="Input" size="small" />);
    const inputElement = screen.getByPlaceholderText('Input');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders correctly with default size', () => {
    render(<Input placeholder="Input" size="default" />);
    const inputElement = screen.getByPlaceholderText('Input');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders correctly with large size', () => {
    render(<Input placeholder="Input" size="large" />);
    const inputElement = screen.getByPlaceholderText('Input');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders correctly when disabled', () => {
    render(<Input placeholder="Input" disabled />);
    const inputElement = screen.getByPlaceholderText('Input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeDisabled();
  });

  test('renders correctly when readOnly', () => {
    render(<Input placeholder="Input" readOnly />);
    const inputElement = screen.getByPlaceholderText('Input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('readonly');
  });

  test('renders correctly when error', () => {
    render(<Input placeholder="Input" error />);
    const inputElement = screen.getByPlaceholderText('Input');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders correctly with prefix', () => {
    render(<Input placeholder="Input" prefix="$" />);
    const inputElement = screen.getByPlaceholderText('Input');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders correctly with suffix', () => {
    render(<Input placeholder="Input" suffix="%" />);
    const inputElement = screen.getByPlaceholderText('Input');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange handler when input changes', () => {
    const onChange = jest.fn();
    render(<Input placeholder="Input" onChange={onChange} />);
    const inputElement = screen.getByPlaceholderText('Input');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('renders correctly with custom className', () => {
    render(<Input placeholder="Input" className="custom-class" />);
    const inputContainer = document.querySelector('.input');
    expect(inputContainer).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { width: '200px', borderColor: 'red' };
    render(<Input placeholder="Input" style={customStyle} />);
    const inputContainer = document.querySelector('.input');
    expect(inputContainer).toHaveStyle('width: 200px');
  });

  test('renders correctly with value prop', () => {
    render(<Input placeholder="Input" value="test" readOnly />);
    const inputElement = screen.getByDisplayValue('test');
    expect(inputElement).toBeInTheDocument();
  });
});
