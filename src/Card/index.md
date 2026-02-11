# Card 卡片

用于显示卡片式内容，支持标题、额外内容、边框和悬停效果。

## 基本用法

```tsx
import React from 'react';
import Card from './index';

const App: React.FC = () => {
  return (
    <Card title="Card Title">
      <p>Card content goes here.</p>
    </Card>
  );
};

export default App;
```

## 带额外内容

```tsx
import React from 'react';
import Card from './index';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <Card 
      title="Card Title" 
      extra={<Button type="text">More</Button>}
    >
      <p>Card content goes here.</p>
    </Card>
  );
};

export default App;
```

## 无边框

```tsx
import React from 'react';
import Card from './index';

const App: React.FC = () => {
  return (
    <Card title="Card Title" bordered={false}>
      <p>Card content goes here.</p>
    </Card>
  );
};

export default App;
```

## 可悬停

```tsx
import React from 'react';
import Card from './index';

const App: React.FC = () => {
  return (
    <Card title="Card Title" hoverable>
      <p>Card content goes here.</p>
    </Card>
  );
};

export default App;
```

## 复杂卡片

```tsx
import React from 'react';
import Card from './index';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <Card>
      <Card.Header 
        title="Card Title" 
        extra={<Button type="text">More</Button>}
      />
      <Card.Body>
        <p>Card content goes here.</p>
        <p>More content here.</p>
      </Card.Body>
      <Card.Footer>
        <Button>Cancel</Button>
        <Button type="primary">Submit</Button>
      </Card.Footer>
    </Card>
  );
};

export default App;
```

## API

### Card

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 卡片标题 | `React.ReactNode` | - |
| `extra` | 卡片额外内容 | `React.ReactNode` | - |
| `bordered` | 是否显示边框 | `boolean` | `true` |
| `hoverable` | 是否可悬停 | `boolean` | `false` |
| `className` | 自定义类名 | `string` | `''` |
| `style` | 自定义样式 | `React.CSSProperties` | `{}` |
| `children` | 卡片内容 | `React.ReactNode` | - |

### Card.Header

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 卡片标题 | `React.ReactNode` | - |
| `extra` | 卡片额外内容 | `React.ReactNode` | - |
| `className` | 自定义类名 | `string` | `''` |
| `style` | 自定义样式 | `React.CSSProperties` | `{}` |

### Card.Body

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `className` | 自定义类名 | `string` | `''` |
| `style` | 自定义样式 | `React.CSSProperties` | `{}` |
| `children` | 卡片内容 | `React.ReactNode` | - |

### Card.Footer

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `className` | 自定义类名 | `string` | `''` |
| `style` | 自定义样式 | `React.CSSProperties` | `{}` |
| `children` | 卡片底部内容 | `React.ReactNode` | - |
