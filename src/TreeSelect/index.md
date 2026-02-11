# TreeSelect 树选择

### 导入组件

```javascript
import TreeSelect from 'brickd';
```

### 基本用法

```jsx
import React from 'react';
import TreeSelect from 'brickd';

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

  const handleChange = (value) => {
    console.log('Selected value:', value);
  };

  return (
    <TreeSelect
      data={treeData}
      placeholder="请选择"
      onChange={handleChange}
    />
  );
};

export default App;
```

### 多选模式

```jsx
import React from 'react';
import TreeSelect from 'brickd';

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

  const handleChange = (value) => {
    console.log('Selected values:', value);
  };

  return (
    <TreeSelect
      data={treeData}
      placeholder="请选择"
      onChange={handleChange}
      multiple
      treeCheckable
    />
  );
};

export default App;
```

### 带搜索功能

```jsx
import React from 'react';
import TreeSelect from 'brickd';

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
    <TreeSelect
      data={treeData}
      placeholder="请选择"
      searchable
    />
  );
};

export default App;
```

### 受控模式

```jsx
import React, { useState } from 'react';
import TreeSelect from 'brickd';

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

  const [value, setValue] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log('Selected value:', newValue);
  };

  return (
    <TreeSelect
      data={treeData}
      value={value}
      onChange={handleChange}
      placeholder="请选择"
    />
  );
};

export default App;
```

### 自定义展开节点

```jsx
import React from 'react';
import TreeSelect from 'brickd';

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
    <TreeSelect
      data={treeData}
      placeholder="请选择"
      treeDefaultExpandedKeys={['1', '2']}
    />
  );
};

export default App;
```

### API

#### TreeSelect

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 树节点数据 | TreeNode[] | [] |
| value | 选中的值（受控） | string \| string[] | - |
| defaultValue | 默认选中的值 | string \| string[] | '' \| [] |
| placeholder | 占位文本 | string | '请选择' |
| onChange | 选中值变化时的回调 | (value: string \| string[]) => void | - |
| multiple | 是否支持多选 | boolean | false |
| searchable | 是否支持搜索 | boolean | false |
| treeExpandedKeys | 树展开的节点 key（受控） | string[] | - |
| treeDefaultExpandedKeys | 树默认展开的节点 key | string[] | [] |
| treeCheckable | 树节点是否可勾选 | boolean | false |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |

#### TreeNode

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 节点唯一标识 | string | - |
| title | 节点标题 | React.ReactNode | - |
| children | 子节点 | TreeNode[] | - |
| disabled | 是否禁用 | boolean | false |