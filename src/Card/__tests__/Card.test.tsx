
import { render, screen } from '@testing-library/react';
import Card from '../index';
import Button from '../../Button';

describe('Card Component', () => {
  test('renders correctly with default props', () => {
    render(<Card title="Card Title">Content</Card>);
    const cardElement = document.querySelector('.card');
    expect(cardElement).toBeInTheDocument();
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('renders correctly with extra content', () => {
    render(
      <Card title="Card Title" extra={<Button type="text">More</Button>}>
        Content
      </Card>
    );
    const cardElement = document.querySelector('.card');
    expect(cardElement).toBeInTheDocument();
    expect(screen.getByText('More')).toBeInTheDocument();
  });

  test('renders correctly with bordered={false}', () => {
    render(<Card title="Card Title" bordered={false}>Content</Card>);
    const cardElement = document.querySelector('.card');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).not.toHaveClass('cardBordered');
  });

  test('renders correctly with hoverable', () => {
    render(<Card title="Card Title" hoverable>Content</Card>);
    const cardElement = document.querySelector('.card');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass('cardHoverable');
  });

  test('renders correctly with custom className', () => {
    render(<Card title="Card Title" className="custom-class">Content</Card>);
    const cardElement = document.querySelector('.card');
    expect(cardElement).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { width: '300px' };
    render(<Card title="Card Title" style={customStyle}>Content</Card>);
    const cardElement = document.querySelector('.card');
    expect(cardElement).toBeInTheDocument();
  });

  test('renders correctly with Card.Header, Card.Body, and Card.Footer', () => {
    render(
      <Card>
        <Card.Header title="Card Title" extra={<Button type="text">More</Button>} />
        <Card.Body>Content</Card.Body>
        <Card.Footer>
          <Button>Cancel</Button>
          <Button type="primary">Submit</Button>
        </Card.Footer>
      </Card>
    );
    const cardElement = document.querySelector('.card');
    const headerElement = document.querySelector('.cardHeader');
    const bodyElement = document.querySelector('.cardBody');
    const footerElement = document.querySelector('.cardFooter');
    
    expect(cardElement).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('renders Card.Header correctly with custom className and style', () => {
    render(
      <Card>
        <Card.Header 
          title="Card Title" 
          className="custom-header"
          style={{ backgroundColor: '#f5f5f5' }}
        />
        <Card.Body>Content</Card.Body>
      </Card>
    );
    const headerElement = document.querySelector('.cardHeader');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('custom-header');
  });

  test('renders Card.Body correctly with custom className and style', () => {
    render(
      <Card>
        <Card.Body 
          className="custom-body"
          style={{ padding: '20px' }}
        >
          Content
        </Card.Body>
      </Card>
    );
    const bodyElement = document.querySelector('.cardBody');
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass('custom-body');
  });

  test('renders Card.Footer correctly with custom className and style', () => {
    render(
      <Card>
        <Card.Body>Content</Card.Body>
        <Card.Footer 
          className="custom-footer"
          style={{ justifyContent: 'flex-start' }}
        >
          <Button>Button</Button>
        </Card.Footer>
      </Card>
    );
    const footerElement = document.querySelector('.cardFooter');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass('custom-footer');
  });
});
