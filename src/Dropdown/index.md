---
title: Dropdown 下拉菜单
order: 12
---

# Dropdown 下拉菜单

用于显示下拉菜单，支持点击和悬停触发方式。

## 基本用法

```jsx
import { Dropdown, Button } from 'brickd';

function App() {
  return (
    <Dropdown>
      <Button>下拉菜单</Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem>选项 1</Dropdown.MenuItem>
        <Dropdown.MenuItem>选项 2</Dropdown.MenuItem>
        <Dropdown.MenuItem>选项 3</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default App;
```

## 悬停触发

```jsx
import { Dropdown, Button } from 'brickd';

function App() {
  return (
    <Dropdown trigger="hover">
      <Button>悬停触发</Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem>选项 1</Dropdown.MenuItem>
        <Dropdown.MenuItem>选项 2</Dropdown.MenuItem>
        <Dropdown.MenuItem>选项 3</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default App;
```

## 带分割线的菜单

```jsx
import { Dropdown, Button } from 'brickd';

function App() {
  return (
    <Dropdown>
      <Button>带分割线</Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem>选项 1</Dropdown.MenuItem>
        <Dropdown.MenuItem>选项 2</Dropdown.MenuItem>
        <Dropdown.MenuSeparator />
        <Dropdown.MenuItem>选项 3</Dropdown.MenuItem>
        <Dropdown.MenuItem>选项 4</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default App;
```

## 带点击事件的菜单

```jsx
import { Dropdown, Button } from 'brickd';

function App() {
  const handleMenuClick = (index) => {
    console.log(`点击了选项 ${index}`);
  };

  return (
    <Dropdown>
      <Button>带点击事件</Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem onClick={() => handleMenuClick(1)}>选项 1</Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => handleMenuClick(2)}>选项 2</Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => handleMenuClick(3)}>选项 3</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default App;
```

## 自定义触发元素

```jsx
import { Dropdown } from 'brickd';

function App() {
  return (
    <Dropdown>
      <div style={{ padding: 8, border: '1px solid #d9d9d9', borderRadius: 4, cursor: 'pointer' }}>
        自定义触发元素
      </div>
      <Dropdown.Menu>
        <Dropdown.MenuItem>选项 1</Dropdown.MenuItem>
        <Dropdown.MenuItem>选项 2</Dropdown.MenuItem>
        <Dropdown.MenuItem>选项 3</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default App;
```

## API

### Dropdown

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 触发方式 | `'click' \| 'hover'` | `'click'` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素（包含触发元素和菜单元素） | `React.ReactNode` | - |

### Dropdown.Menu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| children | 子元素（菜单选项） | `React.ReactNode` | - |

### Dropdown.MenuItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击事件回调 | `() => void` | - |
| className | 自定义类名 | `string` | - |
| children | 子元素（选项文本） | `React.ReactNode` | - |

### Dropdown.MenuSeparator

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
