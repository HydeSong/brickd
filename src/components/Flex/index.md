---
title: Flex
order: 1
---

# Flex 弹性布局

基于 CSS Flexbox 的弹性布局组件，用于快速构建灵活的布局结构。

## 基本用法

```tsx
import React from 'react';
import Flex from '../Flex';

const App: React.FC = () => {
  return (
    <Flex>
      <div style={{ width: 100, height: 100, backgroundColor: '#f5f5f5' }}>
        1
      </div>
      <div style={{ width: 100, height: 100, backgroundColor: '#e8e8e8' }}>
        2
      </div>
      <div style={{ width: 100, height: 100, backgroundColor: '#d9d9d9' }}>
        3
      </div>
    </Flex>
  );
};

export default App;
```

## 不同方向

```tsx
import React from 'react';
import Flex from '../Flex';

const App: React.FC = () => {
  return (
    <div>
      <h3>水平方向（默认）</h3>
      <Flex direction="row">
        <div style={{ width: 80, height: 80, backgroundColor: '#f5f5f5' }}>
          1
        </div>
        <div style={{ width: 80, height: 80, backgroundColor: '#e8e8e8' }}>
          2
        </div>
        <div style={{ width: 80, height: 80, backgroundColor: '#d9d9d9' }}>
          3
        </div>
      </Flex>

      <h3>垂直方向</h3>
      <Flex direction="column" style={{ height: 300 }}>
        <div style={{ flex: 1, backgroundColor: '#f5f5f5' }}>1</div>
        <div style={{ flex: 1, backgroundColor: '#e8e8e8' }}>2</div>
        <div style={{ flex: 1, backgroundColor: '#d9d9d9' }}>3</div>
      </Flex>
    </div>
  );
};

export default App;
```

## 不同对齐方式

```tsx
import React from 'react';
import Flex from '../Flex';

const App: React.FC = () => {
  return (
    <div>
      <h3>居中对齐</h3>
      <Flex
        justify="center"
        align="center"
        style={{ height: 200, backgroundColor: '#f5f5f5' }}
      >
        <div style={{ width: 80, height: 80, backgroundColor: '#1890ff' }}>
          1
        </div>
        <div style={{ width: 80, height: 80, backgroundColor: '#52c41a' }}>
          2
        </div>
        <div style={{ width: 80, height: 80, backgroundColor: '#faad14' }}>
          3
        </div>
      </Flex>

      <h3>两端对齐</h3>
      <Flex
        justify="space-between"
        style={{ height: 100, backgroundColor: '#f5f5f5' }}
      >
        <div style={{ width: 80, height: 80, backgroundColor: '#1890ff' }}>
          1
        </div>
        <div style={{ width: 80, height: 80, backgroundColor: '#52c41a' }}>
          2
        </div>
        <div style={{ width: 80, height: 80, backgroundColor: '#faad14' }}>
          3
        </div>
      </Flex>
    </div>
  );
};

export default App;
```

## 换行

```tsx
import React from 'react';
import Flex from '../Flex';

const App: React.FC = () => {
  return (
    <div>
      <h3>自动换行</h3>
      <Flex wrap="wrap" style={{ width: 300, backgroundColor: '#f5f5f5' }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#1890ff',
              margin: 10,
            }}
          >
            {item}
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default App;
```

## 间距设置

```tsx
import React from 'react';
import Flex from '../Flex';

const App: React.FC = () => {
  return (
    <div>
      <h3>设置间距</h3>
      <Flex gap={20} style={{ backgroundColor: '#f5f5f5', padding: 20 }}>
        <div style={{ width: 80, height: 80, backgroundColor: '#1890ff' }}>
          1
        </div>
        <div style={{ width: 80, height: 80, backgroundColor: '#52c41a' }}>
          2
        </div>
        <div style={{ width: 80, height: 80, backgroundColor: '#faad14' }}>
          3
        </div>
      </Flex>
    </div>
  );
};

export default App;
```

## 使用 FlexItem 子组件

```tsx
import React from 'react';
import Flex, { FlexItem } from '../Flex';

const App: React.FC = () => {
  return (
    <Flex>
      <FlexItem style={{ backgroundColor: '#f5f5f5', padding: 20 }}>
        项目1
      </FlexItem>
      <FlexItem style={{ backgroundColor: '#e8e8e8', padding: 20 }}>
        项目2
      </FlexItem>
      <FlexItem style={{ backgroundColor: '#d9d9d9', padding: 20 }}>
        项目3
      </FlexItem>
    </Flex>
  );
};

export default App;
```

