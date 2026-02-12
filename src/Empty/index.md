---
title: Empty
order: 1
---

# Empty 空状态

用于展示空状态，如空数据、无结果等场景。

## 基本用法

```tsx
import React from 'react';
import Empty from '../Empty';

const App: React.FC = () => {
  return (
    <div>
      <Empty />
    </div>
  );
};

export default App;
```

## 自定义描述

```tsx
import React from 'react';
import Empty from '../Empty';

const App: React.FC = () => {
  return (
    <div>
      <Empty description="暂无数据" />
    </div>
  );
};

export default App;
```

## 自定义图片

```tsx
import React from 'react';
import Empty from '../Empty';

const App: React.FC = () => {
  const customImage = (
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="8" fill="#f0f5ff"/>
      <path d="M64 32C50.7452 32 40 42.7452 40 56C40 69.2548 50.7452 80 64 80C77.2548 80 88 69.2548 88 56C88 42.7452 77.2548 32 64 32ZM64 72C55.1634 72 48 64.8366 48 56C48 47.1634 55.1634 40 64 40C72.8366 40 80 47.1634 80 56C80 64.8366 72.8366 72 64 72Z" fill="#adc6ff"/>
      <path d="M64 96C60.6863 96 58 93.3137 58 90H70C70 93.3137 67.3137 96 64 96Z" fill="#adc6ff"/>
    </svg>
  );

  return (
    <div>
      <Empty image={customImage} description="暂无数据" />
    </div>
  );
};

export default App;
```

## 带操作按钮

```tsx
import React from 'react';
import Empty from '../Empty';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <div>
      <Empty description="暂无数据">
        <Button type="primary">刷新</Button>
      </Empty>
    </div>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import Empty from '../Empty';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <div>
      <Empty 
        description="暂无数据"
        style={{ 
          backgroundColor: '#f9f0ff', 
          padding: 40, 
          borderRadius: 8 
        }}
      >
        <Button type="primary" style={{ backgroundColor: '#722ed1' }}>
          重新加载
        </Button>
      </Empty>
    </div>
  );
};

export default App;
```

## API

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| description | `React.ReactNode` | - | 描述文本 |
| image | `React.ReactNode` | - | 自定义图片 |
| className | `string` | `''` | 自定义类名 |
| style | `React.CSSProperties` | `{}` | 自定义样式 |
| children | `React.ReactNode` | - | 操作按钮等子元素 |