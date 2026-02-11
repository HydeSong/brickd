# Drawer 抽屉

从屏幕边缘滑出的浮层面板，用于展示额外的操作选项或信息。

## 安装

```bash
npm install brickd
```

## 导入

```jsx
import Drawer from 'brickd';
import Button from 'brickd';
```

## 基本用法

### 右侧抽屉

```jsx
import React, { useState } from 'react';
import Drawer from 'brickd';
import Button from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        打开右侧抽屉
      </Button>
      <Drawer
        title="右侧抽屉"
        placement="right"
        visible={visible}
        onVisibleChange={setVisible}
        footer={
          <>
            <Button onClick={closeDrawer}>
              取消
            </Button>
            <Button type="primary" onClick={closeDrawer}>
              确定
            </Button>
          </>
        }
      >
        <p>这是一个右侧抽屉的内容区域，可以放置任何内容。</p>
        <p>抽屉支持自定义宽度，默认宽度为 300px。</p>
        <p>抽屉可以从四个方向弹出：top、right、bottom、left。</p>
      </Drawer>
    </div>
  );
};

export default App;
```

### 不同方向的抽屉

```jsx
import React, { useState } from 'react';
import Drawer from 'brickd';
import Button from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('right');

  const showDrawer = (direction) => {
    setPlacement(direction);
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <Button type="primary" onClick={() => showDrawer('top')}>
        顶部抽屉
      </Button>
      <Button type="primary" onClick={() => showDrawer('right')}>
        右侧抽屉
      </Button>
      <Button type="primary" onClick={() => showDrawer('bottom')}>
        底部抽屉
      </Button>
      <Button type="primary" onClick={() => showDrawer('left')}>
        左侧抽屉
      </Button>
      <Drawer
        title={`${placement} 抽屉`}
        placement={placement}
        visible={visible}
        onVisibleChange={setVisible}
        footer={
          <>
            <Button onClick={closeDrawer}>
              取消
            </Button>
            <Button type="primary" onClick={closeDrawer}>
              确定
            </Button>
          </>
        }
      >
        <p>这是一个 {placement} 抽屉的内容区域。</p>
      </Drawer>
    </div>
  );
};

export default App;
```

### 自定义宽度和高度

```jsx
import React, { useState } from 'react';
import Drawer from 'brickd';
import Button from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开自定义尺寸抽屉
      </Button>
      <Drawer
        title="自定义尺寸抽屉"
        placement="right"
        width={400}
        visible={visible}
        onVisibleChange={setVisible}
        footer={
          <Button type="primary" onClick={() => setVisible(false)}>
            确定
          </Button>
        }
      >
        <p>这是一个宽度为 400px 的抽屉。</p>
      </Drawer>
    </div>
  );
};

export default App;
```

### 无遮罩抽屉

```jsx
import React, { useState } from 'react';
import Drawer from 'brickd';
import Button from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开无遮罩抽屉
      </Button>
      <Drawer
        title="无遮罩抽屉"
        placement="right"
        mask={false}
        visible={visible}
        onVisibleChange={setVisible}
        footer={
          <Button type="primary" onClick={() => setVisible(false)}>
            确定
          </Button>
        }
      >
        <p>这是一个没有遮罩的抽屉。</p>
      </Drawer>
    </div>
  );
};

export default App;
```

### 不可点击遮罩关闭的抽屉

