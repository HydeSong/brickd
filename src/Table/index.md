# Table 表格

表格组件，用于展示数据。

## 安装

```bash
npm install brickd
```

## 导入

```tsx
import { Table } from 'brickd';
```

## 用法

### 基础用法

```tsx
import React from 'react';
import { Table } from 'brickd';

const App = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address' },
  ];

  const dataSource = [
    { key: '1', name: 'John', age: 32, address: 'New York' },
    { key: '2', name: 'Jane', age: 28, address: 'London' },
    { key: '3', name: 'Bob', age: 45, address: 'Paris' },
  ];

  return (
    <Table columns={columns} dataSource={dataSource} />
  );
};

export default App;
```

### 带加载状态

```tsx
import React from 'react';
import { Table } from 'brickd';

const App = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address' },
  ];

  const dataSource = [];

  return (
    <Table columns={columns} dataSource={dataSource} loading />
  );
};

export default App;
```

### 带分页

```tsx
import React from 'react';
import { Table } from 'brickd';

const App = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address' },
  ];

  const dataSource = [
    { key: '1', name: 'John', age: 32, address: 'New York' },
    { key: '2', name: 'Jane', age: 28, address: 'London' },
    { key: '3', name: 'Bob', age: 45, address: 'Paris' },
  ];

  return (
    <Table columns={columns} dataSource={dataSource} pagination />
  );
};

export default App;
```

### 带自定义渲染

```tsx
import React from 'react';
import { Table, Button } from 'brickd';

const App = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { 
      title: 'Action', 
      dataIndex: 'action',
      render: (_, record) => (
        <Button size="small">Edit</Button>
      ),
    },
  ];

  const dataSource = [
    { key: '1', name: 'John', age: 32 },
    { key: '2', name: 'Jane', age: 28 },
    { key: '3', name: 'Bob', age: 45 },
  ];

  return (
    <Table columns={columns} dataSource={dataSource} />
  );
};

export default App;
```

### 带样式

```tsx
import React from 'react';
import { Table } from 'brickd';

const App = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address' },
  ];

  const dataSource = [
    { key: '1', name: 'John', age: 32, address: 'New York' },
    { key: '2', name: 'Jane', age: 28, address: 'London' },
    { key: '3', name: 'Bob', age: 45, address: 'Paris' },
  ];

  return (
    <Table 
      columns={columns} 
      dataSource={dataSource} 
      bordered 
      striped 
      hoverable 
    />
  );
};

export default App;
```

## API

### Table

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| columns | `TableColumn[]` | - | 表格列配置 |
| dataSource | `any[]` | - | 数据源 |
| rowKey | `string \| ((record: any) => string)` | `'key'` | 行的唯一标识 |
| loading | `boolean` | `false` | 加载状态 |
| pagination | `boolean \| any` | `false` | 分页配置 |
| size | `'small' \| 'middle' \| 'large'` | `'middle'` | 表格大小 |
| bordered | `boolean` | `false` | 是否显示边框 |
| striped | `boolean` | `false` | 是否显示斑马纹 |
| hoverable | `boolean` | `false` | 是否显示行悬停效果 |
| scroll | `{ x?: number \| string; y?: number \| string }` | - | 滚动配置 |
| className | `string` | - | 自定义类名 |
| style | `React.CSSProperties` | - | 自定义样式 |

### TableColumn

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | `React.ReactNode` | - | 列标题 |
| dataIndex | `string` | - | 数据字段 |
| key | `string` | - | 列的唯一标识 |
| width | `string \| number` | - | 列宽度 |
| render | `(text: any, record: any, index: number) => React.ReactNode` | - | 自定义渲染函数 |
| sorter | `boolean \| ((a: any, b: any) => number)` | - | 排序函数 |
| defaultSortOrder | `'ascend' \| 'descend'` | - | 默认排序顺序 |
| className | `string` | - | 自定义列类名 |
| style | `React.CSSProperties` | - | 自定义列样式 |
