---
title: Tree
nav: components
order: 56
---

# Tree

树形组件，用于展示和操作树形结构数据。

## 基本用法

最简单的树形组件使用方式。

```tsx
import React from 'react';
import Tree from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '节点 1',
      children: [
        {
          key: '1-1',
          title: '节点 1-1',
          children: [
            {
              key: '1-1-1',
              title: '节点 1-1-1',
            },
            {
              key: '1-1-2',
              title: '节点 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '节点 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '节点 2',
      children: [
        {
          key: '2-1',
          title: '节点 2-1',
        },
      ],
    },
  ];

  const handleSelect = (
    selectedKeys: string[],
    event: { node: any; selected: boolean },
  ) => {
    console.log('Selected Keys:', selectedKeys);
    console.log('Selected Node:', event.node);
    console.log('Selected:', event.selected);
  };

  const handleExpand = (expandedKeys: string[]) => {
    console.log('Expanded Keys:', expandedKeys);
  };

  return (
    <Tree data={treeData} onSelect={handleSelect} onExpand={handleExpand} />
  );
};

export default App;
```

## 默认展开和选中

设置默认展开和选中的节点。

```tsx
import React from 'react';
import Tree from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '节点 1',
      children: [
        {
          key: '1-1',
          title: '节点 1-1',
          children: [
            {
              key: '1-1-1',
              title: '节点 1-1-1',
            },
            {
              key: '1-1-2',
              title: '节点 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '节点 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '节点 2',
      children: [
        {
          key: '2-1',
          title: '节点 2-1',
        },
      ],
    },
  ];

  return (
    <Tree
      data={treeData}
      defaultExpandedKeys={['1', '1-1']}
      defaultSelectedKeys={['1-1-1', '2-1']}
    />
  );
};

export default App;
```

## 受控模式

通过状态控制展开和选中的节点。

```tsx
import React, { useState } from 'react';
import Tree from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '节点 1',
      children: [
        {
          key: '1-1',
          title: '节点 1-1',
          children: [
            {
              key: '1-1-1',
              title: '节点 1-1-1',
            },
            {
              key: '1-1-2',
              title: '节点 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '节点 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '节点 2',
      children: [
        {
          key: '2-1',
          title: '节点 2-1',
        },
      ],
    },
  ];

  const [expandedKeys, setExpandedKeys] = useState<string[]>(['1']);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1-1']);

  const handleExpand = (keys: string[]) => {
    setExpandedKeys(keys);
  };

  const handleSelect = (
    keys: string[],
    event: { node: any; selected: boolean },
  ) => {
    setSelectedKeys(keys);
  };

  return (
    <div>
      <Tree
        data={treeData}
        expandedKeys={expandedKeys}
        selectedKeys={selectedKeys}
        onExpand={handleExpand}
        onSelect={handleSelect}
      />
      <div style={{ marginTop: '16px' }}>
        <p>展开的节点: {expandedKeys.join(', ')}</p>
        <p>选中的节点: {selectedKeys.join(', ')}</p>
      </div>
    </div>
  );
};

export default App;
```

## 显示连接线

显示节点之间的连接线。

```tsx
import React from 'react';
import Tree from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '节点 1',
      children: [
        {
          key: '1-1',
          title: '节点 1-1',
          children: [
            {
              key: '1-1-1',
              title: '节点 1-1-1',
            },
            {
              key: '1-1-2',
              title: '节点 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '节点 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '节点 2',
      children: [
        {
          key: '2-1',
          title: '节点 2-1',
        },
      ],
    },
  ];

  return <Tree data={treeData} showLine />;
};

export default App;
```

## 可勾选

节点可勾选的树形组件。

```tsx
import React from 'react';
import Tree from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '节点 1',
      children: [
        {
          key: '1-1',
          title: '节点 1-1',
          children: [
            {
              key: '1-1-1',
              title: '节点 1-1-1',
            },
            {
              key: '1-1-2',
              title: '节点 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '节点 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '节点 2',
      children: [
        {
          key: '2-1',
          title: '节点 2-1',
        },
      ],
    },
  ];

  return <Tree data={treeData} checkable />;
};

export default App;
```

