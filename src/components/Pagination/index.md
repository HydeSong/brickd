# Pagination 分页

分页组件用于显示数据分页，支持自定义每页条数、当前页码、总条数等属性。

## 代码演示

### 基本用法

```tsx
import React, { useState } from 'react';
import Pagination from './index';

function PaginationBasicDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleChange = (page: number, size: number) => {
    setCurrent(page);
    setPageSize(size);
    console.log('Current page:', page, 'Page size:', size);
  };

  return (
    <div>
      <Pagination
        current={current}
        pageSize={pageSize}
        total={100}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationBasicDemo;
```

### 自定义每页条数选项

通过 `pageSizeOptions` 属性自定义每页条数选项。

```tsx
import React, { useState } from 'react';
import Pagination from './index';

function PaginationCustomPageSizeDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const handleChange = (page: number, size: number) => {
    setCurrent(page);
    setPageSize(size);
  };

  return (
    <div>
      <Pagination
        current={current}
        pageSize={pageSize}
        total={200}
        pageSizeOptions={[5, 10, 20, 50]}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationCustomPageSizeDemo;
```

### 不同总条数

通过 `total` 属性设置不同的总条数，分页组件会自动计算总页数。

```tsx
import React, { useState } from 'react';
import Pagination from './index';

function PaginationDifferentTotalDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleChange = (page: number, size: number) => {
    setCurrent(page);
    setPageSize(size);
  };

  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <Pagination
        current={current}
        pageSize={pageSize}
        total={50}
        onChange={handleChange}
      />
      <Pagination
        current={current}
        pageSize={pageSize}
        total={150}
        onChange={handleChange}
      />
      <Pagination
        current={current}
        pageSize={pageSize}
        total={300}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationDifferentTotalDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义分页组件的样式。

```tsx
import React, { useState } from 'react';
import Pagination from './index';

function PaginationCustomStyleDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleChange = (page: number, size: number) => {
    setCurrent(page);
    setPageSize(size);
  };

  return (
    <div>
      <Pagination
        current={current}
        pageSize={pageSize}
        total={100}
        onChange={handleChange}
        style={{
          backgroundColor: '#f0f2f5',
          padding: '12px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  );
}

export default PaginationCustomStyleDemo;
```

### 禁用状态

当总条数为 0 时，分页组件会自动进入禁用状态。

```tsx
import React from 'react';
import Pagination from './index';

function PaginationDisabledDemo() {
  return (
    <div>
      <Pagination total={0} onChange={() => {}} />
    </div>
  );
}

export default PaginationDisabledDemo;
```

## API

### PaginationProps

| 属性            | 说明                       | 类型                                       | 默认值              |
| --------------- | -------------------------- | ------------------------------------------ | ------------------- |
| current         | 当前页码                   | `number`                                   | `1`                 |
| pageSize        | 每页条数                   | `number`                                   | `10`                |
| total           | 总条数                     | `number`                                   | `0`                 |
| pageSizeOptions | 每页条数选项               | `number[]`                                 | `[10, 20, 50, 100]` |
| onChange        | 页码或每页条数变化时的回调 | `(page: number, pageSize: number) => void` | -                   |
| className       | 自定义类名                 | `string`                                   | `''`                |
| style           | 自定义样式                 | `React.CSSProperties`                      | `{}`                |
