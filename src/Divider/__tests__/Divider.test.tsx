import React from 'react';
import { render, screen } from '@testing-library/react';
import Divider from '../index';

describe('Divider Component', () => {
  test('renders correctly with default props', () => {
    render(<Divider />);
    const dividerElement = document.querySelector('.divider');
    expect(dividerElement).toBeInTheDocument();
  });

  test('renders correctly with horizontal type', () => {
    render(<Divider type="horizontal" />);
    const dividerElement = document.querySelector('.divider');
    expect(dividerElement).toBeInTheDocument();
  });

  test('renders correctly with vertical type', () => {
    render(<Divider type="vertical" />);
    const dividerElement = document.querySelector('.divider');
    expect(dividerElement).toBeInTheDocument();
  });

  test('renders correctly with different orientations', () => {
    const orientations = ['left', 'center', 'right'];
    orientations.forEach((orientation) => {
      render(
        <Divider orientation={orientation as any}>
          Divider
        </Divider>
      );
      const dividerElement = screen.getByText('Divider');
      expect(dividerElement).toBeInTheDocument();
    });
  });

  test('renders correctly with dashed style', () => {
    render(<Divider dashed />);
    const dividerElement = document.querySelector('.divider');
    expect(dividerElement).toBeInTheDocument();
  });

  test('renders correctly with children', () => {
    render(
      <Divider>
        Divider
      </Divider>
    );
    const dividerElement = screen.getByText('Divider');
    expect(dividerElement).toBeInTheDocument();
  });

  test('renders correctly with custom className', () => {
    render(<Divider className="custom-class" />);
    const dividerElement = document.querySelector('.divider');
    expect(dividerElement).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { borderColor: 'red' };
    render(<Divider style={customStyle} />);
    const dividerElement = document.querySelector('.divider');
    expect(dividerElement).toBeInTheDocument();
  });

  test('renders correctly with all props combined', () => {
    render(
      <Divider type="horizontal" orientation="center" dashed>
        Divider
      </Divider>
    );
    const dividerElement = screen.getByText('Divider');
    expect(dividerElement).toBeInTheDocument();
  });
});
