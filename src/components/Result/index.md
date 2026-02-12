# Result 结果

结果组件，用于显示操作结果信息。

## 成功结果

```tsx
import React from 'react';
import { Result, Button } from 'brickd';

export default () => (
  <div>
    <Result
      type="success"
      title="操作成功"
      description="您的操作已成功完成，数据已保存。"
      actions={<Button type="primary">确定</Button>}
    />
  </div>
);
```

## 错误结果

```tsx
import React from 'react';
import { Result, Button } from 'brickd';

export default () => (
  <div>
    <Result
      type="error"
      title="操作失败"
      description="您的操作未完成，请检查后重试。"
      actions={<Button type="primary">重试</Button>}
    />
  </div>
);
```

## 信息结果

```tsx
import React from 'react';
import { Result, Button } from 'brickd';

export default () => (
  <div>
    <Result
      type="info"
      title="提示信息"
      description="这里是一些提示信息，帮助您了解当前状态。"
      actions={<Button>了解更多</Button>}
    />
  </div>
);
```

## 警告结果

```tsx
import React from 'react';
import { Result, Button } from 'brickd';

export default () => (
  <div>
    <Result
      type="warning"
      title="警告信息"
      description="您的操作可能会产生一些影响，请谨慎处理。"
      actions={
        <>
          <Button>取消</Button>
          <Button type="primary">继续</Button>
        </>
      }
    />
  </div>
);
```

## 自定义图标

```tsx
import React from 'react';
import { Result, Button } from 'brickd';

export default () => (
  <div>
    <Result
      icon={<span style={{ fontSize: '48px' }}>🎉</span>}
      title="自定义图标"
      description="使用自定义图标展示结果信息。"
      actions={<Button type="primary">确定</Button>}
    />
  </div>
);
```

## 带额外内容

```tsx
import React from 'react';
import { Result, Button } from 'brickd';

export default () => (
  <div>
    <Result
      type="success"
      title="操作成功"
      description="您的操作已成功完成，数据已保存。"
      extra={
        <div
          style={{
            padding: '12px',
            border: '1px solid #e8e8e8',
            borderRadius: '4px',
            backgroundColor: '#f6ffed',
          }}
        >
          <p>订单号：202310010001</p>
          <p>交易时间：2023-10-01 10:00:00</p>
          <p>交易金额：¥100.00</p>
        </div>
      }
      actions={<Button type="primary">查看详情</Button>}
    />
  </div>
);
```

## 简化版结果

```tsx
import React from 'react';
import { Result } from 'brickd';

export default () => (
  <div>
    <Result type="success" title="操作成功" />
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Result, Button } from 'brickd';

export default () => (
  <div>
    <Result
      type="info"
      title="自定义样式"
      description="使用自定义样式美化结果组件。"
      className="custom-result"
      style={{
        padding: '40px',
        border: '1px solid #d9d9d9',
        borderRadius: '8px',
        backgroundColor: '#fafafa',
      }}
      actions={<Button type="primary">确定</Button>}
    />
  </div>
);
```

## API

| 属性        | 说明       | 类型                                          | 默认值      |
| ----------- | ---------- | --------------------------------------------- | ----------- |
| type        | 结果类型   | `'success' \| 'error' \| 'info' \| 'warning'` | `'info'`    |
| title       | 结果标题   | `React.ReactNode`                             | `undefined` |
| description | 结果描述   | `React.ReactNode`                             | `undefined` |
| extra       | 额外内容   | `React.ReactNode`                             | `undefined` |
| actions     | 操作按钮   | `React.ReactNode`                             | `undefined` |
| icon        | 自定义图标 | `React.ReactNode`                             | `undefined` |
| className   | 自定义类名 | `string`                                      | `''`        |
| style       | 自定义样式 | `React.CSSProperties`                         | `{}`        |
