# Mentions 提及

提及组件用于在输入框中提及用户或其他实体，支持自定义前缀、选项、大小等属性。

## 代码演示

### 基本用法

```tsx
import Mentions from './index';

function MentionsBasicDemo() {
  const options = [
    { value: 'zhangsan', label: '张三' },
    { value: 'lisi', label: '李四' },
    { value: 'wangwu', label: '王五' },
    { value: 'zhaoliu', label: '赵六' },
    { value: 'sunqi', label: '孙七' },
  ];

  return (
    <div>
      <Mentions options={options} placeholder="输入 @ 提及用户" />
    </div>
  );
}

export default MentionsBasicDemo;
```

### 提及组件尺寸

通过 `size` 属性设置提及组件尺寸，支持 `small`、`default` 和 `large`。

```tsx
import Mentions from './index';

function MentionsSizeDemo() {
  const options = [
    { value: 'zhangsan', label: '张三' },
    { value: 'lisi', label: '李四' },
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Mentions size="small" options={options} placeholder="小尺寸提及组件" />
      <Mentions size="default" options={options} placeholder="默认尺寸提及组件" />
      <Mentions size="large" options={options} placeholder="大尺寸提及组件" />
    </div>
  );
}

export default MentionsSizeDemo;
```

### 禁用状态

通过 `disabled` 属性设置提及组件为禁用状态。

```tsx
import Mentions from './index';

function MentionsDisabledDemo() {
  const options = [
    { value: 'zhangsan', label: '张三' },
    { value: 'lisi', label: '李四' },
  ];

  return (
    <div>
      <Mentions disabled options={options} placeholder="禁用的提及组件" />
    </div>
  );
}

export default MentionsDisabledDemo;
```

### 受控模式

通过 `value` 和 `onChange` 属性实现受控模式。

```tsx
import React, { useState } from 'react';
import Mentions from './index';

function MentionsControlledDemo() {
  const [value, setValue] = useState('');
  const options = [
    { value: 'zhangsan', label: '张三' },
    { value: 'lisi', label: '李四' },
  ];

  return (
    <div>
      <Mentions 
        value={value} 
        onChange={setValue} 
        options={options} 
        placeholder="受控模式提及组件" 
      />
      <p style={{ marginTop: '8px' }}>当前值: {value}</p>
    </div>
  );
}

export default MentionsControlledDemo;
```

### 自定义前缀

通过 `prefix` 属性设置提及的前缀，可以是字符串或字符串数组。

```tsx
import Mentions from './index';

function MentionsCustomPrefixDemo() {
  const options = [
    { value: 'zhangsan', label: '张三' },
    { value: 'lisi', label: '李四' },
    { value: 'feat', label: '新功能' },
    { value: 'bug', label: 'bug修复' },
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Mentions 
        prefix="#" 
        options={options} 
        placeholder="输入 # 提及标签" 
      />
      <Mentions 
        prefix={['@', '#']} 
        options={options} 
        placeholder="输入 @ 提及用户或 # 提及标签" 
      />
    </div>
  );
}

export default MentionsCustomPrefixDemo;
```

### 自定义分隔符

通过 `split` 属性设置提及后的分隔符。

```tsx
import Mentions from './index';

function MentionsCustomSplitDemo() {
  const options = [
    { value: 'zhangsan', label: '张三' },
    { value: 'lisi', label: '李四' },
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Mentions 
        split=", " 
        options={options} 
        placeholder="输入 @ 提及用户，使用逗号分隔" 
      />
      <Mentions 
        split=" | " 
        options={options} 
        placeholder="输入 @ 提及用户，使用竖线分隔" 
      />
    </div>
  );
}

export default MentionsCustomSplitDemo;
```

### 禁用选项

在选项中设置 `disabled` 属性可以禁用特定选项。

```tsx
import Mentions from './index';

function MentionsDisabledOptionsDemo() {
  const options = [
    { value: 'zhangsan', label: '张三' },
    { value: 'lisi', label: '李四', disabled: true },
    { value: 'wangwu', label: '王五' },
  ];

  return (
    <div>
      <Mentions options={options} placeholder="输入 @ 提及用户，李四已被禁用" />
    </div>
  );
}

export default MentionsDisabledOptionsDemo;
```

### 选择回调

通过 `onSelect` 属性设置选择选项时的回调函数。

```tsx
import React, { useState } from 'react';
import Mentions from './index';

function MentionsSelectCallbackDemo() {
  const [selected, setSelected] = useState<string>('');
  const options = [
    { value: 'zhangsan', label: '张三' },
    { value: 'lisi', label: '李四' },
  ];

  const handleSelect = (option: any, prefix: string) => {
    setSelected(`选择了 ${prefix}${option.label}`);
  };

  return (
    <div>
      <Mentions 
        options={options} 
        onSelect={handleSelect} 
        placeholder="输入 @ 提及用户" 
      />
      {selected && <p style={{ marginTop: '8px' }}>{selected}</p>}
    </div>
  );
}

export default MentionsSelectCallbackDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义提及组件的样式。

```tsx
import Mentions from './index';

function MentionsCustomStyleDemo() {
  const options = [
    { value: 'zhangsan', label: '张三' },
    { value: 'lisi', label: '李四' },
  ];

  return (
    <div>
      <Mentions 
        options={options} 
        placeholder="自定义样式提及组件" 
        style={{
          width: '100%',
          border: '2px solid #1890ff',
          borderRadius: '8px',
          padding: '8px',
          minHeight: '80px'
        }}
      />
    </div>
  );
}

export default MentionsCustomStyleDemo;
```

## API

### MentionsProps

| 属性        | 说明             | 类型                                  | 默认值   |
| ----------- | ---------------- | ------------------------------------- | -------- |
| size        | 提及组件尺寸     | `'small' \| 'default' \| 'large'`   | `'default'` |
| disabled    | 是否禁用         | `boolean`                             | `false`  |
| value       | 当前值（受控模式） | `string`                              | -        |
| defaultValue | 默认值（非受控模式） | `string`                              | `''`     |
| options     | 选项列表         | `MentionsOption[]`                    | `[]`     |
| onChange    | 值变化时的回调   | `(value: string) => void`             | -        |
| onSelect    | 选择选项时的回调 | `(option: MentionsOption, prefix: string) => void` | -        |
| placeholder | 占位符文本       | `string`                              | `'请输入内容'` |
| prefix      | 提及前缀         | `string \| string[]`                 | `'@'`    |
| split       | 提及后的分隔符   | `string`                              | `' '`    |
| className   | 自定义类名       | `string`                              | `''`     |
| style       | 自定义样式       | `React.CSSProperties`                 | `{}`     |

### MentionsOption

| 属性        | 说明             | 类型                                  | 默认值   |
| ----------- | ---------------- | ------------------------------------- | -------- |
| value       | 选项值           | `string`                              | -        |
| label       | 选项标签         | `React.ReactNode`                     | -        |
| disabled    | 是否禁用         | `boolean`                             | `false`  |
| [key: string] | 其他自定义属性   | `any`                                 | -        |