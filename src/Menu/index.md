---
title: Menu 导航菜单
order: 13
---

# Menu 导航菜单

用于页面导航的菜单组件，支持水平和垂直两种模式。

## 水平菜单

```jsx
import { Menu } from 'brickd';

function App() {
  return (
    <Menu mode="horizontal">
      <Menu.Item>首页</Menu.Item>
      <Menu.Item>产品</Menu.Item>
      <Menu.Item>关于我们</Menu.Item>
      <Menu.Item disabled>联系我们</Menu.Item>
    </Menu>
  );
}

export default App;
```

## 垂直菜单

```jsx
import { Menu } from 'brickd';

function App() {
  return (
    <Menu mode="vertical">
      <Menu.Item>首页</Menu.Item>
      <Menu.Item>产品</Menu.Item>
      <Menu.Item>关于我们</Menu.Item>
      <Menu.Item disabled>联系我们</Menu.Item>
    </Menu>
  );
}

export default App;
```

## 带子菜单的菜单

```jsx
import { Menu } from 'brickd';

function App() {
  return (
    <Menu mode="horizontal">
      <Menu.Item>首页</Menu.Item>
      <Menu.SubMenu title="产品">
        <Menu.Item>产品 1</Menu.Item>
        <Menu.Item>产品 2</Menu.Item>
        <Menu.Item>产品 3</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>关于我们</Menu.Item>
    </Menu>
  );
}

export default App;
```

## 垂直带子菜单

```jsx
import { Menu } from 'brickd';

function App() {
  return (
    <Menu mode="vertical">
      <Menu.Item>首页</Menu.Item>
      <Menu.SubMenu title="产品">
        <Menu.Item>产品 1</Menu.Item>
        <Menu.Item>产品 2</Menu.Item>
        <Menu.SubMenu title="更多产品">
          <Menu.Item>产品 3</Menu.Item>
          <Menu.Item>产品 4</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item>关于我们</Menu.Item>
    </Menu>
  );
}

export default App;
```

## 带点击事件的菜单

```jsx
import { Menu } from 'brickd';

function App() {
  const handleMenuClick = (key) => {
    console.log(`点击了菜单: ${key}`);
  };

  return (
    <Menu mode="horizontal">
      <Menu.Item onClick={() => handleMenuClick('home')}>首页</Menu.Item>
      <Menu.SubMenu title="产品">
        <Menu.Item onClick={() => handleMenuClick('product1')}>产品 1</Menu.Item>
        <Menu.Item onClick={() => handleMenuClick('product2')}>产品 2</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item onClick={() => handleMenuClick('about')}>关于我们</Menu.Item>
    </Menu>
  );
}

export default App;
```

## API

### Menu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 菜单模式 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| selectedKeys | 当前选中的菜单项 key 数组 | `string[]` | - |
| defaultSelectedKeys | 默认选中的菜单项 key 数组 | `string[]` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Menu.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 菜单项唯一标识 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | 点击事件回调 | `() => void` | - |
| className | 自定义类名 | `string` | - |
| children | 子元素 | `React.ReactNode` | - |

### Menu.SubMenu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 子菜单唯一标识 | `string` | - |
| title | 子菜单标题 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| children | 子元素 | `React.ReactNode` | - |
