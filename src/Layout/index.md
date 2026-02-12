# Layout 布局

布局组件用于页面布局，包含 Header、Sider、Content 和 Footer 四个子组件，可以组合出多种常见的页面布局。

## 代码演示

### 基本布局

最基本的页面布局，包含顶部导航栏、内容区域和底部版权信息。

```tsx
import Layout from './index';

function LayoutBasicDemo() {
  return (
    <Layout style={{ minHeight: '400px' }}>
      <Layout.Header style={{ background: '#1890ff', color: '#fff', padding: '0 24px' }}>
        顶部导航栏
      </Layout.Header>
      <Layout.Content style={{ padding: '24px', background: '#f0f2f5', minHeight: '200px' }}>
        内容区域
      </Layout.Content>
      <Layout.Footer style={{ background: '#001529', color: '#fff', textAlign: 'center', padding: '16px' }}>
        底部版权信息
      </Layout.Footer>
    </Layout>
  );
}

export default LayoutBasicDemo;
```

### 带侧边栏的布局

包含顶部导航栏、左侧侧边栏、内容区域和底部版权信息的布局。

```tsx
import Layout from './index';

function LayoutWithSiderDemo() {
  return (
    <Layout hasSider style={{ minHeight: '400px' }}>
      <Layout.Sider style={{ background: '#001529', color: '#fff', padding: '16px' }}>
        左侧侧边栏
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ background: '#1890ff', color: '#fff', padding: '0 24px' }}>
          顶部导航栏
        </Layout.Header>
        <Layout.Content style={{ padding: '24px', background: '#f0f2f5', minHeight: '200px' }}>
          内容区域
        </Layout.Content>
        <Layout.Footer style={{ background: '#001529', color: '#fff', textAlign: 'center', padding: '16px' }}>
          底部版权信息
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutWithSiderDemo;
```

### 自定义尺寸

通过 `height` 属性自定义 Header 和 Footer 的高度，通过 `width` 属性自定义 Sider 的宽度。

```tsx
import Layout from './index';

function LayoutCustomSizeDemo() {
  return (
    <Layout hasSider style={{ minHeight: '400px' }}>
      <Layout.Sider 
        width={240} 
        style={{ background: '#001529', color: '#fff', padding: '16px' }}
      >
        左侧侧边栏 (240px)
      </Layout.Sider>
      <Layout>
        <Layout.Header 
          height={64} 
          style={{ background: '#1890ff', color: '#fff', padding: '0 24px' }}
        >
          顶部导航栏 (64px)
        </Layout.Header>
        <Layout.Content style={{ padding: '24px', background: '#f0f2f5', minHeight: '200px' }}>
          内容区域
        </Layout.Content>
        <Layout.Footer 
          height={48} 
          style={{ background: '#001529', color: '#fff', textAlign: 'center', padding: '16px' }}
        >
          底部版权信息 (48px)
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutCustomSizeDemo;
```

### 折叠侧边栏

通过 `collapsed` 属性控制侧边栏的折叠状态，通过 `collapsedWidth` 属性设置折叠后的宽度。

```tsx
import React, { useState } from 'react';
import Layout from './index';
import Button from '../Button';

function LayoutCollapsedSiderDemo() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider style={{ minHeight: '400px' }}>
      <Layout.Sider 
        width={240} 
        collapsedWidth={80}
        collapsed={collapsed}
        style={{ background: '#001529', color: '#fff', padding: '16px' }}
      >
        {!collapsed && '左侧侧边栏'}
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ background: '#1890ff', color: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>顶部导航栏</div>
          <Button type="primary" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? '展开' : '折叠'}
          </Button>
        </Layout.Header>
        <Layout.Content style={{ padding: '24px', background: '#f0f2f5', minHeight: '200px' }}>
          内容区域
        </Layout.Content>
        <Layout.Footer style={{ background: '#001529', color: '#fff', textAlign: 'center', padding: '16px' }}>
          底部版权信息
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutCollapsedSiderDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义布局组件的样式。

```tsx
import Layout from './index';

function LayoutCustomStyleDemo() {
  return (
    <Layout hasSider style={{ minHeight: '400px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
      <Layout.Sider style={{ background: '#52c41a', color: '#fff', padding: '16px' }}>
        左侧侧边栏
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ background: '#faad14', color: '#fff', padding: '0 24px' }}>
          顶部导航栏
        </Layout.Header>
        <Layout.Content style={{ padding: '24px', background: '#f6ffed', minHeight: '200px' }}>
          内容区域
        </Layout.Content>
        <Layout.Footer style={{ background: '#13c2c2', color: '#fff', textAlign: 'center', padding: '16px' }}>
          底部版权信息
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutCustomStyleDemo;
```

## API

### LayoutProps

| 属性      | 说明             | 类型                       | 默认值   |
| --------- | ---------------- | -------------------------- | -------- |
| hasSider  | 是否包含侧边栏   | `boolean`                  | `false`  |
| className | 自定义类名       | `string`                   | `''`     |
| style     | 自定义样式       | `React.CSSProperties`      | `{}`     |
| children  | 子组件           | `React.ReactNode`          | -        |

### Layout.HeaderProps

| 属性      | 说明             | 类型                       | 默认值   |
| --------- | ---------------- | -------------------------- | -------- |
| height    | 头部高度         | `string \| number`         | -        |
| className | 自定义类名       | `string`                   | `''`     |
| style     | 自定义样式       | `React.CSSProperties`      | `{}`     |
| children  | 子组件           | `React.ReactNode`          | -        |

### Layout.SiderProps

| 属性           | 说明             | 类型                       | 默认值   |
| -------------- | ---------------- | -------------------------- | -------- |
| width          | 侧边栏宽度       | `string \| number`         | `200`    |
| collapsedWidth | 折叠后宽度       | `string \| number`         | `80`     |
| collapsed      | 是否折叠         | `boolean`                  | `false`  |
| className      | 自定义类名       | `string`                   | `''`     |
| style          | 自定义样式       | `React.CSSProperties`      | `{}`     |
| children       | 子组件           | `React.ReactNode`          | -        |

### Layout.ContentProps

| 属性      | 说明             | 类型                       | 默认值   |
| --------- | ---------------- | -------------------------- | -------- |
| className | 自定义类名       | `string`                   | `''`     |
| style     | 自定义样式       | `React.CSSProperties`      | `{}`     |
| children  | 子组件           | `React.ReactNode`          | -        |

### Layout.FooterProps

| 属性      | 说明             | 类型                       | 默认值   |
| --------- | ---------------- | -------------------------- | -------- |
| height    | 底部高度         | `string \| number`         | -        |
| className | 自定义类名       | `string`                   | `''`     |
| style     | 自定义样式       | `React.CSSProperties`      | `{}`     |
| children  | 子组件           | `React.ReactNode`          | -        |