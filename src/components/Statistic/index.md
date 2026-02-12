# Statistic 统计数值

统计数值组件，用于显示统计数据。

## 基本用法

```tsx
import React from 'react';
import { Statistic } from 'brickd';

export default () => (
  <div>
    <Statistic title="统计数值" value={12345} />
  </div>
);
```

## 带前缀和后缀

```tsx
import React from 'react';
import { Statistic } from 'brickd';

export default () => (
  <div>
    <Statistic title="销售额" value={12345.67} prefix="¥" suffix="元" />
  </div>
);
```

## 自定义精度

```tsx
import React from 'react';
import { Statistic } from 'brickd';

export default () => (
  <div>
    <Statistic
      title="精度示例"
      value={12345.6789}
      precision={2}
      prefix="数值: "
    />
  </div>
);
```

## 带千分位分隔符

```tsx
import React from 'react';
import { Statistic } from 'brickd';

export default () => (
  <div>
    <Statistic title="千分位示例" value={1234567} prefix="数值: " />
  </div>
);
```

## 自定义分隔符

```tsx
import React from 'react';
import { Statistic } from 'brickd';

export default () => (
  <div>
    <Statistic
      title="自定义分隔符"
      value={12345.67}
      decimalSeparator=","
      thousandSeparator="."
      prefix="数值: "
    />
  </div>
);
```

## 自定义格式化器

```tsx
import React from 'react';
import { Statistic } from 'brickd';

export default () => (
  <div>
    <Statistic
      title="自定义格式化"
      value={0.875}
      formatter={(value) => `${(value * 100).toFixed(2)}%`}
    />
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Statistic } from 'brickd';

export default () => (
  <div>
    <Statistic
      title="自定义样式"
      value={12345}
      valueStyle={{
        color: '#1890ff',
        fontSize: '24px',
        fontWeight: 'bold',
      }}
      style={{
        padding: '16px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
        width: '200px',
      }}
    />
  </div>
);
```

## 带图标

```tsx
import React from 'react';
import { Statistic } from 'brickd';

export default () => (
  <div>
    <Statistic
      title="带图标"
      value={123}
      prefix={<span>📈</span>}
      suffix="个"
    />
  </div>
);
```

## API

| 属性              | 说明           | 类型                              | 默认值      |
| ----------------- | -------------- | --------------------------------- | ----------- |
| title             | 标题           | `React.ReactNode`                 | `undefined` |
| value             | 数值           | `React.ReactNode`                 | `undefined` |
| valueStyle        | 数值样式       | `React.CSSProperties`             | `undefined` |
| prefix            | 前缀           | `React.ReactNode`                 | `undefined` |
| suffix            | 后缀           | `React.ReactNode`                 | `undefined` |
| precision         | 精度           | `number`                          | `undefined` |
| decimalSeparator  | 小数点分隔符   | `string`                          | `'.'`       |
| thousandSeparator | 千分位分隔符   | `string`                          | `','`       |
| formatter         | 自定义格式化器 | `(value: any) => React.ReactNode` | `undefined` |
| className         | 自定义类名     | `string`                          | `undefined` |
| style             | 自定义样式     | `React.CSSProperties`             | `undefined` |
