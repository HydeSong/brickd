import React from 'react';
import { render, screen } from '@testing-library/react';
import Flex, { FlexItem } from '../index';

describe('Flex Component', () => {
  test('renders correctly with default props', () => {
    render(
      <Flex>
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    const item2Element = screen.getByText('Item 2');
    expect(item1Element).toBeInTheDocument();
    expect(item2Element).toBeInTheDocument();
  });

  test('renders correctly with row direction', () => {
    render(
      <Flex direction="row">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with row-reverse direction', () => {
    render(
      <Flex direction="row-reverse">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with column direction', () => {
    render(
      <Flex direction="column">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with column-reverse direction', () => {
    render(
      <Flex direction="column-reverse">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with flex-start justify', () => {
    render(
      <Flex justify="flex-start">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with center justify', () => {
    render(
      <Flex justify="center">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with flex-end justify', () => {
    render(
      <Flex justify="flex-end">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with space-between justify', () => {
    render(
      <Flex justify="space-between">
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with space-around justify', () => {
    render(
      <Flex justify="space-around">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with space-evenly justify', () => {
    render(
      <Flex justify="space-evenly">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with flex-start align', () => {
    render(
      <Flex align="flex-start">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with center align', () => {
    render(
      <Flex align="center">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with flex-end align', () => {
    render(
      <Flex align="flex-end">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with stretch align', () => {
    render(
      <Flex align="stretch">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with baseline align', () => {
    render(
      <Flex align="baseline">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with nowrap wrap', () => {
    render(
      <Flex wrap="nowrap">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with wrap wrap', () => {
    render(
      <Flex wrap="wrap">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with wrap-reverse wrap', () => {
    render(
      <Flex wrap="wrap-reverse">
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with gap', () => {
    render(
      <Flex gap={16}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    const item2Element = screen.getByText('Item 2');
    expect(item1Element).toBeInTheDocument();
    expect(item2Element).toBeInTheDocument();
  });

  test('renders correctly with custom className', () => {
    render(
      <Flex className="custom-class">
        <div>Item 1</div>
      </Flex>
    );
    const flexElement = document.querySelector('.flex');
    expect(flexElement).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(
      <Flex style={customStyle}>
        <div>Item 1</div>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with no children', () => {
    render(<Flex />);
    const flexElement = document.querySelector('.flex');
    expect(flexElement).toBeInTheDocument();
  });
});

describe('FlexItem Component', () => {
  test('renders correctly with default props', () => {
    render(
      <Flex>
        <FlexItem>Item 1</FlexItem>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with flex property', () => {
    render(
      <Flex>
        <FlexItem flex={1}>Item 1</FlexItem>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with order property', () => {
    render(
      <Flex>
        <FlexItem order={1}>Item 1</FlexItem>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with auto alignSelf', () => {
    render(
      <Flex>
        <FlexItem alignSelf="auto">Item 1</FlexItem>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with flex-start alignSelf', () => {
    render(
      <Flex>
        <FlexItem alignSelf="flex-start">Item 1</FlexItem>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with center alignSelf', () => {
    render(
      <Flex>
        <FlexItem alignSelf="center">Item 1</FlexItem>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with flex-end alignSelf', () => {
    render(
      <Flex>
        <FlexItem alignSelf="flex-end">Item 1</FlexItem>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with stretch alignSelf', () => {
    render(
      <Flex>
        <FlexItem alignSelf="stretch">Item 1</FlexItem>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with baseline alignSelf', () => {
    render(
      <Flex>
        <FlexItem alignSelf="baseline">Item 1</FlexItem>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });

  test('renders correctly with custom className', () => {
    render(
      <Flex>
        <FlexItem className="custom-class">Item 1</FlexItem>
      </Flex>
    );
    const flexItemElement = document.querySelector('.flexItem');
    expect(flexItemElement).toHaveClass('custom-class');
  });

  test('renders correctly with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(
      <Flex>
        <FlexItem style={customStyle}>Item 1</FlexItem>
      </Flex>
    );
    const item1Element = screen.getByText('Item 1');
    expect(item1Element).toBeInTheDocument();
  });
});
