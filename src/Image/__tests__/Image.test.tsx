import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../index';

describe('Image Component', () => {
  test('renders image with src and alt', () => {
    render(
      <Image 
        src="https://via.placeholder.com/300x200" 
        alt="Test Image"
      />
    );
    const imgElement = screen.getByAltText('Test Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/300x200');
  });

  test('applies custom width and height', () => {
    const { container } = render(
      <Image 
        src="https://via.placeholder.com/300x200" 
        alt="Test Image"
        width={200}
        height={150}
      />
    );
    const imgElement = container.querySelector('img');
    expect(imgElement).toHaveStyle('width: 200px');
    expect(imgElement).toHaveStyle('height: 150px');
  });

  test('applies object fit property', () => {
    const { container } = render(
      <Image 
        src="https://via.placeholder.com/300x200" 
        alt="Test Image"
        fit="cover"
      />
    );
    const imgElement = container.querySelector('img');
    expect(imgElement).toHaveStyle('object-fit: cover');
  });

  test('applies lazy loading', () => {
    const { container } = render(
      <Image 
        src="https://via.placeholder.com/300x200" 
        alt="Test Image"
        lazy
      />
    );
    const imgElement = container.querySelector('img');
    expect(imgElement).toHaveAttribute('loading', 'lazy');
  });

  test('renders placeholder while loading', () => {
    const placeholder = <div data-testid="placeholder">Loading...</div>;
    render(
      <Image 
        src="https://via.placeholder.com/300x200" 
        alt="Test Image"
        placeholder={placeholder}
      />
    );
    expect(screen.getByTestId('placeholder')).toBeInTheDocument();
  });

  test('renders fallback on error', () => {
    const fallback = <div data-testid="fallback">Error</div>;
    render(
      <Image 
        src="invalid-url" 
        alt="Test Image"
        fallback={fallback}
      />
    );
    expect(screen.getByTestId('fallback')).toBeInTheDocument();
  });

  test('applies custom className and style', () => {
    const { container } = render(
      <Image 
        src="https://via.placeholder.com/300x200" 
        alt="Test Image"
        className="custom-image"
        style={{ border: '2px solid red' }}
      />
    );
    const imgElement = container.querySelector('img');
    expect(imgElement).toHaveClass('custom-image');
    expect(imgElement).toHaveStyle('border: 2px solid red');
  });
});