---
title: Layout 布局
order: 8
---

# Layout 布局

用于页面布局，提供 Header、Sider、Content 和 Footer 等组件。

## 基础布局

```jsx
import { Layout } from 'brickd';

function App() {
  return (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>Content</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
}

export default App;
```

## 带侧边栏的布局

```jsx
import { Layout } from 'brickd';

function App() {
  return (
    <Layout hasSider>
      <Layout.Sider>Sider</Layout.Sider>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>Content</Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default App;
```

## 自定义尺寸

```jsx
import { Layout } from 'brickd';

function App() {
  return (
    <Layout hasSider>
      <Layout.Sider width={250}>Sider (250px)</Layout.Sider>
      <Layout>
        <Layout.Header height={80}>Header (80px)</Layout.Header>
        <Layout.Content>Content</Layout.Content>
        <Layout.Footer height={70}>Footer (70px)</Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default App;
```

## 可折叠侧边栏

```jsx
import React, { useState } from 'react';
import { Layout, Button } from 'brickd';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider>
      <Layout.Sider collapsed={collapsed}>
        Sider
      </Layout.Sider>
      <Layout>
        <Layout.Header>
          <Button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? '展开' : '收起'}
          </Button>
          <span style={{ marginLeft: 16 }}>Header</span>
        </Layout.Header>
        <Layout.Content>Content</Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default App;
```

## 复杂布局

```jsx
import { Layout } from 'brickd';

function App() {
  return (
    <Layout hasSider>
      <Layout.Sider>
        <div style={{ padding: 16, color: '#fff' }}>侧边栏导航</div>
      </Layout.Sider>
      <Layout>
        <Layout.Header>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ fontSize: 18, fontWeight: 'bold' }}>应用名称</div>
            <div style={{ marginLeft: 'auto' }}>用户头像</div>
          </div>
        </Layout.Header>
        <Layout.Content>
          <div style={{ 
            backgroundColor: '#fff', 
            padding: 24, 
            borderRadius: 8, 
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <h2>页面内容</h2>
            <p>这是一个复杂布局的示例，包含了侧边栏、头部、内容区和底部。</p>
            <p>可以根据实际需求调整各个部分的大小和样式。</p>
          </div>
        </Layout.Content>
        <Layout.Footer>
          <div>© 2024 布局示例</div>
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default App;
```

## API

### Layout

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hasSider | 是否包含侧边栏 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Layout.Header

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 高度 | `string \| number` | `64px` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Layout.Sider

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 宽度 | `string \| number` | `200px` |
| collapsedWidth | 折叠后的宽度 | `string \| number` | `80px` |
| collapsed | 是否折叠 | `boolean` | `false` |
| onCollapse | 折叠状态变化回调 | `(collapsed: boolean) => void` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Layout.Content

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Layout.Footer

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 高度 | `string \| number` | `64px` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |
