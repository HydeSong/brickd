# Skeleton 骨架屏

骨架屏组件，用于在内容加载过程中显示占位符。

## 基本用法

```tsx
import React from 'react';
import { Skeleton } from 'brickd';

export default () => (
  <div>
    <Skeleton />
  </div>
);
```

## 文本骨架屏

```tsx
import React from 'react';
import { Skeleton } from 'brickd';

export default () => (
  <div>
    <Skeleton type="text" rows={3} />
  </div>
);
```

## 按钮骨架屏

```tsx
import React from 'react';
import { Skeleton } from 'brickd';

export default () => (
  <div>
    <Skeleton type="button" buttonSize="small" style={{ marginRight: '16px' }} />
    <Skeleton type="button" buttonSize="default" style={{ marginRight: '16px' }} />
    <Skeleton type="button" buttonSize="large" />
  </div>
);
```

## 图片骨架屏

```tsx
import React from 'react';
import { Skeleton } from 'brickd';

export default () => (
  <div>
    <Skeleton type="image" imageShape="square" imageSize={100} style={{ marginRight: '20px' }} />
    <Skeleton type="image" imageShape="circle" imageSize={100} />
  </div>
);
```

## 卡片骨架屏

```tsx
import React from 'react';
import { Skeleton } from 'brickd';

export default () => (
  <div>
    <Skeleton type="card" />
  </div>
);
```

## 列表骨架屏

```tsx
import React from 'react';
import { Skeleton } from 'brickd';

export default () => (
  <div>
    <Skeleton type="list" />
  </div>
);
```

## 无动画骨架屏

```tsx
import React from 'react';
import { Skeleton } from 'brickd';

export default () => (
  <div>
    <Skeleton animated={false} type="text" rows={3} />
  </div>
);
```

## 条件显示

```tsx
import React, { useState, useEffect } from 'react';
import { Skeleton, Button } from 'brickd';

export default () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      <Skeleton loading={loading} type="card">
        <div style={{ padding: '16px', border: '1px solid #d9d9d9', borderRadius: '4px' }}>
          <h3>卡片内容</h3>
          <p>这是一张加载完成的卡片，显示真实内容。</p>
          <Button>操作按钮</Button>
        </div>
      </Skeleton>
      <Button 
        onClick={() => setLoading(true)}
        style={{ marginTop: '16px' }}
      >
        重新加载
      </Button>
    </div>
  );
};
```

## 子组件用法

```tsx
import React from 'react';
import { Skeleton } from 'brickd';

const { Text, Button, Image, Card, List } = Skeleton;

export default () => (
  <div>
    <div style={{ marginBottom: '20px' }}>
      <Text rows={2} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Button />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Image imageSize={80} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Card />
    </div>
    <div>
      <List />
    </div>
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Skeleton } from 'brickd';

export default () => (
  <div>
    <Skeleton 
      type="text" 
      rows={3}
      style={{ 
        padding: '16px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px'
      }} 
    />
  </div>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 骨架屏类型 | `'text' \| 'button' \| 'image' \| 'card' \| 'list'` | `'text'` |
| loading | 是否显示骨架屏 | `boolean` | `true` |
| animated | 是否显示动画 | `boolean` | `true` |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |
| children | 加载完成后显示的内容 | `React.ReactNode` | `undefined` |
| rows | 文本行数 | `number` | `1` |
| width | 宽度 | `number \| string \| (number \| string)[]` | `'100%'` |
| buttonSize | 按钮尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| imageShape | 图片形状 | `'circle' \| 'square'` | `'square'` |
| imageSize | 图片尺寸 | `number \| string` | `40` |

## 子组件

### Skeleton.Text

文本骨架屏，同 `<Skeleton type="text" />`。

### Skeleton.Button

按钮骨架屏，同 `<Skeleton type="button" />`。

### Skeleton.Image

图片骨架屏，同 `<Skeleton type="image" />`。

### Skeleton.Card

卡片骨架屏，同 `<Skeleton type="card" />`。

### Skeleton.List

列表骨架屏，同 `<Skeleton type="list" />`。