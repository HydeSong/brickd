---
title: Tooltip
nav: components
order: 53
---

# Tooltip

提示框组件，用于在鼠标悬停、聚焦或点击时显示提示信息。

## 基本用法

最简单的提示框使用方式。

```tsx
import React from 'react';
import Tooltip from './index';

const App: React.FC = () => {
  return (
    <Tooltip title="这是一个提示信息">
      <span>鼠标悬停查看提示</span>
    </Tooltip>
  );
};

export default App;
```

## 不同位置

提示框支持四种位置：top、bottom、left 和 right。

```tsx
import React from 'react';
import Tooltip from './index';
import Space from '../Space';

const App: React.FC = () => {
  return (
    <Space direction="vertical" size={20}>
      <Space>
        <Tooltip title="顶部提示" placement="top">
          <span>顶部提示</span>
        </Tooltip>
        <Tooltip title="底部提示" placement="bottom">
          <span>底部提示</span>
        </Tooltip>
        <Tooltip title="左侧提示" placement="left">
          <span>左侧提示</span>
        </Tooltip>
        <Tooltip title="右侧提示" placement="right">
          <span>右侧提示</span>
        </Tooltip>
      </Space>
    </Space>
  );
};

export default App;
```

## 不同触发方式

提示框支持三种触发方式：hover、focus 和 click。

```tsx
import React from 'react';
import Tooltip from './index';
import Space from '../Space';

const App: React.FC = () => {
  return (
    <Space direction="vertical" size={20}>
      <Space>
        <Tooltip title="悬停触发" trigger="hover">
          <span>悬停触发</span>
        </Tooltip>
        <Tooltip title="聚焦触发" trigger="focus">
          <input style={{ width: 100 }} placeholder="点击输入框" />
        </Tooltip>
        <Tooltip title="点击触发" trigger="click">
          <span>点击触发</span>
        </Tooltip>
      </Space>
    </Space>
  );
};

export default App;
```

## 受控模式

通过状态控制提示框的显示和隐藏。

```tsx
import React, { useState } from 'react';
import Tooltip from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Tooltip
        title="受控提示框"
        visible={visible}
        onVisibleChange={setVisible}
      >
        <span>受控提示框</span>
      </Tooltip>
      <Button onClick={() => setVisible(!visible)}>
        {visible ? '隐藏提示' : '显示提示'}
      </Button>
    </div>
  );
};

export default App;
```

## 延迟显示

设置提示框的显示延迟时间。

```tsx
import React from 'react';
import Tooltip from './index';

const App: React.FC = () => {
  return (
    <Tooltip title="延迟 1 秒显示" delay={1000}>
      <span>鼠标悬停 1 秒后显示提示</span>
    </Tooltip>
  );
};

export default App;
```

## 自定义样式

通过 overlayClassName 和 overlayStyle 属性自定义提示框样式。

```tsx
import React from 'react';
import Tooltip from './index';

const App: React.FC = () => {
  return (
    <Tooltip
      title="自定义样式提示"
      overlayStyle={{
        backgroundColor: '#1890ff',
        borderRadius: '8px',
        padding: '8px 12px',
        fontSize: '14px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }}
    >
      <span>自定义样式提示</span>
    </Tooltip>
  );
};

export default App;
```

## 复杂内容

提示框包含复杂内容。

```tsx
import React from 'react';
import Tooltip from './index';
import Icon from '../Icon';

const App: React.FC = () => {
  return (
    <Tooltip
      title={
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
            <Icon name="info" size={16} style={{ marginRight: '4px' }} />
            <strong>提示信息</strong>
          </div>
          <p style={{ margin: 0, fontSize: '12px' }}>
            这是一个包含多行文本和图标的复杂提示框
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#666' }}>
            可以根据需要添加任意内容
          </p>
        </div>
      }
    >
      <span>复杂内容提示</span>
    </Tooltip>
  );
};

export default App;
```

## 结合其他组件

与按钮、链接等组件结合使用。

```tsx
import React from 'react';
import Tooltip from './index';
import Button from '../Button';
import Space from '../Space';

const App: React.FC = () => {
  return (
    <Space direction="vertical" size={20}>
      <Space>
        <Tooltip title="主要按钮提示">
          <Button type="primary">主要按钮</Button>
        </Tooltip>
        <Tooltip title="次要按钮提示">
          <Button type="default">次要按钮</Button>
        </Tooltip>
        <Tooltip title="文本按钮提示">
          <Button type="text">文本按钮</Button>
        </Tooltip>
        <Tooltip title="链接提示">
          <a href="#">链接</a>
        </Tooltip>
      </Space>
    </Space>
  );
};

export default App;
```

## API

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | React.ReactNode | - | 提示内容 |
| children | React.ReactNode | - | 触发提示的元素 |
| placement | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | 提示框位置 |
| trigger | 'hover' \| 'focus' \| 'click' | 'hover' | 触发方式 |
| visible | boolean | - | 受控模式下的显示状态 |
| onVisibleChange | (visible: boolean) => void | - | 显示状态变化时的回调函数 |
| delay | number | 0 | 显示延迟时间（毫秒） |
| overlayClassName | string | - | 提示框自定义类名 |
| overlayStyle | React.CSSProperties | - | 提示框自定义样式 |
| className | string | - | 触发元素自定义类名 |
| style | React.CSSProperties | - | 触发元素自定义样式 |