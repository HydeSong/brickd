---
title: Icon 图标
order: 6
---

# Icon 图标

用于显示各种图标。

## 基本用法

```jsx
import { Icon } from 'brickd';

function App() {
  return (
    <div>
      <Icon type="home" />
      <Icon type="search" />
      <Icon type="user" />
      <Icon type="settings" />
    </div>
  );
}

export default App;
```

## 图标大小

```jsx
import { Icon } from 'brickd';

function App() {
  return (
    <div>
      <Icon type="home" size="small" />
      <Icon type="home" size="middle" />
      <Icon type="home" size="large" />
      <Icon type="home" size={32} />
    </div>
  );
}

export default App;
```

## 图标颜色

```jsx
import { Icon } from 'brickd';

function App() {
  return (
    <div>
      <Icon type="home" color="red" />
      <Icon type="home" color="blue" />
      <Icon type="home" color="green" />
      <Icon type="home" color="#ff6b6b" />
    </div>
  );
}

export default App;
```

## 旋转和动画

```jsx
import { Icon } from 'brickd';

function App() {
  return (
    <div>
      <Icon type="arrow-right" rotate={45} />
      <Icon type="settings" spin />
    </div>
  );
}

export default App;
```

## 常用图标

```jsx
import { Icon } from 'brickd';

function App() {
  return (
    <div>
      <Icon type="arrow-left" />
      <Icon type="arrow-right" />
      <Icon type="arrow-up" />
      <Icon type="arrow-down" />
      <Icon type="plus" />
      <Icon type="minus" />
      <Icon type="close" />
      <Icon type="check" />
      <Icon type="warning" />
      <Icon type="error" />
      <Icon type="info" />
    </div>
  );
}

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 图标类型 | `string` | - |
| size | 图标大小 | `'small' \| 'middle' \| 'large' \| number` | `'middle'` |
| color | 图标颜色 | `string` | - |
| rotate | 图标旋转角度 | `number` | - |
| spin | 是否旋转 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
