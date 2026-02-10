---
title: FloatButton
order: 3
---

# FloatButton 悬浮按钮

FloatButton 组件是一个固定在页面某个位置的悬浮按钮，通常用于触发一些重要操作，如返回顶部、创建新内容等。

## 代码演示

### 基本用法

默认情况下，FloatButton 会固定在页面右下角。

```tsx
import { FloatButton } from 'brickd';

function BasicFloatButtonDemo() {
  return (
    <FloatButton 
      icon={<span style={{ fontSize: '20px' }}>+</span>} 
      onClick={() => console.log('Click')}
    />
  );
}

export default BasicFloatButtonDemo;
```

### 自定义位置

通过 `position` 属性可以自定义 FloatButton 的位置。

```tsx
import { FloatButton } from 'brickd';

function CustomPositionFloatButtonDemo() {
  return (
    <FloatButton 
      icon={<span style={{ fontSize: '20px' }}>+</span>} 
      onClick={() => console.log('Click')}
      position={{
        bottom: '100px',
        left: '24px',
      }}
    />
  );
}

export default CustomPositionFloatButtonDemo;
```

### 不同尺寸

FloatButton 支持三种尺寸：`small`、`default` 和 `large`。

```tsx
import { FloatButton } from 'brickd';

function FloatButtonSizeDemo() {
  return (
    <div>
      <FloatButton 
        icon={<span style={{ fontSize: '16px' }}>+</span>} 
        size="small"
        position={{
          bottom: '24px',
          left: '24px',
        }}
      />
      <FloatButton 
        icon={<span style={{ fontSize: '20px' }}>+</span>} 
        size="default"
        position={{
          bottom: '24px',
          right: '24px',
        }}
      />
      <FloatButton 
        icon={<span style={{ fontSize: '24px' }}>+</span>} 
        size="large"
        position={{
          bottom: '24px',
          right: '100px',
        }}
      />
    </div>
  );
}

export default FloatButtonSizeDemo;
```

### 不同类型

FloatButton 支持两种类型：`primary` 和 `default`。

```tsx
import { FloatButton } from 'brickd';

function FloatButtonTypeDemo() {
  return (
    <div>
      <FloatButton 
        icon={<span style={{ fontSize: '20px' }}>+</span>} 
        type="primary"
        position={{
          bottom: '24px',
          right: '24px',
        }}
      />
      <FloatButton 
        icon={<span style={{ fontSize: '20px' }}>+</span>} 
        type="default"
        position={{
          bottom: '24px',
          left: '24px',
        }}
      />
    </div>
  );
}

export default FloatButtonTypeDemo;
```

### 不同形状

FloatButton 支持两种形状：`circle`（默认）和 `square`。

```tsx
import { FloatButton } from 'brickd';

function FloatButtonShapeDemo() {
  return (
    <div>
      <FloatButton 
        icon={<span style={{ fontSize: '20px' }}>+</span>} 
        shape="circle"
        position={{
          bottom: '24px',
          right: '24px',
        }}
      />
      <FloatButton 
        icon={<span style={{ fontSize: '20px' }}>+</span>} 
        shape="square"
        position={{
          bottom: '24px',
          left: '24px',
        }}
      />
    </div>
  );
}

export default FloatButtonShapeDemo;
```

### 禁用状态

通过 `disabled` 属性可以禁用 FloatButton。

```tsx
import { FloatButton } from 'brickd';

function DisabledFloatButtonDemo() {
  return (
    <FloatButton 
      icon={<span style={{ fontSize: '20px' }}>+</span>} 
      disabled
      onClick={() => console.log('Click')}
    />
  );
}

export default DisabledFloatButtonDemo;
```

## API

### FloatButtonProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 按钮图标 | `React.ReactNode` | - |
| onClick | 点击事件处理函数 | `() => void` | - |
| position | 按钮位置 | `{ bottom?: string; right?: string; left?: string; top?: string; }` | `{ bottom: '24px', right: '24px' }` |
| size | 按钮尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| type | 按钮类型 | `'primary' \| 'default'` | `'primary'` |
| shape | 按钮形状 | `'circle' \| 'square'` | `'circle'` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| disabled | 是否禁用 | `boolean` | `false` |

## 注意事项

1. FloatButton 默认使用 `fixed` 定位，会相对于浏览器窗口进行定位。
2. 当页面滚动时，FloatButton 会保持在固定位置。
3. FloatButton 的 `z-index` 默认设置为 1000，确保它会显示在其他元素之上。
4. 如果需要在同一个页面使用多个 FloatButton，请确保它们的位置不会重叠。
