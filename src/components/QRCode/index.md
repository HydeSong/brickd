# QRCode 二维码

二维码组件，用于生成和显示二维码。

## 基本用法

```tsx
import React from 'react';
import { QRCode } from 'brickd';

export default () => (
  <div>
    <QRCode value="https://brickd.com" />
  </div>
);
```

## 自定义尺寸

```tsx
import React from 'react';
import { QRCode } from 'brickd';

export default () => (
  <div>
    <QRCode value="https://brickd.com" size={200} />
  </div>
);
```

## 自定义颜色

```tsx
import React from 'react';
import { QRCode } from 'brickd';

export default () => (
  <div>
    <QRCode
      value="https://brickd.com"
      color="#1890ff"
      backgroundColor="#f0f0f0"
    />
  </div>
);
```

## 迷你尺寸

```tsx
import React from 'react';
import { QRCode } from 'brickd';

export default () => (
  <div>
    <QRCode value="https://brickd.com" size={64} />
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { QRCode } from 'brickd';

export default () => (
  <div>
    <QRCode
      value="https://brickd.com"
      className="custom-qrcode"
      style={{
        border: '2px solid #1890ff',
        borderRadius: '8px',
        padding: '4px',
      }}
    />
  </div>
);
```

## API

| 属性            | 说明               | 类型                  | 默认值  |
| --------------- | ------------------ | --------------------- | ------- |
| value           | 二维码内容         | `string`              | -       |
| size            | 二维码尺寸（像素） | `number`              | 128     |
| color           | 二维码颜色         | `string`              | #000000 |
| backgroundColor | 二维码背景颜色     | `string`              | #FFFFFF |
| className       | 自定义类名         | `string`              | -       |
| style           | 自定义样式         | `React.CSSProperties` | -       |
