# Tabs 标签页

标签页组件，用于在不同内容之间切换。

## 基本用法

```tsx
import React from 'react';
import { Tabs } from 'brickd';

const { Tab } = Tabs;

export default () => (
  <div>
    <Tabs>
      <Tab key="1" label="标签1">
        <div style={{ padding: '16px' }}>
          标签1的内容
        </div>
      </Tab>
      <Tab key="2" label="标签2">
        <div style={{ padding: '16px' }}>
          标签2的内容
        </div>
      </Tab>
      <Tab key="3" label="标签3">
        <div style={{ padding: '16px' }}>
          标签3的内容
        </div>
      </Tab>
    </Tabs>
  </div>
);
```

## 受控模式

```tsx
import React, { useState } from 'react';
import { Tabs } from 'brickd';

const { Tab } = Tabs;

export default () => {
  const [activeKey, setActiveKey] = useState('1');
  
  return (
    <div>
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <Tab key="1" label="标签1">
          <div style={{ padding: '16px' }}>
            标签1的内容
          </div>
        </Tab>
        <Tab key="2" label="标签2">
          <div style={{ padding: '16px' }}>
            标签2的内容
          </div>
        </Tab>
        <Tab key="3" label="标签3">
          <div style={{ padding: '16px' }}>
            标签3的内容
          </div>
        </Tab>
      </Tabs>
      <div style={{ marginTop: '16px' }}>
        Active Tab: {activeKey}
      </div>
    </div>
  );
};
```

## 默认激活标签

```tsx
import React from 'react';
import { Tabs } from 'brickd';

const { Tab } = Tabs;

export default () => (
  <div>
    <Tabs defaultActiveKey="2">
      <Tab key="1" label="标签1">
        <div style={{ padding: '16px' }}>
          标签1的内容
        </div>
      </Tab>
      <Tab key="2" label="标签2">
        <div style={{ padding: '16px' }}>
          标签2的内容
        </div>
      </Tab>
      <Tab key="3" label="标签3">
        <div style={{ padding: '16px' }}>
          标签3的内容
        </div>
      </Tab>
    </Tabs>
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Tabs } from 'brickd';

const { Tab } = Tabs;

export default () => (
  <div>
    <Tabs 
      className="custom-tabs"
      style={{ 
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
    >
      <Tab key="1" label="标签1">
        <div style={{ padding: '16px' }}>
          标签1的内容
        </div>
      </Tab>
      <Tab key="2" label="标签2">
        <div style={{ padding: '16px' }}>
          标签2的内容
        </div>
      </Tab>
    </Tabs>
  </div>
);
```

## API

### Tabs

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活标签的 key | `string` | `undefined` |
| defaultActiveKey | 默认激活标签的 key | `string` | `undefined` |
| onChange | 标签切换时的回调函数 | `(key: string) => void` | `undefined` |
| className | 自定义类名 | `string` | `undefined` |
| style | 自定义样式 | `React.CSSProperties` | `undefined` |
| children | 子标签 | `React.ReactNode` | `undefined` |

### Tabs.Tab

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 标签的唯一标识 | `string` | `undefined` |
| label | 标签标题 | `React.ReactNode` | `undefined` |
| className | 自定义类名 | `string` | `undefined` |
| children | 标签内容 | `React.ReactNode` | `undefined` |