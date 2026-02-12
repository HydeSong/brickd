import { fireEvent, render, screen } from '@testing-library/react';
import Alert from '../index';

describe('Alert Component', () => {
  test('renders with default props', () => {
    render(<Alert message="Test alert" />);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
  });

  test('renders with different types', () => {
    const types = ['info', 'success', 'warning', 'error'] as const;
    types.forEach((type) => {
      render(<Alert type={type} message={`${type} alert`} />);
      expect(screen.getByText(`${type} alert`)).toBeInTheDocument();
    });
  });

  test('renders with description', () => {
    render(<Alert message="Test alert" description="Test description" />);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  test('renders with closable prop', () => {
    render(<Alert message="Test alert" closable />);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  test('renders with non-closable prop', () => {
    render(<Alert message="Test alert" closable={false} />);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Close' }),
    ).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<Alert message="Test alert" closable onClose={handleClose} />);

    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('hides when close button is clicked', () => {
    render(<Alert message="Test alert" closable />);

    const alertElement = screen.getByText('Test alert').closest('.alert');
    expect(alertElement).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    expect(alertElement).not.toBeInTheDocument();
  });

  test('renders with custom className and style', () => {
    const { container } = render(
      <Alert
        message="Test alert"
        className="custom-alert"
        style={{ width: '300px', backgroundColor: 'lightblue' }}
      />,
    );

    const alertElement = container.firstChild;
    expect(alertElement).toHaveClass('custom-alert');
    expect(alertElement).toHaveStyle('width: 300px');
  });
});
