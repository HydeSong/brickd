import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from '../index';

describe('Avatar Component', () => {
  test('renders correctly with default props', () => {
    render(<Avatar src="https://example.com/avatar.jpg" />);
    const avatarElement = document.querySelector('.avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  test('renders correctly with small size', () => {
    render(<Avatar size="small" src="https://example.com/avatar.jpg" />);
    const avatarElement = document.querySelector('.avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  test('renders correctly with default size', () => {
    render(<Avatar size="default" src="https://example.com/avatar.jpg" />);
    const avatarElement = document.querySelector('.avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  test('renders correctly with large size', () => {
    render(<Avatar size="large" src="https://example.com/avatar.jpg" />);
    const avatarElement = document.querySelector('.avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  test('renders correctly with number size', () => {
    render(<Avatar size={50} src="https://example.com/avatar.jpg" />);
    const avatarElement = document.querySelector('.avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  test('renders correctly with circle shape', () => {
    render(<Avatar shape="circle" src="https://example.com/avatar.jpg" />);
    const avatarElement = document.querySelector('.avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  test('renders correctly with square shape', () => {
    render(<Avatar shape="square" src="https://example.com/avatar.jpg" />);
    const avatarElement = document.querySelector('.avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  test('renders correctly with icon', () => {
    render(<Avatar icon={<span>U</span>} />);
    const avatarElement = document.querySelector('.avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  test('renders correctly with custom className', () => {
    render(<Avatar className="custom-class" src="https://example.com/avatar.jpg" />);
    const avatarElement = document.querySelector('.avatar');
    expect(avatarElement).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<Avatar style={customStyle} src="https://example.com/avatar.jpg" />);
    const avatarElement = document.querySelector('.avatar');
    expect(avatarElement).toBeInTheDocument();
  });
});
