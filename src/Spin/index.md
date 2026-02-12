# Spin 加载

加载组件，用于显示加载状态。

## 基本用法

```tsx
import React from 'react';
import { Spin } from 'brickd';

export default () => (
  <Spin />
);
```

## 不同尺寸

```tsx
import React from 'react';
import { Spin } from 'brickd';

export default () => (
  <div>
    <Spin size="small" style={{ marginRight: '20px' }} />
    <Spin size="default" style={{ marginRight: '20px' }} />
    <Spin size="large" />
  </div>
);
```

## 自定义颜色

```tsx
import React from 'react';
import { Spin } from 'brickd';

export default () => (
  <div>
    <Spin color="#1890ff" style={{ marginRight: '20px' }} />
    <Spin color="#52c41a" style={{ marginRight: '20px' }} />
    <Spin color="#faad14" style={{ marginRight: '20px' }} />
    <Spin color="#f5222d" />
  </div>
);
```

## 带提示文本

```tsx
import React from 'react';
import { Spin } from 'brickd';

export default () => (
  <div>
    <Spin tip="加载中..." />
  </div>
);
```

## 自定义加载指示器

```tsx
import React from 'react';
import { Spin } from 'brickd';

export default () => (
  <div>
    <Spin 
      indicator={<span style={{ fontSize: '24px' }}>⏳</span>} 
    />
  </div>
);
```

## 包裹内容

```tsx
import React from 'react';
import { Spin } from 'brickd';

export default () => (
  <div style={{ width: '300px', height: '200px', border: '1px solid #d9d9d9' }}>
    <Spin spinning>
      <div style={{ padding: '16px' }}>
        <h3>内容标题</h3>
        <p>这里是一些内容，当加载时会被遮罩。</p>
        <p>更多内容...</p>
      </div>
    </Spin>
  </div>
);
```

## 延迟显示

```tsx
import React, { useState } from 'react';
import { Spin, Button } from 'brickd';

export default () => {
  const [loading, setLoading] = useState(false);
  
  return (
    <div>
      <Spin spinning={loading} delay={300} tip="加载中...">
        <div style={{ padding: '16px', border: '1px solid #d9d9d9' }}>
          <h3>延迟显示加载</h3>
          <p>点击按钮后，加载状态会在300ms后显示，避免闪烁。</p>
        </div>
      </Spin>
      <Button 
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
        style={{ marginTop: '16px' }}
      >
        触发加载
      </Button>
    </div>
  );
};
```

## 条件显示

```tsx
import React, { useState } from 'react';
import { Spin, Button } from 'brickd';

export default () => {
  const [loading, setLoading] = useState(false);
  
  return (
    <div>
      <Spin spinning={loading} tip="数据加载中...">
        <div style={{ padding: '16px', border: '1px solid #d9d9d9' }}>
          <h3>条件加载</h3>
          <p>点击按钮开始加载，2秒后加载完成。</p>
        </div>
      </Spin>
      <Button 
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
        style={{ marginTop: '16px' }}
        disabled={loading}
      >
        {loading ? '加载中' : '开始加载'}
      </Button>
    </div>
  );
};
```

## 自定义样式

```tsx
import React from 'react';
import { Spin } from 'brickd';

export default () => (
  <div>
    <Spin 
      className="custom-spin"
      style={{ 
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
      }}
      tip="自定义样式加载"
    />
  </div>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spinning | 是否显示加载状态 | `boolean` | `true` |
| size | 加载图标大小 | `'small' \| 'default' \| 'large'` | `'default'` |
| tip | 加载提示文本 | `React.ReactNode` | `undefined` |
| delay | 延迟显示加载状态的时间（毫秒） | `number` | `undefined` |
| indicator | 自定义加载指示器 | `React.ReactNode` | `undefined` |
| color | 加载图标颜色 | `string` | `'#1890ff'` |
| className | 加载组件类名 | `string` | `''` |
| style | 加载组件样式 | `React.CSSProperties` | `{}` |
| children | 加载状态下显示的子内容 | `React.ReactNode` | `undefined` |
| wrapperClassName | 包裹容器类名 | `string` | `''` |
| wrapperStyle | 包裹容器样式 | `React.CSSProperties` | `{}` |