import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from '../index';

const BreadcrumbItem = Breadcrumb.Item;

describe('Breadcrumb Component', () => {
  test('renders Breadcrumb component with items', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/category">Category</BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
      </Breadcrumb>
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Item')).toBeInTheDocument();
  });

  test('renders Breadcrumb with custom separator', () => {
    render(
      <Breadcrumb separator=">">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
      </Breadcrumb>
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Item')).toBeInTheDocument();
  });

  test('renders Breadcrumb with custom className', () => {
    render(
      <Breadcrumb className="custom-breadcrumb">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
      </Breadcrumb>
    );
    
    const breadcrumbElement = screen.getByText('Home').closest('nav');
    expect(breadcrumbElement).toHaveClass('custom-breadcrumb');
  });

  test('renders Breadcrumb with custom style', () => {
    const customStyle = { backgroundColor: 'red', color: 'white' };
    render(
      <Breadcrumb style={customStyle}>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
      </Breadcrumb>
    );
    
    const breadcrumbElement = screen.getByText('Home').closest('nav');
    expect(breadcrumbElement).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(breadcrumbElement).toHaveStyle('color: rgb(255, 255, 255)');
  });

  test('renders Breadcrumb.Item with href as link', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
      </Breadcrumb>
    );
    
    const link = screen.getByRole('link', { name: 'Home' });
    expect(link).toHaveAttribute('href', '/');
  });

  test('renders Breadcrumb.Item without href as active', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>Active Item</BreadcrumbItem>
      </Breadcrumb>
    );
    
    const item = screen.getByText('Active Item').closest('li');
    expect(item).toHaveClass('active');
  });

  test('renders Breadcrumb.Item with custom className', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem className="custom-item">Home</BreadcrumbItem>
      </Breadcrumb>
    );
    
    const item = screen.getByText('Home').closest('li');
    expect(item).toHaveClass('custom-item');
  });
});
