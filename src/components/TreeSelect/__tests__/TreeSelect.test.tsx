import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TreeSelect from '../index';

const treeData = [
  {
    key: '1',
    title: '父节点 1',
    children: [
      {
        key: '1-1',
        title: '子节点 1-1',
      },
      {
        key: '1-2',
        title: '子节点 1-2',
        children: [
          {
            key: '1-2-1',
            title: '子节点 1-2-1',
          },
        ],
      },
    ],
  },
  {
    key: '2',
    title: '父节点 2',
    children: [
      {
        key: '2-1',
        title: '子节点 2-1',
      },
    ],
  },
];

describe('TreeSelect Component', () => {
  test('renders tree select with placeholder', () => {
    render(<TreeSelect data={treeData} placeholder="请选择" />);
    expect(screen.getByText('请选择')).toBeInTheDocument();
  });

  test('opens and closes dropdown', () => {
    render(<TreeSelect data={treeData} />);

    // 点击触发按钮
    const trigger = screen.getByText('请选择').closest('.treeSelectTrigger');
    fireEvent.click(trigger!);

    // 验证下拉菜单打开
    expect(screen.getByText('父节点 1')).toBeInTheDocument();

    // 再次点击触发按钮关闭
    fireEvent.click(trigger!);
  });

  test('selects node in single mode', async () => {
    const onChange = jest.fn();
    render(
      <TreeSelect
        data={treeData}
        onChange={onChange}
        treeDefaultExpandedKeys={['1']}
      />,
    );

    // 点击触发按钮
    const trigger = screen.getByText('请选择').closest('.treeSelectTrigger');
    fireEvent.click(trigger!);

    // 点击选择子节点 1-1
    const child11 = screen.getByText('子节点 1-1');
    fireEvent.click(child11);

    // 验证 onChange 被调用
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('1-1');
    });
  });

  test('selects multiple nodes', async () => {
    const onChange = jest.fn();
    render(
      <TreeSelect
        data={treeData}
        onChange={onChange}
        multiple
        treeCheckable
        treeDefaultExpandedKeys={['1', '2']}
      />,
    );

    // 点击触发按钮
    const trigger = screen.getByText('请选择').closest('.treeSelectTrigger');
    fireEvent.click(trigger!);

    // 点击选择子节点 1-1
    const child11 = screen.getByText('子节点 1-1');
    fireEvent.click(child11);

    // 点击选择子节点 2-1
    const child21 = screen.getByText('子节点 2-1');
    fireEvent.click(child21);

    // 验证 onChange 被调用
    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  test('renders search input when searchable is true', () => {
    render(<TreeSelect data={treeData} searchable />);

    // 点击触发按钮
    const trigger = screen.getByText('请选择').closest('.treeSelectTrigger');
    fireEvent.click(trigger!);

    // 验证搜索输入框存在
    expect(screen.getByPlaceholderText('搜索')).toBeInTheDocument();
  });

  test('supports controlled value', () => {
    render(
      <TreeSelect
        data={treeData}
        value="1-1"
        treeDefaultExpandedKeys={['1']}
      />,
    );

    // 验证显示选中值
    expect(screen.getByText('子节点 1-1')).toBeInTheDocument();
  });

  test('supports default value', () => {
    render(
      <TreeSelect
        data={treeData}
        defaultValue="1-1"
        treeDefaultExpandedKeys={['1']}
      />,
    );

    // 验证显示默认选中值
    expect(screen.getByText('子节点 1-1')).toBeInTheDocument();
  });

  test('supports custom className and style', () => {
    const { container } = render(
      <TreeSelect
        data={treeData}
        className="custom-tree-select"
        style={{ width: '300px' }}
      />,
    );

    const treeSelectElement = container.firstChild;
    expect(treeSelectElement).toHaveClass('custom-tree-select');
    expect(treeSelectElement).toHaveStyle('width: 300px');
  });

  test('closes dropdown when clicking outside', () => {
    render(<TreeSelect data={treeData} treeDefaultExpandedKeys={['1']} />);

    // 点击触发按钮
    const trigger = screen.getByText('请选择').closest('.treeSelectTrigger');
    fireEvent.click(trigger!);

    // 验证下拉菜单打开
    expect(screen.getByText('父节点 1')).toBeInTheDocument();

    // 点击外部
    fireEvent.mouseDown(document.body);

    // 验证下拉菜单关闭
    expect(screen.queryByText('父节点 1')).not.toBeInTheDocument();
  });
});
