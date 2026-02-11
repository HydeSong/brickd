# Tree 树形控件

### 安装依赖

```bash
# npm
npm install brickd

# yarn
yarn add brickd

# pnpm
pnpm add brickd
```

### 导入组件

```javascript
import Tree from 'brickd';
```

### 基本用法

```jsx
import React from 'react';
import Tree from 'brickd';

const App = () => {
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

  return <Tree data={treeData} />;
};

export default App;
```

### 带选择功能

```jsx
import React from 'react';
import Tree from 'brickd';

const App = () => {
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

  const handleSelect = (selectedKeys, event) => {
    console.log('Selected keys:', selectedKeys);
    console.log('Event:', event);
  };

  return (
    <Tree 
      data={treeData} 
      defaultSelectedKeys={['1-1']}
      onSelect={handleSelect}
    />
  );
};

export default App;
```

### 带复选框

```jsx
import React from 'react';
import Tree from 'brickd';

const App = () => {
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

  return (
    <Tree 
      data={treeData} 
      checkable
      defaultSelectedKeys={['1-1', '2-1']}
    />
  );
};

export default App;
```

### 带连接线

```jsx
import React from 'react';
import Tree from 'brickd';

const App = () => {
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

  return <Tree data={treeData} showLine />;
};

export default App;
```

### 受控展开/折叠

```jsx
import React, { useState } from 'react';
import Tree from 'brickd';

const App = () => {
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

  const [expandedKeys, setExpandedKeys] = useState(['1']);

  const handleExpand = (keys) => {
    setExpandedKeys(keys);
  };

  return (
    <Tree 
      data={treeData} 
      expandedKeys={expandedKeys}
      onExpand={handleExpand}
    />
  );
};

export default App;
```

### API

#### Tree

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 树节点数据 | TreeNode[] | [] |
| defaultExpandedKeys | 默认展开的节点 key | string[] | [] |
| expandedKeys | 展开的节点 key（受控） | string[] | - |
| defaultSelectedKeys | 默认选中的节点 key | string[] | [] |
| selectedKeys | 选中的节点 key（受控） | string[] | - |
| onExpand | 展开/折叠时的回调 | (expandedKeys: string[]) => void | - |
| onSelect | 选择节点时的回调 | (selectedKeys: string[], event: { node: TreeNode; selected: boolean }) => void | - |
| showLine | 是否显示连接线 | boolean | false |
| checkable | 是否显示复选框 | boolean | false |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |

#### TreeNode

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 节点唯一标识 | string | - |
| title | 节点标题 | React.ReactNode | - |
| children | 子节点 | TreeNode[] | - |
| disabled | 是否禁用 | boolean | false |