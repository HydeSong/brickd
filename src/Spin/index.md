# Spin 加载中

用于页面和区块的加载中状态。

## 安装

```bash
npm install brickd
```

## 导入

```jsx
import Spin from 'brickd';
```

## 基本用法

### 基本加载

```jsx
import React from 'react';
import Spin from 'brickd';

const App = () => {
  return <Spin />;
};

export default App;
```

### 不同尺寸

```jsx
import React from 'react';
import Spin from 'brickd';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Spin size="small" />
      <Spin size="default" />
      <Spin size="large" />
    </div>
  );
};

export default App;
```

### 带提示文本

```jsx
import React from 'react';
import Spin from 'brickd';

const App = () => {
  return <Spin tip="加载中..." />;
};

export default App;
```

### 自定义颜色

```jsx
import React from 'react';
import Spin from 'brickd';

const App = () => {
  return <Spin color="#52c41a" />;
};

export default App;
```

### 自定义指示器

```jsx
import React from 'react';
import Spin from 'brickd';

const App = () => {
  const indicator = <div>⏳</div>;
  return <Spin indicator={indicator} />;
};

export default App;
```

### 包裹内容

```jsx
import React from 'react';
import Spin from 'brickd';

const App = () => {
  return (
    <Spin tip="加载中...">
      <div style={{ width: '300px', height: '200px', border: '1px solid #e8e8e8' }}>
        这里是需要加载的内容
      </div>
    </Spin>
  );
};

export default App;
```

### 可控加载状态

```jsx
import React, { useState } from 'react';
import Spin from 'brickd';
import Button from 'brickd';

const App = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Spin spinning={loading} tip="加载中...">
        <div style={{ width: '300px', height: '200px', border: '1px solid #e8e8e8' }}>
          这里是需要加载的内容
        </div>
      </Spin>
      <Button onClick={handleClick} style={{ marginTop: '20px' }}>
        开始加载
      </Button>
    </div>
  );
};

export default App;
```

## API

### SpinProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `spinning` | `boolean` | `true` | 是否显示加载状态 |
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | 加载图标大小 |
| `tip` | `React.ReactNode` | - | 加载提示文本 |
| `delay` | `number` | - | 延迟显示加载状态的时间（毫秒） |
| `className` | `string` | `''` | 自定义类名 |
| `style` | `React.CSSProperties` | `{}` | 自定义样式 |
| `children` | `React.ReactNode` | - | 加载状态下显示的内容 |
| `indicator` | `React.ReactNode` | - | 自定义加载指示器 |
| `color` | `string` | `'#1890ff'` | 加载图标的颜色 |
| `wrapperClassName` | `string` | `''` | 包裹容器的自定义类名 |
| `wrapperStyle` | `React.CSSProperties` | `{}` | 包裹容器的自定义样式 |

## 样式

组件使用 CSS Modules 进行样式管理，主要类名如下：

| 类名 | 说明 |
| --- | --- |
| `spin` | 基础加载组件类名 |
| `spinSmall` | 小尺寸加载组件类名 |
| `spinDefault` | 默认尺寸加载组件类名 |
| `spinLarge` | 大尺寸加载组件类名 |
| `spinWrapper` | 包裹容器类名 |
| `spinChildren` | 子内容类名 |
| `spinFullscreen` | 全屏加载类名 |
| `spinInline` | 内联加载类名 |
| `spinBlock` | 块级加载类名 |

## 示例

### 全屏加载

```jsx
import React from 'react';
import Spin from 'brickd';

const App = () => {
  return (
    <div className="spinFullscreen">
      <Spin tip="加载中..." size="large" />
    </div>
  );
};

export default App;
```

### 内联加载

```jsx
import React from 'react';
import Spin from 'brickd';

const App = () => {
  return (
    <div>
      数据加载中 <Spin size="small" className="spinInline" />
    </div>
  );
};

export default App;
```