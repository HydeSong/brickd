# Cascader 级联选择器

级联选择器组件，用于选择多层级的数据，如省市区、分类等。

## 代码演示

### 基础用法

最简单的级联选择器用法，使用 `options` 属性提供层级数据。

```tsx
import Cascader from './index';

function CascaderBasicDemo() {
  const options = [
    {
      value: '1',
      label: '北京市',
      children: [
        {
          value: '11',
          label: '海淀区',
          children: [
            { value: '111', label: '中关村' },
            { value: '112', label: '上地' },
          ],
        },
        {
          value: '12',
          label: '朝阳区',
          children: [
            { value: '121', label: 'CBD' },
            { value: '122', label: '望京' },
          ],
        },
      ],
    },
    {
      value: '2',
      label: '上海市',
      children: [
        {
          value: '21',
          label: '浦东新区',
          children: [
            { value: '211', label: '陆家嘴' },
            { value: '212', label: '张江' },
          ],
        },
        {
          value: '22',
          label: '静安区',
          children: [
            { value: '221', label: '南京西路' },
            { value: '222', label: '静安寺' },
          ],
        },
      ],
    },
  ];

  const handleChange = (value) => {
    console.log('Selected:', value);
  };

  return (
    <div style={{ width: '300px' }}>
      <Cascader
        options={options}
        placeholder="请选择地区"
        onChange={handleChange}
      />
    </div>
  );
}

export default CascaderBasicDemo;
```

### 不同尺寸

通过 `size` 属性设置级联选择器的尺寸，支持 `small`、`default` 和 `large` 三种尺寸。

```tsx
import Cascader from './index';

function CascaderSizeDemo() {
  const options = [
    {
      value: '1',
      label: '北京市',
      children: [
        {
          value: '11',
          label: '海淀区',
          children: [
            { value: '111', label: '中关村' },
            { value: '112', label: '上地' },
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Cascader
        options={options}
        size="small"
        placeholder="小尺寸"
      />
      <Cascader
        options={options}
        size="default"
        placeholder="默认尺寸"
      />
      <Cascader
        options={options}
        size="large"
        placeholder="大尺寸"
      />
    </div>
  );
}

export default CascaderSizeDemo;
```

### 禁用状态

通过 `disabled` 属性设置级联选择器为禁用状态。

```tsx
import Cascader from './index';

function CascaderDisabledDemo() {
  const options = [
    {
      value: '1',
      label: '北京市',
      children: [
        {
          value: '11',
          label: '海淀区',
          children: [
            { value: '111', label: '中关村' },
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ width: '300px' }}>
      <Cascader
        options={options}
        disabled
        placeholder="禁用状态"
      />
    </div>
  );
}

export default CascaderDisabledDemo;
```

### 受控模式

通过 `value` 和 `onChange` 属性实现受控模式。

```tsx
import Cascader from './index';
import { useState } from 'react';
import Button from '../Button';

function CascaderControlledDemo() {
  const [selectedValue, setSelectedValue] = useState([]);
  
  const options = [
    {
      value: '1',
      label: '北京市',
      children: [
        {
          value: '11',
          label: '海淀区',
          children: [
            { value: '111', label: '中关村' },
            { value: '112', label: '上地' },
          ],
        },
      ],
    },
  ];

  const handleReset = () => {
    setSelectedValue([]);
  };

  return (
    <div style={{ width: '300px' }}>
      <div style={{ marginBottom: '16px' }}>
        <p>选中值：{JSON.stringify(selectedValue)}</p>
        <Button onClick={handleReset}>重置</Button>
      </div>
      <Cascader
        options={options}
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
        placeholder="请选择地区"
      />
    </div>
  );
}

export default CascaderControlledDemo;
```

### 非受控模式

通过 `defaultValue` 属性设置默认选中值，组件内部管理状态。

```tsx
import Cascader from './index';

function CascaderUncontrolledDemo() {
  const options = [
    {
      value: '1',
      label: '北京市',
      children: [
        {
          value: '11',
          label: '海淀区',
          children: [
            { value: '111', label: '中关村' },
            { value: '112', label: '上地' },
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ width: '300px' }}>
      <Cascader
        options={options}
        defaultValue={['1', '11', '111']}
        placeholder="请选择地区"
      />
    </div>
  );
}

export default CascaderUncontrolledDemo;
```

### 禁用选项

在 `options` 数据中设置 `disabled: true` 可以禁用特定选项。

```tsx
import Cascader from './index';

function CascaderDisabledOptionDemo() {
  const options = [
    {
      value: '1',
      label: '北京市',
      children: [
        {
          value: '11',
          label: '海淀区',
          disabled: true,
          children: [
            { value: '111', label: '中关村' },
          ],
        },
        {
          value: '12',
          label: '朝阳区',
          children: [
            { value: '121', label: 'CBD' },
            { value: '122', label: '望京' },
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ width: '300px' }}>
      <Cascader
        options={options}
        placeholder="请选择地区"
      />
    </div>
  );
}

export default CascaderDisabledOptionDemo;
```

## API

### Cascader

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 选择器尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| options | 级联数据 | `Array<{ value: string \| number; label: React.ReactNode; disabled?: boolean; children?: Array<{ value: string \| number; label: React.ReactNode; disabled?: boolean; children?: ... }> }>` | `[]` |
| value | 选中值（受控模式） | `Array<string \| number>` | - |
| defaultValue | 默认选中值（非受控模式） | `Array<string \| number>` | `[]` |
| placeholder | 占位符 | `string` | `'请选择'` |
| onChange | 值变化时的回调 | `(value: Array<string \| number>) => void` | - |
| onSelect | 选择时的回调 | `(value: Array<string \| number>, option: { value: string \| number; label: React.ReactNode; disabled?: boolean; children?: Array<...> }) => void` | - |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |
