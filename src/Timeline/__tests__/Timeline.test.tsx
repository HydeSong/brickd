import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from '../index';

describe('Timeline Component', () => {
  test('renders basic timeline with items', () => {
    render(
      <Timeline>
        <Timeline.Item>Item 1</Timeline.Item>
        <Timeline.Item>Item 2</Timeline.Item>
        <Timeline.Item>Item 3</Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  test('renders timeline with different modes', () => {
    // Test left mode
    render(
      <Timeline mode="left">
        <Timeline.Item>Left Mode</Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Left Mode')).toBeInTheDocument();

    // Test right mode
    render(
      <Timeline mode="right">
        <Timeline.Item>Right Mode</Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Right Mode')).toBeInTheDocument();

    // Test alternate mode
    render(
      <Timeline mode="alternate">
        <Timeline.Item>Alternate Mode 1</Timeline.Item>
        <Timeline.Item>Alternate Mode 2</Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Alternate Mode 1')).toBeInTheDocument();
    expect(screen.getByText('Alternate Mode 2')).toBeInTheDocument();
  });

  test('renders timeline with custom colors', () => {
    render(
      <Timeline>
        <Timeline.Item color="red">Red Item</Timeline.Item>
        <Timeline.Item color="green">Green Item</Timeline.Item>
        <Timeline.Item color="blue">Blue Item</Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Red Item')).toBeInTheDocument();
    expect(screen.getByText('Green Item')).toBeInTheDocument();
    expect(screen.getByText('Blue Item')).toBeInTheDocument();
  });

  test('renders timeline with custom dots', () => {
    render(
      <Timeline>
        <Timeline.Item dot={<span data-testid="custom-dot">✓</span>}>
          Item with Custom Dot
        </Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Item with Custom Dot')).toBeInTheDocument();
    expect(screen.getByTestId('custom-dot')).toBeInTheDocument();
  });

  test('renders timeline with extra content', () => {
    render(
      <Timeline>
        <Timeline.Item extra="2023-01-01">
          Item with Extra Content
        </Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Item with Extra Content')).toBeInTheDocument();
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
  });

  test('renders timeline with pending state', () => {
    // Test boolean pending
    const { container: booleanContainer } = render(
      <Timeline pending>
        <Timeline.Item>Item 1</Timeline.Item>
      </Timeline>
    );
    expect(booleanContainer.querySelector('.timelineItemContentInner')).toHaveTextContent('Item 1');

    // Test custom pending node
    const { container: customContainer } = render(
      <Timeline pending={<span data-testid="custom-pending">Loading...</span>}>
        <Timeline.Item>Item 1</Timeline.Item>
      </Timeline>
    );
    expect(customContainer.querySelector('.timelineItemContentInner')).toHaveTextContent('Item 1');
    expect(customContainer.querySelector('[data-testid="custom-pending"]')).toBeInTheDocument();
  });

  test('renders timeline with custom className and style', () => {
    const customStyle = { margin: '10px', padding: '5px' };
    render(
      <Timeline className="custom-timeline" style={customStyle}>
        <Timeline.Item className="custom-item" style={customStyle}>
          Custom Item
        </Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Custom Item')).toBeInTheDocument();
  });
});