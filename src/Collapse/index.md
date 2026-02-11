# Collapse 折叠面板

### 导入组件

```javascript
import Collapse from 'brickd';

const { Panel } = Collapse;
```

### 基本用法

```jsx
import React from 'react';
import Collapse from 'brickd';

const { Panel } = Collapse;

const App = () => {
  return (
    <Collapse>
      <Panel panelKey="1" title="面板 1">
        <p>这是面板 1 的内容</p>
        <p>可以包含任意内容</p>
      </Panel>
      <Panel panelKey="2" title="面板 2">
        <p>这是面板 2 的内容</p>
        <p>可以包含任意内容</p>
      </Panel>
      <Panel panelKey="3" title="面板 3">
        <p>这是面板 3 的内容</p>
        <p>可以包含任意内容</p>
      </Panel>
    </Collapse>
  );
};

export default App;
```

### 手风琴模式

```jsx
import React from 'react';
import Collapse from 'brickd';

const { Panel } = Collapse;

const App = () => {
  return (
    <Collapse defaultActiveKey="1">
      <Panel panelKey="1" title="面板 1">
        <p>这是面板 1 的内容</p>
        <p>可以包含任意内容</p>
      </Panel>
      <Panel panelKey="2" title="面板 2">
        <p>这是面板 2 的内容</p>
        <p>可以包含任意内容</p>
      </Panel>
      <Panel panelKey="3" title="面板 3">
        <p>这是面板 3 的内容</p>
        <p>可以包含任意内容</p>
      </Panel>
    </Collapse>
  );
};

export default App;
```

### 可折叠模式

```jsx
import React from 'react';
import Collapse from 'brickd';

const { Panel } = Collapse;

const App = () => {
  return (
    <Collapse defaultActiveKey={['1', '2']}>
      <Panel panelKey="1" title="面板 1">
        <p>这是面板 1 的内容</p>
        <p>可以包含任意内容</p>
      </Panel>
      <Panel panelKey="2" title="面板 2">
        <p>这是面板 2 的内容</p>
        <p>可以包含任意内容</p>
      </Panel>
      <Panel panelKey="3" title="面板 3">
        <p>这是面板 3 的内容</p>
        <p>可以包含任意内容</p>
      </Panel>
    </Collapse>
  );
};

export default App;
```

### 受控模式

```jsx
import React, { useState } from 'react';
import Collapse from 'brickd';

const { Panel } = Collapse;

const App = () => {
  const [activeKey, setActiveKey] = useState('1');

  return (
    <div>
      <Collapse activeKey={activeKey} onChange={setActiveKey}>
        <Panel panelKey="1" title="面板 1">
          <p>这是面板 1 的内容</p>
          <p>可以包含任意内容</p>
        </Panel>
        <Panel panelKey="2" title="面板 2">
          <p>这是面板 2 的内容</p>
          <p>可以包含任意内容</p>
        </Panel>
        <Panel panelKey="3" title="面板 3">
          <p>这是面板 3 的内容</p>
          <p>可以包含任意内容</p>
        </Panel>
      </Collapse>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setActiveKey('1')}>激活面板 1</button>
        <button onClick={() => setActiveKey('2')}>激活面板 2</button>
        <button onClick={() => setActiveKey('3')}>激活面板 3</button>
      </div>
    </div>
  );
};

export default App;
```

### API

#### Collapse

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的面板 key（受控） | string \| string[] | - |
| defaultActiveKey | 默认激活的面板 key | string \| string[] | '' |
| onChange | 切换面板时的回调函数 | (key: string \| string[]) => void | - |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |
| children | 子元素，应为 Collapse.Panel | React.ReactNode | - |

#### Collapse.Panel

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| panelKey | 面板的唯一标识 | string | - |
| title | 面板标题 | React.ReactNode | - |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |
| children | 面板内容 | React.ReactNode | - |