# Slider 滑块

滑块组件，用于在一个范围内选择一个值。

## 基本用法

```tsx
import React from 'react';
import { Slider } from 'brickd';

export default () => (
  <div style={{ width: '300px' }}>
    <Slider />
  </div>
);
```

## 垂直滑块

```tsx
import React from 'react';
import { Slider } from 'brickd';

export default () => (
  <div style={{ height: '300px' }}>
    <Slider vertical />
  </div>
);
```

## 不同尺寸

```tsx
import React from 'react';
import { Slider } from 'brickd';

export default () => (
  <div style={{ width: '300px' }}>
    <Slider size="small" style={{ marginBottom: '20px' }} />
    <Slider size="default" style={{ marginBottom: '20px' }} />
    <Slider size="large" />
  </div>
);
```

## 禁用状态

```tsx
import React from 'react';
import { Slider } from 'brickd';

export default () => (
  <div style={{ width: '300px' }}>
    <Slider disabled />
  </div>
);
```

## 自定义范围和步长

```tsx
import React from 'react';
import { Slider } from 'brickd';

export default () => (
  <div style={{ width: '300px' }}>
    <Slider min={0} max={50} step={5} />
  </div>
);
```

## 带标记点

```tsx
import React from 'react';
import { Slider } from 'brickd';

export default () => (
  <div style={{ width: '300px' }}>
    <Slider 
      marks={[
        { value: 0, label: '0' },
        { value: 25, label: '25' },
        { value: 50, label: '50' },
        { value: 75, label: '75' },
        { value: 100, label: '100' },
      ]} 
    />
  </div>
);
```

## 受控模式

```tsx
import React, { useState } from 'react';
import { Slider } from 'brickd';

export default () => {
  const [value, setValue] = useState(50);
  
  return (
    <div style={{ width: '300px' }}>
      <Slider value={value} onChange={setValue} />
      <div style={{ marginTop: '16px' }}>
        Value: {value}
      </div>
    </div>
  );
};
```

## 禁用工具提示

```tsx
import React from 'react';
import { Slider } from 'brickd';

export default () => (
  <div style={{ width: '300px' }}>
    <Slider tooltip={false} />
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Slider } from 'brickd';

export default () => (
  <div style={{ width: '300px' }}>
    <Slider 
      className="custom-slider"
      style={{ 
        height: '8px',
        borderRadius: '4px'
      }} 
    />
  </div>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 滑块大小 | `'small' \| 'default' \| 'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| value | 当前值（受控模式） | `number` | `undefined` |
| defaultValue | 默认值（非受控模式） | `number` | `0` |
| onChange | 变化时的回调函数 | `(value: number) => void` | `undefined` |
| onAfterChange | 拖动结束后的回调函数 | `(value: number) => void` | `undefined` |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| step | 步长 | `number` | `1` |
| marks | 标记点 | `Array<{ value: number, label: React.ReactNode }>` | `[]` |
| vertical | 是否垂直 | `boolean` | `false` |
| tooltip | 是否显示工具提示 | `boolean \| { open?: boolean }` | `true` |
| tooltipVisible | 工具提示是否可见（受控） | `boolean` | `undefined` |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |