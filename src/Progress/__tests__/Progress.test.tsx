
import { render, screen } from '@testing-library/react';
import Progress from '../index';

describe('Progress Component', () => {
  test('renders with default props', () => {
    render(<Progress percent={50} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('renders with line type', () => {
    render(<Progress type="line" percent={50} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('renders with circle type', () => {
    render(<Progress type="circle" percent={50} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('renders with success status', () => {
    render(<Progress percent={50} status="success" />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('renders with active status', () => {
    render(<Progress percent={50} status="active" />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('renders with exception status', () => {
    render(<Progress percent={50} status="exception" />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('renders with different strokeWidth', () => {
    render(<Progress percent={50} strokeWidth={4} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('renders with showInfo={false}', () => {
    render(<Progress percent={50} showInfo={false} />);
    expect(screen.queryByText('50%')).not.toBeInTheDocument();
  });

  test('renders with custom format', () => {
    const format = (percent: number) => `${percent}% complete`;
    render(<Progress percent={50} format={format} />);
    expect(screen.getByText('50% complete')).toBeInTheDocument();
  });

  test('renders with custom strokeColor', () => {
    render(<Progress percent={50} strokeColor="#ff0000" />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('renders with custom trailColor', () => {
    render(<Progress percent={50} trailColor="#e8e8e8" />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('renders with custom className and style', () => {
    const { container } = render(
      <Progress
        percent={50}
        className="custom-progress"
        style={{ width: '300px' }}
      />
    );
    const progressElement = container.firstChild;
    expect(progressElement).toHaveClass('custom-progress');
    expect(progressElement).toHaveStyle('width: 300px');
  });

  test('clamps percent to 0 when negative', () => {
    render(<Progress percent={-10} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  test('clamps percent to 100 when over 100', () => {
    render(<Progress percent={110} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  test('renders with 0 percent', () => {
    render(<Progress percent={0} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  test('renders with 100 percent', () => {
    render(<Progress percent={100} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
});