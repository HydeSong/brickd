---
title: ConfigProvider 全局化配置
order: 19
---

# ConfigProvider 全局化配置

全局化配置组件，用于为整个应用提供统一的配置。

## 代码演示

### 基本用法

```tsx
import { ConfigProvider, Button } from 'brickd';

function ConfigProviderBasicDemo() {
  return (
    <ConfigProvider>
      <div>
        <h1>全局配置示例</h1>
        <Button type="primary">按钮</Button>
      </div>
    </ConfigProvider>
  );
}

export default ConfigProviderBasicDemo;
```

### 自定义前缀

```tsx
import { ConfigProvider, Button } from 'brickd';

function ConfigProviderPrefixDemo() {
  return (
    <ConfigProvider prefixCls="my-app">
      <div>
        <h1>自定义前缀示例</h1>
        <Button type="primary">按钮</Button>
      </div>
    </ConfigProvider>
  );
}

export default ConfigProviderPrefixDemo;
```

### 深色主题

```tsx
import { ConfigProvider, Button } from 'brickd';

function ConfigProviderThemeDemo() {
  return (
    <ConfigProvider theme="dark">
      <div style={{ padding: 20, backgroundColor: '#333', color: '#fff' }}>
        <h1>深色主题示例</h1>
        <Button type="primary">按钮</Button>
      </div>
    </ConfigProvider>
  );
}

export default ConfigProviderThemeDemo;
```

## API

### ConfigProviderProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefixCls | 组件前缀 | `string` | `'brickd'` |
| theme | 主题模式 | `'light'  'dark'` | `'light'` |
| locale | 国际化配置 | `any` | `{}` |
| children | 子元素 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |

### useConfig Hook

```tsx
import { useConfig } from 'brickd';

function MyComponent() {
  const { prefixCls, theme, locale } = useConfig();
  return (
    <div>
      <p>前缀: {prefixCls}</p>
      <p>主题: {theme}</p>
    </div>
  );
}
```
