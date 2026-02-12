# Modal 对话框

对话框组件用于显示重要的信息或需要用户交互的内容，支持自定义标题、内容、底部按钮等。

## 代码演示

### 基本用法

```tsx
import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalBasicDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开对话框
      </Button>
      <Modal
        visible={visible}
        title="基本对话框"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>这是一个基本的对话框内容。</p>
        <p>可以在此添加更多内容。</p>
      </Modal>
    </div>
  );
}

export default ModalBasicDemo;
```

### 自定义宽度

通过 `width` 属性自定义对话框的宽度。

```tsx
import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalCustomWidthDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开宽对话框
      </Button>
      <Modal
        visible={visible}
        title="自定义宽度对话框"
        width={800}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>这是一个宽度为800px的对话框。</p>
        <p>可以根据需要设置不同的宽度值。</p>
      </Modal>
    </div>
  );
}

export default ModalCustomWidthDemo;
```

### 无遮罩

通过 `mask={false}` 禁用遮罩层。

```tsx
import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalNoMaskDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开无遮罩对话框
      </Button>
      <Modal
        visible={visible}
        title="无遮罩对话框"
        mask={false}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>这是一个没有遮罩层的对话框。</p>
      </Modal>
    </div>
  );
}

export default ModalNoMaskDemo;
```

### 遮罩不可点击

通过 `maskClosable={false}` 设置遮罩层点击不关闭对话框。

```tsx
import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalMaskNotClosableDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开遮罩不可点击对话框
      </Button>
      <Modal
        visible={visible}
        title="遮罩不可点击对话框"
        maskClosable={false}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>点击遮罩层不会关闭此对话框。</p>
        <p>只能通过点击按钮或关闭图标关闭。</p>
      </Modal>
    </div>
  );
}

export default ModalMaskNotClosableDemo;
```

### 确认加载状态

通过 `confirmLoading` 属性设置确认按钮的加载状态。

```tsx
import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalConfirmLoadingDemo() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    // 模拟异步操作
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开带加载状态的对话框
      </Button>
      <Modal
        visible={visible}
        title="带加载状态的对话框"
        confirmLoading={loading}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <p>点击确定按钮后，会显示加载状态。</p>
        <p>模拟异步操作完成后，对话框会关闭。</p>
      </Modal>
    </div>
  );
}

export default ModalConfirmLoadingDemo;
```

### 自定义底部

通过 `footer` 属性自定义对话框的底部按钮。

```tsx
import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalCustomFooterDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开自定义底部对话框
      </Button>
      <Modal
        visible={visible}
        title="自定义底部对话框"
        footer={
          <>
            <Button onClick={() => setVisible(false)}>
              知道了
            </Button>
          </>
        }
        onCancel={() => setVisible(false)}
      >
        <p>这是一个只有一个按钮的对话框。</p>
      </Modal>
    </div>
  );
}

export default ModalCustomFooterDemo;
```

### 无标题

通过不设置 `title` 属性创建无标题的对话框。

```tsx
import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalNoTitleDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开无标题对话框
      </Button>
      <Modal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>这是一个没有标题的对话框。</p>
      </Modal>
    </div>
  );
}

export default ModalNoTitleDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义对话框的样式。

```tsx
import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalCustomStyleDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开自定义样式对话框
      </Button>
      <Modal
        visible={visible}
        title="自定义样式对话框"
        style={{
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        }}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>这是一个带有自定义样式的对话框。</p>
        <p>可以通过style属性设置各种样式。</p>
      </Modal>
    </div>
  );
}

export default ModalCustomStyleDemo;
```

## API

### ModalProps

| 属性          | 说明             | 类型                                  | 默认值   |
| ----------- | ---------------- | ------------------------------------- | -------- |
| visible     | 是否可见         | `boolean`                             | `false`  |
| onOk        | 确定按钮点击回调 | `() => void`                          | -        |
| onCancel    | 取消按钮点击回调 | `() => void`                          | -        |
| title       | 对话框标题       | `React.ReactNode`                     | -        |
| children    | 对话框内容       | `React.ReactNode`                     | -        |
| footer      | 底部按钮         | `React.ReactNode`                     | -        |
| mask        | 是否显示遮罩层   | `boolean`                             | `true`   |
| maskClosable | 点击遮罩层是否关闭 | `boolean`                             | `true`   |
| confirmLoading | 确认按钮是否加载中 | `boolean`                             | `false`  |
| width       | 对话框宽度       | `number`                              | `520`    |
| zIndex      | 对话框层级       | `number`                              | `1000`   |
| className   | 自定义类名       | `string`                              | `''`     |
| style       | 自定义样式       | `React.CSSProperties`                 | `{}`     |
| keyboard    | 是否支持键盘ESC关闭 | `boolean`                             | `true`   |
| wrapClassName | 对话框包装器类名 | `string`                              | `''`     |