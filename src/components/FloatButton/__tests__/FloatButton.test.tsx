import { fireEvent, render, screen } from '@testing-library/react';
import FloatButton from '../index';

describe('FloatButton Component', () => {
  it('should render correctly', () => {
    render(<FloatButton icon="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should handle click event', () => {
    const onClick = jest.fn();
    render(<FloatButton onClick={onClick} icon="Test" />);

    const button = screen.getByText('Test');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('should support different positions', () => {
    const { container } = render(
      <FloatButton position={{ top: '20px', left: '20px' }} icon="Test" />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should support disabled state', () => {
    render(<FloatButton disabled icon="Test" />);
    const button = screen.getByText('Test');
    expect(button).toBeDisabled();
  });
});
