---
title: Collapse
order: 1
---

# Collapse 折叠面板

用于折叠/展开内容区域。

## 基本用法

```tsx
import React from 'react';
import Collapse from '../Collapse';

const App: React.FC = () => {
  return (
    <Collapse defaultActiveKey="1">
      <Collapse.Panel panelKey="1" title="面板1">
        这是面板1的内容
      </Collapse.Panel>
      <Collapse.Panel panelKey="2" title="面板2">
        这是面板2的内容
      </Collapse.Panel>
      <Collapse.Panel panelKey="3" title="面板3">
        这是面板3的内容
      </Collapse.Panel>
    </Collapse>
  );
};

export default App;
```

## 手风琴模式

```tsx
import React from 'react';
import Collapse from '../Collapse';

const App: React.FC = () => {
  return (
    <Collapse defaultActiveKey="1">
      <Collapse.Panel panelKey="1" title="面板1">
        这是面板1的内容
      </Collapse.Panel>
      <Collapse.Panel panelKey="2" title="面板2">
        这是面板2的内容
      </Collapse.Panel>
      <Collapse.Panel panelKey="3" title="面板3">
        这是面板3的内容
      </Collapse.Panel>
    </Collapse>
  );
};

export default App;
```

## 可折叠模式

```tsx
import React from 'react';
import Collapse from '../Collapse';

const App: React.FC = () => {
  return (
    <Collapse defaultActiveKey={['1', '2']}>
      <Collapse.Panel panelKey="1" title="面板1">
        这是面板1的内容
      </Collapse.Panel>
      <Collapse.Panel panelKey="2" title="面板2">
        这是面板2的内容
      </Collapse.Panel>
      <Collapse.Panel panelKey="3" title="面板3">
        这是面板3的内容
      </Collapse.Panel>
    </Collapse>
  );
};

export default App;
```

## 受控模式

```tsx
import React, { useState } from 'react';
import Collapse from '../Collapse';

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | string[]>(['1']);

  return (
    <div>
      <Collapse activeKey={activeKey} onChange={setActiveKey}>
        <Collapse.Panel panelKey="1" title="面板1">
          这是面板1的内容
        </Collapse.Panel>
        <Collapse.Panel panelKey="2" title="面板2">
          这是面板2的内容
        </Collapse.Panel>
        <Collapse.Panel panelKey="3" title="面板3">
          这是面板3的内容
        </Collapse.Panel>
      </Collapse>
      <p>
        当前激活: {Array.isArray(activeKey) ? activeKey.join(', ') : activeKey}
      </p>
    </div>
  );
};

export default App;
```

## 非受控模式

```tsx
import React from 'react';
import Collapse from '../Collapse';

const App: React.FC = () => {
  return (
    <Collapse defaultActiveKey="1">
      <Collapse.Panel panelKey="1" title="面板1">
        这是面板1的内容
      </Collapse.Panel>
      <Collapse.Panel panelKey="2" title="面板2">
        这是面板2的内容
      </Collapse.Panel>
      <Collapse.Panel panelKey="3" title="面板3">
        这是面板3的内容
      </Collapse.Panel>
    </Collapse>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import Collapse from '../Collapse';

const App: React.FC = () => {
  return (
    <Collapse
      defaultActiveKey="1"
      style={{ width: 400, border: '1px solid #ddd', borderRadius: 4 }}
    >
      <Collapse.Panel
        panelKey="1"
        title="面板1"
        style={{ borderBottom: '1px solid #eee' }}
      >
        <div style={{ padding: 16, backgroundColor: '#f5f5f5' }}>
          这是面板1的内容
        </div>
      </Collapse.Panel>
      <Collapse.Panel
        panelKey="2"
        title="面板2"
        style={{ borderBottom: '1px solid #eee' }}
      >
        <div style={{ padding: 16, backgroundColor: '#f5f5f5' }}>
          这是面板2的内容
        </div>
      </Collapse.Panel>
      <Collapse.Panel panelKey="3" title="面板3">
        <div style={{ padding: 16, backgroundColor: '#f5f5f5' }}>
          这是面板3的内容
        </div>
      </Collapse.Panel>
    </Collapse>
  );
};

export default App;
```

## API

### Collapse

| 属性             | 类型                                | 默认值 | 说明                           |
| ---------------- | ----------------------------------- | ------ | ------------------------------ |
| activeKey        | `string \| string[]`                | -      | 当前激活的面板键（受控模式）   |
| defaultActiveKey | `string \| string[]`                | `''`   | 默认激活的面板键（非受控模式） |
| onChange         | `(key: string \| string[]) => void` | -      | 激活面板变化时的回调           |
| className        | `string`                            | `''`   | 自定义类名                     |
| style            | `React.CSSProperties`               | `{}`   | 自定义样式                     |
| children         | `React.ReactNode`                   | -      | 子元素，应该是 Collapse.Panel  |

### Collapse.Panel

| 属性      | 类型                  | 默认值 | 说明                             |
| --------- | --------------------- | ------ | -------------------------------- |
| panelKey  | `string`              | -      | 面板的唯一键，若不提供则自动生成 |
| title     | `React.ReactNode`     | -      | 面板标题                         |
| className | `string`              | `''`   | 自定义类名                       |
| style     | `React.CSSProperties` | `{}`   | 自定义样式                       |
| children  | `React.ReactNode`     | -      | 面板内容                         |
