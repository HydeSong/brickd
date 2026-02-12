# Table 表格

表格组件，用于展示结构化数据。

## 基本用法

```tsx
import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    age: 18,
    gender: '男',
    city: '北京',
  },
  {
    key: '2',
    name: '李四',
    age: 20,
    gender: '女',
    city: '上海',
  },
  {
    key: '3',
    name: '王五',
    age: 22,
    gender: '男',
    city: '广州',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} />
  </div>
);
```

## 带边框

```tsx
import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    age: 18,
    city: '北京',
  },
  {
    key: '2',
    name: '李四',
    age: 20,
    city: '上海',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} bordered />
  </div>
);
```

## 条纹样式

```tsx
import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    age: 18,
    city: '北京',
  },
  {
    key: '2',
    name: '李四',
    age: 20,
    city: '上海',
  },
  {
    key: '3',
    name: '王五',
    age: 22,
    city: '广州',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} striped />
  </div>
);
```

## 悬停效果

```tsx
import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    age: 18,
    city: '北京',
  },
  {
    key: '2',
    name: '李四',
    age: 20,
    city: '上海',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} hoverable />
  </div>
);
```

## 不同尺寸

```tsx
import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    age: 18,
  },
  {
    key: '2',
    name: '李四',
    age: 20,
  },
];

export default () => (
  <div>
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      style={{ marginBottom: '20px' }}
    />
    <Table
      columns={columns}
      dataSource={data}
      size="middle"
      style={{ marginBottom: '20px' }}
    />
    <Table columns={columns} dataSource={data} size="large" />
  </div>
);
```

## 加载状态

```tsx
import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={[]} loading />
  </div>
);
```

## 空状态

```tsx
import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={[]} />
  </div>
);
```

## 带分页

```tsx
import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    age: 18,
  },
  {
    key: '2',
    name: '李四',
    age: 20,
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} pagination />
  </div>
);
```

## 自定义列渲染

```tsx
import React from 'react';
import { Table, Button } from 'brickd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => <Button size="small">编辑</Button>,
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    age: 18,
  },
  {
    key: '2',
    name: '李四',
    age: 20,
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} />
  </div>
);
```

## 带滚动

```tsx
import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
    width: 100,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    width: 300,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width: 200,
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    age: 18,
    city: '北京',
    address: '北京市朝阳区',
    remark: '备注1',
  },
  {
    key: '2',
    name: '李四',
    age: 20,
    city: '上海',
    address: '上海市浦东新区',
    remark: '备注2',
  },
  {
    key: '3',
    name: '王五',
    age: 22,
    city: '广州',
    address: '广州市天河区',
    remark: '备注3',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} scroll={{ x: 800, y: 200 }} />
  </div>
);
```

## API

| 属性       | 说明           | 类型                                             | 默认值      |
| ---------- | -------------- | ------------------------------------------------ | ----------- |
| columns    | 列配置         | `TableColumn[]`                                  | -           |
| dataSource | 数据源         | `any[]`                                          | -           |
| rowKey     | 行键           | `string \| (record: any) => string`              | `'key'`     |
| loading    | 加载状态       | `boolean`                                        | `false`     |
| pagination | 分页           | `boolean \| any`                                 | `false`     |
| size       | 表格大小       | `'small' \| 'middle' \| 'large'`                 | `'middle'`  |
| bordered   | 是否带边框     | `boolean`                                        | `false`     |
| striped    | 是否为条纹表格 | `boolean`                                        | `false`     |
| hoverable  | 是否支持行悬停 | `boolean`                                        | `false`     |
| scroll     | 滚动配置       | `{ x?: number \| string; y?: number \| string }` | `undefined` |
| className  | 自定义类名     | `string`                                         | `undefined` |
| style      | 自定义样式     | `React.CSSProperties`                            | `undefined` |

### TableColumn

| 属性             | 说明           | 类型                                                         | 默认值      |
| ---------------- | -------------- | ------------------------------------------------------------ | ----------- |
| title            | 列标题         | `React.ReactNode`                                            | -           |
| dataIndex        | 数据索引       | `string`                                                     | -           |
| key              | 列键           | `string`                                                     | `undefined` |
| width            | 列宽度         | `string \| number`                                           | `undefined` |
| render           | 自定义渲染函数 | `(text: any, record: any, index: number) => React.ReactNode` | `undefined` |
| sorter           | 排序函数       | `boolean \| ((a: any, b: any) => number)`                    | `undefined` |
| defaultSortOrder | 默认排序顺序   | `'ascend' \| 'descend'`                                      | `undefined` |
| className        | 自定义类名     | `string`                                                     | `undefined` |
| style            | 自定义样式     | `React.CSSProperties`                                        | `undefined` |
