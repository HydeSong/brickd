---
title: DatePicker
order: 1
---

# DatePicker 日期选择器

用于选择日期的组件，支持多种配置选项。

## 基本用法

```tsx
import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker />
    </div>
  );
};

export default App;
```

## 不同尺寸

```tsx
import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker size="small" />
      <DatePicker size="default" />
      <DatePicker size="large" />
    </div>
  );
};

export default App;
```

## 禁用状态

```tsx
import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker disabled />
    </div>
  );
};

export default App;
```

## 受控模式

```tsx
import React, { useState } from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  const [date, setDate] = useState<string>('');

  return (
    <div>
      <DatePicker value={date} onChange={setDate} />
      <p>当前选择: {date || '未选择'}</p>
    </div>
  );
};

export default App;
```

## 非受控模式

```tsx
import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker defaultValue="2024-01-01" />
    </div>
  );
};

export default App;
```

## 自定义占位符

```tsx
import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker placeholder="请选择入住日期" />
    </div>
  );
};

export default App;
```

## 自定义日期格式

```tsx
import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker format="YYYY/MM/DD" />
    </div>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker 
        style={{ 
          width: 200, 
          border: '2px solid #ddd', 
          borderRadius: 8, 
          padding: 8 
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
| size | `'small' \| 'default' \| 'large'` | `'default'` | 日期选择器尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| value | `string` | - | 当前日期值（受控模式） |
| defaultValue | `string` | `''` | 默认日期值（非受控模式） |
| onChange | `(date: string) => void` | - | 日期变化时的回调 |
| onOpenChange | `(open: boolean) => void` | - | 面板打开/关闭状态变化时的回调 |
| placeholder | `string` | `'请选择日期'` | 占位符文本 |
| format | `string` | `'YYYY-MM-DD'` | 日期格式 |
| className | `string` | `''` | 自定义类名 |
| style | `React.CSSProperties` | `{}` | 自定义样式 |