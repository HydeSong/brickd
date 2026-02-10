---
title: Tabs 标签页
order: 16
---

# Tabs 标签页

用于切换不同内容的标签页组件。

## 基本用法

```jsx
import { Tabs } from 'brickd';

function App() {
  return (
    <Tabs>
      <Tabs.Tab label="Tab 1">内容 1</Tabs.Tab>
      <Tabs.Tab label="Tab 2">内容 2</Tabs.Tab>
      <Tabs.Tab label="Tab 3">内容 3</Tabs.Tab>
    </Tabs>
  );
}

export default App;
```

## 带默认激活标签的标签页

```jsx
import { Tabs } from 'brickd';

function App() {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.Tab key="0" label="Tab 1">内容 1</Tabs.Tab>
      <Tabs.Tab key="1" label="Tab 2">内容 2</Tabs.Tab>
      <Tabs.Tab key="2" label="Tab 3">内容 3</Tabs.Tab>
    </Tabs>
  );
}

export default App;
```

## 带回调函数的标签页

```jsx
import { Tabs } from 'brickd';

function App() {
  const handleTabChange = (key) => {
    console.log(`切换到标签: ${key}`);
  };

  return (
    <Tabs onChange={handleTabChange}>
      <Tabs.Tab key="0" label="Tab 1">内容 1</Tabs.Tab>
      <Tabs.Tab key="1" label="Tab 2">内容 2</Tabs.Tab>
      <Tabs.Tab key="2" label="Tab 3">内容 3</Tabs.Tab>
    </Tabs>
  );
}

export default App;
```

## 复杂内容的标签页

```jsx
import { Tabs } from 'brickd';

function App() {
  return (
    <Tabs>
      <Tabs.Tab label="用户信息">
        <div>
          <h3>用户信息</h3>
          <p>姓名: 张三</p>
          <p>年龄: 25</p>
          <p>邮箱: zhangsan@example.com</p>
        </div>
      </Tabs.Tab>
      <Tabs.Tab label="订单记录">
        <div>
          <h3>订单记录</h3>
          <ul>
            <li>订单 1: 2024-01-01</li>
            <li>订单 2: 2024-01-02</li>
            <li>订单 3: 2024-01-03</li>
          </ul>
        </div>
      </Tabs.Tab>
      <Tabs.Tab label="设置">
        <div>
          <h3>设置</h3>
          <p>账号设置</p>
          <p>隐私设置</p>
          <p>通知设置</p>
        </div>
      </Tabs.Tab>
    </Tabs>
  );
}

export default App;
```

## API

### Tabs

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活标签的 key | `string` | - |
| defaultActiveKey | 默认激活标签的 key | `string` | - |
| onChange | 标签切换时的回调 | `(key: string) => void` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Tabs.Tab

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 标签的唯一标识 | `string` | - |
| label | 标签的标题 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| children | 标签的内容 | `React.ReactNode` | - |
