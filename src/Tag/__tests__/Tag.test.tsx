
import { render, screen, fireEvent } from '@testing-library/react';
import Tag from '../index';

describe('Tag Component', () => {
  test('renders basic tag', () => {
    render(<Tag>Test Tag</Tag>);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  test('renders tag with different sizes', () => {
    render(
      <>
        <Tag size="small">Small Tag</Tag>
        <Tag size="default">Default Tag</Tag>
        <Tag size="large">Large Tag</Tag>
      </>
    );
    expect(screen.getByText('Small Tag')).toBeInTheDocument();
    expect(screen.getByText('Default Tag')).toBeInTheDocument();
    expect(screen.getByText('Large Tag')).toBeInTheDocument();
  });

  test('renders tag with different variants', () => {
    render(
      <>
        <Tag variant="filled">Filled Tag</Tag>
        <Tag variant="outlined">Outlined Tag</Tag>
        <Tag variant="light">Light Tag</Tag>
      </>
    );
    expect(screen.getByText('Filled Tag')).toBeInTheDocument();
    expect(screen.getByText('Outlined Tag')).toBeInTheDocument();
    expect(screen.getByText('Light Tag')).toBeInTheDocument();
  });

  test('renders tag with different colors', () => {
    render(
      <>
        <Tag color="red">Red Tag</Tag>
        <Tag color="orange">Orange Tag</Tag>
        <Tag color="green">Green Tag</Tag>
        <Tag color="blue">Blue Tag</Tag>
        <Tag color="purple">Purple Tag</Tag>
      </>
    );
    expect(screen.getByText('Red Tag')).toBeInTheDocument();
    expect(screen.getByText('Orange Tag')).toBeInTheDocument();
    expect(screen.getByText('Green Tag')).toBeInTheDocument();
    expect(screen.getByText('Blue Tag')).toBeInTheDocument();
    expect(screen.getByText('Purple Tag')).toBeInTheDocument();
  });

  test('renders closable tag and handles close event', () => {
    const onCloseMock = jest.fn();
    render(<Tag closable onClose={onCloseMock}>Closable Tag</Tag>);
    const closeButton = screen.getByLabelText('Close');
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('renders disabled tag', () => {
    const onCloseMock = jest.fn();
    const { container } = render(
      <Tag disabled closable onClose={onCloseMock}>Disabled Tag</Tag>
    );
    const tag = container.querySelector('.tag');
    expect(tag).toHaveClass('tag-disabled');
    // Disabled tag should not show close button
    const closeButton = screen.queryByLabelText('Close');
    expect(closeButton).not.toBeInTheDocument();
  });

  test('renders tag with icon', () => {
    const icon = <span data-testid="test-icon">✓</span>;
    render(<Tag icon={icon}>Tag with Icon</Tag>);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    expect(screen.getByText('Tag with Icon')).toBeInTheDocument();
  });

  test('renders tag with custom className and style', () => {
    const customStyle = { margin: '10px', padding: '5px' };
    const { container } = render(
      <Tag className="custom-class" style={customStyle}>Custom Tag</Tag>
    );
    const tag = container.querySelector('.tag');
    expect(tag).toHaveClass('custom-class');
    expect(tag).toHaveStyle('margin: 10px');
    expect(tag).toHaveStyle('padding: 5px');
  });
});