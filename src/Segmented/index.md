# Segmented 分段控制器

分段控制器组件，用于在多个选项中选择一个。

## 基本用法

```tsx
import React from 'react';
import { Segmented } from 'brickd';

export default () => (
  <div>
    <Segmented 
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]} 
    />
  </div>
);
```

## 受控模式

```tsx
import React, { useState } from 'react';
import { Segmented } from 'brickd';

export default () => {
  const [value, setValue] = useState('1');
  
  return (
    <div>
      <Segmented 
        value={value}
        onChange={setValue}
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]} 
      />
      <div style={{ marginTop: '16px' }}>
        Selected: {value}
      </div>
    </div>
  );
};
```

## 禁用状态

```tsx
import React from 'react';
import { Segmented } from 'brickd';

export default () => (
  <div>
    <Segmented 
      disabled
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]} 
    />
  </div>
);
```

## 部分禁用

```tsx
import React from 'react';
import { Segmented } from 'brickd';

export default () => (
  <div>
    <Segmented 
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2', disabled: true },
        { label: 'Option 3', value: '3' },
      ]} 
    />
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Segmented } from 'brickd';

export default () => (
  <div>
    <Segmented 
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]} 
      style={{ 
        borderRadius: '8px',
        borderColor: '#1890ff'
      }} 
    />
    <Segmented 
      className="custom-segmented"
      options={[
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
      ]} 
      style={{ 
        marginTop: '16px',
        fontSize: '14px',
        height: '40px'
      }} 
    />
  </div>
);
```

## 带默认值

```tsx
import React from 'react';
import { Segmented } from 'brickd';

export default () => (
  <div>
    <Segmented 
      defaultValue="2"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]} 
    />
  </div>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 选项配置 | `Array<{ label: React.ReactNode, value: string \| number, disabled?: boolean }>` | `[]` |
| value | 当前选中值（受控模式） | `string \| number` | `undefined` |
| defaultValue | 默认选中值（非受控模式） | `string \| number` | `undefined` |
| onChange | 变化时的回调函数 | `(value: string \| number) => void` | `undefined` |
| disabled | 是否禁用 | `boolean` | `false` |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |