# Rate 评分

评分组件，用于用户对商品或服务进行评分。

## 基本用法

```tsx
import React from 'react';
import { Rate } from 'brickd';

export default () => (
  <div>
    <Rate />
  </div>
);
```

## 自定义评分数量

```tsx
import React from 'react';
import { Rate } from 'brickd';

export default () => (
  <div>
    <Rate count={10} />
  </div>
);
```

## 半星评分

```tsx
import React from 'react';
import { Rate } from 'brickd';

export default () => (
  <div>
    <Rate allowHalf />
  </div>
);
```

## 不同尺寸

```tsx
import React from 'react';
import { Rate } from 'brickd';

export default () => (
  <div>
    <Rate size="small" style={{ marginRight: '20px' }} />
    <Rate size="default" style={{ marginRight: '20px' }} />
    <Rate size="large" />
  </div>
);
```

## 禁用状态

```tsx
import React from 'react';
import { Rate } from 'brickd';

export default () => (
  <div>
    <Rate disabled value={3} />
  </div>
);
```

## 只读状态

```tsx
import React from 'react';
import { Rate } from 'brickd';

export default () => (
  <div>
    <Rate readOnly value={4} />
  </div>
);
```

## 受控模式

```tsx
import React, { useState } from 'react';
import { Rate } from 'brickd';

export default () => {
  const [value, setValue] = useState(3);

  return (
    <div>
      <Rate value={value} onChange={setValue} />
      <div style={{ marginTop: '16px' }}>Rating: {value}</div>
    </div>
  );
};
```

## 自定义字符

```tsx
import React from 'react';
import { Rate } from 'brickd';

export default () => (
  <div>
    <Rate character="♡" />
    <Rate character="✓" style={{ marginLeft: '20px' }} />
    <Rate character={<span>⭐</span>} style={{ marginLeft: '20px' }} />
  </div>
);
```

## 不允许清空

```tsx
import React from 'react';
import { Rate } from 'brickd';

export default () => (
  <div>
    <Rate allowClear={false} />
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Rate } from 'brickd';

export default () => (
  <div>
    <Rate
      style={{
        fontSize: '24px',
        color: '#ff4d4f',
      }}
    />
    <Rate
      className="custom-rate"
      style={{
        marginTop: '16px',
        padding: '12px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
      }}
      count={7}
    />
  </div>
);
```

## API

| 属性          | 说明                     | 类型                              | 默认值      |
| ------------- | ------------------------ | --------------------------------- | ----------- |
| size          | 评分组件大小             | `'small' \| 'default' \| 'large'` | `'default'` |
| disabled      | 是否禁用                 | `boolean`                         | `false`     |
| value         | 当前评分值（受控模式）   | `number`                          | `undefined` |
| defaultValue  | 默认评分值（非受控模式） | `number`                          | `0`         |
| onChange      | 评分变化时的回调函数     | `(value: number) => void`         | `undefined` |
| onHoverChange | 鼠标悬停时的回调函数     | `(value: number) => void`         | `undefined` |
| count         | 评分项数量               | `number`                          | `5`         |
| allowHalf     | 是否允许半星评分         | `boolean`                         | `false`     |
| allowClear    | 是否允许清空评分         | `boolean`                         | `true`      |
| readOnly      | 是否为只读模式           | `boolean`                         | `false`     |
| character     | 评分字符                 | `React.ReactNode`                 | `'★'`       |
| className     | 自定义类名               | `string`                          | `''`        |
| style         | 自定义样式               | `React.CSSProperties`             | `{}`        |
