import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AutoComplete from '../index';

describe('AutoComplete Component', () => {
  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  test('renders AutoComplete component', () => {
    render(<AutoComplete options={options} />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('renders AutoComplete with placeholder', () => {
    render(<AutoComplete options={options} placeholder="Select a fruit" />);

    const input = screen.getByPlaceholderText('Select a fruit');
    expect(input).toBeInTheDocument();
  });

  test('renders AutoComplete with default value', () => {
    render(<AutoComplete options={options} defaultValue="Apple" />);

    const input = screen.getByDisplayValue('Apple');
    expect(input).toBeInTheDocument();
  });

  test('renders AutoComplete with controlled value', () => {
    render(<AutoComplete options={options} value="Banana" />);

    const input = screen.getByDisplayValue('Banana');
    expect(input).toBeInTheDocument();
  });

  test('filters options based on input', async () => {
    render(<AutoComplete options={options} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'a' } });

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.getByText('Banana')).toBeInTheDocument();
      expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
    });
  });

  test('selects option from dropdown', async () => {
    const onSelect = jest.fn();
    render(<AutoComplete options={options} onSelect={onSelect} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'a' } });

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Apple'));

    expect(onSelect).toHaveBeenCalledWith('Apple');
    expect(screen.getByDisplayValue('Apple')).toBeInTheDocument();
  });

  test('handles keyboard navigation', async () => {
    render(<AutoComplete options={options} />);

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });

    // 验证输入框仍然存在
    expect(input).toBeInTheDocument();
  });

  test('renders AutoComplete in loading state', () => {
    render(<AutoComplete options={options} loading />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'a' } });

    expect(screen.getByText('加载中...')).toBeInTheDocument();
  });

  test('renders AutoComplete with empty state', () => {
    render(<AutoComplete options={options} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(screen.getByText('无匹配选项')).toBeInTheDocument();
  });

  test('renders AutoComplete with different sizes', () => {
    render(
      <div>
        <AutoComplete options={options} size="small" />
        <AutoComplete options={options} size="default" />
        <AutoComplete options={options} size="large" />
      </div>,
    );

    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBe(3);
  });

  test('renders disabled AutoComplete', () => {
    render(<AutoComplete options={options} disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  test('renders readOnly AutoComplete', () => {
    render(<AutoComplete options={options} readOnly />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readOnly');
  });

  test('renders AutoComplete with error state', () => {
    render(<AutoComplete options={options} error />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('calls onChange callback', () => {
    const onChange = jest.fn();
    render(<AutoComplete options={options} onChange={onChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Apple' } });

    expect(onChange).toHaveBeenCalledWith('Apple');
  });

  test('calls onSearch callback', () => {
    const onSearch = jest.fn();
    render(<AutoComplete options={options} onSearch={onSearch} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Apple' } });

    expect(onSearch).toHaveBeenCalledWith('Apple');
  });
});
