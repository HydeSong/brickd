# Notification 通知提醒框

通知提醒框，用于显示全局的通知提醒信息。

## 安装

```bash
npm install brickd
```

## 用法

### 基础用法

```tsx
import Notification from './index';
import Button from '../Button';
import Space from '../Space';

const App = () => {
  return (
    <Space>
      <Button onClick={() => Notification.success('Success notification')}>
        Success
      </Button>
      <Button onClick={() => Notification.error('Error notification')}>
        Error
      </Button>
      <Button onClick={() => Notification.info('Info notification')}>
        Info
      </Button>
      <Button onClick={() => Notification.warning('Warning notification')}>
        Warning
      </Button>
    </Space>
  );
};

export default App;
```

### 带标题和描述

```tsx
import Notification from './index';
import Button from '../Button';

const App = () => {
  const showNotification = () => {
    Notification.info({
      message: 'Notification Title',
      description: 'This is the notification description.',
      duration: 4500,
    });
  };

  return <Button onClick={showNotification}>Show Notification</Button>;
};

export default App;
```

### 自定义配置

```tsx
import Notification from './index';
import Button from '../Button';

const App = () => {
  const showNotification = () => {
    Notification.info({
      message: 'Custom Notification',
      description: 'Click this notification',
      onClick: () => {
        console.log('Notification clicked');
      },
      onClose: () => {
        console.log('Notification closed');
      },
      duration: 5000,
      showClose: true,
    });
  };

  return <Button onClick={showNotification}>Custom Notification</Button>;
};

export default App;
```

### 不同位置

```tsx
import Notification from './index';
import Button from '../Button';
import Space from '../Space';

const App = () => {
  return (
    <Space direction="vertical" size={12}>
      <Space>
        <Button
          onClick={() =>
            Notification.info({
              message: 'Top Right',
              placement: 'topRight',
            })
          }
        >
          Top Right
        </Button>
        <Button
          onClick={() =>
            Notification.info({
              message: 'Top Left',
              placement: 'topLeft',
            })
          }
        >
          Top Left
        </Button>
      </Space>
      <Space>
        <Button
          onClick={() =>
            Notification.info({
              message: 'Bottom Right',
              placement: 'bottomRight',
            })
          }
        >
          Bottom Right
        </Button>
        <Button
          onClick={() =>
            Notification.info({
              message: 'Bottom Left',
              placement: 'bottomLeft',
            })
          }
        >
          Bottom Left
        </Button>
      </Space>
    </Space>
  );
};

export default App;
```

### 手动关闭

```tsx
import React, { useState } from 'react';
import Notification from './index';
import Button from '../Button';
import Space from '../Space';

const App = () => {
  const [notificationInstance, setNotificationInstance] = useState<any>(null);

  const showNotification = () => {
    const instance = Notification.info({
      message: 'Persistent Notification',
      description: 'This notification won\'t close automatically',
      duration: 0, // 0 表示不自动关闭
    });
    setNotificationInstance(instance);
  };

  const closeNotification = () => {
    if (notificationInstance) {
      notificationInstance.close();
    }
  };

  const closeAll = () => {
    Notification.closeAll();
  };

  return (
    <Space>
      <Button onClick={showNotification}>Show Notification</Button>
      <Button onClick={closeNotification}>Close Notification</Button>
      <Button onClick={closeAll}>Close All</Button>
    </Space>
  );
};

export default App;
```

## API

### Notification.success(config)

显示成功通知

### Notification.error(config)

显示错误通知

### Notification.info(config)

显示信息通知

### Notification.warning(config)

显示警告通知

### Notification.closeAll()

关闭所有通知

### Config

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| message | `React.ReactNode` | - | 通知标题 |
| description | `React.ReactNode` | - | 通知描述 |
| duration | `number` | `4500` | 自动关闭时间（毫秒），设置为 0 时不自动关闭 |
| type | `'success' \| 'error' \| 'info' \| 'warning'` | `'info'` | 通知类型 |
| showClose | `boolean` | `true` | 是否显示关闭按钮 |
| onClose | `() => void` | - | 关闭时的回调函数 |
| onClick | `() => void` | - | 点击通知时的回调函数 |
| className | `string` | - | 自定义类名 |
| style | `React.CSSProperties` | - | 自定义样式 |
| placement | `'topRight' \| 'topLeft' \| 'bottomRight' \| 'bottomLeft'` | `'topRight'` | 通知位置 |

### 返回值

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| close | `() => void` | 关闭当前通知的方法 |