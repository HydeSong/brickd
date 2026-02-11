# Badge 徽标数

用于显示徽标数，支持数字、点和自定义样式。

## 基本用法

```tsx
import React from 'react';
import Badge from './index';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <div>
      <Badge count={5}>
        <Button>Button</Button>
      </Badge>
      <Badge count={0} showZero>
        <Button>Button</Button>
      </Badge>
      <Badge dot>
        <Button>Button</Button>
      </Badge>
    </div>
  );
};

export default App;
```

## 最大数值

```tsx
import React from 'react';
import Badge from './index';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <div>
      <Badge count={99}>
        <Button>Button</Button>
      </Badge>
      <Badge count={100} maxCount={99}>
        <Button>Button</Button>
      </Badge>
      <Badge count={1000} maxCount={999}>
        <Button>Button</Button>
      </Badge>
    </div>
  );
};

export default App;
```

## 自定义颜色

```tsx
import React from 'react';
import Badge from './index';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <div>
      <Badge count={5} color="#52c41a">
        <Button>Button</Button>
      </Badge>
      <Badge count={5} color="#1890ff">
        <Button>Button</Button>
      </Badge>
    </div>
  );
};

export default App;
```

## 独立使用

```tsx
import React from 'react';
import Badge from './index';

const App: React.FC = () => {
  return (
    <div>
      <Badge count={5} />
      <Badge count={0} showZero />
      <Badge dot />
    </div>
  );
};

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `count` | 徽标数 | `number` | - |
| `dot` | 是否显示为点 | `boolean` | `false` |
| `maxCount` | 最大显示数值 | `number` | `99` |
| `showZero` | 是否显示零 | `boolean` | `false` |
| `color` | 徽标颜色 | `string` | `#ff4d4f` |
| `className` | 自定义类名 | `string` | `''` |
| `style` | 自定义样式 | `React.CSSProperties` | `{}` |
| `children` | 子元素 | `React.ReactNode` | - |
