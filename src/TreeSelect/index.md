---
title: TreeSelect
nav: components
order: 57
---

# TreeSelect

树形选择器组件，用于在树形结构中选择节点。

## 基本用法

最简单的树形选择器使用方式。

```tsx
import React from 'react';
import TreeSelect from './index';

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

  const handleChange = (value: string | string[]) => {
    console.log('Selected value:', value);
  };

  return (
    <TreeSelect
      data={treeData}
      onChange={handleChange}
    />
  );
};

export default App;
```

## 多选模式

支持选择多个节点的树形选择器。

```tsx
import React from 'react';
import TreeSelect from './index';

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

  const handleChange = (value: string | string[]) => {
    console.log('Selected values:', value);
  };

  return (
    <TreeSelect
      data={treeData}
      multiple
      onChange={handleChange}
    />
  );
};

export default App;
```

## 搜索功能

支持搜索的树形选择器。

```tsx
import React from 'react';
import TreeSelect from './index';

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
    <TreeSelect
      data={treeData}
      searchable
    />
  );
};

export default App;
```

## 可勾选

节点可勾选的树形选择器。

```tsx
import React from 'react';
import TreeSelect from './index';

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
    <TreeSelect
      data={treeData}
      treeCheckable
      multiple
    />
  );
};

export default App;
```

## 受控模式

通过状态控制树形选择器的值。

```tsx
import React, { useState } from 'react';
import TreeSelect from './index';

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

  const [value, setValue] = useState<string>('');

  return (
    <div>
      <TreeSelect
        data={treeData}
        value={value}
        onChange={setValue}
      />
      <p>Selected value: {value}</p>
    </div>
  );
};

export default App;
```

## 带默认值

设置默认值的树形选择器。

```tsx
import React from 'react';
import TreeSelect from './index';

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
    <TreeSelect
      data={treeData}
      defaultValue="1-1-1"
    />
  );
};

export default App;
```

## 自定义占位符

设置自定义占位符的树形选择器。

```tsx
import React from 'react';
import TreeSelect from './index';

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
    <TreeSelect
      data={treeData}
      placeholder="请选择节点"
    />
  );
};

export default App;
```

## 默认展开节点

设置默认展开节点的树形选择器。

```tsx
import React from 'react';
import TreeSelect from './index';

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
    <TreeSelect
      data={treeData}
      treeDefaultExpandedKeys={['1', '1-1']}
    />
  );
};

export default App;
```

## 自定义样式

通过 className 和 style 属性自定义树形选择器样式。

```tsx
import React from 'react';
import TreeSelect from './index';

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
    <TreeSelect
      data={treeData}
      style={{
        width: '300px',
        border: '1px solid #1890ff',
        borderRadius: '8px',
      }}
    />
  );
};

export default App;
```

## 复杂数据结构

树形选择器展示复杂数据结构。

```tsx
import React from 'react';
import TreeSelect from './index';

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

  return (
    <TreeSelect
      data={treeData}
      placeholder="选择人员"
    />
  );
};

export default App;
```

## API

### TreeSelectProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| data | TreeNode[] | - | 树形数据 |
| value | string \| string[] | - | 受控模式下的值 |
| defaultValue | string \| string[] | - | 非受控模式下的默认值 |
| placeholder | string | '请选择' | 占位文本 |
| onChange | (value: string \| string[]) => void | - | 值变化时的回调函数 |
| multiple | boolean | false | 是否支持多选 |
| searchable | boolean | false | 是否支持搜索 |
| treeExpandedKeys | string[] | - | 受控模式下展开的节点键值数组 |
| treeDefaultExpandedKeys | string[] | [] | 默认展开的节点键值数组 |
| treeCheckable | boolean | false | 节点是否可勾选 |
| className | string | '' | 自定义类名 |
| style | React.CSSProperties | {} | 自定义样式 |

### TreeNode

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| key | string | - | 节点唯一标识 |
| title | React.ReactNode | - | 节点标题 |
| children | TreeNode[] | - | 子节点 |
| disabled | boolean | false | 是否禁用 |