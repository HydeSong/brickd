import { render, screen } from '@testing-library/react';
import Skeleton, {
  SkeletonButton,
  SkeletonCard,
  SkeletonImage,
  SkeletonList,
  SkeletonText,
} from '../index';

describe('Skeleton Component', () => {
  test('renders with default props', () => {
    render(<Skeleton />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with loading={false}', () => {
    const { container } = render(<Skeleton loading={false} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders with loading={false} and children', () => {
    render(<Skeleton loading={false}>Test content</Skeleton>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders with animated={false}', () => {
    render(<Skeleton animated={false} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with text type', () => {
    render(<Skeleton type="text" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with button type', () => {
    render(<Skeleton type="button" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with image type', () => {
    render(<Skeleton type="image" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with card type', () => {
    render(<Skeleton type="card" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with list type', () => {
    render(<Skeleton type="list" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with text-specific props', () => {
    render(<Skeleton type="text" rows={3} width={['100%', '80%', '60%']} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with small button size', () => {
    render(<Skeleton type="button" buttonSize="small" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with default button size', () => {
    render(<Skeleton type="button" buttonSize="default" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with large button size', () => {
    render(<Skeleton type="button" buttonSize="large" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with image-specific props', () => {
    render(<Skeleton type="image" imageShape="circle" imageSize={64} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with custom className and style', () => {
    const { container } = render(
      <Skeleton
        className="custom-skeleton"
        style={{ backgroundColor: '#f0f0f0' }}
      />,
    );
    const skeletonElement = container.firstChild;
    expect(skeletonElement).toHaveClass('custom-skeleton');
    expect(skeletonElement).toHaveStyle('background-color: #f0f0f0');
  });

  // Test subcomponents
  test('renders SkeletonText', () => {
    render(<SkeletonText rows={3} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders SkeletonButton', () => {
    render(<SkeletonButton buttonSize="default" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders SkeletonImage', () => {
    render(<SkeletonImage imageShape="square" imageSize={40} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders SkeletonCard', () => {
    render(<SkeletonCard />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders SkeletonList', () => {
    render(<SkeletonList />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
