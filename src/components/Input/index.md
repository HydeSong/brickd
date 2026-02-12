# Input 输入框

输入框组件用于接收用户输入，支持自定义大小、禁用状态、只读状态、错误状态、前缀和后缀等功能。

## 代码演示

### 基本用法

```tsx
import Input from './index';

function InputBasicDemo() {
  return (
    <div>
      <Input placeholder="请输入内容" />
    </div>
  );
}

export default InputBasicDemo;
```

### 输入框尺寸

通过 `size` 属性设置输入框尺寸，支持 `small`、`default` 和 `large`。

```tsx
import Input from './index';

function InputSizeDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Input size="small" placeholder="小尺寸输入框" />
      <Input size="default" placeholder="默认尺寸输入框" />
      <Input size="large" placeholder="大尺寸输入框" />
    </div>
  );
}

export default InputSizeDemo;
```

### 禁用状态

通过 `disabled` 属性设置输入框为禁用状态。

```tsx
import Input from './index';

function InputDisabledDemo() {
  return (
    <div>
      <Input disabled placeholder="禁用的输入框" />
    </div>
  );
}

export default InputDisabledDemo;
```

### 只读状态

通过 `readOnly` 属性设置输入框为只读状态。

```tsx
import Input from './index';

function InputReadOnlyDemo() {
  return (
    <div>
      <Input readOnly defaultValue="只读的输入框" />
    </div>
  );
}

export default InputReadOnlyDemo;
```

### 错误状态

通过 `error` 属性设置输入框为错误状态。

```tsx
import Input from './index';

function InputErrorDemo() {
  return (
    <div>
      <Input error placeholder="错误状态的输入框" />
    </div>
  );
}

export default InputErrorDemo;
```

### 前缀和后缀

通过 `prefix` 和 `suffix` 属性设置输入框的前缀和后缀。

```tsx
import Input from './index';
import Icon from '../Icon';

function InputPrefixSuffixDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Input prefix={<Icon type="search" />} placeholder="带搜索图标的输入框" />
      <Input suffix={<Icon type="clear" />} placeholder="带清除图标的输入框" />
      <Input prefix="￥" suffix=".00" placeholder="带货币符号的输入框" />
    </div>
  );
}

export default InputPrefixSuffixDemo;
```

### 受控模式

通过 `value` 和 `onChange` 属性实现受控模式。

```tsx
import React, { useState } from 'react';
import Input from './index';

function InputControlledDemo() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="受控输入框"
      />
      <p style={{ marginTop: '8px' }}>当前值: {value}</p>
    </div>
  );
}

export default InputControlledDemo;
```

### 非受控模式

通过 `defaultValue` 属性设置默认值，实现非受控模式。

```tsx
import Input from './index';

function InputUncontrolledDemo() {
  return (
    <div>
      <Input defaultValue="默认值" placeholder="非受控输入框" />
    </div>
  );
}

export default InputUncontrolledDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义输入框样式。

```tsx
import Input from './index';

function InputCustomDemo() {
  return (
    <div>
      <Input
        placeholder="自定义样式输入框"
        style={{
          width: 300,
          border: '2px solid #1890ff',
          borderRadius: '8px',
          padding: '4px',
        }}
      />
    </div>
  );
}

export default InputCustomDemo;
```

## API

### InputProps

| 属性         | 说明                 | 类型                                               | 默认值      |
| ------------ | -------------------- | -------------------------------------------------- | ----------- |
| size         | 输入框尺寸           | `'small' \| 'default' \| 'large'`                  | `'default'` |
| disabled     | 是否禁用             | `boolean`                                          | `false`     |
| readOnly     | 是否只读             | `boolean`                                          | `false`     |
| error        | 是否错误状态         | `boolean`                                          | `false`     |
| prefix       | 前缀内容             | `React.ReactNode`                                  | -           |
| suffix       | 后缀内容             | `React.ReactNode`                                  | -           |
| className    | 自定义类名           | `string`                                           | `''`        |
| style        | 自定义样式           | `React.CSSProperties`                              | `{}`        |
| value        | 当前值（受控模式）   | `string`                                           | -           |
| defaultValue | 默认值（非受控模式） | `string`                                           | -           |
| onChange     | 值变化时的回调       | `(e: React.ChangeEvent<HTMLInputElement>) => void` | -           |
| placeholder  | 占位符文本           | `string`                                           | -           |
| type         | 输入框类型           | `string`                                           | `'text'`    |
| name         | 输入框名称           | `string`                                           | -           |
| id           | 输入框 ID            | `string`                                           | -           |
| autoFocus    | 是否自动聚焦         | `boolean`                                          | `false`     |
| maxLength    | 最大输入长度         | `number`                                           | -           |
| minLength    | 最小输入长度         | `number`                                           | -           |
| pattern      | 输入验证正则         | `string`                                           | -           |
| required     | 是否必填             | `boolean`                                          | `false`     |
