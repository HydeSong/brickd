---
title: Checkbox
order: 1
---

# Checkbox 复选框

用于在多个选项中进行多选。

## 基本用法

```tsx
import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <div>
      <Checkbox label="选项1" />
      <Checkbox label="选项2" />
      <Checkbox label="选项3" />
    </div>
  );
};

export default App;
```

## 禁用状态

```tsx
import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <div>
      <Checkbox label="禁用选项" disabled />
      <Checkbox label="禁用且选中" disabled checked />
    </div>
  );
};

export default App;
```

## 受控模式

```tsx
import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div>
      <Checkbox
        label="受控复选框"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>当前状态: {checked ? '选中' : '未选中'}</p>
    </div>
  );
};

export default App;
```

## 非受控模式

```tsx
import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <div>
      <Checkbox label="默认选中" defaultChecked />
      <Checkbox label="默认未选中" />
    </div>
  );
};

export default App;
```

## 不同尺寸

```tsx
import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <div>
      <Checkbox size="small" label="小尺寸" />
      <Checkbox size="default" label="默认尺寸" />
      <Checkbox size="large" label="大尺寸" />
    </div>
  );
};

export default App;
```

## Checkbox.Group 基本用法

```tsx
import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <Checkbox.Group
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' },
      ]}
    />
  );
};

export default App;
```

## Checkbox.Group 垂直排列

```tsx
import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <Checkbox.Group
      direction="vertical"
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' },
      ]}
    />
  );
};

export default App;
```

## Checkbox.Group 受控模式

```tsx
import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  const [values, setValues] = useState<string[]>(['1']);

  return (
    <div>
      <Checkbox.Group
        value={values}
        onChange={setValues}
        options={[
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3' },
        ]}
      />
      <p>当前选中: {values.join(', ')}</p>
    </div>
  );
};

export default App;
```

## Checkbox.Group 禁用状态

```tsx
import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <div>
      <Checkbox.Group
        disabled
        options={[
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3' },
        ]}
      />
      <br />
      <Checkbox.Group
        options={[
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2', disabled: true },
          { label: '选项3', value: '3' },
        ]}
      />
    </div>
  );
};

export default App;
```

## Checkbox.Group 子组件用法

```tsx
import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  const [values, setValues] = useState<string[]>(['1']);

  const handleChange = (newValues: string[]) => {
    setValues(newValues);
  };

  return (
    <div>
      <Checkbox.Group value={values} onChange={handleChange}>
        <Checkbox label="选项1" value="1" />
        <Checkbox label="选项2" value="2" />
        <Checkbox label="选项3" value="3" />
      </Checkbox.Group>
      <p>当前选中: {values.join(', ')}</p>
    </div>
  );
};

export default App;
```

## API

### Checkbox

| 属性           | 类型                                               | 默认值      | 说明                       |
| -------------- | -------------------------------------------------- | ----------- | -------------------------- |
| size           | `'small' \| 'default' \| 'large'`                  | `'default'` | 复选框尺寸                 |
| disabled       | `boolean`                                          | `false`     | 是否禁用                   |
| checked        | `boolean`                                          | -           | 选中状态（受控模式）       |
| defaultChecked | `boolean`                                          | `false`     | 默认选中状态（非受控模式） |
| onChange       | `(e: React.ChangeEvent<HTMLInputElement>) => void` | -           | 变化时回调                 |
| onCheck        | `(checked: boolean) => void`                       | -           | 选中状态变化时回调         |
| label          | `React.ReactNode`                                  | -           | 标签文本                   |
| className      | `string`                                           | `''`        | 自定义类名                 |
| style          | `React.CSSProperties`                              | `{}`        | 自定义样式                 |

### Checkbox.Group

| 属性         | 类型                                                                                        | 默认值         | 说明                     |
| ------------ | ------------------------------------------------------------------------------------------- | -------------- | ------------------------ |
| size         | `'small' \| 'default' \| 'large'`                                                           | `'default'`    | 子复选框尺寸             |
| disabled     | `boolean`                                                                                   | `false`        | 是否禁用所有子复选框     |
| direction    | `'horizontal' \| 'vertical'`                                                                | `'horizontal'` | 排列方向                 |
| options      | `Array<{ label: React.ReactNode; value: string \| number \| boolean; disabled?: boolean }>` | `[]`           | 选项列表                 |
| value        | `(string \| number \| boolean)[]`                                                           | -              | 选中值（受控模式）       |
| defaultValue | `(string \| number \| boolean)[]`                                                           | `[]`           | 默认选中值（非受控模式） |
| onChange     | `(values: (string \| number \| boolean)[]) => void`                                         | -              | 变化时回调               |
| className    | `string`                                                                                    | `''`           | 自定义类名               |
| style        | `React.CSSProperties`                                                                       | `{}`           | 自定义样式               |
| children     | `React.ReactNode`                                                                           | -              | 子复选框                 |
