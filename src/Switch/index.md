# Switch 开关

开关组件，用于在两种状态之间切换。

## 基本用法

```tsx
import React from 'react';
import { Switch } from 'brickd';

export default () => (
  <div>
    <Switch />
  </div>
);
```

## 不同尺寸

```tsx
import React from 'react';
import { Switch } from 'brickd';

export default () => (
  <div>
    <Switch size="small" style={{ marginRight: '20px' }} />
    <Switch size="default" style={{ marginRight: '20px' }} />
    <Switch size="large" />
  </div>
);
```

## 禁用状态

```tsx
import React from 'react';
import { Switch } from 'brickd';

export default () => (
  <div>
    <Switch disabled />
    <Switch disabled checked style={{ marginLeft: '20px' }} />
  </div>
);
```

## 受控模式

```tsx
import React, { useState } from 'react';
import { Switch } from 'brickd';

export default () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <div>
      <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <div style={{ marginTop: '16px' }}>
        Status: {checked ? 'On' : 'Off'}
      </div>
    </div>
  );
};
```

## 带标签

```tsx
import React from 'react';
import { Switch } from 'brickd';

export default () => (
  <div>
    <Switch label="开关标签" />
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Switch } from 'brickd';

export default () => (
  <div>
    <Switch 
      className="custom-switch"
      style={{ 
        marginRight: '20px',
        fontSize: '16px'
      }} 
    />
    <Switch 
      style={{ 
        marginTop: '16px',
        padding: '8px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px'
      }}
      label="带边框的开关"
    />
  </div>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 开关大小 | `'small' \| 'default' \| 'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| checked | 是否选中（受控模式） | `boolean` | `undefined` |
| defaultChecked | 默认是否选中（非受控模式） | `boolean` | `false` |
| onChange | 变化时的回调函数 | `(e: React.ChangeEvent<HTMLInputElement>) => void` | `undefined` |
| onCheck | 选中状态变化时的回调函数 | `(checked: boolean) => void` | `undefined` |
| label | 开关标签 | `React.ReactNode` | `undefined` |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |