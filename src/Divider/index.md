---
title: Divider
order: 4
---

# Divider 分割线

Divider 组件用于在页面中创建水平或垂直的分割线，可用于分隔内容区域或组件。

## 代码演示

### 水平分割线

默认情况下，Divider 为水平分割线。

```tsx
import { Divider } from 'brickd';

function HorizontalDividerDemo() {
  return (
    <div>
      <p>上方内容</p>
      <Divider />
      <p>下方内容</p>
    </div>
  );
}

export default HorizontalDividerDemo;
```

### 垂直分割线

通过设置 `type="vertical"` 属性，Divider 可以变为垂直分割线。

```tsx
import { Divider } from 'brickd';

function VerticalDividerDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
      <span>左侧内容</span>
      <Divider type="vertical" />
      <span>右侧内容</span>
      <Divider type="vertical" />
      <span>更多内容</span>
    </div>
  );
}

export default VerticalDividerDemo;
```

### 虚线分割线

通过设置 `dashed` 属性，Divider 可以变为虚线样式。

```tsx
import { Divider } from 'brickd';

function DashedDividerDemo() {
  return (
    <div>
      <p>上方内容</p>
      <Divider dashed />
      <p>下方内容</p>
    </div>
  );
}

export default DashedDividerDemo;
```

### 带文字的分割线

Divider 可以包含文字，通过 `children` 属性添加。

```tsx
import { Divider } from 'brickd';

function TextDividerDemo() {
  return (
    <div>
      <p>上方内容</p>
      <Divider>分割线</Divider>
      <p>下方内容</p>
    </div>
  );
}

export default TextDividerDemo;
```

### 文字位置

通过 `orientation` 属性可以设置文字的位置，支持 `left`、`center`（默认）和 `right`。

```tsx
import { Divider } from 'brickd';

function TextOrientationDividerDemo() {
  return (
    <div>
      <p>上方内容</p>
      <Divider orientation="left">左侧文字</Divider>
      <p>中间内容</p>
      <Divider orientation="center">居中文字</Divider>
      <p>下方内容</p>
      <Divider orientation="right">右侧文字</Divider>
      <p>底部内容</p>
    </div>
  );
}

export default TextOrientationDividerDemo;
```

## API

### DividerProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 分割线类型 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| orientation | 文字位置（仅水平分割线有效） | `'left' \| 'center' \| 'right'` | `'center'` |
| dashed | 是否为虚线 | `boolean` | `false` |
| children | 分割线文字 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |

## 注意事项

1. 垂直分割线需要在一个具有固定高度的容器中使用，否则可能无法正常显示。
2. 带文字的分割线仅在水平分割线中有效。
3. 当使用虚线样式时，分割线会使用 `border` 而不是 `background-color` 来实现。
