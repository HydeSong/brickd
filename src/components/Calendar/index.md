# Calendar 日历

日历组件，用于选择日期，支持月份导航和日期选择功能。

## 代码演示

### 基础用法

最简单的日历用法，显示当前月份的日历。

```tsx
import Calendar from './index';

function CalendarBasicDemo() {
  return (
    <div style={{ width: '300px' }}>
      <Calendar />
    </div>
  );
}

export default CalendarBasicDemo;
```

### 受控模式

通过 `value` 和 `onChange` 属性实现受控模式，外部可以控制选中的日期。

```tsx
import Calendar from './index';
import { useState } from 'react';
import Button from '../Button';

function CalendarControlledDemo() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleReset = () => {
    setSelectedDate(new Date());
  };

  return (
    <div style={{ width: '300px' }}>
      <div style={{ marginBottom: '16px' }}>
        <p>选中日期：{selectedDate.toLocaleDateString()}</p>
        <Button onClick={handleReset}>重置日期</Button>
      </div>
      <Calendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
}

export default CalendarControlledDemo;
```

### 非受控模式

通过 `defaultValue` 属性设置默认选中的日期，组件内部管理状态。

```tsx
import Calendar from './index';

function CalendarUncontrolledDemo() {
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 7); // 默认选中一周后的日期

  return (
    <div style={{ width: '300px' }}>
      <Calendar defaultValue={defaultDate} />
    </div>
  );
}

export default CalendarUncontrolledDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义日历样式。

```tsx
import Calendar from './index';

function CalendarCustomStyleDemo() {
  return (
    <div style={{ width: '320px' }}>
      <Calendar
        style={{
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          overflow: 'hidden',
        }}
      />
    </div>
  );
}

export default CalendarCustomStyleDemo;
```

## API

### CalendarProps

| 属性         | 说明                         | 类型                   | 默认值 |
| ------------ | ---------------------------- | ---------------------- | ------ |
| value        | 选中的日期（受控模式）       | `Date`                 | -      |
| defaultValue | 默认选中的日期（非受控模式） | `Date`                 | -      |
| onChange     | 日期变化时的回调函数         | `(date: Date) => void` | -      |
| className    | 自定义类名                   | `string`               | `''`   |
| style        | 自定义样式                   | `React.CSSProperties`  | `{}`   |
