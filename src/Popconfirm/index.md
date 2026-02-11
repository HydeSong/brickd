# Popconfirm 气泡确认框

气泡确认框，用于在用户执行操作前进行二次确认。

## 安装

```bash
npm install brickd
```

## 导入

```tsx
import { Popconfirm } from 'brickd';
```

## 用法

### 基础用法

```tsx
import React from 'react';
import { Popconfirm, Button } from 'brickd';

const App = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <Popconfirm
      title="Are you sure you want to delete this item?"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    >
      <Button danger>Delete</Button>
    </Popconfirm>
  );
};

export default App;
```

### 自定义按钮文本

```tsx
import React from 'react';
import { Popconfirm, Button } from 'brickd';

const App = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  return (
    <Popconfirm
      title="Are you sure?"
      onConfirm={handleConfirm}
      okText="Yes"
      cancelText="No"
    >
      <Button>Submit</Button>
    </Popconfirm>
  );
};

export default App;
```

### 带描述信息

```tsx
import React from 'react';
import { Popconfirm, Button } from 'brickd';

const App = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  return (
    <Popconfirm
      title="Delete Item"
      description="This action cannot be undone."
      onConfirm={handleConfirm}
    >
      <Button danger>Delete</Button>
    </Popconfirm>
  );
};

export default App;
```

### 不同触发方式

```tsx
import React from 'react';
import { Popconfirm, Button, Space } from 'brickd';

const App = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  return (
    <Space>
      <Popconfirm
        title="Click trigger"
        onConfirm={handleConfirm}
        trigger="click"
      >
        <Button>Click</Button>
      </Popconfirm>
      <Popconfirm
        title="Hover trigger"
        onConfirm={handleConfirm}
        trigger="hover"
      >
        <Button>Hover</Button>
      </Popconfirm>
    </Space>
  );
};

export default App;
```

### 不同位置

```tsx
import React from 'react';
import { Popconfirm, Button, Space } from 'brickd';

const App = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  return (
    <Space direction="vertical" size={20}>
      <Space>
        <Popconfirm
          title="Top"
          onConfirm={handleConfirm}
          placement="top"
        >
          <Button>Top</Button>
        </Popconfirm>
        <Popconfirm
          title="Left"
          onConfirm={handleConfirm}
          placement="left"
        >
          <Button>Left</Button>
        </Popconfirm>
        <Popconfirm
          title="Right"
          onConfirm={handleConfirm}
          placement="right"
        >
          <Button>Right</Button>
        </Popconfirm>
        <Popconfirm
          title="Bottom"
          onConfirm={handleConfirm}
          placement="bottom"
        >
          <Button>Bottom</Button>
        </Popconfirm>
      </Space>
    </Space>
  );
};

export default App;
```

### 禁用状态

```tsx
import React from 'react';
import { Popconfirm, Button } from 'brickd';

const App = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  return (
    <Popconfirm
      title="Are you sure?"
      onConfirm={handleConfirm}
      disabled
    >
      <Button disabled>Delete</Button>
    </Popconfirm>
  );
};

export default App;
```

## API

### Popconfirm

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | `React.ReactNode` | - | 确认框标题 |
| description | `React.ReactNode` | - | 确认框描述信息 |
| onConfirm | `() => void` | - | 确认回调函数 |
| onCancel | `() => void` | - | 取消回调函数 |
| okText | `string` | `确定` | 确认按钮文本 |
| cancelText | `string` | `取消` | 取消按钮文本 |
| placement | `'top' \| 'bottom' \| 'left' \| 'right'` | `top` | 气泡位置 |
| trigger | `'click' \| 'hover' \| 'focus'` | `click` | 触发方式 |
| disabled | `boolean` | `false` | 是否禁用 |
| children | `React.ReactNode` | - | 触发元素 |
| className | `string` | - | 类名 |
| style | `React.CSSProperties` | - | 样式 |