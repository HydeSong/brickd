# Avatar 头像

用于显示用户头像，支持图片、图标或文字。

## 基本用法

```tsx
import React from 'react';
import Avatar from './index';

const App: React.FC = () => {
  return (
    <div>
      <Avatar size="small" src="https://example.com/avatar.jpg" />
      <Avatar src="https://example.com/avatar.jpg" />
      <Avatar size="large" src="https://example.com/avatar.jpg" />
    </div>
  );
};

export default App;
```

## 不同形状

```tsx
import React from 'react';
import Avatar from './index';

const App: React.FC = () => {
  return (
    <div>
      <Avatar shape="circle" src="https://example.com/avatar.jpg" />
      <Avatar shape="square" src="https://example.com/avatar.jpg" />
    </div>
  );
};

export default App;
```

## 使用图标

```tsx
import React from 'react';
import Avatar from './index';
import Icon from '../Icon';

const App: React.FC = () => {
  return (
    <div>
      <Avatar icon={<Icon type="user" />} />
    </div>
  );
};

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `size` | 头像大小 | `'small' \| 'default' \| 'large' \| number` | `'default'` |
| `src` | 头像图片 URL | `string` | - |
| `alt` | 图片替代文字 | `string` | `''` |
| `icon` | 自定义图标 | `React.ReactNode` | - |
| `shape` | 头像形状 | `'circle' \| 'square'` | `'circle'` |
| `className` | 自定义类名 | `string` | `''` |
| `style` | 自定义样式 | `React.CSSProperties` | `{}` |
