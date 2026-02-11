# Tooltip 文字提示

简单的文字提示气泡框，当鼠标悬停在元素上时显示。

## 基本用法

```tsx
import React from 'react';
import Tooltip from './index';

const App: React.FC = () => {
  return (
    <Tooltip title="这是一个提示">
      <span>鼠标悬停在这里</span>
    </Tooltip>
  );
};

export default App;
```

## 不同触发方式

```tsx
import React from 'react';
import Tooltip from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tooltip title="悬停触发" trigger="hover">
        <span style={{ margin: '0 10px' }}>悬停我</span>
      </Tooltip>

      <Tooltip title="点击触发" trigger="click">
        <span style={{ margin: '0 10px' }}>点击我</span>
      </Tooltip>

      <Tooltip title="聚焦触发" trigger="focus">
        <input type="text" placeholder="聚焦我" style={{ margin: '0 10px' }} />
      </Tooltip>
    </div>
  );
};

export default App;
```

## 不同位置

```tsx
import React from 'react';
import Tooltip from './index';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Tooltip title="顶部提示" placement="top">
          <span>顶部</span>
        </Tooltip>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Tooltip title="底部提示" placement="bottom">
          <span>底部</span>
        </Tooltip>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Tooltip title="左侧提示" placement="left">
          <span>左侧</span>
        </Tooltip>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Tooltip title="右侧提示" placement="right">
          <span>右侧</span>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
```

## 受控模式

```tsx
import React, { useState } from 'react';
import Tooltip from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Tooltip 
        title="受控提示" 
        visible={visible}
        onVisibleChange={setVisible}
      >
        <span>受控 tooltip</span>
      </Tooltip>

      <Button 
        onClick={() => setVisible(!visible)}
        style={{ marginLeft: '10px' }}
      >
        {visible ? '隐藏' : '显示'} 提示
      </Button>
    </div>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import Tooltip from './index';

const App: React.FC = () => {
  return (
    <Tooltip 
      title="自定义样式提示"
      overlayStyle={{ 
        backgroundColor: '#1890ff',
        borderRadius: '4px',
        padding: '8px 12px'
      }}
      overlayClassName="custom-tooltip"
    >
      <span>自定义样式</span>
    </Tooltip>
  );
};

export default App;
```

## 延迟显示

```tsx
import React from 'react';
import Tooltip from './index';

const App: React.FC = () => {
  return (
    <Tooltip title="延迟 1 秒显示" delay={1000}>
      <span>延迟显示提示</span>
    </Tooltip>
  );
};

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 提示内容 | React.ReactNode | - |
| children | 触发元素 | React.ReactNode | - |
| placement | 提示位置 | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' |
| trigger | 触发方式 | 'hover' \| 'focus' \| 'click' | 'hover' |
| visible | 受控可见性 | boolean | - |
| onVisibleChange | 可见性变化回调 | (visible: boolean) => void | - |
| delay | 显示延迟时间（毫秒） | number | 0 |
| overlayClassName | 提示框类名 | string | - |
| overlayStyle | 提示框样式 | React.CSSProperties | - |
| className | 触发元素类名 | string | - |
| style | 触发元素样式 | React.CSSProperties | - |