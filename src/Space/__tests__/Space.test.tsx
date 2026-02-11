
import { render, screen } from '@testing-library/react';
import Space from '../index';
import Button from '../../Button/index';

describe('Space Component', () => {
  test('renders correctly with default props', () => {
    render(
      <Space>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Space>
    );
    const button1Element = screen.getByText('Button 1');
    const button2Element = screen.getByText('Button 2');
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
  });

  test('renders correctly with horizontal direction', () => {
    render(
      <Space direction="horizontal">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Space>
    );
    const button1Element = screen.getByText('Button 1');
    const button2Element = screen.getByText('Button 2');
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
  });

  test('renders correctly with vertical direction', () => {
    render(
      <Space direction="vertical">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Space>
    );
    const button1Element = screen.getByText('Button 1');
    const button2Element = screen.getByText('Button 2');
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
  });

  test('renders correctly with small size', () => {
    render(
      <Space size="small">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Space>
    );
    const button1Element = screen.getByText('Button 1');
    const button2Element = screen.getByText('Button 2');
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
  });

  test('renders correctly with middle size', () => {
    render(
      <Space size="middle">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Space>
    );
    const button1Element = screen.getByText('Button 1');
    const button2Element = screen.getByText('Button 2');
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
  });

  test('renders correctly with large size', () => {
    render(
      <Space size="large">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Space>
    );
    const button1Element = screen.getByText('Button 1');
    const button2Element = screen.getByText('Button 2');
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
  });

  test('renders correctly with number size', () => {
    render(
      <Space size={20}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Space>
    );
    const button1Element = screen.getByText('Button 1');
    const button2Element = screen.getByText('Button 2');
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
  });

  test('renders correctly with wrap', () => {
    render(
      <Space wrap>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Space>
    );
    const button1Element = screen.getByText('Button 1');
    const button2Element = screen.getByText('Button 2');
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
  });

  test('renders correctly with custom className', () => {
    render(
      <Space className="custom-class">
        <Button>Button 1</Button>
      </Space>
    );
    const spaceElement = screen.getByText('Button 1').closest('div');
    expect(spaceElement).toHaveClass('custom-class');
  });

  test('renders correctly with no children', () => {
    render(<Space />);
    const spaceElement = document.querySelector('.space');
    expect(spaceElement).toBeInTheDocument();
  });
});