```jsx
import React, { useState } from 'react';
import Drawer from 'brickd';
import Button from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开不可点击遮罩关闭的抽屉
      </Button>
      <Drawer
        title="不可点击遮罩关闭的抽屉"
        placement="right"
        maskClosable={false}
        visible={visible}
        onVisibleChange={setVisible}
        footer={
          <Button type="primary" onClick={() => setVisible(false)}>
            确定
          </Button>
        }
      >
        <p>这是一个不可点击遮罩关闭的抽屉，只能通过按钮或 ESC 键关闭。</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## API

### DrawerProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `React.ReactNode` | - | 抽屉标题 |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | 抽屉弹出方向 |
| `visible` | `boolean` | - | 抽屉是否可见（受控模式） |
| `defaultVisible` | `boolean` | `false` | 抽屉默认是否可见（非受控模式） |
| `onVisibleChange` | `(visible: boolean) => void` | - | 抽屉可见状态变化时的回调 |
| `width` | `number \| string` | `300` | 抽屉宽度（仅适用于 left/right 方向） |
| `height` | `number \| string` | `300` | 抽屉高度（仅适用于 top/bottom 方向） |
| `mask` | `boolean` | `true` | 是否显示遮罩层 |
| `maskClosable` | `boolean` | `true` | 点击遮罩层是否可以关闭抽屉 |
| `className` | `string` | `''` | 自定义类名 |
| `style` | `React.CSSProperties` | `{}` | 自定义样式 |
| `bodyStyle` | `React.CSSProperties` | `{}` | 抽屉内容区域的自定义样式 |
| `children` | `React.ReactNode` | - | 抽屉内容 |
| `footer` | `React.ReactNode` | - | 抽屉底部操作区域 |
| `closable` | `boolean` | `true` | 是否显示关闭按钮 |
| `destroyOnClose` | `boolean` | `false` | 抽屉关闭时是否销毁内容 |
| `zIndex` | `number` | `1050` | 抽屉的 z-index 值 |

## 样式

组件使用 CSS Modules 进行样式管理，主要类名如下：

| 类名 | 说明 |
| --- | --- |
| `drawer` | 基础抽屉类名 |
| `drawerTop` | 顶部抽屉类名 |
| `drawerRight` | 右侧抽屉类名 |
| `drawerBottom` | 底部抽屉类名 |
| `drawerLeft` | 左侧抽屉类名 |
| `drawerMask` | 遮罩层类名 |
| `drawerHeader` | 抽屉头部类名 |
| `drawerTitle` | 抽屉标题类名 |
| `drawerClose` | 关闭按钮类名 |
| `drawerBody` | 抽屉内容区域类名 |
| `drawerFooter` | 抽屉底部操作区域类名 |
| `drawerHidden` | 抽屉隐藏状态类名 |

## 示例

### 嵌套抽屉

```jsx
import React, { useState } from 'react';
import Drawer from 'brickd';
import Button from 'brickd';

const App = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible1(true)}>
        打开外层抽屉
      </Button>
      <Drawer
        title="外层抽屉"
        placement="right"
        visible={visible1}
        onVisibleChange={setVisible1}
        footer={
          <Button type="primary" onClick={() => setVisible1(false)}>
            关闭外层抽屉
          </Button>
        }
      >
        <p>这是外层抽屉的内容。</p>
        <Button type="primary" onClick={() => setVisible2(true)}>
          打开内层抽屉
        </Button>
        <Drawer
          title="内层抽屉"
          placement="right"
          width={250}
          visible={visible2}
          onVisibleChange={setVisible2}
          footer={
            <Button type="primary" onClick={() => setVisible2(false)}>
              关闭内层抽屉
            </Button>
          }
        >
          <p>这是内层抽屉的内容。</p>
        </Drawer>
      </Drawer>
    </div>
  );
};

export default App;
```

### 带表单的抽屉

```jsx
import React, { useState } from 'react';
import Drawer from 'brickd';
import Button from 'brickd';
import Input from 'brickd';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开表单抽屉
      </Button>
      <Drawer
        title="表单抽屉"
        placement="right"
        visible={visible}
        onVisibleChange={setVisible}
        footer={
          <>
            <Button onClick={() => setVisible(false)}>
              取消
            </Button>
            <Button type="primary" onClick={handleSubmit}>
              提交
            </Button>
          </>
        }
      >
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>姓名</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="请输入姓名" />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>邮箱</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="请输入邮箱" />
        </div>
      </Drawer>
    </div>
  );
};

export default App;
```