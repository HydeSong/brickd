# App 应用容器

应用容器组件，是一个简单的容器组件，用于包裹应用的根元素。

## 代码演示

### 基础用法

最简单的用法，作为应用的根容器。

```tsx
import App from './index';
import Button from '../Button';

function AppBasicDemo() {
  return (
    <App>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Brickd</h1>
        <p>This is a simple app container.</p>
        <Button type="primary">Click Me</Button>
      </div>
    </App>
  );
}

export default AppBasicDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义容器样式。

```tsx
import App from './index';
import Button from '../Button';

function AppCustomStyleDemo() {
  return (
    <App
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        background: '#f5f5f5',
        borderRadius: '8px',
      }}
    >
      <h1>Custom App Container</h1>
      <p>This app container has custom styles.</p>
      <Button type="primary">Click Me</Button>
    </App>
  );
}

export default AppCustomStyleDemo;
```

## API

### AppProps

| 属性      | 说明       | 类型                  | 默认值 |
| --------- | ---------- | --------------------- | ------ |
| children  | 子元素     | `React.ReactNode`     | -      |
| className | 自定义类名 | `string`              | `''`   |
| style     | 自定义样式 | `React.CSSProperties` | `{}`   |
