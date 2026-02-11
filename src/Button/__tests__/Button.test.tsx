
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../index';

describe('Button Component', () => {
  test('renders correctly with default props', () => {
    render(<Button>Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');
  });

  test('renders correctly with primary type', () => {
    render(<Button type="primary">Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders correctly with default type', () => {
    render(<Button type="default">Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders correctly with dashed type', () => {
    render(<Button type="dashed">Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders correctly with text type', () => {
    render(<Button type="text">Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders correctly with link type', () => {
    render(<Button type="link">Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders correctly with small size', () => {
    render(<Button size="small">Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders correctly with default size', () => {
    render(<Button size="default">Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders correctly with large size', () => {
    render(<Button size="large">Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders correctly when disabled', () => {
    render(<Button disabled>Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
  });

  test('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);
    const buttonElement = screen.getByText('Button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick handler when disabled', () => {
    const onClick = jest.fn();
    render(<Button disabled onClick={onClick}>Button</Button>);
    const buttonElement = screen.getByText('Button');
    fireEvent.click(buttonElement);
    expect(onClick).not.toHaveBeenCalled();
  });

  test('renders correctly with custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement.closest('button')).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { color: 'red', fontSize: '16px' };
    render(<Button style={customStyle}>Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement.closest('button')).toHaveStyle('color: rgb(255, 0, 0)');
    expect(buttonElement.closest('button')).toHaveStyle('font-size: 16px');
  });
});
