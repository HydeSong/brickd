import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../index';

describe('Table Component', () => {
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address' },
  ];

  const dataSource = [
    { key: '1', name: 'John', age: 32, address: 'New York' },
    { key: '2', name: 'Jane', age: 28, address: 'London' },
    { key: '3', name: 'Bob', age: 45, address: 'Paris' },
  ];

  test('renders Table component', () => {
    render(<Table columns={columns} dataSource={dataSource} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('32')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
  });

  test('renders Table with loading state', () => {
    render(<Table columns={columns} dataSource={dataSource} loading />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders Table with empty state', () => {
    render(<Table columns={columns} dataSource={[]} />);
    
    expect(screen.getByText('No data')).toBeInTheDocument();
  });

  test('renders Table with custom render function', () => {
    const customColumns = [
      { title: 'Name', dataIndex: 'name' },
      { 
        title: 'Age', 
        dataIndex: 'age',
        render: (age: number) => <span>{age} years old</span>
      },
      { title: 'Address', dataIndex: 'address' },
    ];
    
    render(<Table columns={customColumns} dataSource={dataSource} />);
    
    expect(screen.getByText('32 years old')).toBeInTheDocument();
  });

  test('renders Table with pagination', () => {
    render(<Table columns={columns} dataSource={dataSource} pagination />);
    
    expect(screen.getByText('1-10 of 100')).toBeInTheDocument();
    expect(screen.getByText('Prev')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('renders Table with different sizes', () => {
    // Test small size
    const { container: smallContainer } = render(<Table columns={columns} dataSource={dataSource} size="small" />);
    const smallTable = smallContainer.querySelector('table');
    expect(smallTable).toHaveClass('small');

    // Test large size
    const { container: largeContainer } = render(<Table columns={columns} dataSource={dataSource} size="large" />);
    const largeTable = largeContainer.querySelector('table');
    expect(largeTable).toHaveClass('large');
  });

  test('renders Table with bordered style', () => {
    const { container } = render(<Table columns={columns} dataSource={dataSource} bordered />);
    const table = container.querySelector('table');
    expect(table).toHaveClass('bordered');
  });

  test('renders Table with striped style', () => {
    const { container } = render(<Table columns={columns} dataSource={dataSource} striped />);
    const table = container.querySelector('table');
    expect(table).toHaveClass('striped');
  });

  test('renders Table with hoverable style', () => {
    const { container } = render(<Table columns={columns} dataSource={dataSource} hoverable />);
    const table = container.querySelector('table');
    expect(table).toHaveClass('hoverable');
  });
});
