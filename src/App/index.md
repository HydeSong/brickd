---
title: App 包裹组件
order: 18
---

# App 包裹组件

应用根组件，用于包裹整个应用，提供全局上下文和样式。

## 代码演示

### 基本用法

```tsx
import { App, Button } from 'brickd';

function AppBasicDemo() {
  return (
    <App style={{ padding: 20, backgroundColor: '#f5f5f5' }}>
      <h1>应用标题</h1>
      <p>应用内容</p>
      <Button type="primary">按钮</Button>
    </App>
  );
}

export default AppBasicDemo;
```

### 带自定义类名

```tsx
import { App, Button } from 'brickd';

function AppCustomClassDemo() {
  return (
    <App className="custom-app">
      <h1>应用标题</h1>
      <p>应用内容</p>
      <Button type="primary">按钮</Button>
    </App>
  );
}

export default AppCustomClassDemo;
```

## API

### AppProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 子元素 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
