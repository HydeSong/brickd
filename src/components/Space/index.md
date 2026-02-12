# Space 间距

间距组件，用于在子元素之间添加统一的间距。

## 基本用法

```tsx
import React from 'react';
import { Space, Button } from 'brickd';

export default () => (
  <Space>
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
  </Space>
);
```

## 垂直方向

```tsx
import React from 'react';
import { Space, Button } from 'brickd';

export default () => (
  <Space direction="vertical">
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
  </Space>
);
```

## 不同尺寸

```tsx
import React from 'react';
import { Space, Button } from 'brickd';

export default () => (
  <div>
    <Space size="small">
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
    <Space size="middle" style={{ marginTop: '16px' }}>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
    <Space size="large" style={{ marginTop: '16px' }}>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  </div>
);
```

## 自定义尺寸

```tsx
import React from 'react';
import { Space, Button } from 'brickd';

export default () => (
  <Space size={24}>
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
  </Space>
);
```

## 自动换行

```tsx
import React from 'react';
import { Space, Button } from 'brickd';

export default () => (
  <Space wrap style={{ width: '300px' }}>
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
    <Button>按钮4</Button>
    <Button>按钮5</Button>
  </Space>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Space, Button } from 'brickd';

export default () => (
  <Space
    className="custom-space"
    style={{
      padding: '16px',
      border: '1px solid #d9d9d9',
      borderRadius: '4px',
    }}
  >
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
  </Space>
);
```

## 与其他组件配合

```tsx
import React from 'react';
import { Space, Input, Select, Button } from 'brickd';

export default () => (
  <Space>
    <Input placeholder="请输入" style={{ width: 200 }} />
    <Select
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
      ]}
      style={{ width: 120 }}
    />
    <Button type="primary">搜索</Button>
  </Space>
);
```

## API

| 属性      | 说明         | 类型                                       | 默认值         |
| --------- | ------------ | ------------------------------------------ | -------------- |
| direction | 间距方向     | `'horizontal' \| 'vertical'`               | `'horizontal'` |
| size      | 间距大小     | `'small' \| 'middle' \| 'large' \| number` | `'middle'`     |
| wrap      | 是否自动换行 | `boolean`                                  | `false`        |
| className | 自定义类名   | `string`                                   | `undefined`    |
| children  | 子元素       | `React.ReactNode`                          | `undefined`    |
