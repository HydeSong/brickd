# Modal 对话框

模态对话框，在当前页面浮层中显示，用于处理需要用户注意或输入的任务。

## 安装

```bash
npm install brickd
```

## 导入

```tsx
import { Modal } from 'brickd';
```

## 用法

### 基础用法

```tsx
import React, { useState } from 'react';
import { Modal, Button } from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>打开对话框</Button>
      <Modal
        visible={visible}
        title="提示"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>这是一个对话框</p>
      </Modal>
    </>
  );
};

export default App;
```

### 自定义页脚

```tsx
import React, { useState } from 'react';
import { Modal, Button } from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>自定义页脚</Button>
      <Modal
        visible={visible}
        title="提示"
        onCancel={() => setVisible(false)}
        footer={
          <>
            <Button onClick={() => setVisible(false)}>关闭</Button>
            <Button type="primary" onClick={() => setVisible(false)}>
              确认
            </Button>
          </>
        }
      >
        <p>这是一个自定义页脚的对话框</p>
      </Modal>
    </>
  );
};

export default App;
```

### 加载状态

```tsx
import React, { useState } from 'react';
import { Modal, Button } from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <Button onClick={() => setVisible(true)}>打开对话框</Button>
      <Modal
        visible={visible}
        title="提示"
        onCancel={() => setVisible(false)}
        onOk={handleOk}
        confirmLoading={confirmLoading}
      >
        <p>点击确定后将显示加载状态</p>
      </Modal>
    </>
  );
};

export default App;
```

### 禁用点击遮罩关闭

```tsx
import React, { useState } from 'react';
import { Modal, Button } from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>禁用点击遮罩关闭</Button>
      <Modal
        visible={visible}
        title="提示"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        maskClosable={false}
      >
        <p>点击遮罩不会关闭对话框</p>
      </Modal>
    </>
  );
};

export default App;
```

## API

### Modal

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| visible | `boolean` | `false` | 对话框是否可见 |
| onCancel | `() => void` | - | 取消按钮回调 |
| onOk | `() => void` | - | 确定按钮回调 |
| title | `React.ReactNode` | - | 对话框标题 |
| children | `React.ReactNode` | - | 对话框内容 |
| footer | `React.ReactNode` | - | 自定义页脚 |
| mask | `boolean` | `true` | 是否显示遮罩 |
| maskClosable | `boolean` | `true` | 点击遮罩是否可以关闭对话框 |
| confirmLoading | `boolean` | `false` | 确定按钮是否显示加载状态 |
| width | `string \| number` | `520` | 对话框宽度 |
| zIndex | `number` | `1000` | 对话框层级 |
| destroyOnClose | `boolean` | `false` | 关闭时是否销毁对话框 |
| className | `string` | - | 对话框类名 |
| style | `React.CSSProperties` | - | 对话框样式 |
| keyboard | `boolean` | `true` | 是否支持键盘 Esc 关闭 |
| wrapClassName | `string` | - | 对话框容器类名 |