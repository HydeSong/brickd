# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 安装

```bash
npm install brickd
```

## 导入

```jsx
import Progress from 'brickd';
```

## 基本用法

### 线性进度条

```jsx
import React from 'react';
import Progress from 'brickd';

const App = () => {
  return (
    <div>
      <Progress percent={30} />
      <Progress percent={60} status="active" />
      <Progress percent={100} status="success" />
      <Progress percent={80} status="exception" />
    </div>
  );
};

export default App;
```

### 圆形进度条

```jsx
import React from 'react';
import Progress from 'brickd';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Progress type="circle" percent={30} />
      <Progress type="circle" percent={60} status="active" />
      <Progress type="circle" percent={100} status="success" />
      <Progress type="circle" percent={80} status="exception" />
    </div>
  );
};

export default App;
```

### 自定义进度条

```jsx
import React from 'react';
import Progress from 'brickd';

const App = () => {
  return (
    <div>
      <Progress percent={50} strokeWidth={10} />
      <Progress percent={50} strokeColor="#52c41a" />
      <Progress percent={50} trailColor="#e8e8e8" />
      <Progress percent={50} showInfo={false} />
    </div>
  );
};

export default App;
```

### 自定义信息格式

```jsx
import React from 'react';
import Progress from 'brickd';

const App = () => {
  const format = (percent) => {
    return `${percent}% 完成`;
  };

  return (
    <Progress percent={75} format={format} />
  );
};

export default App;
```

## API

### ProgressProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `percent` | `number` | - | 进度百分比，范围 0-100 |
| `type` | `'line' \| 'circle'` | `'line'` | 进度条类型 |
| `status` | `'success' \| 'active' \| 'exception'` | - | 进度条状态 |
| `strokeWidth` | `number` | `8` | 进度条线宽 |
| `showInfo` | `boolean` | `true` | 是否显示进度信息 |
| `format` | `(percent: number) => React.ReactNode` | - | 自定义进度信息格式 |
| `className` | `string` | `''` | 自定义类名 |
| `style` | `React.CSSProperties` | `{}` | 自定义样式 |
| `strokeColor` | `string` | - | 进度条颜色 |
| `trailColor` | `string` | - | 进度条背景颜色 |

## 样式

组件使用 CSS Modules 进行样式管理，主要类名如下：

| 类名 | 说明 |
| --- | --- |
| `progressLine` | 线性进度条类名 |
| `progressCircle` | 圆形进度条类名 |
| `progressSuccess` | 成功状态类名 |
| `progressActive` | 激活状态类名 |
| `progressException` | 异常状态类名 |
| `progressSmall` | 小尺寸类名 |
| `progressLarge` | 大尺寸类名 |

## 示例

### 不同尺寸的进度条

```jsx
import React from 'react';
import Progress from 'brickd';

const App = () => {
  return (
    <div>
      <Progress percent={50} strokeWidth={4} />
      <Progress percent={50} strokeWidth={8} />
      <Progress percent={50} strokeWidth={12} />
    </div>
  );
};

export default App;
```

### 动态进度条

```jsx
import React, { useState, useEffect } from 'react';
import Progress from 'brickd';

const App = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        const next = prev + 10;
        return next > 100 ? 0 : next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Progress percent={percent} />;
};

export default App;
```