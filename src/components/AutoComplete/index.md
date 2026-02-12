# AutoComplete 自动完成

自动完成组件，用于输入框的自动补全功能，支持自定义选项、过滤逻辑和渲染方式。

## 代码演示

### 基础用法

最简单的用法，使用字符串数组作为选项。

```tsx
import AutoComplete from './index';

function AutoCompleteBasicDemo() {
  const options = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
  ];

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        placeholder="请输入水果名称"
        onChange={(value) => console.log('输入值:', value)}
        onSelect={(option) => console.log('选中选项:', option)}
      />
    </div>
  );
}

export default AutoCompleteBasicDemo;
```

### 使用对象数组

使用对象数组作为选项，每个对象包含 `value` 和 `label` 属性。

```tsx
import AutoComplete from './index';

function AutoCompleteObjectDemo() {
  const options = [
    { value: 'apple', label: '苹果' },
    { value: 'banana', label: '香蕉' },
    { value: 'cherry', label: '樱桃' },
    { value: 'date', label: '枣' },
    { value: 'elderberry', label: '接骨木莓' },
  ];

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        placeholder="请输入水果名称"
        onChange={(value) => console.log('输入值:', value)}
        onSelect={(option) => console.log('选中选项:', option)}
      />
    </div>
  );
}

export default AutoCompleteObjectDemo;
```

### 自定义大小

通过 `size` 属性设置输入框的大小，支持 `small`、`default` 和 `large` 三种尺寸。

```tsx
import AutoComplete from './index';

function AutoCompleteSizeDemo() {
  const options = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px',
      }}
    >
      <AutoComplete options={options} size="small" placeholder="小尺寸" />
      <AutoComplete options={options} size="default" placeholder="默认尺寸" />
      <AutoComplete options={options} size="large" placeholder="大尺寸" />
    </div>
  );
}

export default AutoCompleteSizeDemo;
```

### 加载状态

通过 `loading` 属性设置加载状态，用于异步获取选项的场景。

```tsx
import AutoComplete from './index';
import { useState } from 'react';
import Button from '../Button';

function AutoCompleteLoadingDemo() {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState(['Apple', 'Banana', 'Cherry']);

  const handleSearch = (value: string) => {
    if (value) {
      setLoading(true);
      // 模拟异步请求
      setTimeout(() => {
        const filteredOptions = [
          'Apple',
          'Banana',
          'Cherry',
          'Date',
          'Elderberry',
        ].filter((option) =>
          option.toLowerCase().includes(value.toLowerCase()),
        );
        setOptions(filteredOptions);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        loading={loading}
        placeholder="请输入水果名称"
        onSearch={handleSearch}
      />
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => setLoading(!loading)}>
          {loading ? '取消加载' : '模拟加载'}
        </Button>
      </div>
    </div>
  );
}

export default AutoCompleteLoadingDemo;
```

### 禁用状态

通过 `disabled` 属性设置禁用状态。

```tsx
import AutoComplete from './index';

function AutoCompleteDisabledDemo() {
  const options = ['Apple', 'Banana', 'Cherry'];

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete options={options} disabled placeholder="禁用状态" />
    </div>
  );
}

export default AutoCompleteDisabledDemo;
```

### 错误状态

通过 `error` 属性设置错误状态。

```tsx
import AutoComplete from './index';

function AutoCompleteErrorDemo() {
  const options = ['Apple', 'Banana', 'Cherry'];

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete options={options} error placeholder="错误状态" />
    </div>
  );
}

export default AutoCompleteErrorDemo;
```

### 自定义过滤

通过 `filterOption` 属性自定义过滤逻辑。

```tsx
import AutoComplete from './index';

function AutoCompleteCustomFilterDemo() {
  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  // 自定义过滤逻辑：只匹配开头的字符
  const customFilter = (
    inputValue: string,
    option: string | { value: string; label?: string; disabled?: boolean },
  ) => {
    if (typeof option === 'string') {
      return option.toLowerCase().startsWith(inputValue.toLowerCase());
    } else {
      return (
        option.label?.toLowerCase().startsWith(inputValue.toLowerCase()) ||
        option.value.toLowerCase().startsWith(inputValue.toLowerCase())
      );
    }
  };

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        filterOption={customFilter}
        placeholder="请输入水果名称（只匹配开头）"
      />
    </div>
  );
}

export default AutoCompleteCustomFilterDemo;
```

### 自定义选项渲染

通过 `renderOption` 属性自定义选项的渲染方式。

```tsx
import AutoComplete from './index';

function AutoCompleteCustomRenderDemo() {
  const options = [
    { value: 'apple', label: '苹果', color: '#ff6b6b' },
    { value: 'banana', label: '香蕉', color: '#ffe66d' },
    { value: 'cherry', label: '樱桃', color: '#ff8fab' },
    { value: 'grape', label: '葡萄', color: '#845ec2' },
  ];

  // 自定义选项渲染
  const renderOption = (option: any, inputValue: string) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: option.color,
          }}
        />
        <span>{option.label}</span>
      </div>
    );
  };

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        renderOption={renderOption}
        placeholder="请输入水果名称"
      />
    </div>
  );
}

export default AutoCompleteCustomRenderDemo;
```

## API

### AutoComplete

| 属性         | 说明                 | 类型                                                                                                               | 默认值      |
| ------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| size         | 输入框尺寸           | `'small' \| 'default' \| 'large'`                                                                                  | `'default'` |
| disabled     | 是否禁用             | `boolean`                                                                                                          | `false`     |
| readOnly     | 是否只读             | `boolean`                                                                                                          | `false`     |
| error        | 是否错误状态         | `boolean`                                                                                                          | `false`     |
| options      | 选项列表             | `Array<{ value: string; label?: string; disabled?: boolean }> \| string[]`                                         | `[]`        |
| value        | 输入值（受控）       | `string`                                                                                                           | -           |
| defaultValue | 默认输入值（非受控） | `string`                                                                                                           | `''`        |
| placeholder  | 占位符               | `string`                                                                                                           | -           |
| onChange     | 输入值变化时的回调   | `(value: string) => void`                                                                                          | -           |
| onSelect     | 选项选中时的回调     | `(option: { value: string; label?: string; disabled?: boolean } \| string) => void`                                | -           |
| onSearch     | 搜索时的回调         | `(value: string) => void`                                                                                          | -           |
| loading      | 是否加载状态         | `boolean`                                                                                                          | `false`     |
| filterOption | 自定义过滤逻辑       | `(inputValue: string, option: { value: string; label?: string; disabled?: boolean } \| string) => boolean`         | -           |
| renderOption | 自定义选项渲染       | `(option: { value: string; label?: string; disabled?: boolean } \| string, inputValue: string) => React.ReactNode` | -           |
| className    | 自定义类名           | `string`                                                                                                           | `''`        |
| style        | 自定义样式           | `React.CSSProperties`                                                                                              | `{}`        |
