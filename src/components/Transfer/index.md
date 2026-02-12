---
title: Transfer
nav: components
order: 55
---

# Transfer

穿梭框组件，用于在两个列表之间转移项目。

## 基本用法

最简单的穿梭框使用方式。

```tsx
import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
  ];

  const handleChange = (
    targetKeys: (string | number)[],
    direction: 'left' | 'right',
    moveKeys: (string | number)[],
  ) => {
    console.log('Target Keys:', targetKeys);
    console.log('Direction:', direction);
    console.log('Move Keys:', moveKeys);
  };

  return <Transfer dataSource={dataSource} onChange={handleChange} />;
};

export default App;
```

## 自定义标题

自定义源列表和目标列表的标题。

```tsx
import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
  ];

  return <Transfer dataSource={dataSource} titles={['待选择', '已选择']} />;
};

export default App;
```

## 自定义渲染

自定义列表项的渲染方式。

```tsx
import React from 'react';
import Transfer from './index';
import Icon from '../Icon';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '选项 1', description: '这是选项 1 的描述' },
    { key: 2, label: '选项 2', description: '这是选项 2 的描述' },
    { key: 3, label: '选项 3', description: '这是选项 3 的描述' },
    { key: 4, label: '选项 4', description: '这是选项 4 的描述' },
    { key: 5, label: '选项 5', description: '这是选项 5 的描述' },
  ];

  const renderItem = (item: any) => {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon
            name="check-circle"
            size={16}
            style={{ marginRight: '8px', color: '#52c41a' }}
          />
          <span>{item.label}</span>
        </div>
        <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
          {item.description}
        </div>
      </div>
    );
  };

  return <Transfer dataSource={dataSource} render={renderItem} />;
};

export default App;
```

## 禁用状态

禁用的穿梭框。

```tsx
import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
  ];

  return <Transfer dataSource={dataSource} disabled />;
};

export default App;
```

## 部分禁用

部分选项禁用的穿梭框。

```tsx
import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2', disabled: true },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4', disabled: true },
    { key: 5, label: '选项 5' },
  ];

  return <Transfer dataSource={dataSource} />;
};

export default App;
```

## 受控模式

通过状态控制穿梭框的值。

```tsx
import React, { useState } from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
  ];

  const [targetKeys, setTargetKeys] = useState<(string | number)[]>([2, 4]);

  const handleChange = (
    newTargetKeys: (string | number)[],
    direction: 'left' | 'right',
    moveKeys: (string | number)[],
  ) => {
    setTargetKeys(newTargetKeys);
    console.log('Direction:', direction);
    console.log('Move Keys:', moveKeys);
  };

  return (
    <div>
      <Transfer
        dataSource={dataSource}
        value={targetKeys}
        onChange={handleChange}
      />
      <p>已选择的选项: {targetKeys.join(', ')}</p>
    </div>
  );
};

export default App;
```

## 带默认值

设置默认值的穿梭框。

```tsx
import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
  ];

  return <Transfer dataSource={dataSource} defaultValue={[1, 3, 5]} />;
};

export default App;
```

## 自定义样式

通过 className 和 style 属性自定义穿梭框样式。

```tsx
import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
  ];

  return (
    <Transfer
      dataSource={dataSource}
      listStyle={[
        { width: 300, height: 300 },
        { width: 300, height: 300 },
      ]}
      style={{
        border: '1px solid #e8e8e8',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#f9f9f9',
      }}
    />
  );
};

export default App;
```

## 选择变化回调

监听选择变化的回调函数。

```tsx
import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
  ];

  const handleSelectChange = (
    sourceSelectedKeys: (string | number)[],
    targetSelectedKeys: (string | number)[],
  ) => {
    console.log('Source Selected Keys:', sourceSelectedKeys);
    console.log('Target Selected Keys:', targetSelectedKeys);
  };

  return (
    <Transfer dataSource={dataSource} onSelectChange={handleSelectChange} />
  );
};

export default App;
```

## 搜索功能

穿梭框内置搜索功能。

```tsx
import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '苹果' },
    { key: 2, label: '香蕉' },
    { key: 3, label: '橙子' },
    { key: 4, label: '草莓' },
    { key: 5, label: '西瓜' },
    { key: 6, label: '葡萄' },
    { key: 7, label: '梨' },
    { key: 8, label: '桃' },
  ];

  return (
    <Transfer dataSource={dataSource} titles={['水果列表', '已选择水果']} />
  );
};

export default App;
```

## API

### TransferProps

| 属性           | 类型                                                                                                     | 默认值                 | 说明                         |
| -------------- | -------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------- |
| disabled       | boolean                                                                                                  | false                  | 是否禁用                     |
| value          | (string \| number)[]                                                                                     | -                      | 受控模式下的目标列表值       |
| defaultValue   | (string \| number)[]                                                                                     | []                     | 非受控模式下的默认目标列表值 |
| onChange       | (targetKeys: (string \| number)[], direction: 'left' \| 'right', moveKeys: (string \| number)[]) => void | -                      | 数据变化时的回调函数         |
| onSelectChange | (sourceSelectedKeys: (string \| number)[], targetSelectedKeys: (string \| number)[]) => void             | -                      | 选择变化时的回调函数         |
| dataSource     | TransferItem[]                                                                                           | []                     | 数据源                       |
| titles         | [string, string]                                                                                         | ['源列表', '目标列表'] | 源列表和目标列表的标题       |
| render         | (item: TransferItem) => React.ReactNode                                                                  | -                      | 自定义列表项渲染函数         |
| listStyle      | React.CSSProperties[]                                                                                    | -                      | 两个列表的样式               |
| className      | string                                                                                                   | ''                     | 自定义类名                   |
| style          | React.CSSProperties                                                                                      | {}                     | 自定义样式                   |

### TransferItem

| 属性          | 类型             | 默认值 | 说明       |
| ------------- | ---------------- | ------ | ---------- |
| key           | string \| number | -      | 唯一标识   |
| label         | React.ReactNode  | -      | 显示文本   |
| disabled      | boolean          | false  | 是否禁用   |
| [key: string] | any              | -      | 自定义属性 |
