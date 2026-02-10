---
title: Pagination 分页
order: 14
---

# Pagination 分页

用于分页显示数据，支持页码跳转和每页条数设置。

## 基本用法

```jsx
import { Pagination } from 'brickd';

function App() {
  return <Pagination total={100} />;
}

export default App;
```

## 带回调函数的分页

```jsx
import { Pagination } from 'brickd';

function App() {
  const handlePageChange = (page, pageSize) => {
    console.log(`页码: ${page}, 每页条数: ${pageSize}`);
  };

  return <Pagination total={200} onChange={handlePageChange} />;
}

export default App;
```

## 自定义每页条数选项

```jsx
import { Pagination } from 'brickd';

function App() {
  return <Pagination total={300} pageSizeOptions={[5, 10, 20, 50]} />;
}

export default App;
```

## 自定义当前页和每页条数

```jsx
import { Pagination } from 'brickd';

function App() {
  return <Pagination current={3} pageSize={20} total={400} />;
}

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页码 | `number` | `1` |
| pageSize | 每页条数 | `number` | `10` |
| total | 总条数 | `number` | `0` |
| pageSizeOptions | 每页条数选项 | `number[]` | `[10, 20, 50, 100]` |
| onChange | 页码或每页条数变化时的回调 | `(page: number, pageSize: number) => void` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
