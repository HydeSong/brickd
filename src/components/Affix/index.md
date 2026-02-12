# Affix 固钉

固钉组件，用于将元素固定在页面的特定位置，通常用于导航栏、侧边栏等需要固定的元素。

## 代码演示

### 基础用法

最简单的用法，将元素固定在顶部。

```tsx
import Affix from './index';
import Button from '../Button';

function AffixBasicDemo() {
  return (
    <Affix>
      <Button type="primary">固定在顶部</Button>
    </Affix>
  );
}

export default AffixBasicDemo;
```

### 自定义偏移量

通过 `offsetTop` 属性设置顶部偏移量。

```tsx
import Affix from './index';
import Button from '../Button';

function AffixOffsetDemo() {
  return (
    <Affix offsetTop={60}>
      <Button type="primary">固定在顶部 60px 处</Button>
    </Affix>
  );
}

export default AffixOffsetDemo;
```

### 底部固定

通过 `offsetBottom` 属性设置底部偏移量，实现底部固定。

```tsx
import Affix from './index';
import Button from '../Button';

function AffixBottomDemo() {
  return (
    <Affix offsetBottom={20}>
      <Button type="primary">固定在底部 20px 处</Button>
    </Affix>
  );
}

export default AffixBottomDemo;
```

### 状态变化回调

通过 `onChange` 属性设置固定状态变化时的回调函数。

```tsx
import Affix from './index';
import Button from '../Button';
import { useState } from 'react';

function AffixOnChangeDemo() {
  const [status, setStatus] = useState('未固定');

  const handleChange = (affixed: boolean) => {
    setStatus(affixed ? '已固定' : '未固定');
  };

  return (
    <div>
      <Affix offsetTop={20} onChange={handleChange}>
        <Button type="primary">固定在顶部</Button>
      </Affix>
      <div style={{ marginTop: 80 }}>
        <p>当前状态：{status}</p>
      </div>
    </div>
  );
}

export default AffixOnChangeDemo;
```

## API

### AffixProps

| 属性         | 说明                         | 类型                         | 默认值 |
| ------------ | ---------------------------- | ---------------------------- | ------ |
| offsetTop    | 顶部偏移量，单位为像素       | `number`                     | `0`    |
| offsetBottom | 底部偏移量，单位为像素       | `number`                     | -      |
| target       | 滚动容器，返回滚动容器的函数 | `() => HTMLElement \| null`  | -      |
| onChange     | 固定状态变化时的回调函数     | `(affixed: boolean) => void` | -      |
| children     | 子元素                       | `React.ReactNode`            | -      |
| className    | 自定义类名                   | `string`                     | `''`   |
| style        | 自定义样式                   | `React.CSSProperties`        | `{}`   |
