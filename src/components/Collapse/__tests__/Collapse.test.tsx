import { fireEvent, render, screen } from '@testing-library/react';
import Collapse from '../index';

const { Panel } = Collapse;

describe('Collapse Component', () => {
  test('renders collapse with panels', () => {
    render(
      <Collapse>
        <Panel panelKey="1" title="面板 1">
          <p>这是面板 1 的内容</p>
        </Panel>
        <Panel panelKey="2" title="面板 2">
          <p>这是面板 2 的内容</p>
        </Panel>
      </Collapse>,
    );

    expect(screen.getByText('面板 1')).toBeInTheDocument();
    expect(screen.getByText('面板 2')).toBeInTheDocument();
  });

  test('toggles panel when header is clicked', () => {
    render(
      <Collapse>
        <Panel panelKey="1" title="面板 1">
          <p>这是面板 1 的内容</p>
        </Panel>
      </Collapse>,
    );

    const header = screen.getByText('面板 1').closest('.collapseHeader');
    fireEvent.click(header!);

    // Click again to collapse
    fireEvent.click(header!);
  });

  test('calls onChange callback when panel is toggled', () => {
    const onChange = jest.fn();
    render(
      <Collapse onChange={onChange}>
        <Panel panelKey="1" title="面板 1">
          <p>这是面板 1 的内容</p>
        </Panel>
      </Collapse>,
    );

    const header = screen.getByText('面板 1').closest('.collapseHeader');
    fireEvent.click(header!);

    expect(onChange).toHaveBeenCalled();
  });

  test('supports defaultActiveKey', () => {
    render(
      <Collapse defaultActiveKey="1">
        <Panel panelKey="1" title="面板 1">
          <p>这是面板 1 的内容</p>
        </Panel>
        <Panel panelKey="2" title="面板 2">
          <p>这是面板 2 的内容</p>
        </Panel>
      </Collapse>,
    );

    // 验证默认激活的面板是否正确
    const header1 = screen.getByText('面板 1').closest('.collapseHeader');
    expect(header1).toHaveClass('collapseHeaderActive');
  });

  test('supports activeKey (controlled)', () => {
    const { rerender } = render(
      <Collapse activeKey="1">
        <Panel panelKey="1" title="面板 1">
          <p>这是面板 1 的内容</p>
        </Panel>
        <Panel panelKey="2" title="面板 2">
          <p>这是面板 2 的内容</p>
        </Panel>
      </Collapse>,
    );

    // Change activeIndex
    rerender(
      <Collapse activeKey="2">
        <Panel panelKey="1" title="面板 1">
          <p>这是面板 1 的内容</p>
        </Panel>
        <Panel panelKey="2" title="面板 2">
          <p>这是面板 2 的内容</p>
        </Panel>
      </Collapse>,
    );
  });

  test('supports multiple active keys', () => {
    render(
      <Collapse defaultActiveKey={['1', '2']}>
        <Panel panelKey="1" title="面板 1">
          <p>这是面板 1 的内容</p>
        </Panel>
        <Panel panelKey="2" title="面板 2">
          <p>这是面板 2 的内容</p>
        </Panel>
      </Collapse>,
    );

    const header1 = screen.getByText('面板 1').closest('.collapseHeader');
    const header2 = screen.getByText('面板 2').closest('.collapseHeader');
    expect(header1).toHaveClass('collapseHeaderActive');
    expect(header2).toHaveClass('collapseHeaderActive');
  });

  test('supports custom className and style', () => {
    const { container } = render(
      <Collapse className="custom-collapse" style={{ width: '500px' }}>
        <Panel panelKey="1" title="面板 1">
          <p>这是面板 1 的内容</p>
        </Panel>
      </Collapse>,
    );

    const collapseElement = container.firstChild;
    expect(collapseElement).toHaveClass('custom-collapse');
    expect(collapseElement).toHaveStyle('width: 500px;');
  });

  test('supports panel custom className and style', () => {
    render(
      <Collapse>
        <Panel
          panelKey="1"
          title="面板 1"
          className="custom-panel"
          style={{ border: '1px solid red' }}
        >
          <p>这是面板 1 的内容</p>
        </Panel>
      </Collapse>,
    );

    const panel = screen.getByText('面板 1').closest('.collapsePanel');
    expect(panel).toHaveClass('custom-panel');
  });
});
