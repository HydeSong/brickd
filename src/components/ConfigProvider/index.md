---
title: ConfigProvider
order: 1
---

# ConfigProvider 全局配置

用于全局配置组件库的行为和样式。

## 基本用法

```tsx
import React from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <Button type="primary">按钮</Button>
    </ConfigProvider>
  );
};

export default App;
```

## 自定义前缀类名

```tsx
import React from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <ConfigProvider prefixCls="custom">
      <Button type="primary">自定义前缀类名</Button>
    </ConfigProvider>
  );
};

export default App;
```

## 主题切换

```tsx
import React, { useState } from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../Button';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ConfigProvider theme={theme}>
      <div>
        <Button
          type="primary"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          切换到{theme === 'light' ? '深色' : '浅色'}主题
        </Button>
        <p>当前主题: {theme}</p>
      </div>
    </ConfigProvider>
  );
};

export default App;
```

## 国际化配置

```tsx
import React from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../Button';

const zhCN = {
  ok: '确定',
  cancel: '取消',
  // 其他国际化配置
};

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Button type="primary">国际化配置</Button>
    </ConfigProvider>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <ConfigProvider
      style={{
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
      }}
    >
      <Button type="primary">自定义样式</Button>
    </ConfigProvider>
  );
};

export default App;
```

## API

| 属性      | 类型                  | 默认值     | 说明         |
| --------- | --------------------- | ---------- | ------------ |
| prefixCls | `string`              | `'brickd'` | 组件前缀类名 |
| theme     | `'light' \| 'dark'`   | `'light'`  | 主题模式     |
| locale    | `any`                 | `{}`       | 国际化配置   |
| children  | `ReactNode`           | -          | 子元素       |
| className | `string`              | `''`       | 自定义类名   |
| style     | `React.CSSProperties` | `{}`       | 自定义样式   |

## useConfig Hook

`ConfigProvider` 提供了 `useConfig` Hook，用于在子组件中获取配置信息：

```tsx
import { useConfig } from '../ConfigProvider';

const MyComponent: React.FC = () => {
  const { prefixCls, theme, locale } = useConfig();

  return (
    <div>
      <p>前缀类名: {prefixCls}</p>
      <p>主题: {theme}</p>
      <p>国际化: {JSON.stringify(locale)}</p>
    </div>
  );
};
```
