---
title: Splitter
order: 2
---

# Splitter 分隔面板

Splitter 组件用于将页面分割为可调整大小的两个面板，支持水平和垂直方向。

## 代码演示

### 水平分割

默认情况下，Splitter 组件为水平分割模式，将页面分为左右两个面板。

```tsx
import { Splitter } from 'brickd';

function HorizontalSplitterDemo() {
  return (
    <div style={{ height: '300px', width: '100%', border: '1px solid #d9d9d9' }}>
      <Splitter>
        <div style={{ padding: '16px', background: '#f0f2f5' }}>
          <h3>左侧面板</h3>
          <p>这是左侧面板的内容</p>
        </div>
        <div style={{ padding: '16px' }}>
          <h3>右侧面板</h3>
          <p>这是右侧面板的内容</p>
        </div>
      </Splitter>
    </div>
  );
}

export default HorizontalSplitterDemo;
```

### 垂直分割

通过设置 `direction="vertical"` 属性，Splitter 组件可以变为垂直分割模式，将页面分为上下两个面板。

```tsx
import { Splitter } from 'brickd';

function VerticalSplitterDemo() {
  return (
    <div style={{ height: '300px', width: '100%', border: '1px solid #d9d9d9' }}>
      <Splitter direction="vertical">
        <div style={{ padding: '16px', background: '#f0f2f5' }}>
          <h3>上方面板</h3>
          <p>这是上方面板的内容</p>
        </div>
        <div style={{ padding: '16px' }}>
          <h3>下方面板</h3>
          <p>这是下方面板的内容</p>
        </div>
      </Splitter>
    </div>
  );
}

export default VerticalSplitterDemo;
```

### 设置默认大小

通过 `defaultSize` 属性，可以设置左侧或上方面板的默认大小（百分比）。

```tsx
import { Splitter } from 'brickd';

function DefaultSizeSplitterDemo() {
  return (
    <div style={{ height: '300px', width: '100%', border: '1px solid #d9d9d9' }}>
      <Splitter defaultSize={30}>
        <div style={{ padding: '16px', background: '#f0f2f5' }}>
          <h3>左侧面板 (30%)</h3>
          <p>这是左侧面板的内容，默认宽度为 30%</p>
        </div>
        <div style={{ padding: '16px' }}>
          <h3>右侧面板 (70%)</h3>
          <p>这是右侧面板的内容，默认宽度为 70%</p>
        </div>
      </Splitter>
    </div>
  );
}

export default DefaultSizeSplitterDemo;
```

### 设置最小和最大大小

通过 `minSize` 和 `maxSize` 属性，可以限制面板的最小和最大大小（百分比）。

```tsx
import { Splitter } from 'brickd';

function MinMaxSizeSplitterDemo() {
  return (
    <div style={{ height: '300px', width: '100%', border: '1px solid #d9d9d9' }}>
      <Splitter minSize={20} maxSize={80}>
        <div style={{ padding: '16px', background: '#f0f2f5' }}>
          <h3>左侧面板</h3>
          <p>最小宽度为 20%，最大宽度为 80%</p>
        </div>
        <div style={{ padding: '16px' }}>
          <h3>右侧面板</h3>
          <p>这是右侧面板的内容</p>
        </div>
      </Splitter>
    </div>
  );
}

export default MinMaxSizeSplitterDemo;
```

## API

### SplitterProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 分割方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| defaultSize | 左侧或上方面板的默认大小（百分比） | `number` | `50` |
| minSize | 左侧或上方面板的最小大小（百分比） | `number` | `10` |
| maxSize | 左侧或上方面板的最大大小（百分比） | `number` | `90` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 两个子元素，分别为左侧/上方面板和右侧/下方面板 | `[React.ReactNode, React.ReactNode]` | - |

## 注意事项

1. Splitter 组件需要一个具有固定高度和宽度的容器，否则可能无法正常工作。
2. 当调整面板大小时，组件会自动限制在 `minSize` 和 `maxSize` 之间。
3. 组件支持鼠标拖动调整大小，拖动时会显示调整指示器。
