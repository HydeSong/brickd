# Popover 气泡卡片

### 安装依赖

```bash
# npm
npm install brickd

# yarn
yarn add brickd

# pnpm
pnpm add brickd
```

### 导入组件

```javascript
import Popover from 'brickd';
```

### 基本用法

```jsx
import React from 'react';
import Popover from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <Popover content="这是一个气泡卡片">
      <Button>点击触发</Button>
    </Popover>
  );
};

export default App;
```

### 不同触发方式

```jsx
import React from 'react';
import Popover from 'brickd';
import Button from 'brickd';
import Space from 'brickd';

const App = () => {
  return (
    <Space>
      <Popover content="点击触发" trigger="click">
        <Button>点击</Button>
      </Popover>
      <Popover content="悬停触发" trigger="hover">
        <Button>悬停</Button>
      </Popover>
      <Popover content="聚焦触发" trigger="focus">
        <Button>聚焦</Button>
      </Popover>
    </Space>
  );
};

export default App;
```

### 不同位置

```jsx
import React from 'react';
import Popover from 'brickd';
import Button from 'brickd';
import Space from 'brickd';

const App = () => {
  return (
    <Space direction="vertical" size={20}>
      <Space>
        <Popover content="顶部" placement="top">
          <Button>顶部</Button>
        </Popover>
      </Space>
      <Space>
        <Popover content="左侧" placement="left">
          <Button>左侧</Button>
        </Popover>
        <Popover content="右侧" placement="right">
          <Button>右侧</Button>
        </Popover>
      </Space>
      <Space>
        <Popover content="底部" placement="bottom">
          <Button>底部</Button>
        </Popover>
      </Space>
    </Space>
  );
};

export default App;
```

### 受控模式

```jsx
import React, { useState } from 'react';
import Popover from 'brickd';
import Button from 'brickd';
import Space from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Space>
      <Popover 
        content="受控气泡卡片" 
        visible={visible} 
        onVisibleChange={setVisible}
      >
        <Button>点击触发</Button>
      </Popover>
      <Button 
        type="primary" 
        onClick={() => setVisible(!visible)}
      >
        {visible ? '隐藏' : '显示'}
      </Button>
    </Space>
  );
};

export default App;
```

### 自定义内容

```jsx
import React from 'react';
import Popover from 'brickd';
import Button from 'brickd';

const App = () => {
  const customContent = (
    <div style={{ padding: '8px' }}>
      <p>自定义内容</p>
      <Button size="small" style={{ marginTop: '8px' }}>操作</Button>
    </div>
  );

  return (
    <Popover content={customContent}>
      <Button>自定义内容</Button>
    </Popover>
  );
};

export default App;
```

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 气泡卡片内容 | React.ReactNode | - |
| trigger | 触发方式 | 'click' \| 'hover' \| 'focus' | 'click' |
| placement | 气泡卡片位置 | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' |
| visible | 当前是否可见（受控） | boolean | - |
| defaultVisible | 默认是否可见 | boolean | false |
| onVisibleChange | 可见性变化时的回调函数 | (visible: boolean) => void | - |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |
| children | 触发元素 | React.ReactNode | - |