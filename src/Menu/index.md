# Menu 菜单

菜单组件用于导航，支持水平和垂直两种模式，包含菜单项和子菜单。

## 代码演示

### 基本用法

默认垂直模式的菜单。

```tsx
import Menu from './index';

function MenuBasicDemo() {
  return (
    <Menu>
      <Menu.Item>首页</Menu.Item>
      <Menu.Item>产品</Menu.Item>
      <Menu.Item>服务</Menu.Item>
      <Menu.Item>关于我们</Menu.Item>
    </Menu>
  );
}

export default MenuBasicDemo;
```

### 水平菜单

通过 `mode` 属性设置为 `horizontal` 实现水平菜单。

```tsx
import Menu from './index';

function MenuHorizontalDemo() {
  return (
    <Menu mode="horizontal">
      <Menu.Item>首页</Menu.Item>
      <Menu.Item>产品</Menu.Item>
      <Menu.Item>服务</Menu.Item>
      <Menu.Item>关于我们</Menu.Item>
    </Menu>
  );
}

export default MenuHorizontalDemo;
```

### 垂直菜单

通过 `mode` 属性设置为 `vertical` 实现垂直菜单（默认）。

```tsx
import Menu from './index';

function MenuVerticalDemo() {
  return (
    <Menu mode="vertical" style={{ width: 200 }}>
      <Menu.Item>首页</Menu.Item>
      <Menu.Item>产品</Menu.Item>
      <Menu.Item>服务</Menu.Item>
      <Menu.Item>关于我们</Menu.Item>
    </Menu>
  );
}

export default MenuVerticalDemo;
```

### 子菜单

使用 `Menu.SubMenu` 组件创建子菜单。

```tsx
import Menu from './index';

function MenuSubMenuDemo() {
  return (
    <Menu mode="vertical" style={{ width: 200 }}>
      <Menu.Item>首页</Menu.Item>
      <Menu.SubMenu title="产品">
        <Menu.Item>产品1</Menu.Item>
        <Menu.Item>产品2</Menu.Item>
        <Menu.Item>产品3</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="服务">
        <Menu.Item>服务1</Menu.Item>
        <Menu.Item>服务2</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>关于我们</Menu.Item>
    </Menu>
  );
}

export default MenuSubMenuDemo;
```

### 禁用菜单项

通过 `disabled` 属性禁用菜单项。

```tsx
import Menu from './index';

function MenuDisabledDemo() {
  return (
    <Menu mode="vertical" style={{ width: 200 }}>
      <Menu.Item>首页</Menu.Item>
      <Menu.Item disabled>产品（暂不可用）</Menu.Item>
      <Menu.SubMenu title="服务">
        <Menu.Item>服务1</Menu.Item>
        <Menu.Item disabled>服务2（暂不可用）</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>关于我们</Menu.Item>
    </Menu>
  );
}

export default MenuDisabledDemo;
```

### 菜单项点击事件

通过 `onClick` 属性设置菜单项的点击事件。

```tsx
import React, { useState } from 'react';
import Menu from './index';

function MenuClickDemo() {
  const [selected, setSelected] = useState<string>('');

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Menu mode="vertical" style={{ width: 200 }}>
        <Menu.Item onClick={() => setSelected('首页')}>首页</Menu.Item>
        <Menu.Item onClick={() => setSelected('产品')}>产品</Menu.Item>
        <Menu.SubMenu title="服务">
          <Menu.Item onClick={() => setSelected('服务1')}>服务1</Menu.Item>
          <Menu.Item onClick={() => setSelected('服务2')}>服务2</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item onClick={() => setSelected('关于我们')}>关于我们</Menu.Item>
      </Menu>
      <div style={{ padding: '16px' }}>
        <p>当前选中：{selected || '未选择'}</p>
      </div>
    </div>
  );
}

export default MenuClickDemo;
```

### 多级子菜单

支持多级嵌套的子菜单。

```tsx
import Menu from './index';

function MenuNestedSubMenuDemo() {
  return (
    <Menu mode="vertical" style={{ width: 200 }}>
      <Menu.Item>首页</Menu.Item>
      <Menu.SubMenu title="产品">
        <Menu.Item>产品1</Menu.Item>
        <Menu.SubMenu title="产品2">
          <Menu.Item>产品2.1</Menu.Item>
          <Menu.Item>产品2.2</Menu.Item>
          <Menu.SubMenu title="产品2.3">
            <Menu.Item>产品2.3.1</Menu.Item>
            <Menu.Item>产品2.3.2</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item>产品3</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>关于我们</Menu.Item>
    </Menu>
  );
}

export default MenuNestedSubMenuDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义菜单样式。

```tsx
import Menu from './index';

function MenuCustomStyleDemo() {
  return (
    <Menu 
      mode="horizontal"
      style={{
        background: '#001529',
        color: '#fff',
        borderRadius: '8px',
        padding: '0 16px'
      }}
    >
      <Menu.Item style={{ padding: '0 24px', height: '64px', lineHeight: '64px' }}>
        首页
      </Menu.Item>
      <Menu.Item style={{ padding: '0 24px', height: '64px', lineHeight: '64px' }}>
        产品
      </Menu.Item>
      <Menu.Item style={{ padding: '0 24px', height: '64px', lineHeight: '64px' }}>
        服务
      </Menu.Item>
      <Menu.Item style={{ padding: '0 24px', height: '64px', lineHeight: '64px' }}>
        关于我们
      </Menu.Item>
    </Menu>
  );
}

export default MenuCustomStyleDemo;
```

## API

### MenuProps

| 属性        | 说明             | 类型                                  | 默认值   |
| ----------- | ---------------- | ------------------------------------- | -------- |
| mode        | 菜单模式         | `'horizontal' \| 'vertical'`          | `'vertical'` |
| className   | 自定义类名       | `string`                              | `''`     |
| style       | 自定义样式       | `React.CSSProperties`                 | `{}`     |
| children    | 子组件           | `React.ReactNode`                     | -        |

### Menu.ItemProps

| 属性        | 说明             | 类型                                  | 默认值   |
| ----------- | ---------------- | ------------------------------------- | -------- |
| disabled    | 是否禁用         | `boolean`                             | `false`  |
| onClick     | 点击事件处理函数 | `() => void`                         | -        |
| className   | 自定义类名       | `string`                              | `''`     |
| children    | 子组件           | `React.ReactNode`                     | -        |

### Menu.SubMenuProps

| 属性        | 说明             | 类型                                  | 默认值   |
| ----------- | ---------------- | ------------------------------------- | -------- |
| title       | 子菜单标题       | `React.ReactNode`                     | -        |
| className   | 自定义类名       | `string`                              | `''`     |
| children    | 子组件           | `React.ReactNode`                     | -        |