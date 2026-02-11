# Calendar 日历

用于显示和选择日期的日历组件。

## 基本用法

```tsx
import React, { useState } from 'react';
import Calendar from './index';

const App: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <div>
      <Calendar value={date} onChange={handleDateChange} />
      <p>Selected date: {date.toLocaleDateString()}</p>
    </div>
  );
};

export default App;
```

## 默认日期

```tsx
import React from 'react';
import Calendar from './index';

const App: React.FC = () => {
  return (
    <div>
      <Calendar defaultValue={new Date('2024-01-01')} />
    </div>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import Calendar from './index';

const App: React.FC = () => {
  return (
    <div>
      <Calendar 
        className="custom-calendar"
        style={{ width: '350px' }}
      />
    </div>
  );
};

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 选中的日期 | `Date` | - |
| `defaultValue` | 默认选中的日期 | `Date` | 当前日期 |
| `onChange` | 日期变化回调 | `(date: Date) => void` | - |
| `className` | 自定义类名 | `string` | `''` |
| `style` | 自定义样式 | `React.CSSProperties` | `{}` |
