---
title: Breadcrumb 面包屑
order: 11
---

# Breadcrumb 面包屑

用于显示当前页面的导航路径，帮助用户了解所处位置。

## 基本用法

```jsx
import { Breadcrumb } from 'brickd';

function App() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">首页</Breadcrumb.Item>
      <Breadcrumb.Item href="#">产品</Breadcrumb.Item>
      <Breadcrumb.Item>详情</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default App;
```

## 自定义分隔符

```jsx
import { Breadcrumb } from 'brickd';

function App() {
  return (
    <div>
      <Breadcrumb separator="/">
        <Breadcrumb.Item href="#">首页</Breadcrumb.Item>
        <Breadcrumb.Item href="#">产品</Breadcrumb.Item>
        <Breadcrumb.Item>详情</Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <Breadcrumb separator="|">
        <Breadcrumb.Item href="#">首页</Breadcrumb.Item>
        <Breadcrumb.Item href="#">产品</Breadcrumb.Item>
        <Breadcrumb.Item>详情</Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="#">首页</Breadcrumb.Item>
        <Breadcrumb.Item href="#">产品</Breadcrumb.Item>
        <Breadcrumb.Item>详情</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default App;
```

## 图标分隔符

```jsx
import { Breadcrumb, Icon } from 'brickd';

function App() {
  return (
    <Breadcrumb separator={<Icon type="arrow-right" />}>
      <Breadcrumb.Item href="#">首页</Breadcrumb.Item>
      <Breadcrumb.Item href="#">产品</Breadcrumb.Item>
      <Breadcrumb.Item>详情</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default App;
```

## 复杂路径

```jsx
import { Breadcrumb } from 'brickd';

function App() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">首页</Breadcrumb.Item>
      <Breadcrumb.Item href="#">产品</Breadcrumb.Item>
      <Breadcrumb.Item href="#">电子产品</Breadcrumb.Item>
      <Breadcrumb.Item href="#">手机</Breadcrumb.Item>
      <Breadcrumb.Item>iPhone 15</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default App;
```

## API

### Breadcrumb

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| separator | 分隔符 | `React.ReactNode` | `/` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Breadcrumb.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 链接地址 | `string` | - |
| className | 自定义类名 | `string` | - |
| children | 子元素 | `React.ReactNode` | - |
