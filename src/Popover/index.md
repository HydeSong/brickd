# Popover 气泡

气泡组件用于显示额外信息，支持自定义内容、触发方式、位置等属性。

## 代码演示

### 基本用法

```tsx
import React from 'react';
import Popover from './index';
import Button from '../Button';

function PopoverBasicDemo() {
  return (
    <div>
      <Popover 
        content="这是一个气泡内容"
      >
        <Button type="primary">点击显示气泡</Button>
      </Popover>
    </div>
  );
}

export default PopoverBasicDemo;
```

### 不同触发方式

通过 `trigger` 属性设置不同的触发方式，支持 `click`、`hover` 和 `focus`。

```tsx
import React from 'react';
import Popover from './index';
import Button from '../Button';

function PopoverDifferentTriggerDemo() {
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Popover 
        content="点击触发的气泡"
        trigger="click"
      >
        <Button type="primary">点击触发</Button>
      </Popover>
      <Popover 
        content="悬停触发的气泡"
        trigger="hover"
      >
        <Button type="default">悬停触发</Button>
      </Popover>
      <Popover 
        content="聚焦触发的气泡"
        trigger="focus"
      >
        <Button type="default">聚焦触发</Button>
      </Popover>
    </div>
  );
}

export default PopoverDifferentTriggerDemo;
```

### 不同位置

通过 `placement` 属性设置气泡的位置，支持 `top`、`bottom`、`left` 和 `right`。

```tsx
import React from 'react';
import Popover from './index';
import Button from '../Button';

function PopoverDifferentPlacementDemo() {
  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <Popover 
        content="顶部气泡"
        placement="top"
      >
        <Button type="primary">顶部</Button>
      </Popover>
      <Popover 
        content="底部气泡"
        placement="bottom"
      >
        <Button type="primary">底部</Button>
      </Popover>
      <div style={{ display: 'flex', gap: '24px' }}>
        <Popover 
          content="左侧气泡"
          placement="left"
        >
          <Button type="primary">左侧</Button>
        </Popover>
        <Popover 
          content="右侧气泡"
          placement="right"
        >
          <Button type="primary">右侧</Button>
        </Popover>
      </div>
    </div>
  );
}

export default PopoverDifferentPlacementDemo;
```

### 自定义内容

气泡内容可以是任意 React 节点，包括文本、图片、按钮等。

```tsx
import React from 'react';
import Popover from './index';
import Button from '../Button';
import Image from '../Image';

function PopoverCustomContentDemo() {
  return (
    <div>
      <Popover 
        content={
          <div style={{ padding: '16px', width: 200 }}>
            <h4>自定义气泡内容</h4>
            <p>这是一个包含图片和按钮的自定义气泡。</p>
            <Image 
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape&image_size=square" 
              width="100%" 
              height={100} 
              style={{ borderRadius: '8px', margin: '8px 0' }}
            />
            <Button size="small" type="primary" style={{ width: '100%' }}>
              点击按钮
            </Button>
          </div>
        }
      >
        <Button type="primary">自定义内容</Button>
      </Popover>
    </div>
  );
}

export default PopoverCustomContentDemo;
```

### 受控模式

通过 `visible` 和 `onVisibleChange` 属性实现受控模式。

```tsx
import React, { useState } from 'react';
import Popover from './index';
import Button from '../Button';

function PopoverControlledDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Popover 
        content="受控模式的气泡"
        visible={visible}
        onVisibleChange={setVisible}
      >
        <Button type="primary">受控气泡</Button>
      </Popover>
      <Button 
        type="default" 
        style={{ marginLeft: '16px' }}
        onClick={() => setVisible(!visible)}
      >
        {visible ? '关闭气泡' : '打开气泡'}
      </Button>
    </div>
  );
}

export default PopoverControlledDemo;
```

### 非受控模式

通过 `defaultVisible` 属性设置默认可见状态，实现非受控模式。

```tsx
import React from 'react';
import Popover from './index';
import Button from '../Button';

function PopoverUncontrolledDemo() {
  return (
    <div>
      <Popover 
        content="非受控模式的气泡"
        defaultVisible={false}
      >
        <Button type="primary">非受控气泡</Button>
      </Popover>
    </div>
  );
}

export default PopoverUncontrolledDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义气泡的样式。

```tsx
import React from 'react';
import Popover from './index';
import Button from '../Button';

function PopoverCustomStyleDemo() {
  return (
    <div>
      <Popover 
        content="自定义样式的气泡"
        style={{
          '--popover-background': '#f0f9ff',
          '--popover-border-color': '#1890ff',
          '--popover-text-color': '#1890ff',
        }}
      >
        <Button type="primary">自定义样式</Button>
      </Popover>
    </div>
  );
}

export default PopoverCustomStyleDemo;
```

## API

### PopoverProps

| 属性            | 说明             | 类型                                  | 默认值   |
| --------------- | ---------------- | ------------------------------------- | -------- |
| content         | 气泡内容         | `React.ReactNode`                     | -        |
| trigger         | 触发方式         | `'click' \| 'hover' \| 'focus'`         | `'click'` |
| placement       | 气泡位置         | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`  |
| visible         | 是否可见（受控模式） | `boolean`                             | -        |
| defaultVisible  | 默认是否可见（非受控模式） | `boolean`                             | `false`  |
| onVisibleChange | 可见性变化时的回调 | `(visible: boolean) => void`          | -        |
| className       | 自定义类名       | `string`                              | `''`     |
| style           | 自定义样式       | `React.CSSProperties`                 | `{}`     |
| children        | 触发元素         | `React.ReactNode`                     | -        |