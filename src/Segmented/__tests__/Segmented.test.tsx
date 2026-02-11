
import { render, screen, fireEvent } from '@testing-library/react';
import Segmented from '../index';

describe('Segmented Component', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  test('renders Segmented component', () => {
    render(<Segmented options={options} />);
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  test('renders Segmented with default value', () => {
    render(<Segmented options={options} defaultValue="2" />);
    
    const option2 = screen.getByText('Option 2').closest('div')?.parentElement;
    expect(option2).toHaveClass('active');
  });

  test('renders Segmented with controlled value', () => {
    render(<Segmented options={options} value="3" />);
    
    const option3 = screen.getByText('Option 3').closest('div')?.parentElement;
    expect(option3).toHaveClass('active');
  });

  test('handles value change', () => {
    const onChange = jest.fn();
    render(<Segmented options={options} onChange={onChange} />);
    
    fireEvent.click(screen.getByText('Option 2'));
    expect(onChange).toHaveBeenCalledWith('2');
  });

  test('handles disabled state', () => {
    render(<Segmented options={options} disabled />);
    
    const segmented = screen.getByText('Option 1').closest('div')?.parentElement?.parentElement;
    expect(segmented).toHaveClass('disabled');
  });

  test('handles disabled option', () => {
    const disabledOptions = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3' },
    ];
    
    render(<Segmented options={disabledOptions} />);
    
    const option2 = screen.getByText('Option 2').closest('div')?.parentElement;
    expect(option2).toHaveClass('itemDisabled');
  });

  test('does not change value when clicking disabled option', () => {
    const onChange = jest.fn();
    const disabledOptions = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3' },
    ];
    
    render(<Segmented options={disabledOptions} onChange={onChange} />);
    
    fireEvent.click(screen.getByText('Option 2'));
    expect(onChange).not.toHaveBeenCalled();
  });
});
