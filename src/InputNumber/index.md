---
title: InputNumber 数字输入框
order: 21
---

# InputNumber 数字输入框

用于接收用户输入的数字信息，支持增减按钮操作。

## 代码演示

### 基本用法

```tsx
import { InputNumber } from 'brickd';

function InputNumberBasicDemo() {
  return (
    <div style={{ width: 200 }}>
      <InputNumber placeholder="请输入数字" />
    </div>
  );
}

export default InputNumberBasicDemo;
```

### 不同尺寸

```tsx
import { InputNumber } from 'brickd';

function InputNumberSizeDemo() {
  return (
    <div style={{ width: 200, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <InputNumber size="small" placeholder="小尺寸" />
      <InputNumber size="default" placeholder="默认尺寸" />
      <InputNumber size="large" placeholder="大尺寸" />
    </div>
  );
}

export default InputNumberSizeDemo;
```

### 禁用状态

```tsx
import { InputNumber } from 'brickd';

function InputNumberDisabledDemo() {
  return (
    <div style={{ width: 200 }}>
      <InputNumber disabled placeholder="禁用状态" />
    </div>
  );
}

export default InputNumberDisabledDemo;
```

### 只读状态

```tsx
import { InputNumber } from 'brickd';

function InputNumberReadOnlyDemo() {
  return (
    <div style={{ width: 200 }}>
      <InputNumber readOnly value={10} />
    </div>
  );
}

export default InputNumberReadOnlyDemo;
```

### 错误状态

```tsx
import { InputNumber } from 'brickd';

function InputNumberErrorDemo() {
  return (
    <div style={{ width: 200 }}>
      <InputNumber error placeholder="错误状态" />
    </div>
  );
}

export default InputNumberErrorDemo;
```

### 带范围限制

```tsx
import { InputNumber } from 'brickd';

function InputNumberRangeDemo() {
  return (
    <div style={{ width: 200 }}>
      <InputNumber min={0} max={100} defaultValue={50} />
    </div>
  );
}

export default InputNumberRangeDemo;
```

### 带步长

```tsx
import { InputNumber } from 'brickd';

function InputNumberStepDemo() {
  return (
    <div style={{ width: 200 }}>
      <InputNumber step={0.5} defaultValue={1} />
    </div>
  );
}

export default InputNumberStepDemo;
```

### 带回调函数

```tsx
import { InputNumber, Typography } from 'brickd';
import React, { useState } from 'react';

function InputNumberCallbackDemo() {
  const [value, setValue] = useState<number | undefined>(10);

  return (
    <div style={{ width: 200 }}>
      <Typography.Text>当前值：{value}</Typography.Text>
      <InputNumber value={value} onChange={setValue} />
    </div>
  );
}

export default InputNumberCallbackDemo;
```

## API

### InputNumberProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 输入框尺寸 | `'small'  'default'  'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| error | 是否显示错误状态 | `boolean` | `false` |
| min | 最小值 | `number` | - |
| max | 最大值 | `number` | - |
| step | 步长 | `number` | `1` |
| value | 当前值 | `number` | - |
| defaultValue | 默认值 | `number` | - |
| onChange | 值变化回调 | `(value: number  undefined) => void` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
