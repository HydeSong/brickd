import React from 'react';
import { render, screen } from '@testing-library/react';
import Masonry from '../index';

describe('Masonry Component', () => {
  it('should render correctly', () => {
    render(
      <Masonry>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Masonry>
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('should support column count', () => {
    const { container } = render(
      <Masonry columns={3}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Masonry>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should support gap spacing', () => {
    const { container } = render(
      <Masonry gap={16}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Masonry>
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});