## FlexItem 的 flex 属性

```tsx
import React from 'react';
import Flex, { FlexItem } from '../Flex';

const App: React.FC = () => {
  return (
    <Flex style={{ height: 100, backgroundColor: '#f5f5f5' }}>
      <FlexItem
        flex={1}
        style={{
          backgroundColor: '#1890ff',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        占1份
      </FlexItem>
      <FlexItem
        flex={2}
        style={{
          backgroundColor: '#52c41a',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        占2份
      </FlexItem>
      <FlexItem
        flex={1}
        style={{
          backgroundColor: '#faad14',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        占1份
      </FlexItem>
    </Flex>
  );
};

export default App;
```

## FlexItem 的 order 属性

```tsx
import React from 'react';
import Flex, { FlexItem } from '../Flex';

const App: React.FC = () => {
  return (
    <Flex>
      <FlexItem order={3} style={{ backgroundColor: '#f5f5f5', padding: 20 }}>
        项目1
      </FlexItem>
      <FlexItem order={1} style={{ backgroundColor: '#e8e8e8', padding: 20 }}>
        项目2
      </FlexItem>
      <FlexItem order={2} style={{ backgroundColor: '#d9d9d9', padding: 20 }}>
        项目3
      </FlexItem>
    </Flex>
  );
};

export default App;
```

## FlexItem 的 alignSelf 属性

```tsx
import React from 'react';
import Flex, { FlexItem } from '../Flex';

const App: React.FC = () => {
  return (
    <Flex style={{ height: 200, backgroundColor: '#f5f5f5' }}>
      <FlexItem
        alignSelf="flex-start"
        style={{ width: 80, height: 60, backgroundColor: '#1890ff' }}
      >
        上对齐
      </FlexItem>
      <FlexItem
        alignSelf="center"
        style={{ width: 80, height: 80, backgroundColor: '#52c41a' }}
      >
        居中对齐
      </FlexItem>
      <FlexItem
        alignSelf="flex-end"
        style={{ width: 80, height: 100, backgroundColor: '#faad14' }}
      >
        下对齐
      </FlexItem>
    </Flex>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import Flex, { FlexItem } from '../Flex';

const App: React.FC = () => {
  return (
    <Flex
      style={{
        backgroundColor: '#f0f5ff',
        borderRadius: 8,
        padding: 20,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      }}
    >
      <FlexItem
        style={{
          backgroundColor: '#1890ff',
          color: '#fff',
          padding: 16,
          borderRadius: 4,
          flex: 1,
        }}
      >
        自定义样式1
      </FlexItem>
      <FlexItem
        style={{
          backgroundColor: '#52c41a',
          color: '#fff',
          padding: 16,
          borderRadius: 4,
          flex: 1,
        }}
      >
        自定义样式2
      </FlexItem>
    </Flex>
  );
};

export default App;
```

## API

### Flex

| 属性      | 类型                                                                                            | 默认值         | 说明           |
| --------- | ----------------------------------------------------------------------------------------------- | -------------- | -------------- |
| direction | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'`                                        | `'row'`        | flex 方向      |
| justify   | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` | 主轴对齐方式   |
| align     | `'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'`                             | `'stretch'`    | 交叉轴对齐方式 |
| wrap      | `'nowrap' \| 'wrap' \| 'wrap-reverse'`                                                          | `'nowrap'`     | 是否换行       |
| gap       | `string \| number`                                                                              | -              | 项目间距       |
| className | `string`                                                                                        | `''`           | 自定义类名     |
| style     | `React.CSSProperties`                                                                           | `{}`           | 自定义样式     |
| children  | `React.ReactNode`                                                                               | -              | 子元素         |

### FlexItem

| 属性      | 类型                                                                          | 默认值 | 说明                     |
| --------- | ----------------------------------------------------------------------------- | ------ | ------------------------ |
| flex      | `string \| number`                                                            | -      | flex 属性                |
| order     | `number`                                                                      | -      | 排序                     |
| alignSelf | `'auto' \| 'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'` | -      | 单个项目的交叉轴对齐方式 |
| className | `string`                                                                      | `''`   | 自定义类名               |
| style     | `React.CSSProperties`                                                         | `{}`   | 自定义样式               |
| children  | `React.ReactNode`                                                             | -      | 子元素                   |
