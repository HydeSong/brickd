---
title: FloatButton
order: 1
---

# FloatButton 浮动按钮

用于页面右下角的浮动操作按钮，通常用于触发主要操作。

## 基本用法

```tsx
import React from 'react';
import FloatButton from '../FloatButton';

const App: React.FC = () => {
  return (
    <FloatButton onClick={() => console.log('点击了浮动按钮')}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M5 12H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </FloatButton>
  );
};

export default App;
```

## 自定义图标

```tsx
import React from 'react';
import FloatButton from '../FloatButton';

const App: React.FC = () => {
  return (
    <FloatButton onClick={() => console.log('点击了浮动按钮')}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8V16M16 12H8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </FloatButton>
  );
};

export default App;
```

## 自定义位置

```tsx
import React from 'react';
import FloatButton from '../FloatButton';

const App: React.FC = () => {
  return (
    <div>
      <FloatButton
        onClick={() => console.log('右下角按钮')}
        position={{ bottom: '24px', right: '24px' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatButton>

      <FloatButton
        onClick={() => console.log('左下角按钮')}
        position={{ bottom: '24px', left: '24px' }}
        type="default"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatButton>
    </div>
  );
};

export default App;
```

## 不同尺寸

```tsx
import React from 'react';
import FloatButton from '../FloatButton';

const App: React.FC = () => {
  return (
    <div>
      <FloatButton
        onClick={() => console.log('小尺寸按钮')}
        size="small"
        position={{ bottom: '24px', right: '24px' }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatButton>

      <FloatButton
        onClick={() => console.log('默认尺寸按钮')}
        size="default"
        position={{ bottom: '24px', right: '80px' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatButton>

      <FloatButton
        onClick={() => console.log('大尺寸按钮')}
        size="large"
        position={{ bottom: '24px', right: '136px' }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatButton>
    </div>
  );
};

export default App;
```

## 不同类型

```tsx
import React from 'react';
import FloatButton from '../FloatButton';

const App: React.FC = () => {
  return (
    <div>
      <FloatButton
        onClick={() => console.log('主要按钮')}
        type="primary"
        position={{ bottom: '24px', right: '24px' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatButton>

      <FloatButton
        onClick={() => console.log('默认按钮')}
        type="default"
        position={{ bottom: '24px', right: '80px' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatButton>
    </div>
  );
};

export default App;
```

## 不同形状

```tsx
import React from 'react';
import FloatButton from '../FloatButton';

const App: React.FC = () => {
  return (
    <div>
      <FloatButton
        onClick={() => console.log('圆形按钮')}
        shape="circle"
        position={{ bottom: '24px', right: '24px' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatButton>

      <FloatButton
        onClick={() => console.log('方形按钮')}
        shape="square"
        position={{ bottom: '24px', right: '80px' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatButton>
    </div>
  );
};

export default App;
```

## 禁用状态

```tsx
import React from 'react';
import FloatButton from '../FloatButton';

const App: React.FC = () => {
  return (
    <FloatButton
      onClick={() => console.log('点击了禁用按钮')}
      disabled
      position={{ bottom: '24px', right: '24px' }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M5 12H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </FloatButton>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import FloatButton from '../FloatButton';

const App: React.FC = () => {
  return (
    <FloatButton
      onClick={() => console.log('点击了自定义样式按钮')}
      style={{
        backgroundColor: '#722ed1',
        boxShadow: '0 4px 12px rgba(114, 46, 209, 0.4)',
        border: '2px solid #f0f0f0',
      }}
      position={{ bottom: '24px', right: '24px' }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M5 12H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </FloatButton>
  );
};

export default App;
```

## API

| 属性      | 类型                                                               | 默认值                              | 说明       |
| --------- | ------------------------------------------------------------------ | ----------------------------------- | ---------- |
| icon      | `React.ReactNode`                                                  | -                                   | 按钮图标   |
| onClick   | `() => void`                                                       | -                                   | 点击回调   |
| position  | `{ bottom?: string; right?: string; left?: string; top?: string }` | `{ bottom: '24px', right: '24px' }` | 按钮位置   |
| size      | `'small' \| 'default' \| 'large'`                                  | `'default'`                         | 按钮尺寸   |
| type      | `'primary' \| 'default'`                                           | `'primary'`                         | 按钮类型   |
| shape     | `'circle' \| 'square'`                                             | `'circle'`                          | 按钮形状   |
| className | `string`                                                           | `''`                                | 自定义类名 |
| style     | `React.CSSProperties`                                              | `{}`                                | 自定义样式 |
| disabled  | `boolean`                                                          | `false`                             | 是否禁用   |
