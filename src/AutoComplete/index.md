---
title: AutoComplete 自动完成
order: 22
---

# AutoComplete 自动完成

用于根据用户输入自动匹配并显示选项的组件。

## 代码演示

### 基本用法

```tsx
import { AutoComplete } from 'brickd';

function AutoCompleteBasicDemo() {
  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <div style={{ width: 300 }}>
      <AutoComplete options={options} placeholder="请输入水果名称" />
    </div>
  );
}

export default AutoCompleteBasicDemo;
```

### 不同尺寸

```tsx
import { AutoComplete } from 'brickd';

function AutoCompleteSizeDemo() {
  const options = ['Apple', 'Banana', 'Cherry'];

  return (
    <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <AutoComplete size="small" options={options} placeholder="小尺寸" />
      <AutoComplete size="default" options={options} placeholder="默认尺寸" />
      <AutoComplete size="large" options={options} placeholder="大尺寸" />
    </div>
  );
}

export default AutoCompleteSizeDemo;
```

### 禁用状态

```tsx
import { AutoComplete } from 'brickd';

function AutoCompleteDisabledDemo() {
  const options = ['Apple', 'Banana', 'Cherry'];

  return (
    <div style={{ width: 300 }}>
      <AutoComplete disabled options={options} placeholder="禁用状态" />
    </div>
  );
}

export default AutoCompleteDisabledDemo;
```

### 错误状态

```tsx
import { AutoComplete } from 'brickd';

function AutoCompleteErrorDemo() {
  const options = ['Apple', 'Banana', 'Cherry'];

  return (
    <div style={{ width: 300 }}>
      <AutoComplete error options={options} placeholder="错误状态" />
    </div>
  );
}

export default AutoCompleteErrorDemo;
```

### 对象类型选项

```tsx
import { AutoComplete } from 'brickd';

function AutoCompleteObjectDemo() {
  const options = [
    { value: '1', label: '苹果' },
    { value: '2', label: '香蕉' },
    { value: '3', label: '樱桃' },
    { value: '4', label: '日期' },
    { value: '5', label: '接骨木莓' },
  ];

  return (
    <div style={{ width: 300 }}>
      <AutoComplete options={options} placeholder="请输入水果名称" />
    </div>
  );
}

export default AutoCompleteObjectDemo;
```

### 带禁用选项

```tsx
import { AutoComplete } from 'brickd';

function AutoCompleteDisabledOptionDemo() {
  const options = [
    { value: '1', label: '苹果' },
    { value: '2', label: '香蕉', disabled: true },
    { value: '3', label: '樱桃' },
  ];

  return (
    <div style={{ width: 300 }}>
      <AutoComplete options={options} placeholder="请输入水果名称" />
    </div>
  );
}

export default AutoCompleteDisabledOptionDemo;
```

### 带回调函数

```tsx
import { AutoComplete, Typography } from 'brickd';
import React, { useState } from 'react';

function AutoCompleteCallbackDemo() {
  const options = ['Apple', 'Banana', 'Cherry'];
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState('');

  return (
    <div style={{ width: 300 }}>
      <Typography.Text>当前值：{value}</Typography.Text>
      <Typography.Text>选中值：{selected}</Typography.Text>
      <AutoComplete 
        options={options} 
        value={value}
        onChange={setValue}
        onSelect={setSelected}
        placeholder="请输入水果名称" 
      />
    </div>
  );
}

export default AutoCompleteCallbackDemo;
```

### 带搜索回调

```tsx
import { AutoComplete } from 'brickd';
import React, { useState } from 'react';

function AutoCompleteSearchDemo() {
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (value: string) => {
    if (value) {
      setLoading(true);
      // 模拟异步搜索
      setTimeout(() => {
        const filteredOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
          .filter(item => item.toLowerCase().includes(value.toLowerCase()));
        setOptions(filteredOptions);
        setLoading(false);
      }, 500);
    } else {
      setOptions([]);
    }
  };

  return (
    <div style={{ width: 300 }}>
      <AutoComplete 
        options={options} 
        onSearch={handleSearch}
        loading={loading}
        placeholder="请输入水果名称" 
      />
    </div>
  );
}

export default AutoCompleteSearchDemo;
```

### 自定义选项渲染

```tsx
import { AutoComplete } from 'brickd';

function AutoCompleteCustomRenderDemo() {
  const options = ['Apple', 'Banana', 'Cherry'];

  const renderOption = (option: string, inputValue: string) => {
    return (
      <div>
        <span>{option}</span>
        <span style={{ marginLeft: 10, color: '#999' }}>水果</span>
      </div>
    );
  };

  return (
    <div style={{ width: 300 }}>
      <AutoComplete 
        options={options} 
        renderOption={renderOption}
        placeholder="请输入水果名称" 
      />
    </div>
  );
}

export default AutoCompleteCustomRenderDemo;
```

## API

### AutoCompleteProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 输入框尺寸 | `'small'  'default'  'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| error | 是否显示错误状态 | `boolean` | `false` |
| options | 选项列表 | `Array<{ value: string, label?: string, disabled?: boolean }>  string[]` | `[]` |
| value | 当前值 | `string` | - |
| defaultValue | 默认值 | `string` | - |
| placeholder | 占位文本 | `string` | - |
| onChange | 值变化回调 | `(value: string) => void` | - |
| onSelect | 选项选中回调 | `(option: { value: string, label?: string, disabled?: boolean }  string) => void` | - |
| onSearch | 搜索回调 | `(value: string) => void` | - |
| loading | 是否加载中 | `boolean` | `false` |
| filterOption | 自定义过滤逻辑 | `(inputValue: string, option: { value: string, label?: string, disabled?: boolean }  string) => boolean` | - |
| renderOption | 自定义选项渲染 | `(option: { value: string, label?: string, disabled?: boolean }  string, inputValue: string) => React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
