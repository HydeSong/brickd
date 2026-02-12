# InputNumber 数字输入框

数字输入框组件用于输入数字，支持自定义大小、禁用状态、只读状态、错误状态、最小值、最大值和步长等功能。

## 代码演示

### 基本用法

```tsx
import InputNumber from './index';

function InputNumberBasicDemo() {
  return (
    <div>
      <InputNumber />
    </div>
  );
}

export default InputNumberBasicDemo;
```

### 数字输入框尺寸

通过 `size` 属性设置数字输入框尺寸，支持 `small`、`default` 和 `large`。

```tsx
import InputNumber from './index';

function InputNumberSizeDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <InputNumber size="small" />
      <InputNumber size="default" />
      <InputNumber size="large" />
    </div>
  );
}

export default InputNumberSizeDemo;
```

### 禁用状态

通过 `disabled` 属性设置数字输入框为禁用状态。

```tsx
import InputNumber from './index';

function InputNumberDisabledDemo() {
  return (
    <div>
      <InputNumber disabled defaultValue={5} />
    </div>
  );
}

export default InputNumberDisabledDemo;
```

### 只读状态

通过 `readOnly` 属性设置数字输入框为只读状态。

```tsx
import InputNumber from './index';

function InputNumberReadOnlyDemo() {
  return (
    <div>
      <InputNumber readOnly defaultValue={5} />
    </div>
  );
}

export default InputNumberReadOnlyDemo;
```

### 错误状态

通过 `error` 属性设置数字输入框为错误状态。

```tsx
import InputNumber from './index';

function InputNumberErrorDemo() {
  return (
    <div>
      <InputNumber error defaultValue={5} />
    </div>
  );
}

export default InputNumberErrorDemo;
```

### 最小值和最大值

通过 `min` 和 `max` 属性设置数字输入框的最小值和最大值。

```tsx
import InputNumber from './index';

function InputNumberMinMaxDemo() {
  return (
    <div>
      <InputNumber min={0} max={100} defaultValue={50} />
    </div>
  );
}

export default InputNumberMinMaxDemo;
```

### 步长

通过 `step` 属性设置数字输入框的步长。

```tsx
import InputNumber from './index';

function InputNumberStepDemo() {
  return (
    <div>
      <InputNumber step={0.5} defaultValue={5} />
    </div>
  );
}

export default InputNumberStepDemo;
```

### 受控模式

通过 `value` 和 `onChange` 属性实现受控模式。

```tsx
import React, { useState } from 'react';
import InputNumber from './index';

function InputNumberControlledDemo() {
  const [value, setValue] = useState<number | undefined>(5);

  return (
    <div>
      <InputNumber 
        value={value} 
        onChange={setValue} 
      />
      <p style={{ marginTop: '8px' }}>当前值: {value}</p>
    </div>
  );
}

export default InputNumberControlledDemo;
```

### 非受控模式

通过 `defaultValue` 属性设置默认值，实现非受控模式。

```tsx
import InputNumber from './index';

function InputNumberUncontrolledDemo() {
  return (
    <div>
      <InputNumber defaultValue={5} />
    </div>
  );
}

export default InputNumberUncontrolledDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义数字输入框样式。

```tsx
import InputNumber from './index';

function InputNumberCustomDemo() {
  return (
    <div>
      <InputNumber 
        defaultValue={5} 
        style={{ 
          width: 120, 
          border: '2px solid #1890ff', 
          borderRadius: '8px' 
        }} 
      />
    </div>
  );
}

export default InputNumberCustomDemo;
```

## API

### InputNumberProps

| 属性          | 说明             | 类型                                  | 默认值   |
| ------------- | ---------------- | ------------------------------------- | -------- |
| size          | 数字输入框尺寸   | `'small' \| 'default' \| 'large'`   | `'default'` |
| disabled      | 是否禁用         | `boolean`                             | `false`  |
| readOnly      | 是否只读         | `boolean`                             | `false`  |
| error         | 是否错误状态     | `boolean`                             | `false`  |
| min           | 最小值           | `number`                              | -        |
| max           | 最大值           | `number`                              | -        |
| step          | 步长             | `number`                              | `1`      |
| value         | 当前值（受控模式） | `number \| undefined`                 | -        |
| defaultValue  | 默认值（非受控模式） | `number \| undefined`                 | -        |
| onChange      | 值变化时的回调   | `(value: number \| undefined) => void` | -        |
| className     | 自定义类名       | `string`                              | `''`     |
| style         | 自定义样式       | `React.CSSProperties`                 | `{}`     |