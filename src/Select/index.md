# Select 选择器

选择器组件，用于从选项列表中选择值。

## 基本用法

```tsx
import React from 'react';
import { Select } from 'brickd';

export default () => (
  <div>
    <Select 
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' },
        { label: '选项4', value: '4' },
        { label: '选项5', value: '5' },
      ]} 
    />
  </div>
);
```

## 多选模式

```tsx
import React from 'react';
import { Select } from 'brickd';

export default () => (
  <div>
    <Select 
      mode="multiple"
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' },
        { label: '选项4', value: '4' },
        { label: '选项5', value: '5' },
      ]} 
    />
  </div>
);
```

## 搜索功能

```tsx
import React from 'react';
import { Select } from 'brickd';

export default () => (
  <div>
    <Select 
      showSearch
      options={[
        { label: '苹果', value: 'apple' },
        { label: '香蕉', value: 'banana' },
        { label: '橙子', value: 'orange' },
        { label: '葡萄', value: 'grape' },
        { label: '西瓜', value: 'watermelon' },
      ]} 
    />
  </div>
);
```

## 不同尺寸

```tsx
import React from 'react';
import { Select } from 'brickd';

export default () => (
  <div>
    <Select 
      size="small"
      placeholder="小尺寸"
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
      ]} 
      style={{ marginRight: '20px' }}
    />
    <Select 
      size="default"
      placeholder="默认尺寸"
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
      ]} 
      style={{ marginRight: '20px' }}
    />
    <Select 
      size="large"
      placeholder="大尺寸"
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
      ]} 
    />
  </div>
);
```

## 禁用状态

```tsx
import React from 'react';
import { Select } from 'brickd';

export default () => (
  <div>
    <Select 
      disabled
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
      ]} 
    />
  </div>
);
```

## 允许清空

```tsx
import React from 'react';
import { Select } from 'brickd';

export default () => (
  <div>
    <Select 
      allowClear
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' },
      ]} 
    />
  </div>
);
```

## 自定义过滤

```tsx
import React from 'react';
import { Select } from 'brickd';

export default () => (
  <div>
    <Select 
      showSearch
      filterOption={(inputValue, option) => {
        return option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
               option.value.toLowerCase().includes(inputValue.toLowerCase());
      }}
      options={[
        { label: '苹果', value: 'apple' },
        { label: '香蕉', value: 'banana' },
        { label: '橙子', value: 'orange' },
      ]} 
    />
  </div>
);
```

## 受控模式

```tsx
import React, { useState } from 'react';
import { Select } from 'brickd';

export default () => {
  const [value, setValue] = useState('');
  
  return (
    <div>
      <Select 
        value={value}
        onChange={setValue}
        options={[
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3' },
        ]} 
      />
      <div style={{ marginTop: '16px' }}>
        Selected: {value}
      </div>
    </div>
  );
};
```

## 自定义样式

```tsx
import React from 'react';
import { Select } from 'brickd';

export default () => (
  <div>
    <Select 
      className="custom-select"
      style={{ 
        width: '300px',
        borderColor: '#1890ff'
      }}
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' },
      ]} 
    />
  </div>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 选择器尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| value | 当前选中值（受控模式） | `string \| number \| (string \| number)[]` | `undefined` |
| defaultValue | 默认选中值（非受控模式） | `string \| number \| (string \| number)[]` | `''` |
| onChange | 变化时的回调函数 | `(value: string \| number \| (string \| number)[]) => void` | `undefined` |
| onSelect | 选择选项时的回调函数 | `(option: SelectOption, optionList: SelectOption[]) => void` | `undefined` |
| onDeselect | 取消选择选项时的回调函数 | `(option: SelectOption, optionList: SelectOption[]) => void` | `undefined` |
| placeholder | 占位文本 | `string` | `'请选择'` |
| options | 选项配置 | `SelectOption[]` | `[]` |
| mode | 选择模式 | `'single' \| 'multiple'` | `'single'` |
| allowClear | 是否允许清空 | `boolean` | `false` |
| filterOption | 过滤选项的方式 | `boolean \| ((inputValue: string, option: SelectOption) => boolean)` | `true` |
| showSearch | 是否显示搜索框 | `boolean` | `false` |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |

### SelectOption

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项标签 | `React.ReactNode` | - |
| value | 选项值 | `string \| number` | - |
| disabled | 是否禁用该选项 | `boolean` | `false` |
| [key: string] | 其他自定义属性 | `any` | - |