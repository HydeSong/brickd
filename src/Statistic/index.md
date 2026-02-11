# Statistic 统计数值

统计数值组件，用于显示统计数据。

## 安装

```bash
npm install brickd
```

## 导入

```tsx
import { Statistic } from 'brickd';
```

## 用法

### 基础用法

```tsx
import React from 'react';
import { Statistic } from 'brickd';

const App = () => {
  return (
    <Statistic value={100} />
  );
};

export default App;
```

### 带标题

```tsx
import React from 'react';
import { Statistic } from 'brickd';

const App = () => {
  return (
    <Statistic title="Active Users" value={100} />
  );
};

export default App;
```

### 带前缀和后缀

```tsx
import React from 'react';
import { Statistic } from 'brickd';

const App = () => {
  return (
    <Statistic 
      title="Revenue" 
      value={123456} 
      prefix="$" 
      suffix="K" 
    />
  );
};

export default App;
```

### 带精度

```tsx
import React from 'react';
import { Statistic } from 'brickd';

const App = () => {
  return (
    <Statistic 
      title="Accuracy" 
      value={99.999} 
      precision={2} 
      suffix="%" 
    />
  );
};

export default App;
```

### 带千分位分隔符

```tsx
import React from 'react';
import { Statistic } from 'brickd';

const App = () => {
  return (
    <Statistic 
      title="Sales" 
      value={1234567} 
      thousandSeparator="," 
    />
  );
};

export default App;
```

### 自定义格式化

```tsx
import React from 'react';
import { Statistic } from 'brickd';

const App = () => {
  return (
    <Statistic 
      title="Custom Format" 
      value={100} 
      formatter={(value) => `$${value.toFixed(2)}`} 
    />
  );
};

export default App;
```

### 自定义样式

```tsx
import React from 'react';
import { Statistic } from 'brickd';

const App = () => {
  return (
    <Statistic 
      title="Custom Style" 
      value={100} 
      valueStyle={{ color: '#1890ff' }} 
      style={{ backgroundColor: '#f0f9ff', padding: 20 }} 
    />
  );
};

export default App;
```

## API

### Statistic

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | `React.ReactNode` | - | 标题 |
| value | `React.ReactNode` | - | 数值 |
| valueStyle | `React.CSSProperties` | - | 数值样式 |
| prefix | `React.ReactNode` | - | 前缀 |
| suffix | `React.ReactNode` | - | 后缀 |
| precision | `number` | - | 小数位数 |
| decimalSeparator | `string` | `.` | 小数点分隔符 |
| thousandSeparator | `string` | `,` | 千分位分隔符 |
| formatter | `(value: any) => React.ReactNode` | - | 自定义格式化函数 |
| className | `string` | - | 自定义类名 |
| style | `React.CSSProperties` | - | 自定义样式 |
