---
title: Checkbox 多选框
order: 23
---

# Checkbox 多选框

用于选择多个选项的组件，支持单选和多选模式。

## 代码演示

### 基本用法

```tsx
import { Checkbox } from 'brickd';

function CheckboxBasicDemo() {
  return (
    <Checkbox label="选项 1" />
  );
}

export default CheckboxBasicDemo;
```

### 不同尺寸

```tsx
import { Checkbox } from 'brickd';

function CheckboxSizeDemo() {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Checkbox size="small" label="小尺寸" />
      <Checkbox size="default" label="默认尺寸" />
      <Checkbox size="large" label="大尺寸" />
    </div>
  );
}

export default CheckboxSizeDemo;
```

### 禁用状态

```tsx
import { Checkbox } from 'brickd';

function CheckboxDisabledDemo() {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Checkbox disabled label="禁用未选中" />
      <Checkbox disabled checked label="禁用已选中" />
    </div>
  );
}

export default CheckboxDisabledDemo;
```

### 带回调函数

```tsx
import { Checkbox, Typography } from 'brickd';
import React, { useState } from 'react';

function CheckboxCallbackDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Typography.Text>状态：{checked ? '选中' : '未选中'}</Typography.Text>
      <Checkbox checked={checked} onCheck={setChecked} label="带回调函数" />
    </div>
  );
}

export default CheckboxCallbackDemo;
```

### 多选框组

```tsx
import { Checkbox } from 'brickd';

function CheckboxGroupDemo() {
  const options = [
    { label: '选项 1', value: '1' },
    { label: '选项 2', value: '2' },
    { label: '选项 3', value: '3' },
  ];

  return (
    <Checkbox.Group options={options} defaultValue={['1']} />
  );
}

export default CheckboxGroupDemo;
```

### 垂直方向

```tsx
import { Checkbox } from 'brickd';

function CheckboxGroupVerticalDemo() {
  const options = [
    { label: '选项 1', value: '1' },
    { label: '选项 2', value: '2' },
    { label: '选项 3', value: '3' },
  ];

  return (
    <Checkbox.Group direction="vertical" options={options} defaultValue={['1']} />
  );
}

export default CheckboxGroupVerticalDemo;
```

### 带禁用选项

```tsx
import { Checkbox } from 'brickd';

function CheckboxGroupDisabledDemo() {
  const options = [
    { label: '选项 1', value: '1' },
    { label: '选项 2', value: '2', disabled: true },
    { label: '选项 3', value: '3' },
  ];

  return (
    <Checkbox.Group options={options} defaultValue={['1']} />
  );
}

export default CheckboxGroupDisabledDemo;
```

### 带回调函数的多选框组

```tsx
import { Checkbox, Typography } from 'brickd';
import React, { useState } from 'react';

function CheckboxGroupCallbackDemo() {
  const options = [
    { label: '选项 1', value: '1' },
    { label: '选项 2', value: '2' },
    { label: '选项 3', value: '3' },
  ];
  const [values, setValues] = useState<string[]>(['1']);

  return (
    <div>
      <Typography.Text>选中值：{values.join(', ')}</Typography.Text>
      <Checkbox.Group 
        options={options} 
        value={values} 
        onChange={setValues} 
      />
    </div>
  );
}

export default CheckboxGroupCallbackDemo;
```

### 自定义子元素

```tsx
import { Checkbox } from 'brickd';
import React, { useState } from 'react';

function CheckboxGroupCustomDemo() {
  const [values, setValues] = useState<string[]>(['1']);

  const handleChange = (checkedValues: string[]) => {
    setValues(checkedValues);
  };

  return (
    <Checkbox.Group value={values} onChange={handleChange}>
      <Checkbox label="选项 1" />
      <Checkbox label="选项 2" />
      <Checkbox label="选项 3" />
    </Checkbox.Group>
  );
}

export default CheckboxGroupCustomDemo;
```

## API

### CheckboxProps

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

### CheckboxGroupProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | `'small'  'default'  'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| direction | 排列方向 | `'horizontal'  'vertical'` | `'horizontal'` |
| options | 选项列表 | `Array<{ label: React.ReactNode, value: string  number  boolean, disabled?: boolean }>` | `[]` |
| value | 选中值 | `Array<string  number  boolean>` | - |
| defaultValue | 默认选中值 | `Array<string  number  boolean>` | `[]` |
| onChange | 变化时回调 | `(values: Array<string  number  boolean>) => void` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |
