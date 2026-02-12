# Breadcrumb 面包屑

面包屑导航组件，用于显示当前页面的路径，帮助用户了解自己的位置并快速返回上一级页面。

## 代码演示

### 基础用法

最简单的面包屑用法，显示层级路径。

```tsx
import Breadcrumb from './index';

function BreadcrumbBasicDemo() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>组件</Breadcrumb.Item>
      <Breadcrumb.Item>面包屑</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbBasicDemo;
```

### 带有链接

通过 `href` 属性设置面包屑项的链接，点击可以跳转到对应页面。

```tsx
import Breadcrumb from './index';

function BreadcrumbWithLinkDemo() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
      <Breadcrumb.Item href="/components">组件</Breadcrumb.Item>
      <Breadcrumb.Item>面包屑</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbWithLinkDemo;
```

### 自定义分隔符

通过 `separator` 属性自定义面包屑项之间的分隔符。

```tsx
import Breadcrumb from './index';

function BreadcrumbCustomSeparatorDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>组件</Breadcrumb.Item>
        <Breadcrumb.Item>面包屑</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>组件</Breadcrumb.Item>
        <Breadcrumb.Item>面包屑</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb separator="/>">
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>组件</Breadcrumb.Item>
        <Breadcrumb.Item>面包屑</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbCustomSeparatorDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义面包屑样式。

```tsx
import Breadcrumb from './index';

function BreadcrumbCustomStyleDemo() {
  return (
    <Breadcrumb style={{ fontSize: '16px', color: '#1890ff' }}>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>组件</Breadcrumb.Item>
      <Breadcrumb.Item>面包屑</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbCustomStyleDemo;
```

## API

### Breadcrumb

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |
| separator | 分隔符 | `React.ReactNode` | `'/'` |
| children | 子元素，通常是 Breadcrumb.Item 组件 | `React.ReactNode` | - |

### Breadcrumb.Item

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 链接地址 | `string` | - |
| className | 自定义类名 | `string` | `''` |
| children | 子元素 | `React.ReactNode` | - |
