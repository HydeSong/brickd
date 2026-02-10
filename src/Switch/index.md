---
title: Switch 开关
order: 25
---

# Switch 开关

用于切换开/关状态的组件，支持不同尺寸和禁用状态。

## 代码演示

### 基本用法

```tsx
import { Switch } from 'brickd';

function SwitchBasicDemo() {
  return (
    <Switch />
  );
}

export default SwitchBasicDemo;
```

### 带标签

```tsx
import { Switch } from 'brickd';

function SwitchLabelDemo() {
  return (
    <Switch label="开关标签" />
  );
}

export default SwitchLabelDemo;
```

### 不同尺寸

```tsx
import { Switch } from 'brickd';

function SwitchSizeDemo() {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Switch size="small" label="小尺寸" />
      <Switch size="default" label="默认尺寸" />
      <Switch size="large" label="大尺寸" />
    </div>
  );
}

export default SwitchSizeDemo;
```

### 禁用状态

```tsx
import { Switch } from 'brickd';

function SwitchDisabledDemo() {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Switch disabled label="禁用关闭" />
      <Switch disabled checked label="禁用打开" />
    </div>
  );
}

export default SwitchDisabledDemo;
```

### 带回调函数

```tsx
import { Switch, Typography } from 'brickd';
import React, { useState } from 'react';

function SwitchCallbackDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Typography.Text>状态：{checked ? '打开' : '关闭'}</Typography.Text>
      <Switch checked={checked} onCheck={setChecked} label="带回调函数" />
    </div>
  );
}

export default SwitchCallbackDemo;
```

### 默认打开

```tsx
import { Switch } from 'brickd';

function SwitchDefaultCheckedDemo() {
  return (
    <Switch defaultChecked label="默认打开" />
  );
}

export default SwitchDefaultCheckedDemo;
```

## API

### SwitchProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | `'small'  'default'  'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| checked | 是否选中 | `boolean` | - |
| defaultChecked | 默认是否选中 | `boolean` | `false` |
| onChange | 变化时回调 | `(e: React.ChangeEvent<HTMLInputElement>) => void` | - |
| onCheck | 选中状态变化回调 | `(checked: boolean) => void` | - |
| label | 标签文本 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
