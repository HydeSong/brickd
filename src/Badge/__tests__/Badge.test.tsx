import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../index';
import Button from '../../Button';

describe('Badge Component', () => {
  test('renders correctly with count', () => {
    render(
      <Badge count={5}>
        <Button>Button</Button>
      </Badge>
    );
    const badgeElement = document.querySelector('.badge');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent('5');
  });

  test('renders correctly with zero count and showZero', () => {
    render(
      <Badge count={0} showZero>
        <Button>Button</Button>
      </Badge>
    );
    const badgeElement = document.querySelector('.badge');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent('0');
  });

  test('renders correctly with zero count without showZero', () => {
    render(
      <Badge count={0}>
        <Button>Button</Button>
      </Badge>
    );
    const badgeElement = document.querySelector('.badge');
    expect(badgeElement).toHaveClass('badgeHidden');
  });

  test('renders correctly with dot', () => {
    render(
      <Badge dot>
        <Button>Button</Button>
      </Badge>
    );
    const badgeElement = document.querySelector('.badge');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badgeDot');
  });

  test('renders correctly with maxCount', () => {
    render(
      <Badge count={100} maxCount={99}>
        <Button>Button</Button>
      </Badge>
    );
    const badgeElement = document.querySelector('.badge');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent('99+');
  });

  test('renders correctly with custom color', () => {
    render(
      <Badge count={5} color="#52c41a">
        <Button>Button</Button>
      </Badge>
    );
    const badgeElement = document.querySelector('.badge');
    expect(badgeElement).toBeInTheDocument();
  });

  test('renders correctly without children', () => {
    render(<Badge count={5} />);
    const badgeElement = document.querySelector('.badge');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent('5');
  });

  test('renders correctly with custom className', () => {
    render(
      <Badge count={5} className="custom-class">
        <Button>Button</Button>
      </Badge>
    );
    const badgeElement = document.querySelector('.badge');
    expect(badgeElement).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { fontSize: '14px' };
    render(
      <Badge count={5} style={customStyle}>
        <Button>Button</Button>
      </Badge>
    );
    const badgeElement = document.querySelector('.badge');
    expect(badgeElement).toBeInTheDocument();
  });
});
