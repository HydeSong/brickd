import React from 'react';
import { render, screen } from '@testing-library/react';
import Spin from '../index';

describe('Spin Component', () => {
  test('renders with default props', () => {
    render(<Spin />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with spinning={false}', () => {
    const { container } = render(<Spin spinning={false} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders with spinning={false} and children', () => {
    render(<Spin spinning={false}>Test content</Spin>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders with small size', () => {
    render(<Spin size="small" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with default size', () => {
    render(<Spin size="default" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with large size', () => {
    render(<Spin size="large" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with tip', () => {
    render(<Spin tip="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders with custom color', () => {
    render(<Spin color="#ff0000" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders with custom indicator', () => {
    const indicator = <div>⏳</div>;
    render(<Spin indicator={indicator} />);
    expect(screen.getByText('⏳')).toBeInTheDocument();
  });

  test('renders with children', () => {
    render(<Spin>Test content</Spin>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders with custom className and style', () => {
    const { container } = render(
      <Spin className="custom-spin" style={{ color: '#ff0000' }} />
    );
    const spinElement = container.firstChild;
    expect(spinElement).toHaveClass('custom-spin');
    expect(spinElement).toHaveStyle('color: #ff0000');
  });

  test('renders with wrapperClassName and wrapperStyle', () => {
    const { container } = render(
      <Spin wrapperClassName="custom-wrapper" wrapperStyle={{ border: '1px solid #e8e8e8' }}>
        Test content
      </Spin>
    );
    const wrapperElement = container.firstChild;
    expect(wrapperElement).toHaveClass('custom-wrapper');
    expect(wrapperElement).toHaveStyle('border: 1px solid #e8e8e8');
  });
});