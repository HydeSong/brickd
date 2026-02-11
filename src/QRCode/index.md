# QRCode 二维码

二维码组件，用于生成二维码。

## 安装

```bash
npm install brickd
```

## 导入

```tsx
import { QRCode } from 'brickd';
```

## 用法

### 基础用法

```tsx
import React from 'react';
import { QRCode } from 'brickd';

const App = () => {
  return (
    <QRCode value="https://example.com" />
  );
};

export default App;
```

### 自定义大小

```tsx
import React from 'react';
import { QRCode } from 'brickd';

const App = () => {
  return (
    <QRCode value="https://example.com" size={200} />
  );
};

export default App;
```

### 自定义颜色

```tsx
import React from 'react';
import { QRCode } from 'brickd';

const App = () => {
  return (
    <QRCode 
      value="https://example.com" 
      color="#ff0000" 
      backgroundColor="#ffffff" 
    />
  );
};

export default App;
```

### 带边框的二维码

```tsx
import React from 'react';
import { QRCode } from 'brickd';

const App = () => {
  return (
    <QRCode 
      value="https://example.com" 
      style={{ border: '2px solid #e8e8e8', padding: 8 }} 
    />
  );
};

export default App;
```

## API

### QRCode

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | `string` | - | 二维码的内容 |
| size | `number` | `128` | 二维码的大小 |
| color | `string` | `'#000000'` | 二维码的颜色 |
| backgroundColor | `string` | `'#FFFFFF'` | 二维码的背景颜色 |
| className | `string` | - | 自定义类名 |
| style | `React.CSSProperties` | - | 自定义样式 |
