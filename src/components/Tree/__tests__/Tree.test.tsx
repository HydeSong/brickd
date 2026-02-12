import { fireEvent, render, screen } from '@testing-library/react';
import Tree from '../index';

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

describe('Tree Component', () => {
  test('renders tree with data', () => {
    render(<Tree data={treeData} />);
    expect(screen.getByText('父节点 1')).toBeInTheDocument();
    expect(screen.getByText('父节点 2')).toBeInTheDocument();
  });

  test('expands and collapses nodes', () => {
    render(<Tree data={treeData} />);

    // 点击展开父节点 1
    const parent1Title = screen.getByText('父节点 1');
    const parent1Node = parent1Title.closest('.treeNodeContent');
    const switcher = parent1Node?.querySelector('.treeNodeSwitcher');
    if (switcher) {
      fireEvent.click(switcher);
    }

    // 验证子节点 1-1 显示
    expect(screen.getByText('子节点 1-1')).toBeInTheDocument();

    // 点击折叠父节点 1
    if (switcher) {
      fireEvent.click(switcher);
    }
  });

  test('selects nodes', () => {
    const onSelect = jest.fn();
    render(<Tree data={treeData} onSelect={onSelect} />);

    // 点击选择子节点 1-1
    const parent1Title = screen.getByText('父节点 1');
    const parent1Node = parent1Title.closest('.treeNodeContent');
    const switcher = parent1Node?.querySelector('.treeNodeSwitcher');
    if (switcher) {
      fireEvent.click(switcher);
    }

    const child11Title = screen.getByText('子节点 1-1');
    fireEvent.click(child11Title);

    expect(onSelect).toHaveBeenCalled();
  });

  test('renders with checkboxes when checkable is true', () => {
    render(<Tree data={treeData} checkable />);

    // 验证复选框存在
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
  });

  test('renders with lines when showLine is true', () => {
    const { container } = render(<Tree data={treeData} showLine />);
    expect(container.firstChild).toHaveClass('treeShowLine');
  });

  test('respects disabled nodes', () => {
    const disabledTreeData = [
      {
        key: '1',
        title: '父节点 1',
        disabled: true,
        children: [
          {
            key: '1-1',
            title: '子节点 1-1',
          },
        ],
      },
    ];

    render(<Tree data={disabledTreeData} />);
    const disabledNode = screen
      .getByText('父节点 1')
      .closest('.treeNodeContent');
    expect(disabledNode).toHaveClass('treeNodeDisabled');
  });

  test('supports defaultExpandedKeys', () => {
    render(<Tree data={treeData} defaultExpandedKeys={['1']} />);
    // 验证子节点 1-1 显示
    expect(screen.getByText('子节点 1-1')).toBeInTheDocument();
  });

  test('supports defaultSelectedKeys', () => {
    render(
      <Tree
        data={treeData}
        defaultExpandedKeys={['1']}
        defaultSelectedKeys={['1-1']}
      />,
    );
    const selectedNode = screen
      .getByText('子节点 1-1')
      .closest('.treeNodeContent');
    expect(selectedNode).toHaveClass('treeNodeSelected');
  });

  test('supports custom className and style', () => {
    const { container } = render(
      <Tree
        data={treeData}
        className="custom-tree"
        style={{ width: '300px' }}
      />,
    );
    const treeElement = container.firstChild;
    expect(treeElement).toHaveClass('custom-tree');
    expect(treeElement).toHaveStyle('width: 300px');
  });
});
