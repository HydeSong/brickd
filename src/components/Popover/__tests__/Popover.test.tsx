import { fireEvent, render, screen } from '@testing-library/react';
import Popover from '../index';

describe('Popover Component', () => {
  test('renders popover with content', () => {
    render(
      <Popover content="这是一个气泡卡片">
        <button type="button">点击触发</button>
      </Popover>,
    );

    expect(screen.getByText('点击触发')).toBeInTheDocument();
  });

  test('shows popover when trigger is clicked', () => {
    render(
      <Popover content="这是一个气泡卡片">
        <button type="button">点击触发</button>
      </Popover>,
    );

    const trigger = screen.getByText('点击触发');
    fireEvent.click(trigger);

    expect(screen.getByText('这是一个气泡卡片')).toBeInTheDocument();
  });

  test('shows popover when trigger is hovered', () => {
    render(
      <Popover content="这是一个气泡卡片" trigger="hover">
        <button type="button">悬停触发</button>
      </Popover>,
    );

    const trigger = screen.getByText('悬停触发');
    fireEvent.mouseEnter(trigger);

    expect(screen.getByText('这是一个气泡卡片')).toBeInTheDocument();

    fireEvent.mouseLeave(trigger);
  });

  test('shows popover when trigger is focused', () => {
    render(
      <Popover content="这是一个气泡卡片" trigger="focus">
        <button type="button">聚焦触发</button>
      </Popover>,
    );

    const trigger = screen.getByText('聚焦触发');
    fireEvent.focus(trigger);

    expect(screen.getByText('这是一个气泡卡片')).toBeInTheDocument();

    fireEvent.blur(trigger);
  });

  test('supports controlled visibility', () => {
    const { rerender } = render(
      <Popover content="这是一个气泡卡片" visible={false}>
        <button type="button">点击触发</button>
      </Popover>,
    );

    // Show popover
    rerender(
      <Popover content="这是一个气泡卡片" visible={true}>
        <button type="button">点击触发</button>
      </Popover>,
    );

    expect(screen.getByText('这是一个气泡卡片')).toBeInTheDocument();

    // Hide popover
    rerender(
      <Popover content="这是一个气泡卡片" visible={false}>
        <button type="button">点击触发</button>
      </Popover>,
    );
  });

  test('calls onVisibleChange when visibility changes', () => {
    const onVisibleChange = jest.fn();
    render(
      <Popover content="这是一个气泡卡片" onVisibleChange={onVisibleChange}>
        <button type="button">点击触发</button>
      </Popover>,
    );

    const trigger = screen.getByText('点击触发');
    fireEvent.click(trigger);

    expect(onVisibleChange).toHaveBeenCalledWith(true);
  });

  test('applies custom className and style', () => {
    const { container } = render(
      <Popover
        content="这是一个气泡卡片"
        className="custom-popover"
        style={{ zIndex: 1001 }}
      >
        <button type="button">点击触发</button>
      </Popover>,
    );

    const popoverWrapper = container.firstChild;
    expect(popoverWrapper).toHaveClass('custom-popover');
    expect(popoverWrapper).toHaveStyle('z-index: 1001');
  });
});
