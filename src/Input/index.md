---
title: Input 输入框
order: 20
---

# Input 输入框

用于接收用户输入的文本信息。

## 代码演示

### 基本用法

```tsx
import { Input } from 'brickd';

function InputBasicDemo() {
  return (
    <div style={{ width: 300 }}>
      <Input placeholder="请输入内容" />
    </div>
  );
}

export default InputBasicDemo;
```

### 不同尺寸

```tsx
import { Input } from 'brickd';

function InputSizeDemo() {
  return (
    <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Input size="small" placeholder="小尺寸" />
      <Input size="default" placeholder="默认尺寸" />
      <Input size="large" placeholder="大尺寸" />
    </div>
  );
}

export default InputSizeDemo;
```

### 禁用状态

```tsx
import { Input } from 'brickd';

function InputDisabledDemo() {
  return (
    <div style={{ width: 300 }}>
      <Input disabled placeholder="禁用状态" />
    </div>
  );
}

export default InputDisabledDemo;
```

### 只读状态

```tsx
import { Input } from 'brickd';

function InputReadOnlyDemo() {
  return (
    <div style={{ width: 300 }}>
      <Input readOnly value="只读状态" />
    </div>
  );
}

export default InputReadOnlyDemo;
```

### 错误状态

```tsx
import { Input } from 'brickd';

function InputErrorDemo() {
  return (
    <div style={{ width: 300 }}>
      <Input error placeholder="错误状态" />
    </div>
  );
}

export default InputErrorDemo;
```

### 带前缀和后缀

```tsx
import { Input } from 'brickd';

function InputPrefixSuffixDemo() {
  return (
    <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Input prefix="¥" placeholder="带前缀" />
      <Input suffix=".com" placeholder="带后缀" />
      <Input prefix="https://" suffix=".com" placeholder="带前后缀" />
    </div>
  );
}

export default InputPrefixSuffixDemo;
```

### 全宽输入框

```tsx
import { Input } from 'brickd';

function InputFullWidthDemo() {
  return (
    <div style={{ width: '100%' }}>
      <Input placeholder="全宽输入框" style={{ width: '100%' }} />
    </div>
  );
}

export default InputFullWidthDemo;
```

## API

### InputProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 输入框尺寸 | `'small'  'default'  'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| error | 是否显示错误状态 | `boolean` | `false` |
| prefix | 前缀内容 | `React.ReactNode` | - |
| suffix | 后缀内容 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| placeholder | 占位文本 | `string` | - |
| value | 输入值 | `string` | - |
| onChange | 输入变化回调 | `(e: React.ChangeEvent<HTMLInputElement>) => void` | - |
| onFocus | 聚焦回调 | `(e: React.FocusEvent<HTMLInputElement>) => void` | - |
| onBlur | 失焦回调 | `(e: React.FocusEvent<HTMLInputElement>) => void` | - |
