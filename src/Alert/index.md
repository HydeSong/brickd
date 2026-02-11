# Alert 警告提示

用于页面中展示重要的提示信息。

## 安装

```bash
npm install brickd
```

## 导入

```jsx
import Alert from 'brickd';
```

## 基本用法

### 四种类型

```jsx
import React from 'react';
import Alert from 'brickd';

const App = () => {
  return (
    <div>
      <Alert type="info" message="这是一条信息提示" />
      <Alert type="success" message="这是一条成功提示" />
      <Alert type="warning" message="这是一条警告提示" />
      <Alert type="error" message="这是一条错误提示" />
    </div>
  );
};

export default App;
```

### 带有描述信息

```jsx
import React from 'react';
import Alert from 'brickd';

const App = () => {
  return (
    <Alert
      type="info"
      message="这是一条带有描述信息的提示"
      description="这里是详细的描述信息，可以包含更多内容。"
    />
  );
};

export default App;
```

### 可关闭的提示

```jsx
import React from 'react';
import Alert from 'brickd';

const App = () => {
  const handleClose = () => {
    console.log('Alert closed');
  };

  return (
    <Alert
      type="info"
      message="这是一条可关闭的提示"
      closable
      onClose={handleClose}
    />
  );
};

export default App;
```

### 不可关闭的提示

```jsx
import React from 'react';
import Alert from 'brickd';

const App = () => {
  return (
    <Alert
      type="info"
      message="这是一条不可关闭的提示"
      closable={false}
    />
  );
};

export default App;
```

## API

### AlertProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | 提示类型 |
| `message` | `React.ReactNode` | - | 提示标题 |
| `description` | `React.ReactNode` | - | 提示描述 |
| `closable` | `boolean` | `true` | 是否可关闭 |
| `onClose` | `() => void` | - | 关闭时的回调函数 |
| `className` | `string` | `''` | 自定义类名 |
| `style` | `React.CSSProperties` | `{}` | 自定义样式 |

## 样式

组件使用 CSS Modules 进行样式管理，主要类名如下：

| 类名 | 说明 |
| --- | --- |
| `alert` | 基础提示框类名 |
| `alertInfo` | 信息提示类名 |
| `alertSuccess` | 成功提示类名 |
| `alertWarning` | 警告提示类名 |
| `alertError` | 错误提示类名 |
| `alertCompact` | 紧凑样式类名 |
| `alertNoIcon` | 无图标样式类名 |
| `alertBanner` | 横幅样式类名 |

## 示例

### 自定义样式

```jsx
import React from 'react';
import Alert from 'brickd';

const App = () => {
  return (
    <Alert
      type="info"
      message="这是一条自定义样式的提示"
      style={{ width: '500px', margin: '0 auto' }}
      className="custom-alert"
    />
  );
};

export default App;
```