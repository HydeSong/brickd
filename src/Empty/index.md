# Empty 空状态

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
import Empty from 'brickd';
```

### 基本用法

```jsx
import React from 'react';
import Empty from 'brickd';

const App = () => {
  return <Empty description="暂无数据" />;
};

export default App;
```

### 自定义描述

```jsx
import React from 'react';
import Empty from 'brickd';

const App = () => {
  return (
    <Empty description="暂无消息，快去查看其他内容吧" />
  );
};

export default App;
```

### 自定义图片

```jsx
import React from 'react';
import Empty from 'brickd';

const App = () => {
  const customImage = (
    <svg 
      width="128" 
      height="128" 
      viewBox="0 0 128 128" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="64" fill="#F5F5F5"/>
      <path d="M40 64C40 50.7452 50.7452 40 64 40C77.2548 40 88 50.7452 88 64C88 77.2548 77.2548 88 64 88C50.7452 88 40 77.2548 40 64ZM64 76C70.6274 76 76 70.6274 76 64C76 57.3726 70.6274 52 64 52C57.3726 52 52 57.3726 52 64C52 70.6274 57.3726 76 64 76Z" fill="#D9D9D9"/>
      <path d="M56 92H72V96H56V92Z" fill="#D9D9D9"/>
    </svg>
  );

  return (
    <Empty 
      image={customImage} 
      description="暂无数据"
    />
  );
};

export default App;
```

### 带操作按钮

```jsx
import React from 'react';
import Empty from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <Empty description="暂无数据">
      <Button type="primary">刷新</Button>
    </Empty>
  );
};

export default App;
```

### 自定义样式

```jsx
import React from 'react';
import Empty from 'brickd';

const App = () => {
  return (
    <Empty 
      description="暂无数据" 
      className="custom-empty" 
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default App;
```

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 空状态描述 | React.ReactNode | - |
| image | 自定义图片 | React.ReactNode | 默认空状态图标 |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |
| children | 操作按钮或其他内容 | React.ReactNode | - |