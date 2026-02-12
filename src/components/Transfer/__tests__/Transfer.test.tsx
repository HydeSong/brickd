import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Transfer from '../index';

describe('Transfer Component', () => {
  const data = [
    { key: '1', label: 'Item 1' },
    { key: '2', label: 'Item 2' },
    { key: '3', label: 'Item 3' },
    { key: '4', label: 'Item 4' },
  ];

  it('should render correctly', () => {
    render(<Transfer dataSource={data} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.getByText('Item 4')).toBeInTheDocument();
  });

  it('should handle item transfer', async () => {
    const onChange = jest.fn();
    render(<Transfer dataSource={data} onChange={onChange} />);

    // Select an item by clicking checkbox
    const checkboxes = screen.getAllByRole('checkbox');
    const item1Checkbox = checkboxes[0];
    fireEvent.click(item1Checkbox);

    // Click transfer button (⇒)
    const transferButton = screen.getByRole('button', { name: '⇒' });
    fireEvent.click(transferButton);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('should support search', async () => {
    render(<Transfer dataSource={data} />);

    const searchInputs = screen.getAllByPlaceholderText('搜索');
    const searchInput = searchInputs[0];
    fireEvent.change(searchInput, { target: { value: 'Item 1' } });

    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });
  });

  it('should support different titles', () => {
    const { container } = render(
      <Transfer dataSource={data} titles={['Source', 'Target']} />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
