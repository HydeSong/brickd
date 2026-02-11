# Skeleton 骨架屏

用于在内容加载过程中显示占位内容，提升用户体验。

## 安装

```bash
npm install brickd
```

## 导入

```jsx
import Skeleton, { SkeletonText, SkeletonButton, SkeletonImage, SkeletonCard, SkeletonList } from 'brickd';
```

## 基本用法

### 文本骨架屏

```jsx
import React from 'react';
import Skeleton from 'brickd';

const App = () => {
  return <Skeleton type="text" rows={3} />;
};

export default App;
```

### 按钮骨架屏

```jsx
import React from 'react';
import Skeleton from 'brickd';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Skeleton type="button" buttonSize="small" />
      <Skeleton type="button" buttonSize="default" />
      <Skeleton type="button" buttonSize="large" />
    </div>
  );
};

export default App;
```

### 图片骨架屏

```jsx
import React from 'react';
import Skeleton from 'brickd';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Skeleton type="image" imageShape="square" imageSize={64} />
      <Skeleton type="image" imageShape="circle" imageSize={64} />
    </div>
  );
};

export default App;
```

### 卡片骨架屏

```jsx
import React from 'react';
import Skeleton from 'brickd';

const App = () => {
  return <Skeleton type="card" />;
};

export default App;
```

### 列表骨架屏

```jsx
import React from 'react';
import Skeleton from 'brickd';

const App = () => {
  return <Skeleton type="list" />;
};

export default App;
```

### 可控加载状态

```jsx
import React, { useState, useEffect } from 'react';
import Skeleton from 'brickd';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Skeleton type="card" loading={loading}>
      <div style={{ padding: '16px' }}>
        <h3>Card Title</h3>
        <p>Card content goes here.</p>
        <button>Click Me</button>
      </div>
    </Skeleton>
  );
};

export default App;
```

### 非动画骨架屏

```jsx
import React from 'react';
import Skeleton from 'brickd';

const App = () => {
  return <Skeleton type="text" rows={3} animated={false} />;
};

export default App;
```

### 子组件用法

```jsx
import React from 'react';
import { SkeletonText, SkeletonButton, SkeletonImage, SkeletonCard, SkeletonList } from 'brickd';

const App = () => {
  return (
    <div>
      <SkeletonText rows={3} />
      <SkeletonButton buttonSize="default" />
      <SkeletonImage imageShape="circle" imageSize={64} />
      <SkeletonCard />
      <SkeletonList />
    </div>
  );
};

export default App;
```

## API

### SkeletonProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `type` | `'text' \| 'button' \| 'image' \| 'card' \| 'list'` | `'text'` | 骨架屏类型 |
| `loading` | `boolean` | `true` | 是否显示骨架屏 |
| `animated` | `boolean` | `true` | 是否显示动画效果 |
| `className` | `string` | `''` | 自定义类名 |
| `style` | `React.CSSProperties` | `{}` | 自定义样式 |
| `children` | `React.ReactNode` | - | 加载完成后显示的内容 |
| `rows` | `number` | `1` | 文本骨架屏的行数 |
| `width` | `number \| string \| (number \| string)[]` | `'100%'` | 文本骨架屏的宽度 |
| `buttonSize` | `'small' \| 'default' \| 'large'` | `'default'` | 按钮骨架屏的尺寸 |
| `imageShape` | `'circle' \| 'square'` | `'square'` | 图片骨架屏的形状 |
| `imageSize` | `number \| string` | `40` | 图片骨架屏的尺寸 |

### 子组件 API

所有子组件都继承了 `SkeletonProps`，但不需要指定 `type` 属性：

- `SkeletonText` - 文本骨架屏
- `SkeletonButton` - 按钮骨架屏
- `SkeletonImage` - 图片骨架屏
- `SkeletonCard` - 卡片骨架屏
- `SkeletonList` - 列表骨架屏

## 样式

组件使用 CSS Modules 进行样式管理，主要类名如下：

| 类名 | 说明 |
| --- | --- |
| `skeleton` | 基础骨架屏类名 |
| `skeletonAnimated` | 动画效果类名 |
| `skeletonText` | 文本骨架屏类名 |
| `skeletonButton` | 按钮骨架屏类名 |
| `skeletonImage` | 图片骨架屏类名 |
| `skeletonCard` | 卡片骨架屏类名 |
| `skeletonList` | 列表骨架屏类名 |
| `skeletonSmall` | 小尺寸骨架屏类名 |
| `skeletonDefault` | 默认尺寸骨架屏类名 |
| `skeletonLarge` | 大尺寸骨架屏类名 |
| `skeletonInline` | 内联骨架屏类名 |
| `skeletonBlock` | 块级骨架屏类名 |
| `skeletonRound` | 圆形骨架屏类名 |
| `skeletonSquare` | 方形骨架屏类名 |

## 示例

### 自定义文本骨架屏宽度

```jsx
import React from 'react';
import Skeleton from 'brickd';

const App = () => {
  return (
    <Skeleton type="text" rows={3} width={['100%', '80%', '60%']} />
  );
};

export default App;
```

### 组合使用

```jsx
import React from 'react';
import Skeleton from 'brickd';

const App = () => {
  return (
    <div style={{ width: '400px', padding: '20px', border: '1px solid #e8e8e8', borderRadius: 8 }}>
      <div style={{ display: 'flex', alignItems: center, marginBottom: '16px' }}>
        <Skeleton type="image" imageShape="circle" imageSize={48} />
        <div style={{ marginLeft: '12px', flex: 1 }}>
          <Skeleton type="text" rows={2} width={['80%', '60%']} />
        </div>
      </div>
      <Skeleton type="text" rows={4} width={['100%', '90%', '80%', '95%']} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
        <Skeleton type="button" buttonSize="small" />
        <Skeleton type="button" buttonSize="small" style={{ marginLeft: '8px' }} />
      </div>
    </div>
  );
};

export default App;
```