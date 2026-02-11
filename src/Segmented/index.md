# Segmented 分段控制器

分段控制器组件，用于在多个选项之间进行选择。

## 安装

```bash
npm install brickd
```

## 导入

```tsx
import { Segmented } from 'brickd';
```

## 用法

### 基础用法

```tsx
import React from 'react';
import { Segmented } from 'brickd';

const App = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <Segmented options={options} />
  );
};

export default App;
```

### 受控组件

```tsx
import React, { useState } from 'react';
import { Segmented } from 'brickd';

const App = () => {
  const [value, setValue] = useState('1');
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Segmented 
      options={options} 
      value={value} 
      onChange={handleChange} 
    />
  );
};

export default App;
```

### 带默认值

```tsx
import React from 'react';
import { Segmented } from 'brickd';

const App = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <Segmented options={options} defaultValue="2" />
  );
};

export default App;
```

### 禁用状态

```tsx
import React from 'react';
import { Segmented } from 'brickd';

const App = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <Segmented options={options} disabled />
  );
};

export default App;
```

### 禁用单个选项

```tsx
import React from 'react';
import { Segmented } from 'brickd';

const App = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2', disabled: true },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <Segmented options={options} />
  );
};

export default App;
```

## API

### Segmented

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | `SegmentedOption[]` | - | 选项列表 |
| value | `string` | - | 受控值 |
| defaultValue | `string` | - | 默认值 |
| onChange | `(value: string) => void` | - | 值变化时的回调 |
| disabled | `boolean` | `false` | 是否禁用 |
| className | `string` | - | 自定义类名 |
| style | `React.CSSProperties` | - | 自定义样式 |

### SegmentedOption

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | `React.ReactNode` | - | 选项标签 |
| value | `string` | - | 选项值 |
| disabled | `boolean` | `false` | 是否禁用该选项 |