## 禁用节点

部分节点禁用的树形组件。

```tsx
import React from 'react';
import Tree from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '节点 1',
      children: [
        {
          key: '1-1',
          title: '节点 1-1 (禁用)',
          disabled: true,
          children: [
            {
              key: '1-1-1',
              title: '节点 1-1-1',
            },
            {
              key: '1-1-2',
              title: '节点 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '节点 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '节点 2 (禁用)',
      disabled: true,
      children: [
        {
          key: '2-1',
          title: '节点 2-1',
        },
      ],
    },
  ];

  return <Tree data={treeData} />;
};

export default App;
```

## 自定义样式

通过 className 和 style 属性自定义树形组件样式。

```tsx
import React from 'react';
import Tree from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '节点 1',
      children: [
        {
          key: '1-1',
          title: '节点 1-1',
          children: [
            {
              key: '1-1-1',
              title: '节点 1-1-1',
            },
            {
              key: '1-1-2',
              title: '节点 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '节点 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '节点 2',
      children: [
        {
          key: '2-1',
          title: '节点 2-1',
        },
      ],
    },
  ];

  return (
    <Tree
      data={treeData}
      style={{
        border: '1px solid #e8e8e8',
        borderRadius: '8px',
        padding: '8px',
        width: '300px',
        backgroundColor: '#f9f9f9',
      }}
    />
  );
};

export default App;
```

## 复杂数据结构

树形组件展示复杂数据结构。

```tsx
import React from 'react';
import Tree from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: 'department1',
      title: '技术部',
      children: [
        {
          key: 'team1',
          title: '前端团队',
          children: [
            {
              key: 'person1',
              title: '张三',
            },
            {
              key: 'person2',
              title: '李四',
            },
          ],
        },
        {
          key: 'team2',
          title: '后端团队',
          children: [
            {
              key: 'person3',
              title: '王五',
            },
            {
              key: 'person4',
              title: '赵六',
            },
          ],
        },
      ],
    },
    {
      key: 'department2',
      title: '产品部',
      children: [
        {
          key: 'person5',
          title: '钱七',
        },
        {
          key: 'person6',
          title: '孙八',
        },
      ],
    },
  ];

  return <Tree data={treeData} showLine />;
};

export default App;
```

## API

### TreeProps

| 属性                | 类型                                                                           | 默认值 | 说明                         |
| ------------------- | ------------------------------------------------------------------------------ | ------ | ---------------------------- |
| data                | TreeNode[]                                                                     | -      | 树形数据                     |
| defaultExpandedKeys | string[]                                                                       | []     | 默认展开的节点键值数组       |
| expandedKeys        | string[]                                                                       | -      | 受控模式下展开的节点键值数组 |
| defaultSelectedKeys | string[]                                                                       | []     | 默认选中的节点键值数组       |
| selectedKeys        | string[]                                                                       | -      | 受控模式下选中的节点键值数组 |
| onExpand            | (expandedKeys: string[]) => void                                               | -      | 展开/收起节点时的回调函数    |
| onSelect            | (selectedKeys: string[], event: { node: TreeNode; selected: boolean }) => void | -      | 选择节点时的回调函数         |
| showLine            | boolean                                                                        | false  | 是否显示节点间的连接线       |
| checkable           | boolean                                                                        | false  | 是否可勾选                   |
| className           | string                                                                         | ''     | 自定义类名                   |
| style               | React.CSSProperties                                                            | {}     | 自定义样式                   |

### TreeNode

| 属性     | 类型            | 默认值 | 说明         |
| -------- | --------------- | ------ | ------------ |
| key      | string          | -      | 节点唯一标识 |
| title    | React.ReactNode | -      | 节点标题     |
| children | TreeNode[]      | -      | 子节点       |
| disabled | boolean         | false  | 是否禁用     |
