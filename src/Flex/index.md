---
title: Flex
order: 5
---

# Flex 弹性布局

Flex 组件是一个基于 CSS Flexbox 的布局组件，用于快速构建灵活的响应式布局。

## 代码演示

### 基本用法

默认情况下，Flex 组件会将子元素水平排列。

```tsx
import { Flex } from 'brickd';

function BasicFlexDemo() {
  return (
    <Flex style={{ height: '60px', border: '1px solid #d9d9d9', padding: '8px' }}>
      <div style={{ width: '80px', height: '40px', background: '#1890ff', marginRight: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Item 1
      </div>
      <div style={{ width: '80px', height: '40px', background: '#40a9ff', marginRight: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Item 2
      </div>
      <div style={{ width: '80px', height: '40px', background: '#69c0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Item 3
      </div>
    </Flex>
  );
}

export default BasicFlexDemo;
```

### 垂直布局

通过设置 `direction="column"` 属性，Flex 可以变为垂直布局。

```tsx
import { Flex } from 'brickd';

function VerticalFlexDemo() {
  return (
    <Flex direction="column" style={{ height: '200px', border: '1px solid #d9d9d9', padding: '8px', gap: '8px' }}>
      <div style={{ height: '40px', background: '#1890ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Item 1
      </div>
      <div style={{ height: '40px', background: '#40a9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Item 2
      </div>
      <div style={{ height: '40px', background: '#69c0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Item 3
      </div>
    </Flex>
  );
}

export default VerticalFlexDemo;
```

### 对齐方式

通过 `justify` 和 `align` 属性可以设置子元素的对齐方式。

```tsx
import { Flex } from 'brickd';

function AlignmentFlexDemo() {
  return (
    <div>
      <h4>居中对齐</h4>
      <Flex justify="center" align="center" style={{ height: '100px', border: '1px solid #d9d9d9', marginBottom: '16px' }}>
        <div style={{ width: '80px', height: '40px', background: '#1890ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          居中对齐
        </div>
      </Flex>

      <h4>两端对齐</h4>
      <Flex justify="space-between" style={{ height: '100px', border: '1px solid #d9d9d9', marginBottom: '16px', padding: '0 16px' }}>
        <div style={{ width: '80px', height: '40px', background: '#1890ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          左侧
        </div>
        <div style={{ width: '80px', height: '40px', background: '#40a9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          右侧
        </div>
      </Flex>
    </div>
  );
}

export default AlignmentFlexDemo;
```

### 换行

通过设置 `wrap="wrap"` 属性，Flex 可以在子元素超出容器宽度时自动换行。

```tsx
import { Flex } from 'brickd';

function WrapFlexDemo() {
  return (
    <Flex wrap="wrap" gap={16} style={{ border: '1px solid #d9d9d9', padding: '16px' }}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} style={{ width: '80px', height: '40px', background: '#1890ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          Item {index + 1}
        </div>
      ))}
    </Flex>
  );
}

export default WrapFlexDemo;
```

### 使用 FlexItem

Flex 组件可以配合 FlexItem 组件使用，更精细地控制子元素的布局。

```tsx
import { Flex, FlexItem } from 'brickd';

function FlexItemDemo() {
  return (
    <Flex style={{ height: '100px', border: '1px solid #d9d9d9', padding: '8px' }}>
      <FlexItem flex={1} style={{ background: '#1890ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        占比 1
      </FlexItem>
      <FlexItem flex={2} style={{ background: '#40a9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', margin: '0 8px' }}>
        占比 2
      </FlexItem>
      <FlexItem flex={1} style={{ background: '#69c0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        占比 1
      </FlexItem>
    </Flex>
  );
}

export default FlexItemDemo;
```

## API

### FlexProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 子元素的排列方向 | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | `'row'` |
| justify | 子元素在主轴上的对齐方式 | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` |
| align | 子元素在交叉轴上的对齐方式 | `'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'` | `'stretch'` |
| wrap | 子元素的换行方式 | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | `'nowrap'` |
| gap | 子元素之间的间距 | `string \| number` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### FlexItemProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| flex | 子元素的 flex 属性 | `string \| number` | - |
| order | 子元素的顺序 | `number` | - |
| alignSelf | 子元素自身在交叉轴上的对齐方式 | `'auto' \| 'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素内容 | `React.ReactNode` | - |

## 注意事项

1. Flex 组件的样式主要通过内联样式实现，因为 flex 布局的属性通常需要根据具体场景动态调整。
2. 使用 `gap` 属性时，如果传入数字，会被视为像素值。
3. FlexItem 组件是可选的，您也可以直接使用普通的 HTML 元素作为 Flex 的子元素。
4. 对于复杂的布局，建议结合 Grid 组件使用，以获得更强大的布局能力。
