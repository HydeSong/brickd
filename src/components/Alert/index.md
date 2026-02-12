# Alert 警告提示

警告提示组件，用于页面中展示重要的提示信息。

## 代码演示

### 四种类型

Alert 支持四种类型：`info`、`success`、`warning` 和 `error`。

```tsx
import Alert from './index';

function AlertTypeDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert type="info" message="这是一条信息提示" />
      <Alert type="success" message="这是一条成功提示" />
      <Alert type="warning" message="这是一条警告提示" />
      <Alert type="error" message="这是一条错误提示" />
    </div>
  );
}

export default AlertTypeDemo;
```

### 带有描述信息

通过 `description` 属性设置详细的描述信息。

```tsx
import Alert from './index';

function AlertDescriptionDemo() {
  return (
    <Alert
      type="info"
      message="这是一条带有描述信息的提示"
      description="这里是详细的描述信息，可以包含更多内容。"
    />
  );
}

export default AlertDescriptionDemo;
```

### 可关闭的提示

通过 `closable` 属性设置提示是否可关闭，默认值为 `true`。

```tsx
import Alert from './index';
import { useState } from 'react';

function AlertClosableDemo() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    console.log('Alert closed');
  };

  if (!visible) {
    return <button onClick={() => setVisible(true)}>重新显示</button>;
  }

  return (
    <Alert
      type="info"
      message="这是一条可关闭的提示"
      closable
      onClose={handleClose}
    />
  );
}

export default AlertClosableDemo;
```

### 不可关闭的提示

通过 `closable={false}` 设置提示为不可关闭状态。

```tsx
import Alert from './index';

function AlertNotClosableDemo() {
  return (
    <Alert type="info" message="这是一条不可关闭的提示" closable={false} />
  );
}

export default AlertNotClosableDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义提示的样式。

```tsx
import Alert from './index';

function AlertCustomStyleDemo() {
  return (
    <Alert
      type="info"
      message="这是一条自定义样式的提示"
      style={{ width: '500px', margin: '0 auto' }}
    />
  );
}

export default AlertCustomStyleDemo;
```

## API

### AlertProps

| 属性        | 说明             | 类型                                          | 默认值   |
| ----------- | ---------------- | --------------------------------------------- | -------- |
| type        | 提示类型         | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| message     | 提示标题         | `React.ReactNode`                             | -        |
| description | 提示描述         | `React.ReactNode`                             | -        |
| closable    | 是否可关闭       | `boolean`                                     | `true`   |
| onClose     | 关闭时的回调函数 | `() => void`                                  | -        |
| className   | 自定义类名       | `string`                                      | `''`     |
| style       | 自定义样式       | `React.CSSProperties`                         | `{}`     |
