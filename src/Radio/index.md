---
title: Radio 单选框
order: 24
---

# Radio 单选框

用于从多个选项中选择一个的组件，支持单选和单选组模式。

## 代码演示

### 基本用法

```tsx
import { Radio } from 'brickd';

function RadioBasicDemo() {
  return (
    <Radio label="选项 1" />
  );
}

export default RadioBasicDemo;
```

### 不同尺寸

```tsx
import { Radio } from 'brickd';

function RadioSizeDemo() {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Radio size="small" label="小尺寸" />
      <Radio size="default" label="默认尺寸" />
      <Radio size="large" label="大尺寸" />
    </div>
  );
}

export default RadioSizeDemo;
```

### 禁用状态

```tsx
import { Radio } from 'brickd';

function RadioDisabledDemo() {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Radio disabled label="禁用未选中" />
      <Radio disabled checked label="禁用已选中" />
    </div>
  );
}

export default RadioDisabledDemo;
```

### 带回调函数

```tsx
import { Radio, Typography } from 'brickd';
import React, { useState } from 'react';

function RadioCallbackDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Typography.Text>状态：{checked ? '选中' : '未选中'}</Typography.Text>
      <Radio checked={checked} onCheck={setChecked} label="带回调函数" />
    </div>
  );
}

export default RadioCallbackDemo;
```

### 单选框组

```tsx
import { Radio } from 'brickd';

function RadioGroupDemo() {
  const options = [
    { label: '选项 1', value: '1' },
    { label: '选项 2', value: '2' },
    { label: '选项 3', value: '3' },
  ];

  return (
    <Radio.Group options={options} defaultValue="1" />
  );
}

export default RadioGroupDemo;
```

### 垂直方向

```tsx
import { Radio } from 'brickd';

function RadioGroupVerticalDemo() {
  const options = [
    { label: '选项 1', value: '1' },
    { label: '选项 2', value: '2' },
    { label: '选项 3', value: '3' },
  ];

  return (
    <Radio.Group direction="vertical" options={options} defaultValue="1" />
  );
}

export default RadioGroupVerticalDemo;
```

### 带禁用选项

```tsx
import { Radio } from 'brickd';

function RadioGroupDisabledDemo() {
  const options = [
    { label: '选项 1', value: '1' },
    { label: '选项 2', value: '2', disabled: true },
    { label: '选项 3', value: '3' },
  ];

  return (
    <Radio.Group options={options} defaultValue="1" />
  );
}

export default RadioGroupDisabledDemo;
```

### 带回调函数的单选框组

```tsx
import { Radio, Typography } from 'brickd';
import React, { useState } from 'react';

function RadioGroupCallbackDemo() {
  const options = [
    { label: '选项 1', value: '1' },
    { label: '选项 2', value: '2' },
    { label: '选项 3', value: '3' },
  ];
  const [value, setValue] = useState<string>('1');

  return (
    <div>
      <Typography.Text>选中值：{value}</Typography.Text>
      <Radio.Group 
        options={options} 
        value={value} 
        onChange={setValue} 
      />
    </div>
  );
}

export default RadioGroupCallbackDemo;
```

### 自定义子元素

```tsx
import { Radio } from 'brickd';
import React, { useState } from 'react';

function RadioGroupCustomDemo() {
  const [value, setValue] = useState<string>('1');

  const handleChange = (checkedValue: string) => {
    setValue(checkedValue);
  };

  return (
    <Radio.Group value={value} onChange={handleChange}>
      <Radio value="1" label="选项 1" />
      <Radio value="2" label="选项 2" />
      <Radio value="3" label="选项 3" />
    </Radio.Group>
  );
}

export default RadioGroupCustomDemo;
```

## API

### RadioProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | `'small'  'default'  'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| checked | 是否选中 | `boolean` | - |
| defaultChecked | 默认是否选中 | `boolean` | `false` |
| value | 单选框的值 | `string  number  boolean` | - |
| onChange | 变化时回调 | `(e: React.ChangeEvent<HTMLInputElement>) => void` | - |
| onCheck | 选中状态变化回调 | `(checked: boolean) => void` | - |
| label | 标签文本 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |

### RadioGroupProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | `'small'  'default'  'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| direction | 排列方向 | `'horizontal'  'vertical'` | `'horizontal'` |
| options | 选项列表 | `Array<{ label: React.ReactNode, value: string  number  boolean, disabled?: boolean }>` | `[]` |
| value | 选中值 | `string  number  boolean` | - |
| defaultValue | 默认选中值 | `string  number  boolean` | - |
| onChange | 变化时回调 | `(value: string  number  boolean) => void` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |
