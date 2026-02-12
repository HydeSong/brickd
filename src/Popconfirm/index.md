# Popconfirm 确认气泡

确认气泡组件用于在用户执行操作前显示确认对话框，支持自定义标题、描述、按钮文本等属性。

## 代码演示

### 基本用法

```tsx
import React, { useState } from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmBasicDemo() {
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    setConfirmText('您点击了确定按钮');
  };

  return (
    <div>
      <Popconfirm 
        title="确认操作"
        description="您确定要执行此操作吗？"
        onConfirm={handleConfirm}
      >
        <Button type="primary">点击确认</Button>
      </Popconfirm>
      {confirmText && <p style={{ marginTop: '16px' }}>{confirmText}</p>}
    </div>
  );
}

export default PopconfirmBasicDemo;
```

### 不同触发方式

通过 `trigger` 属性设置不同的触发方式，支持 `click`、`hover` 和 `focus`。

```tsx
import React, { useState } from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmDifferentTriggerDemo() {
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    setConfirmText('您点击了确定按钮');
  };

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Popconfirm 
        title="确认操作"
        description="您确定要执行此操作吗？"
        onConfirm={handleConfirm}
        trigger="click"
      >
        <Button type="primary">点击触发</Button>
      </Popconfirm>
      <Popconfirm 
        title="确认操作"
        description="您确定要执行此操作吗？"
        onConfirm={handleConfirm}
        trigger="hover"
      >
        <Button type="default">悬停触发</Button>
      </Popconfirm>
    </div>
  );
}

export default PopconfirmDifferentTriggerDemo;
```

### 不同位置

通过 `placement` 属性设置气泡的位置，支持 `top`、`bottom`、`left` 和 `right`。

```tsx
import React, { useState } from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmDifferentPlacementDemo() {
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    setConfirmText('您点击了确定按钮');
  };

  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <Popconfirm 
        title="顶部确认" 
        onConfirm={handleConfirm}
        placement="top"
      >
        <Button type="primary">顶部</Button>
      </Popconfirm>
      <Popconfirm 
        title="底部确认" 
        onConfirm={handleConfirm}
        placement="bottom"
      >
        <Button type="primary">底部</Button>
      </Popconfirm>
      <div style={{ display: 'flex', gap: '24px' }}>
        <Popconfirm 
          title="左侧确认" 
          onConfirm={handleConfirm}
          placement="left"
        >
          <Button type="primary">左侧</Button>
        </Popconfirm>
        <Popconfirm 
          title="右侧确认" 
          onConfirm={handleConfirm}
          placement="right"
        >
          <Button type="primary">右侧</Button>
        </Popconfirm>
      </div>
    </div>
  );
}

export default PopconfirmDifferentPlacementDemo;
```

### 自定义按钮文本

通过 `okText` 和 `cancelText` 属性自定义确认和取消按钮的文本。

```tsx
import React, { useState } from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmCustomButtonTextDemo() {
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    setConfirmText('您点击了确认按钮');
  };

  return (
    <div>
      <Popconfirm 
        title="确认删除"
        description="您确定要删除此内容吗？"
        onConfirm={handleConfirm}
        okText="删除"
        cancelText="取消操作"
      >
        <Button type="danger">删除</Button>
      </Popconfirm>
      {confirmText && <p style={{ marginTop: '16px' }}>{confirmText}</p>}
    </div>
  );
}

export default PopconfirmCustomButtonTextDemo;
```

### 禁用状态

通过 `disabled` 属性禁用确认气泡。

```tsx
import React from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmDisabledDemo() {
  const handleConfirm = () => {
    console.log('确认操作');
  };

  return (
    <div>
      <Popconfirm 
        title="确认操作"
        description="您确定要执行此操作吗？"
        onConfirm={handleConfirm}
        disabled
      >
        <Button type="primary" disabled>禁用确认</Button>
      </Popconfirm>
    </div>
  );
}

export default PopconfirmDisabledDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义确认气泡的样式。

```tsx
import React, { useState } from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmCustomStyleDemo() {
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    setConfirmText('您点击了确定按钮');
  };

  return (
    <div>
      <Popconfirm 
        title="确认操作"
        description="您确定要执行此操作吗？"
        onConfirm={handleConfirm}
        style={{
          '--popconfirm-background': '#f0f9ff',
          '--popconfirm-border-color': '#1890ff',
        }}
      >
        <Button type="primary">自定义样式</Button>
      </Popconfirm>
      {confirmText && <p style={{ marginTop: '16px' }}>{confirmText}</p>}
    </div>
  );
}

export default PopconfirmCustomStyleDemo;
```

## API

### PopconfirmProps

| 属性          | 说明             | 类型                                  | 默认值   |
| ----------- | ---------------- | ------------------------------------- | -------- |
| title       | 确认标题         | `React.ReactNode`                     | -        |
| description | 确认描述         | `React.ReactNode`                     | -        |
| onConfirm   | 确认回调         | `() => void`                          | -        |
| onCancel    | 取消回调         | `() => void`                          | -        |
| okText      | 确认按钮文本     | `string`                              | `'确定'` |
| cancelText  | 取消按钮文本     | `string`                              | `'取消'` |
| placement   | 气泡位置         | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`  |
| trigger     | 触发方式         | `'click' \| 'hover' \| 'focus'`         | `'click'` |
| disabled    | 是否禁用         | `boolean`                             | `false`  |
| children    | 触发元素         | `React.ReactNode`                     | -        |
| className   | 自定义类名       | `string`                              | `''`     |
| style       | 自定义样式       | `React.CSSProperties`                 | `{}`     |