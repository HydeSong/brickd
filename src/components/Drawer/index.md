---
title: Drawer
order: 1
---

# Drawer 抽屉

用于从屏幕边缘滑出的面板，承载临时的操作或信息。

## 基本用法

```tsx
import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开抽屉
      </Button>
      <Drawer title="基本抽屉" visible={visible} onVisibleChange={setVisible}>
        <p>抽屉内容</p>
        <p>更多内容</p>
        <p>可以放置任何组件</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## 不同方向

```tsx
import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<
    'top' | 'right' | 'bottom' | 'left'
  >('right');

  const showDrawer = (direction: 'top' | 'right' | 'bottom' | 'left') => {
    setPlacement(direction);
    setVisible(true);
  };

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Button onClick={() => showDrawer('top')}>从上弹出</Button>
        <Button style={{ marginLeft: 10 }} onClick={() => showDrawer('right')}>
          从右弹出
        </Button>
        <Button style={{ marginLeft: 10 }} onClick={() => showDrawer('bottom')}>
          从下弹出
        </Button>
        <Button style={{ marginLeft: 10 }} onClick={() => showDrawer('left')}>
          从左弹出
        </Button>
      </div>
      <Drawer
        title={`从${
          { top: '上', right: '右', bottom: '下', left: '左' }[placement]
        }弹出`}
        placement={placement}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>抽屉内容</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## 受控模式

```tsx
import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开抽屉
      </Button>
      <Drawer title="受控抽屉" visible={visible} onVisibleChange={setVisible}>
        <p>抽屉内容</p>
        <Button onClick={() => setVisible(false)}>关闭抽屉</Button>
      </Drawer>
    </div>
  );
};

export default App;
```

## 非受控模式

```tsx
import React from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <div>
      <Drawer title="非受控抽屉" defaultVisible={false}>
        <p>抽屉内容</p>
      </Drawer>
      <Button
        type="primary"
        onClick={() => {
          const drawer = document.querySelector('.brickd-drawer') as any;
          if (drawer) {
            drawer.style.display = 'block';
          }
        }}
      >
        打开抽屉
      </Button>
    </div>
  );
};

export default App;
```

## 自定义宽度和高度

```tsx
import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开宽抽屉
      </Button>
      <Drawer
        title="自定义宽度抽屉"
        width={500}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>宽度为500px的抽屉</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## 无遮罩

```tsx
import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开无遮罩抽屉
      </Button>
      <Drawer
        title="无遮罩抽屉"
        mask={false}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>没有遮罩的抽屉</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## 点击遮罩不可关闭

```tsx
import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开抽屉
      </Button>
      <Drawer
        title="点击遮罩不可关闭"
        maskClosable={false}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>点击遮罩不会关闭抽屉</p>
        <Button onClick={() => setVisible(false)}>点击关闭</Button>
      </Drawer>
    </div>
  );
};

export default App;
```

## 自定义标题和底部

```tsx
import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开抽屉
      </Button>
      <Drawer
        title={<div style={{ color: '#1890ff' }}>自定义标题</div>}
        visible={visible}
        onVisibleChange={setVisible}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button onClick={() => setVisible(false)}>取消</Button>
            <Button
              type="primary"
              style={{ marginLeft: 8 }}
              onClick={() => setVisible(false)}
            >
              确定
            </Button>
          </div>
        }
      >
        <p>带自定义底部的抽屉</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## 无关闭按钮

```tsx
import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开抽屉
      </Button>
      <Drawer
        title="无关闭按钮"
        closable={false}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>没有关闭按钮的抽屉</p>
        <Button onClick={() => setVisible(false)}>点击关闭</Button>
      </Drawer>
    </div>
  );
};

export default App;
```

## 关闭时销毁内容

```tsx
import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开抽屉
      </Button>
      <Drawer
        title="关闭时销毁内容"
        destroyOnClose
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>关闭后内容会被销毁</p>
        <p>重新打开时会重新渲染</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## 自定义样式

```tsx
import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开抽屉
      </Button>
      <Drawer
        title="自定义样式抽屉"
        visible={visible}
        onVisibleChange={setVisible}
        style={{ backgroundColor: '#f5f5f5' }}
        bodyStyle={{ padding: 20 }}
      >
        <p>自定义样式的抽屉内容</p>
        <p>可以设置背景色、内边距等</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## API

| 属性            | 类型                                     | 默认值    | 说明                       |
| --------------- | ---------------------------------------- | --------- | -------------------------- |
| title           | `React.ReactNode`                        | -         | 抽屉标题                   |
| placement       | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | 抽屉弹出方向               |
| visible         | `boolean`                                | -         | 受控模式下的可见状态       |
| defaultVisible  | `boolean`                                | `false`   | 非受控模式下的默认可见状态 |
| onVisibleChange | `(visible: boolean) => void`             | -         | 可见状态变化时的回调       |
| width           | `number \| string`                       | `300`     | 宽度（左右方向时有效）     |
| height          | `number \| string`                       | `300`     | 高度（上下方向时有效）     |
| mask            | `boolean`                                | `true`    | 是否显示遮罩               |
| maskClosable    | `boolean`                                | `true`    | 点击遮罩是否可关闭         |
| className       | `string`                                 | `''`      | 自定义类名                 |
| style           | `React.CSSProperties`                    | `{}`      | 自定义样式                 |
| bodyStyle       | `React.CSSProperties`                    | `{}`      | 内容区域自定义样式         |
| children        | `React.ReactNode`                        | -         | 子元素                     |
| footer          | `React.ReactNode`                        | -         | 底部内容                   |
| closable        | `boolean`                                | `true`    | 是否显示关闭按钮           |
| destroyOnClose  | `boolean`                                | `false`   | 关闭时是否销毁内容         |
| zIndex          | `number`                                 | `1050`    | 层级                       |
