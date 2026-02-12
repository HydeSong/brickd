# Radio 单选框

单选框组件，用于在一组选项中选择单个值。

## 基本用法

```tsx
import React from 'react';
import { Radio } from 'brickd';

export default () => (
  <div>
    <Radio label="Option 1" />
    <Radio label="Option 2" />
    <Radio label="Option 3" />
  </div>
);
```

## 单选按钮组

```tsx
import React from 'react';
import { Radio } from 'brickd';

export default () => (
  <div>
    <Radio.Group
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
    />
  </div>
);
```

## 垂直排列

```tsx
import React from 'react';
import { Radio } from 'brickd';

export default () => (
  <div>
    <Radio.Group
      direction="vertical"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
    />
  </div>
);
```

## 不同尺寸

```tsx
import React from 'react';
import { Radio } from 'brickd';

export default () => (
  <div>
    <div style={{ marginBottom: '16px' }}>
      <Radio size="small" label="Small" />
      <Radio size="small" label="Small" />
    </div>
    <div style={{ marginBottom: '16px' }}>
      <Radio size="default" label="Default" />
      <Radio size="default" label="Default" />
    </div>
    <div>
      <Radio size="large" label="Large" />
      <Radio size="large" label="Large" />
    </div>
  </div>
);
```

## 禁用状态

```tsx
import React from 'react';
import { Radio } from 'brickd';

export default () => (
  <div>
    <Radio label="Disabled" disabled />
    <Radio.Group
      disabled
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]}
    />
  </div>
);
```

## 受控模式

```tsx
import React, { useState } from 'react';
import { Radio } from 'brickd';

export default () => {
  const [value, setValue] = useState('1');

  return (
    <div>
      <Radio.Group
        value={value}
        onChange={setValue}
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]}
      />
      <div style={{ marginTop: '16px' }}>Selected: {value}</div>
    </div>
  );
};
```

## 自定义样式

```tsx
import React from 'react';
import { Radio } from 'brickd';

export default () => (
  <div>
    <Radio
      label="Custom Style"
      style={{
        marginRight: '20px',
        fontSize: '16px',
      }}
    />
    <Radio.Group
      className="custom-radio-group"
      style={{
        marginTop: '16px',
        padding: '12px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
      }}
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]}
    />
  </div>
);
```

## API

### Radio

| 属性           | 说明                       | 类型                                               | 默认值      |
| -------------- | -------------------------- | -------------------------------------------------- | ----------- |
| size           | 单选框大小                 | `'small' \| 'default' \| 'large'`                  | `'default'` |
| disabled       | 是否禁用                   | `boolean`                                          | `false`     |
| checked        | 是否选中（受控模式）       | `boolean`                                          | `undefined` |
| defaultChecked | 默认是否选中（非受控模式） | `boolean`                                          | `false`     |
| value          | 单选框的值                 | `string \| number`                                 | `undefined` |
| onChange       | 变化时的回调函数           | `(e: React.ChangeEvent<HTMLInputElement>) => void` | `undefined` |
| onCheck        | 选中状态变化时的回调函数   | `(checked: boolean) => void`                       | `undefined` |
| label          | 单选框标签                 | `React.ReactNode`                                  | `undefined` |
| className      | 自定义类名                 | `string`                                           | `''`        |
| style          | 自定义样式                 | `React.CSSProperties`                              | `{}`        |

### Radio.Group

| 属性         | 说明                       | 类型                                | 默认值         |
| ------------ | -------------------------- | ----------------------------------- | -------------- |
| size         | 单选框大小                 | `'small' \| 'default' \| 'large'`   | `'default'`    |
| disabled     | 是否禁用所有单选框         | `boolean`                           | `false`        |
| direction    | 排列方向                   | `'horizontal' \| 'vertical'`        | `'horizontal'` |
| options      | 选项配置                   | `RadioOption[]`                     | `[]`           |
| value        | 当前选中的值（受控模式）   | `string \| number`                  | `undefined`    |
| defaultValue | 默认选中的值（非受控模式） | `string \| number`                  | `''`           |
| onChange     | 变化时的回调函数           | `(value: string \| number) => void` | `undefined`    |
| className    | 自定义类名                 | `string`                            | `''`           |
| style        | 自定义样式                 | `React.CSSProperties`               | `{}`           |
| children     | 子元素                     | `React.ReactNode`                   | `undefined`    |

### RadioOption

| 属性     | 说明           | 类型               | 默认值  |
| -------- | -------------- | ------------------ | ------- |
| label    | 选项标签       | `React.ReactNode`  | -       |
| value    | 选项值         | `string \| number` | -       |
| disabled | 是否禁用该选项 | `boolean`          | `false` |
