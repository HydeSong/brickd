---
title: Watermark
nav: components
order: 60
---

# Watermark

水印组件，用于在页面或容器上添加水印效果。

## 基本用法

最简单的水印使用方式。

```tsx
import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <Watermark>
      <div style={{ padding: '20px' }}>
        <h1>页面内容</h1>
        <p>这是页面的主要内容，水印会显示在内容上方。</p>
        <p>水印可以防止内容被未经授权的复制或使用。</p>
      </div>
    </Watermark>
  );
};

export default App;
```

## 自定义内容

自定义水印的内容。

```tsx
import React from 'react';
import Watermark from './index';
import Icon from '../Icon';

const App: React.FC = () => {
  return (
    <div>
      <Watermark content="自定义水印">
        <div style={{ padding: '20px' }}>
          <h2>自定义水印内容</h2>
          <p>水印内容可以是任意文本。</p>
        </div>
      </Watermark>
      <br />
      <Watermark content={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="copyright" size={16} style={{ marginRight: '4px' }} />
          <span>版权所有</span>
        </div>
      }>
        <div style={{ padding: '20px' }}>
          <h2>带图标的水印</h2>
          <p>水印内容可以是包含图标的复杂元素。</p>
        </div>
      </Watermark>
    </div>
  );
};

export default App;
```

## 自定义样式

自定义水印的样式。

```tsx
import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <Watermark
      content="自定义样式"
      width={150}
      height={80}
      fontSize={16}
      fontWeight={600}
      color="rgba(128, 128, 128, 0.2)"
    >
      <div style={{ padding: '20px' }}>
        <h2>自定义样式水印</h2>
        <p>水印的大小、字体、颜色等都可以自定义。</p>
      </div>
    </Watermark>
  );
};

export default App;
```

## 旋转角度

自定义水印的旋转角度。

```tsx
import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <div>
      <Watermark content="0度旋转" rotate={0}>
        <div style={{ padding: '20px' }}>
          <h2>0度旋转水印</h2>
          <p>水印旋转角度为0度，水平显示。</p>
        </div>
      </Watermark>
      <br />
      <Watermark content="45度旋转" rotate={45}>
        <div style={{ padding: '20px' }}>
          <h2>45度旋转水印</h2>
          <p>水印旋转角度为45度，向右倾斜。</p>
        </div>
      </Watermark>
      <br />
      <Watermark content="-45度旋转" rotate={-45}>
        <div style={{ padding: '20px' }}>
          <h2>-45度旋转水印</h2>
          <p>水印旋转角度为-45度，向左倾斜。</p>
        </div>
      </Watermark>
    </div>
  );
};

export default App;
```

## 透明度

自定义水印的透明度。

```tsx
import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <div>
      <Watermark content="高透明度" opacity={0.1}>
        <div style={{ padding: '20px' }}>
          <h2>高透明度水印</h2>
          <p>水印透明度为0.1，几乎不可见。</p>
        </div>
      </Watermark>
      <br />
      <Watermark content="中等透明度" opacity={0.3}>
        <div style={{ padding: '20px' }}>
          <h2>中等透明度水印</h2>
          <p>水印透明度为0.3，隐约可见。</p>
        </div>
      </Watermark>
      <br />
      <Watermark content="低透明度" opacity={0.6}>
        <div style={{ padding: '20px' }}>
          <h2>低透明度水印</h2>
          <p>水印透明度为0.6，清晰可见。</p>
        </div>
      </Watermark>
    </div>
  );
};

export default App;
```

## 间距

自定义水印的间距。

```tsx
import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <Watermark
      content="密集水印"
      gap={[50, 50]}
    >
      <div style={{ padding: '20px' }}>
        <h2>密集水印</h2>
        <p>水印间距为50x50像素，分布密集。</p>
      </div>
    </Watermark>
  );
};

export default App;
```

## Z-Index

自定义水印的层级。

```tsx
import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <Watermark
      content="底层水印"
      zIndex={1}
    >
      <div style={{ padding: '20px', position: 'relative' }}>
        <h2>底层水印</h2>
        <p>水印层级为1，位于内容下方。</p>
        <div style={{ 
          position: 'absolute', 
          top: '50px', 
          right: '20px', 
          background: 'white', 
          padding: '10px', 
          border: '1px solid #ddd',
          zIndex: 2
        }}>
          上层内容，会覆盖水印
        </div>
      </div>
    </Watermark>
  );
};

export default App;
```

## 组合使用

水印的组合使用。

```tsx
import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <Watermark
      content="综合示例"
      width={140}
      height={70}
      rotate={-30}
      fontSize={16}
      fontWeight={500}
      color="rgba(100, 100, 100, 0.2)"
      opacity={0.8}
      gap={[120, 120]}
    >
      <div style={{ padding: '20px' }}>
        <h1>综合示例</h1>
        <p>这个示例展示了水印的各种属性组合使用。</p>
        <p>水印设置了自定义的大小、旋转角度、字体、颜色、透明度和间距。</p>
        <p>通过调整这些属性，可以创建适合不同场景的水印效果。</p>
      </div>
    </Watermark>
  );
};

export default App;
```

## API

### WatermarkProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | React.ReactNode | 'Watermark' | 水印内容 |
| width | number | 120 | 水印宽度 |
| height | number | 64 | 水印高度 |
| rotate | number | -22 | 水印旋转角度 |
| fontSize | number | 14 | 水印字体大小 |
| fontWeight | number | 400 | 水印字体粗细 |
| color | string | 'rgba(0, 0, 0, 0.15)' | 水印颜色 |
| opacity | number | 1 | 水印透明度 |
| gap | [number, number] | [100, 100] | 水印间距 |
| zIndex | number | 9999 | 水印层级 |
| className | string | - | 自定义类名 |
| style | React.CSSProperties | - | 自定义样式 |
| children | React.ReactNode | - | 水印覆盖的内容 |