
import { render, screen } from '@testing-library/react';
import Result from '../index';

describe('Result Component', () => {
  test('renders with default props', () => {
    render(<Result />);
    expect(screen.getByText('ℹ️')).toBeInTheDocument();
  });

  test('renders with different types', () => {
    const types = ['success', 'error', 'info', 'warning'] as const;
    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
      warning: '⚠️',
    };
    types.forEach((type) => {
      render(<Result type={type} />);
      expect(screen.getByText(icons[type])).toBeInTheDocument();
    });
  });

  test('renders with title', () => {
    render(<Result title="Test title" />);
    expect(screen.getByText('Test title')).toBeInTheDocument();
  });

  test('renders with description', () => {
    render(<Result description="Test description" />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  test('renders with extra', () => {
    render(<Result extra="Test extra content" />);
    expect(screen.getByText('Test extra content')).toBeInTheDocument();
  });

  test('renders with actions', () => {
    render(<Result actions={<button>Test button</button>} />);
    expect(screen.getByText('Test button')).toBeInTheDocument();
  });

  test('renders with custom icon', () => {
    render(<Result icon="🎉" />);
    expect(screen.getByText('🎉')).toBeInTheDocument();
  });

  test('renders with custom className and style', () => {
    const { container } = render(
      <Result className="custom-result" style={{ backgroundColor: '#f0f0f0' }} />
    );
    const resultElement = container.firstChild;
    expect(resultElement).toHaveClass('custom-result');
    expect(resultElement).toHaveStyle('background-color: #f0f0f0');
  });

  test('renders with all props', () => {
    render(
      <Result
        type="success"
        title="Test title"
        description="Test description"
        extra="Test extra"
        actions={<button>Test button</button>}
      />
    );
    expect(screen.getByText('✅')).toBeInTheDocument();
    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Test extra')).toBeInTheDocument();
    expect(screen.getByText('Test button')).toBeInTheDocument();
  });
});