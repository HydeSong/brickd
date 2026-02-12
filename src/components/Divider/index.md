---
title: Divider
order: 1
---

# Divider 分隔线

用于分隔不同内容区域。

## 基本用法

```tsx
import React from 'react';
import Divider from '../Divider';

const App: React.FC = () => {
  return (
    <div>
      <p>上方内容</p>
      <Divider />
      <p>下方内容</p>
    </div>
  );
};

export default App;
```

## 水平分隔线

```tsx
import React from 'react';
import Divider from '../Divider';

const App: React.FC = () => {
  return (
    <div>
      <p>上方内容</p>
      <Divider type="horizontal" />
      <p>下方内容</p>
    </div>
  );
};

export default App;
```

## 垂直分隔线

```tsx
import React from 'react';
import Divider from '../Divider';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: 50 }}>
      <span>左侧内容</span>
      <Divider type="vertical" />
      <span>右侧内容</span>
      <Divider type="vertical" />
      <span>更多内容</span>
    </div>
  );
};

export default App;
```

## 虚线分隔线

```tsx
import React from 'react';
import Divider from '../Divider';

const App: React.FC = () => {
  return (
    <div>
      <p>上方内容</p>
      <Divider dashed />
      <p>下方内容</p>
    </div>
  );
};

export default App;
```

## 带文本的分隔线

```tsx
import React from 'react';
import Divider from '../Divider';

const App: React.FC = () => {
  return (
    <div>
      <p>上方内容</p>
      <Divider>分隔线文本</Divider>
      <p>下方内容</p>
    </div>
  );
};

export default App;
```

## 文本位置调整

```tsx
import React from 'react';
import Divider from '../Divider';

const App: React.FC = () => {
  return (
    <div>
      <p>上方内容</p>
      <Divider orientation="left">左侧文本</Divider>
      <p>中间内容</p>
      <Divider orientation="center">居中文本</Divider>
      <p>下方内容</p>
      <Divider orientation="right">右侧文本</Divider>
    </div>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import Divider from '../Divider';

const App: React.FC = () => {
  return (
    <div>
      <p>上方内容</p>
      <Divider
        style={{
          borderColor: '#1890ff',
          margin: '20px 0',
        }}
      >
        <span style={{ color: '#1890ff' }}>自定义样式</span>
      </Divider>
      <p>下方内容</p>
    </div>
  );
};

export default App;
```

## API

| 属性        | 类型                            | 默认值         | 说明                           |
| ----------- | ------------------------------- | -------------- | ------------------------------ |
| type        | `'horizontal' \| 'vertical'`    | `'horizontal'` | 分隔线类型                     |
| orientation | `'left' \| 'center' \| 'right'` | `'center'`     | 文本位置（仅水平分隔线有效）   |
| dashed      | `boolean`                       | `false`        | 是否为虚线                     |
| children    | `React.ReactNode`               | -              | 分隔线文本（仅水平分隔线有效） |
| className   | `string`                        | `''`           | 自定义类名                     |
| style       | `React.CSSProperties`           | `{}`           | 自定义样式                     |
