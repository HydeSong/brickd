---
title: ColorPicker
order: 1
---

# ColorPicker 颜色选择器

用于选择颜色的组件，支持预设颜色和自定义颜色输入。

## 基本用法

```tsx
import React from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  return (
    <div>
      <ColorPicker />
    </div>
  );
};

export default App;
```

## 不同尺寸

```tsx
import React from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  return (
    <div>
      <ColorPicker size="small" />
      <ColorPicker size="default" />
      <ColorPicker size="large" />
    </div>
  );
};

export default App;
```

## 禁用状态

```tsx
import React from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  return (
    <div>
      <ColorPicker disabled />
    </div>
  );
};

export default App;
```

## 受控模式

```tsx
import React, { useState } from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  const [color, setColor] = useState<string>('#1890ff');

  return (
    <div>
      <ColorPicker value={color} onChange={setColor} />
      <p>当前颜色: {color}</p>
    </div>
  );
};

export default App;
```

## 非受控模式

```tsx
import React from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  return (
    <div>
      <ColorPicker defaultValue="#ff4d4f" />
    </div>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  return (
    <div>
      <ColorPicker 
        style={{ 
          width: 120, 
          border: '2px solid #ddd', 
          borderRadius: 8, 
          padding: 4 
        }} 
      />
    </div>
  );
};

export default App;
```

## API

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `'small' \| 'default' \| 'large'` | `'default'` | 颜色选择器尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| value | `string` | - | 当前颜色值（受控模式） |
| defaultValue | `string` | `'#1890ff'` | 默认颜色值（非受控模式） |
| onChange | `(color: string) => void` | - | 颜色变化时的回调 |
| onOpenChange | `(open: boolean) => void` | - | 面板打开/关闭状态变化时的回调 |
| className | `string` | `''` | 自定义类名 |
| style | `React.CSSProperties` | `{}` | 自定义样式 |