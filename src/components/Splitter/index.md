# Splitter 分割面板

分割面板组件，用于在水平或垂直方向上分割两个面板，并允许用户通过拖动调整它们的大小。

## 基本用法

```tsx
import React from 'react';
import { Splitter } from 'brickd';

export default () => (
  <div style={{ width: '500px', height: '300px', border: '1px solid #d9d9d9' }}>
    <Splitter>
      <div style={{ padding: '16px', backgroundColor: '#fafafa' }}>
        <h3>左侧面板</h3>
        <p>可以通过拖动中间的分隔条来调整面板大小。</p>
      </div>
      <div style={{ padding: '16px' }}>
        <h3>右侧面板</h3>
        <p>右侧面板内容...</p>
      </div>
    </Splitter>
  </div>
);
```

## 垂直分割

```tsx
import React from 'react';
import { Splitter } from 'brickd';

export default () => (
  <div style={{ width: '500px', height: '400px', border: '1px solid #d9d9d9' }}>
    <Splitter direction="vertical">
      <div style={{ padding: '16px', backgroundColor: '#fafafa' }}>
        <h3>上方面板</h3>
        <p>可以通过拖动中间的分隔条来调整面板大小。</p>
      </div>
      <div style={{ padding: '16px' }}>
        <h3>下方面板</h3>
        <p>下方面板内容...</p>
      </div>
    </Splitter>
  </div>
);
```

## 自定义默认大小

```tsx
import React from 'react';
import { Splitter } from 'brickd';

export default () => (
  <div style={{ width: '500px', height: '300px', border: '1px solid #d9d9d9' }}>
    <Splitter defaultSize={30}>
      <div style={{ padding: '16px', backgroundColor: '#fafafa' }}>
        <h3>左侧面板 (30%)</h3>
        <p>默认占30%宽度。</p>
      </div>
      <div style={{ padding: '16px' }}>
        <h3>右侧面板 (70%)</h3>
        <p>默认占70%宽度。</p>
      </div>
    </Splitter>
  </div>
);
```

## 自定义最小/最大大小

```tsx
import React from 'react';
import { Splitter } from 'brickd';

export default () => (
  <div style={{ width: '500px', height: '300px', border: '1px solid #d9d9d9' }}>
    <Splitter minSize={20} maxSize={80}>
      <div style={{ padding: '16px', backgroundColor: '#fafafa' }}>
        <h3>左侧面板</h3>
        <p>最小宽度: 20%</p>
        <p>最大宽度: 80%</p>
      </div>
      <div style={{ padding: '16px' }}>
        <h3>右侧面板</h3>
        <p>右侧面板内容...</p>
      </div>
    </Splitter>
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Splitter } from 'brickd';

export default () => (
  <div style={{ width: '500px', height: '300px', border: '1px solid #d9d9d9' }}>
    <Splitter
      className="custom-splitter"
      style={{
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '16px', backgroundColor: '#e6f7ff' }}>
        <h3>左侧面板</h3>
        <p>自定义样式面板。</p>
      </div>
      <div style={{ padding: '16px', backgroundColor: '#f6ffed' }}>
        <h3>右侧面板</h3>
        <p>右侧面板内容...</p>
      </div>
    </Splitter>
  </div>
);
```

## API

| 属性        | 说明                             | 类型                                 | 默认值         |
| ----------- | -------------------------------- | ------------------------------------ | -------------- |
| direction   | 分割方向                         | `'horizontal' \| 'vertical'`         | `'horizontal'` |
| defaultSize | 默认大小百分比                   | `number`                             | `50`           |
| minSize     | 最小大小百分比                   | `number`                             | `10`           |
| maxSize     | 最大大小百分比                   | `number`                             | `90`           |
| className   | 自定义类名                       | `string`                             | `''`           |
| style       | 自定义样式                       | `React.CSSProperties`                | `{}`           |
| children    | 子元素，必须是包含两个元素的数组 | `[React.ReactNode, React.ReactNode]` | -              |
