# Message 全局提示

全局提示，用于显示操作反馈信息。

## 安装

```bash
npm install brickd
```

## 用法

### 基础用法

```tsx
import Message from './index';
import Button from '../Button';
import Space from '../Space';

const App = () => {
  return (
    <Space>
      <Button onClick={() => Message.success('Success message')}>
        Success
      </Button>
      <Button onClick={() => Message.error('Error message')}>Error</Button>
      <Button onClick={() => Message.info('Info message')}>Info</Button>
      <Button onClick={() => Message.warning('Warning message')}>
        Warning
      </Button>
    </Space>
  );
};

export default App;
```

### 自定义配置

```tsx
import Message from './index';
import Button from '../Button';

const App = () => {
  const showMessage = () => {
    Message.info({
      content: 'Custom message',
      duration: 5000,
      showClose: true,
      onClose: () => {
        console.log('Message closed');
      },
    });
  };

  return <Button onClick={showMessage}>Custom Message</Button>;
};

export default App;
```

### 手动关闭

```tsx
import React, { useState } from 'react';
import Message from './index';
import Button from '../Button';
import Space from '../Space';

const App = () => {
  const [messageInstance, setMessageInstance] = useState<any>(null);

  const showMessage = () => {
    const instance = Message.info({
      content: 'Message that can be closed manually',
      duration: 0, // 0 表示不自动关闭
    });
    setMessageInstance(instance);
  };

  const closeMessage = () => {
    if (messageInstance) {
      messageInstance.close();
    }
  };

  const closeAll = () => {
    Message.closeAll();
  };

  return (
    <Space>
      <Button onClick={showMessage}>Show Message</Button>
      <Button onClick={closeMessage}>Close Message</Button>
      <Button onClick={closeAll}>Close All</Button>
    </Space>
  );
};

export default App;
```

## API

### Message.success(content | config)

显示成功提示

### Message.error(content | config)

显示错误提示

### Message.info(content | config)

显示信息提示

### Message.warning(content | config)

显示警告提示

### Message.closeAll()

关闭所有提示

### Config

| 参数      | 类型                  | 默认值 | 说明                                        |
| --------- | --------------------- | ------ | ------------------------------------------- |
| content   | `React.ReactNode`     | -      | 提示内容                                    |
| duration  | `number`              | `3000` | 自动关闭时间（毫秒），设置为 0 时不自动关闭 |
| showClose | `boolean`             | `true` | 是否显示关闭按钮                            |
| onClose   | `() => void`          | -      | 关闭时的回调函数                            |
| className | `string`              | -      | 自定义类名                                  |
| style     | `React.CSSProperties` | -      | 自定义样式                                  |

### 返回值

| 属性  | 类型         | 说明               |
| ----- | ------------ | ------------------ |
| close | `() => void` | 关闭当前提示的方法 |
