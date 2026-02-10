import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Checkbox from '../index';

describe('Checkbox Component', () => {
  test('renders correctly with default props', () => {
    render(<Checkbox label="Checkbox" />);
    const checkboxElement = screen.getByText('Checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('renders correctly with different sizes', () => {
    const sizes = ['small', 'default', 'large'];
    sizes.forEach((size) => {
      render(<Checkbox label="Checkbox" size={size as any} />);
      const checkboxElement = screen.getByText('Checkbox');
      expect(checkboxElement).toBeInTheDocument();
    });
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
    expect(checkboxElement.closest('label')).toHaveStyle('color: rgb(255, 0, 0)');
    expect(checkboxElement.closest('label')).toHaveStyle('font-size: 16px');
  });
});

describe('Checkbox.Group Component', () => {
  test('renders correctly with default props', () => {
    render(
      <Checkbox.Group>
        <Checkbox label="Option 1" value="1" />
        <Checkbox label="Option 2" value="2" />
      </Checkbox.Group>
    );
    const option1Element = screen.getByText('Option 1');
    const option2Element = screen.getByText('Option 2');
    expect(option1Element).toBeInTheDocument();
    expect(option2Element).toBeInTheDocument();
  });

  test('renders correctly with different sizes', () => {
    const sizes = ['small', 'default', 'large'];
    sizes.forEach((size) => {
      render(
        <Checkbox.Group size={size as any}>
          <Checkbox label="Option 1" value="1" />
        </Checkbox.Group>
      );
      const option1Element = screen.getByText('Option 1');
      expect(option1Element).toBeInTheDocument();
    });
  });

  test('renders correctly when disabled', () => {
    render(
      <Checkbox.Group disabled>
        <Checkbox label="Option 1" value="1" />
      </Checkbox.Group>
    );
    const option1Element = screen.getByText('Option 1');
    expect(option1Element).toBeInTheDocument();
  });

  test('calls onChange handler when option is clicked', () => {
    const onChange = jest.fn();
    render(
      <Checkbox.Group onChange={onChange}>
        <Checkbox label="Option 1" value="1" />
      </Checkbox.Group>
    );
    const option1Element = screen.getByText('Option 1');
    fireEvent.click(option1Element);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
