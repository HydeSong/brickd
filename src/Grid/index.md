---
title: Grid
order: 6
---

# Grid 栅格

Grid 组件是一个基于 24 栅格系统的布局组件，用于快速构建响应式布局。

## 代码演示

### 基本用法

默认情况下，Grid 组件使用 Row 和 Col 组合来实现布局。

```tsx
import { Row, Col } from 'brickd';

function BasicGridDemo() {
  return (
    <div>
      <Row style={{ marginBottom: '16px' }}>
        <Col span={8} style={{ background: '#1890ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 8
        </Col>
        <Col span={8} style={{ background: '#40a9ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 8
        </Col>
        <Col span={8} style={{ background: '#69c0ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 8
        </Col>
      </Row>
      <Row>
        <Col span={6} style={{ background: '#1890ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6
        </Col>
        <Col span={6} style={{ background: '#40a9ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6
        </Col>
        <Col span={6} style={{ background: '#69c0ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6
        </Col>
        <Col span={6} style={{ background: '#91d5ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6
        </Col>
      </Row>
    </div>
  );
}

export default BasicGridDemo;
```

### 响应式布局

Grid 组件支持响应式布局，可以根据不同屏幕尺寸设置不同的列宽。

```tsx
import { Row, Col } from 'brickd';

function ResponsiveGridDemo() {
  return (
    <Row style={{ marginBottom: '16px' }}>
      <Col xs={24} sm={12} md={8} lg={6} style={{ background: '#1890ff', height: '40px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        xs:24 sm:12 md:8 lg:6
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} style={{ background: '#40a9ff', height: '40px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        xs:24 sm:12 md:8 lg:6
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} style={{ background: '#69c0ff', height: '40px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        xs:24 sm:12 md:8 lg:6
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} style={{ background: '#91d5ff', height: '40px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        xs:24 sm:12 md:8 lg:6
      </Col>
    </Row>
  );
}

export default ResponsiveGridDemo;
```

### 列偏移

通过 `offset` 属性可以设置列的偏移量。

```tsx
import { Row, Col } from 'brickd';

function OffsetGridDemo() {
  return (
    <div>
      <Row style={{ marginBottom: '16px' }}>
        <Col span={8} style={{ background: '#1890ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 8
        </Col>
        <Col span={8} offset={8} style={{ background: '#40a9ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 8 offset: 8
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={6} style={{ background: '#1890ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6 offset: 6
        </Col>
        <Col span={6} offset={6} style={{ background: '#40a9ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6 offset: 6
        </Col>
      </Row>
    </div>
  );
}

export default OffsetGridDemo;
```

### 列排序

通过 `push` 和 `pull` 属性可以设置列的排序。

```tsx
import { Row, Col } from 'brickd';

function OrderGridDemo() {
  return (
    <Row style={{ marginBottom: '16px' }}>
      <Col span={8} push={16} style={{ background: '#1890ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        span: 8 push: 16
      </Col>
      <Col span={16} pull={8} style={{ background: '#40a9ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        span: 16 pull: 8
      </Col>
    </Row>
  );
}

export default OrderGridDemo;
```

### 对齐方式

通过 `justify` 和 `align` 属性可以设置列的对齐方式。

```tsx
import { Row, Col } from 'brickd';

function AlignmentGridDemo() {
  return (
    <div>
      <h4>居中对齐</h4>
      <Row justify="center" style={{ marginBottom: '16px', height: '80px', border: '1px solid #d9d9d9' }}>
        <Col span={6} style={{ background: '#1890ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6
        </Col>
        <Col span={6} style={{ background: '#40a9ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6
        </Col>
      </Row>

      <h4>右对齐</h4>
      <Row justify="end" style={{ marginBottom: '16px', height: '80px', border: '1px solid #d9d9d9' }}>
        <Col span={6} style={{ background: '#1890ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6
        </Col>
        <Col span={6} style={{ background: '#40a9ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6
        </Col>
      </Row>

      <h4>垂直居中</h4>
      <Row align="middle" style={{ marginBottom: '16px', height: '120px', border: '1px solid #d9d9d9' }}>
        <Col span={6} style={{ background: '#1890ff', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6
        </Col>
        <Col span={6} style={{ background: '#40a9ff', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          span: 6
        </Col>
      </Row>
    </div>
  );
}

export default AlignmentGridDemo;
```

## API

### RowProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列间距 | `number \| [number, number]` | `0` |
| justify | 水平对齐方式 | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` |
| align | 垂直对齐方式 | `'top' \| 'middle' \| 'bottom'` | `'top'` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### ColProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 列宽 | `number` | - |
| offset | 列偏移 | `number` | - |
| push | 列右移 | `number` | - |
| pull | 列左移 | `number` | - |
| xs | 超小屏幕响应式配置 | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | - |
| sm | 小屏幕响应式配置 | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | - |
| md | 中等屏幕响应式配置 | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | - |
| lg | 大屏幕响应式配置 | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | - |
| xl | 超大屏幕响应式配置 | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | - |
| xxl | 特大屏幕响应式配置 | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

## 响应式断点

| 断点 | 说明 | 屏幕宽度 |
| --- | --- | --- |
| xs | 超小屏幕 | < 576px |
| sm | 小屏幕 | ≥ 576px |
| md | 中等屏幕 | ≥ 768px |
| lg | 大屏幕 | ≥ 992px |
| xl | 超大屏幕 | ≥ 1200px |
| xxl | 特大屏幕 | ≥ 1600px |

## 注意事项

1. Grid 组件的 `gutter` 属性目前只支持通过 data 属性传递，实际样式需要通过 CSS 变量或其他方式实现。
2. 在使用响应式布局时，建议从最小屏幕开始设置，然后逐步增加大屏幕的配置。
3. 当使用 `push` 和 `pull` 属性时，需要确保列的总宽度不超过 24。
