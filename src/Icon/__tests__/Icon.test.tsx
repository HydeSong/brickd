import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '../index';

describe('Icon Component', () => {
  test('renders correctly with required type prop', () => {
    render(<Icon type="home" />);
    const iconElement = document.querySelector('.icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('renders correctly with different sizes', () => {
    const sizes = ['small', 'middle', 'large', 32];
    sizes.forEach((size) => {
      render(<Icon type="home" size={size as any} />);
      const iconElement = document.querySelector('.icon');
      expect(iconElement).toBeInTheDocument();
    });
  });

  test('renders correctly with different colors', () => {
    const colors = ['red', '#000000', 'rgb(0, 255, 0)'];
    colors.forEach((color) => {
      render(<Icon type="home" color={color} />);
      const iconElement = document.querySelector('.icon');
      expect(iconElement).toBeInTheDocument();
    });
  });

  test('renders correctly with different rotate values', () => {
    const rotateValues = [0, 45, 90, 180];
    rotateValues.forEach((rotate) => {
      render(<Icon type="home" rotate={rotate} />);
      const iconElement = document.querySelector('.icon');
      expect(iconElement).toBeInTheDocument();
    });
  });

  test('renders correctly with spin prop', () => {
    render(<Icon type="home" spin />);
    const iconElement = document.querySelector('.icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('renders correctly with custom className', () => {
    render(<Icon type="home" className="custom-class" />);
    const iconElement = document.querySelector('.icon');
    expect(iconElement).toHaveClass('custom-class');
  });

  test('renders correctly with non-existent type', () => {
    render(<Icon type="non-existent" />);
    const iconElement = document.querySelector('.icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('renders correctly with all props combined', () => {
    render(<Icon type="home" size="large" color="blue" rotate={45} spin className="custom-class" />);
    const iconElement = document.querySelector('.icon');
    expect(iconElement).toBeInTheDocument();
  });
});
