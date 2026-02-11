import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Tooltip from '../index';

describe('Tooltip Component', () => {
  test('renders tooltip with hover trigger', async () => {
    render(
      <Tooltip title="Tooltip content">
        <span>Hover me</span>
      </Tooltip>
    );
    const trigger = screen.getByText('Hover me');
    
    // Initial state: tooltip should not be visible
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
    
    // Hover over trigger
    fireEvent.mouseEnter(trigger);
    await waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    });
    
    // Move mouse away
    fireEvent.mouseLeave(trigger);
    await waitFor(() => {
      expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
    });
  });

  test('renders tooltip with click trigger', async () => {
    render(
      <Tooltip title="Tooltip content" trigger="click">
        <span>Click me</span>
      </Tooltip>
    );
    const trigger = screen.getByText('Click me');
    
    // Initial state: tooltip should not be visible
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
    
    // Click trigger
    fireEvent.click(trigger);
    await waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    });
    
    // Click trigger again to close
    fireEvent.click(trigger);
    await waitFor(() => {
      expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
    });
  });

  test('renders tooltip with focus trigger', async () => {
    render(
      <Tooltip title="Tooltip content" trigger="focus">
        <input type="text" placeholder="Focus me" />
      </Tooltip>
    );
    const trigger = screen.getByPlaceholderText('Focus me');
    
    // Initial state: tooltip should not be visible
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
    
    // Focus on trigger
    fireEvent.focus(trigger);
    await waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    });
    
    // Blur from trigger
    fireEvent.blur(trigger);
    await waitFor(() => {
      expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
    });
  });

  test('renders tooltip with different placements', () => {
    const placements = ['top', 'bottom', 'left', 'right'] as const;
    placements.forEach(placement => {
      const { unmount } = render(
        <Tooltip title="Tooltip content" placement={placement} visible>
          <span>{placement} tooltip</span>
        </Tooltip>
      );
      expect(screen.getByText('Tooltip content')).toBeInTheDocument();
      unmount();
    });
  });

  test('renders tooltip with controlled visibility', () => {
    const { unmount } = render(
      <Tooltip title="Tooltip content" visible>
        <span>Controlled tooltip</span>
      </Tooltip>
    );
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    unmount();
    
    render(
      <Tooltip title="Tooltip content" visible={false}>
        <span>Controlled tooltip</span>
      </Tooltip>
    );
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
  });

  test('calls onVisibleChange callback', async () => {
    const onVisibleChangeMock = jest.fn();
    render(
      <Tooltip 
        title="Tooltip content" 
        onVisibleChange={onVisibleChangeMock}
      >
        <span>Hover me</span>
      </Tooltip>
    );
    const trigger = screen.getByText('Hover me');
    
    // Hover over trigger
    fireEvent.mouseEnter(trigger);
    await waitFor(() => {
      expect(onVisibleChangeMock).toHaveBeenCalledWith(true);
    });
    
    // Move mouse away
    fireEvent.mouseLeave(trigger);
    await waitFor(() => {
      expect(onVisibleChangeMock).toHaveBeenCalledWith(false);
    });
  });

  test('renders tooltip with custom overlay styles', () => {
    const customStyle = { backgroundColor: 'red', color: 'white' };
    render(
      <Tooltip 
        title="Tooltip content" 
        overlayStyle={customStyle}
        visible
      >
        <span>Custom styles</span>
      </Tooltip>
    );
    const tooltipInner = screen.getByText('Tooltip content').closest('div');
    const tooltip = tooltipInner?.parentElement;
    expect(tooltip).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(tooltip).toHaveStyle('color: rgb(255, 255, 255)');
  });

  test('renders tooltip with custom overlay className', () => {
    render(
      <Tooltip 
        title="Tooltip content" 
        overlayClassName="custom-tooltip"
        visible
      >
        <span>Custom className</span>
      </Tooltip>
    );
    const tooltipInner = screen.getByText('Tooltip content').closest('div');
    const tooltip = tooltipInner?.parentElement;
    expect(tooltip).toHaveClass('custom-tooltip');
  });
});