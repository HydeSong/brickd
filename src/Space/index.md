---
title: Space 间距
order: 5
---

# Space 间距

用于设置组件之间的间距。

## 基本用法

```jsx
import { Space, Button } from 'brickd';

function App() {
  return (
    <Space>
      <Button>按钮 1</Button>
      <Button>按钮 2</Button>
      <Button>按钮 3</Button>
    </Space>
  );
}

export default App;
```

## 垂直间距

```jsx
import { Space, Button } from 'brickd';

function App() {
  return (
    <Space direction="vertical">
      <Button>按钮 1</Button>
      <Button>按钮 2</Button>
      <Button>按钮 3</Button>
    </Space>
  );
}

export default App;
```

## 自定义间距大小

```jsx
import { Space, Button } from 'brickd';

function App() {
  return (
    <>
      <Space size="small">
        <Button>小间距</Button>
        <Button>小间距</Button>
      </Space>
      <br />
      <Space size="middle">
        <Button>中等间距</Button>
        <Button>中等间距</Button>
      </Space>
      <br />
      <Space size="large">
        <Button>大间距</Button>
        <Button>大间距</Button>
      </Space>
      <br />
      <Space size={32}>
        <Button>自定义间距</Button>
        <Button>自定义间距</Button>
      </Space>
    </>
  );
}

export default App;
```

## 自动换行

```jsx
import { Space, Button } from 'brickd';

function App() {
  return (
    <Space wrap>
      {Array.from({ length: 10 }).map((_, index) => (
        <Button key={index}>按钮 {index + 1}</Button>
      ))}
    </Space>
  );
}

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size | 间距大小 | `'small' \| 'middle' \| 'large' \| number` | `'middle'` |
| wrap | 是否自动换行 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| children | 子元素 | `React.ReactNode` | - |
