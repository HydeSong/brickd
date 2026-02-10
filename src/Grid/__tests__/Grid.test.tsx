import React from 'react';
import { render, screen } from '@testing-library/react';
import { Row, Col } from '../index';

describe('Row Component', () => {
  test('renders correctly with default props', () => {
    render(
      <Row>
        <Col span={12}>Col 1</Col>
        <Col span={12}>Col 2</Col>
      </Row>
    );
    const col1Element = screen.getByText('Col 1');
    const col2Element = screen.getByText('Col 2');
    expect(col1Element).toBeInTheDocument();
    expect(col2Element).toBeInTheDocument();
  });

  test('renders correctly with different gutter values', () => {
    const gutterValues = [0, 8, 16, [16, 8]];
    gutterValues.forEach((gutter) => {
      render(
        <Row gutter={gutter as any}>
          <Col span={12}>Col 1</Col>
        </Row>
      );
      const col1Element = screen.getByText('Col 1');
      expect(col1Element).toBeInTheDocument();
    });
  });

  test('renders correctly with different justify values', () => {
    const justifyValues = ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'];
    justifyValues.forEach((justify) => {
      render(
        <Row justify={justify as any}>
          <Col span={8}>Col 1</Col>
        </Row>
      );
      const col1Element = screen.getByText('Col 1');
      expect(col1Element).toBeInTheDocument();
    });
  });

  test('renders correctly with different align values', () => {
    const alignValues = ['top', 'middle', 'bottom'];
    alignValues.forEach((align) => {
      render(
        <Row align={align as any}>
          <Col span={8}>Col 1</Col>
        </Row>
      );
      const col1Element = screen.getByText('Col 1');
      expect(col1Element).toBeInTheDocument();
    });
  });

  test('renders correctly with custom className', () => {
    render(
      <Row className="custom-class">
        <Col span={8}>Col 1</Col>
      </Row>
    );
    const rowElement = screen.getByText('Col 1').closest('div');
    expect(rowElement).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(
      <Row style={customStyle}>
        <Col span={8}>Col 1</Col>
      </Row>
    );
    const col1Element = screen.getByText('Col 1');
    expect(col1Element).toBeInTheDocument();
  });
});

describe('Col Component', () => {
  test('renders correctly with default props', () => {
    render(
      <Row>
        <Col>Col 1</Col>
      </Row>
    );
    const col1Element = screen.getByText('Col 1');
    expect(col1Element).toBeInTheDocument();
  });

  test('renders correctly with span property', () => {
    render(
      <Row>
        <Col span={6}>Col 1</Col>
        <Col span={6}>Col 2</Col>
        <Col span={6}>Col 3</Col>
        <Col span={6}>Col 4</Col>
      </Row>
    );
    const col1Element = screen.getByText('Col 1');
    const col2Element = screen.getByText('Col 2');
    const col3Element = screen.getByText('Col 3');
    const col4Element = screen.getByText('Col 4');
    expect(col1Element).toBeInTheDocument();
    expect(col2Element).toBeInTheDocument();
    expect(col3Element).toBeInTheDocument();
    expect(col4Element).toBeInTheDocument();
  });

  test('renders correctly with offset property', () => {
    render(
      <Row>
        <Col span={6}>Col 1</Col>
        <Col span={6} offset={6}>Col 2</Col>
      </Row>
    );
    const col1Element = screen.getByText('Col 1');
    const col2Element = screen.getByText('Col 2');
    expect(col1Element).toBeInTheDocument();
    expect(col2Element).toBeInTheDocument();
  });

  test('renders correctly with push and pull properties', () => {
    render(
      <Row>
        <Col span={6} push={6}>Col 1</Col>
        <Col span={6} pull={6}>Col 2</Col>
      </Row>
    );
    const col1Element = screen.getByText('Col 1');
    const col2Element = screen.getByText('Col 2');
    expect(col1Element).toBeInTheDocument();
    expect(col2Element).toBeInTheDocument();
  });

  test('renders correctly with responsive props', () => {
    render(
      <Row>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>Col 1</Col>
      </Row>
    );
    const col1Element = screen.getByText('Col 1');
    expect(col1Element).toBeInTheDocument();
  });

  test('renders correctly with responsive object props', () => {
    render(
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12, offset: 6 }}>
          Col 1
        </Col>
      </Row>
    );
    const col1Element = screen.getByText('Col 1');
    expect(col1Element).toBeInTheDocument();
  });

  test('renders correctly with custom className', () => {
    render(
      <Row>
        <Col span={8} className="custom-class">Col 1</Col>
      </Row>
    );
    const colElement = screen.getByText('Col 1');
    expect(colElement.closest('div')).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(
      <Row>
        <Col span={8} style={customStyle}>Col 1</Col>
      </Row>
    );
    const col1Element = screen.getByText('Col 1');
    expect(col1Element).toBeInTheDocument();
  });
});
