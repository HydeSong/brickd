---
title: Affix 固钉
order: 17
---

# Affix 固钉

将元素固定在指定位置，常用于导航栏、侧边栏等场景。

## 代码演示

### 基本用法

```tsx
import { Affix, Button } from 'brickd';

function AffixBasicDemo() {
  return (
    <Affix offsetTop={10}>
      <Button type="primary">固定在顶部 10px</Button>
    </Affix>
  );
}

export default AffixBasicDemo;
```

### 底部固定

```tsx
import { Affix, Button } from 'brickd';

function AffixBottomDemo() {
  return (
    <Affix offsetBottom={10}>
      <Button type="primary">固定在底部 10px</Button>
    </Affix>
  );
}

export default AffixBottomDemo;
```

### 带回调函数

```tsx
import { Affix, Button, Typography } from 'brickd';
import React, { useState } from 'react';

function AffixCallbackDemo() {
  const [status, setStatus] = useState('未固定');

  const handleChange = (affixed: boolean) => {
    setStatus(affixed ? '已固定' : '未固定');
  };

  return (
    <div>
      <Typography.Text>状态：{status}</Typography.Text>
      <Affix offsetTop={10} onChange={handleChange}>
        <Button type="primary">带回调函数的固钉</Button>
      </Affix>
    </div>
  );
}

export default AffixCallbackDemo;
```

## API

### AffixProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetTop | 距离顶部的偏移量 | `number` | `0` |
| offsetBottom | 距离底部的偏移量 | `number` | - |
| target | 滚动容器 | `() => HTMLElement  null` | - |
| onChange | 固定状态变化时的回调 | `(affixed: boolean) => void` | - |
| children | 子元素 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
