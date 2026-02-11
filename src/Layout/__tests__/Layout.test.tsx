
import { render, screen } from '@testing-library/react';
import Layout from '../index';

describe('Layout Component', () => {
  it('should render correctly', () => {
    render(
      <Layout>
        <div>Header</div>
        <div>Content</div>
        <div>Footer</div>
      </Layout>
    );
    
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('should handle custom className', () => {
    const { container } = render(
      <Layout className="custom-layout">
        <div>Content</div>
      </Layout>
    );
    expect(container.firstChild).toHaveClass('custom-layout');
  });

  it('should handle custom style', () => {
    const { container } = render(
      <Layout style={{ backgroundColor: 'lightgray' }}>
        <div>Content</div>
      </Layout>
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});