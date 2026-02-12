---
title: Descriptions
order: 1
---

# Descriptions 描述列表

用于展示对象的详细信息。

## 基本用法

```tsx
import React from 'react';
import Descriptions from '../Descriptions';

const App: React.FC = () => {
  return (
    <Descriptions>
      <Descriptions.Item label="姓名">张三</Descriptions.Item>
      <Descriptions.Item label="年龄">28</Descriptions.Item>
      <Descriptions.Item label="性别">男</Descriptions.Item>
      <Descriptions.Item label="职业">工程师</Descriptions.Item>
      <Descriptions.Item label="邮箱">zhangsan@example.com</Descriptions.Item>
      <Descriptions.Item label="电话">13800138000</Descriptions.Item>
    </Descriptions>
  );
};

export default App;
```

## 带边框样式

```tsx
import React from 'react';
import Descriptions from '../Descriptions';

const App: React.FC = () => {
  return (
    <Descriptions bordered>
      <Descriptions.Item label="姓名">张三</Descriptions.Item>
      <Descriptions.Item label="年龄">28</Descriptions.Item>
      <Descriptions.Item label="性别">男</Descriptions.Item>
      <Descriptions.Item label="职业">工程师</Descriptions.Item>
      <Descriptions.Item label="邮箱">zhangsan@example.com</Descriptions.Item>
      <Descriptions.Item label="电话">13800138000</Descriptions.Item>
    </Descriptions>
  );
};

export default App;
```

## 自定义列数

```tsx
import React from 'react';
import Descriptions from '../Descriptions';

const App: React.FC = () => {
  return (
    <div>
      <Descriptions column={2}>
        <Descriptions.Item label="姓名">张三</Descriptions.Item>
        <Descriptions.Item label="年龄">28</Descriptions.Item>
        <Descriptions.Item label="性别">男</Descriptions.Item>
        <Descriptions.Item label="职业">工程师</Descriptions.Item>
        <Descriptions.Item label="邮箱">zhangsan@example.com</Descriptions.Item>
        <Descriptions.Item label="电话">13800138000</Descriptions.Item>
      </Descriptions>
      <br />
      <Descriptions column={4}>
        <Descriptions.Item label="姓名">张三</Descriptions.Item>
        <Descriptions.Item label="年龄">28</Descriptions.Item>
        <Descriptions.Item label="性别">男</Descriptions.Item>
        <Descriptions.Item label="职业">工程师</Descriptions.Item>
        <Descriptions.Item label="邮箱">zhangsan@example.com</Descriptions.Item>
        <Descriptions.Item label="电话">13800138000</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default App;
```

## 不同尺寸

```tsx
import React from 'react';
import Descriptions from '../Descriptions';

const App: React.FC = () => {
  return (
    <div>
      <Descriptions size="small">
        <Descriptions.Item label="姓名">张三</Descriptions.Item>
        <Descriptions.Item label="年龄">28</Descriptions.Item>
        <Descriptions.Item label="性别">男</Descriptions.Item>
      </Descriptions>
      <br />
      <Descriptions size="default">
        <Descriptions.Item label="姓名">张三</Descriptions.Item>
        <Descriptions.Item label="年龄">28</Descriptions.Item>
        <Descriptions.Item label="性别">男</Descriptions.Item>
      </Descriptions>
      <br />
      <Descriptions size="large">
        <Descriptions.Item label="姓名">张三</Descriptions.Item>
        <Descriptions.Item label="年龄">28</Descriptions.Item>
        <Descriptions.Item label="性别">男</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default App;
```

## 带标题

```tsx
import React from 'react';
import Descriptions from '../Descriptions';

const App: React.FC = () => {
  return (
    <Descriptions title="用户信息">
      <Descriptions.Item label="姓名">张三</Descriptions.Item>
      <Descriptions.Item label="年龄">28</Descriptions.Item>
      <Descriptions.Item label="性别">男</Descriptions.Item>
      <Descriptions.Item label="职业">工程师</Descriptions.Item>
      <Descriptions.Item label="邮箱">zhangsan@example.com</Descriptions.Item>
      <Descriptions.Item label="电话">13800138000</Descriptions.Item>
    </Descriptions>
  );
};

export default App;
```

## 自定义跨度

```tsx
import React from 'react';
import Descriptions from '../Descriptions';

const App: React.FC = () => {
  return (
    <Descriptions column={3}>
      <Descriptions.Item label="姓名" span={2}>张三</Descriptions.Item>
      <Descriptions.Item label="年龄">28</Descriptions.Item>
      <Descriptions.Item label="性别">男</Descriptions.Item>
      <Descriptions.Item label="职业" span={2}>工程师</Descriptions.Item>
      <Descriptions.Item label="邮箱" span={3}>zhangsan@example.com</Descriptions.Item>
      <Descriptions.Item label="电话">13800138000</Descriptions.Item>
    </Descriptions>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import Descriptions from '../Descriptions';

const App: React.FC = () => {
  return (
    <Descriptions 
      style={{ backgroundColor: '#f5f5f5', padding: 20, borderRadius: 8 }}
    >
      <Descriptions.Item 
        label="姓名" 
        style={{ color: '#1890ff', fontWeight: 'bold' }}
      >
        张三
      </Descriptions.Item>
      <Descriptions.Item label="年龄">28</Descriptions.Item>
      <Descriptions.Item label="性别">男</Descriptions.Item>
      <Descriptions.Item label="职业">工程师</Descriptions.Item>
      <Descriptions.Item label="邮箱">zhangsan@example.com</Descriptions.Item>
      <Descriptions.Item label="电话">13800138000</Descriptions.Item>
    </Descriptions>
  );
};

export default App;
```

## API

### Descriptions

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | `React.ReactNode` | - | 描述列表标题 |
| bordered | `boolean` | `false` | 是否显示边框 |
| column | `number` | `3` | 列数 |
| size | `'small' \| 'default' \| 'large'` | `'default'` | 尺寸 |
| className | `string` | `''` | 自定义类名 |
| style | `React.CSSProperties` | `{}` | 自定义样式 |
| children | `React.ReactNode` | - | 子元素，应该是Descriptions.Item |

### Descriptions.Item

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | `React.ReactNode` | - | 标签文本 |
| span | `number` | `1` | 占据的列数 |
| className | `string` | `''` | 自定义类名 |
| style | `React.CSSProperties` | `{}` | 自定义样式 |
| children | `React.ReactNode` | - | 内容 |