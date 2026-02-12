import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Pagination from '../index';

describe('Pagination Component', () => {
  it('should render correctly', () => {
    render(<Pagination total={100} pageSize={10} current={1} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should handle page change', async () => {
    const onChange = jest.fn();
    render(<Pagination total={100} current={1} onChange={onChange} />);

    const page2 = screen.getByText('2');
    fireEvent.click(page2);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(2, 10);
    });
  });

  it('should support different page sizes', () => {
    const { container } = render(
      <Pagination total={100} pageSize={20} current={1} />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should support basic rendering', () => {
    const { container } = render(<Pagination total={100} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
