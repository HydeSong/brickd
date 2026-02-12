---
title: TimePicker
nav: components
order: 51
---

# TimePicker

时间选择器组件，用于选择具体的时间。

## 基本用法

最简单的时间选择器使用方式。

```tsx
import React from 'react';
import TimePicker from './index';

const App: React.FC = () => {
  return (
    <div>
      <TimePicker />
    </div>
  );
};

export default App;
```

## 不同尺寸

时间选择器支持三种尺寸：small、default 和 large。

```tsx
import React from 'react';
import TimePicker from './index';

const App: React.FC = () => {
  return (
    <div>
      <TimePicker size="small" />
      <TimePicker size="default" />
      <TimePicker size="large" />
    </div>
  );
};

export default App;
```

## 禁用状态

禁用的时间选择器。

```tsx
import React from 'react';
import TimePicker from './index';

const App: React.FC = () => {
  return (
    <div>
      <TimePicker disabled />
    </div>
  );
};

export default App;
```

## 12小时制

使用12小时制的时间选择器。

```tsx
import React from 'react';
import TimePicker from './index';

const App: React.FC = () => {
  return (
    <div>
      <TimePicker use12Hours />
    </div>
  );
};

export default App;
```

## 受控模式

通过状态控制时间选择器的值。

```tsx
import React, { useState } from 'react';
import TimePicker from './index';

const App: React.FC = () => {
  const [time, setTime] = useState<string>('12:30');

  return (
    <div>
      <TimePicker value={time} onChange={setTime} />
      <p>Selected time: {time}</p>
    </div>
  );
};

export default App;
```

## 带默认值

设置默认值的时间选择器。

```tsx
import React from 'react';
import TimePicker from './index';

const App: React.FC = () => {
  return (
    <div>
      <TimePicker defaultValue="14:45" />
    </div>
  );
};

export default App;
```

## 自定义占位符

设置自定义占位符文本的时间选择器。

```tsx
import React from 'react';
import TimePicker from './index';

const App: React.FC = () => {
  return (
    <div>
      <TimePicker placeholder="请选择具体时间" />
    </div>
  );
};

export default App;
```

## 自定义样式

通过 className 和 style 属性自定义时间选择器样式。

```tsx
import React from 'react';
import TimePicker from './index';

const App: React.FC = () => {
  return (
    <div>
      <TimePicker
        style={{
          borderRadius: '8px',
          border: '2px solid #1890ff',
          background: '#f0f8ff',
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
| size | 'small' \| 'default' \| 'large' | 'default' | 时间选择器尺寸 |
| disabled | boolean | false | 是否禁用 |
| value | string | - | 受控模式下的时间值 |
| defaultValue | string | '' | 非受控模式下的默认时间值 |
| onChange | (time: string) => void | - | 时间变化时的回调函数 |
| onOpenChange | (open: boolean) => void | - | 面板开关状态变化时的回调函数 |
| placeholder | string | '请选择时间' | 占位文本 |
| use12Hours | boolean | false | 是否使用12小时制 |
| className | string | '' | 自定义类名 |
| style | React.CSSProperties | {} | 自定义样式 |