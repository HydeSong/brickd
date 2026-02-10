import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Radio from '../index';

describe('Radio Component', () => {
  test('renders correctly with default props', () => {
    render(<Radio label="Radio" />);
    const radioElement = screen.getByText('Radio');
    expect(radioElement).toBeInTheDocument();
  });

  test('renders correctly with different sizes', () => {
    const sizes = ['small', 'default', 'large'];
    sizes.forEach((size) => {
      render(<Radio label="Radio" size={size as any} />);
      const radioElement = screen.getByText('Radio');
      expect(radioElement).toBeInTheDocument();
    });
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
});

describe('Radio.Group Component', () => {
  test('renders correctly with default props', () => {
    render(
      <Radio.Group>
        <Radio label="Option 1" value="1" />
        <Radio label="Option 2" value="2" />
      </Radio.Group>
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
        <Radio.Group size={size as any}>
          <Radio label="Option 1" value="1" />
        </Radio.Group>
      );
      const option1Element = screen.getByText('Option 1');
      expect(option1Element).toBeInTheDocument();
    });
  });

  test('renders correctly when disabled', () => {
    render(
      <Radio.Group disabled>
        <Radio label="Option 1" value="1" />
      </Radio.Group>
    );
    const option1Element = screen.getByText('Option 1');
    expect(option1Element).toBeInTheDocument();
  });

  test('calls onChange handler when option is clicked', () => {
    const onChange = jest.fn();
    render(
      <Radio.Group onChange={onChange}>
        <Radio label="Option 1" value="1" />
      </Radio.Group>
    );
    const option1Element = screen.getByText('Option 1');
    fireEvent.click(option1Element);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('renders correctly with options prop', () => {
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    render(<Radio.Group options={options} />);
    const option1Element = screen.getByText('Option 1');
    const option2Element = screen.getByText('Option 2');
    expect(option1Element).toBeInTheDocument();
    expect(option2Element).toBeInTheDocument();
  });
});
