# Watermark 水印

水印组件，用于在页面或容器上添加水印效果。

## 导入

```tsx
import Watermark from 'brickd';
```

## 用法

### 基础用法

```tsx
import React from 'react';
import Watermark from 'brickd';

const App = () => {
  return (
    <Watermark>
      <div style={{ padding: 20, minHeight: 300 }}>
        <h1>Watermark Demo</h1>
        <p>This is a demo page with watermark.</p>
      </div>
    </Watermark>
  );
};

export default App;
```

### 自定义水印内容

```tsx
import React from 'react';
import Watermark from 'brickd';

const App = () => {
  return (
    <Watermark content="Company Confidential">
      <div style={{ padding: 20, minHeight: 300 }}>
        <h1>Confidential Document</h1>
        <p>This document is confidential.</p>
      </div>
    </Watermark>
  );
};

export default App;
```

### 自定义水印样式

```tsx
import React from 'react';
import Watermark from 'brickd';

const App = () => {
  return (
    <Watermark
      content="Brick Design"
      width={150}
      height={70}
      rotate={-15}
      fontSize={16}
      fontWeight={600}
      color="rgba(180, 180, 180, 0.15)"
      opacity={0.8}
      gap={[120, 120]}
    >
      <div style={{ padding: 20, minHeight: 300 }}>
        <h1>Custom Watermark</h1>
        <p>This page has a custom watermark.</p>
      </div>
    </Watermark>
  );
};

export default App;
```

### 全屏水印

```tsx
import React from 'react';
import Watermark from 'brickd';

const App = () => {
  return (
    <Watermark
      content="Full Screen Watermark"
      gap={[150, 150]}
      zIndex={9999}
    >
      <div style={{ minHeight: '100vh', padding: 20 }}>
        <h1>Full Screen Demo</h1>
        <p>The entire page has watermark.</p>
      </div>
    </Watermark>
  );
};

export default App;
```

## API

### Watermark

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | `React.ReactNode` | `'Watermark'` | 水印内容 |
| width | `number` | `120` | 水印宽度 |
| height | `number` | `64` | 水印高度 |
| rotate | `number` | `-22` | 水印旋转角度 |
| fontSize | `number` | `14` | 水印字体大小 |
| fontWeight | `number` | `400` | 水印字体粗细 |
| color | `string` | `'rgba(0, 0, 0, 0.15)'` | 水印颜色 |
| opacity | `number` | `1` | 水印透明度 |
| gap | `[number, number]` | `[100, 100]` | 水印间距，[水平间距, 垂直间距] |
| zIndex | `number` | `9999` | 水印层级 |
| className | `string` | - | 自定义类名 |
| style | `React.CSSProperties` | - | 自定义样式 |
| children | `React.ReactNode` | - | 子内容 |