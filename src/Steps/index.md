# Steps 步骤条

步骤条组件，用于显示操作的步骤和当前进度。

## 基本用法

```tsx
import React from 'react';
import { Steps } from 'brickd';

const { Step } = Steps;

export default () => (
  <div>
    <Steps current={1}>
      <Step title="第一步" />
      <Step title="第二步" />
      <Step title="第三步" />
    </Steps>
  </div>
);
```

## 垂直方向

```tsx
import React from 'react';
import { Steps } from 'brickd';

const { Step } = Steps;

export default () => (
  <div style={{ width: '300px' }}>
    <Steps direction="vertical" current={1}>
      <Step title="第一步" />
      <Step title="第二步" />
      <Step title="第三步" />
    </Steps>
  </div>
);
```

## 带描述

```tsx
import React from 'react';
import { Steps } from 'brickd';

const { Step } = Steps;

export default () => (
  <div>
    <Steps current={1}>
      <Step 
        title="第一步" 
        description="这是第一步的详细描述信息" 
      />
      <Step 
        title="第二步" 
        description="这是第二步的详细描述信息" 
      />
      <Step 
        title="第三步" 
        description="这是第三步的详细描述信息" 
      />
    </Steps>
  </div>
);
```

## 不同状态

```tsx
import React from 'react';
import { Steps } from 'brickd';

const { Step } = Steps;

export default () => (
  <div>
    <Steps current={0} style={{ marginBottom: '20px' }}>
      <Step title="第一步" />
      <Step title="第二步" />
      <Step title="第三步" />
    </Steps>
    <Steps current={1} style={{ marginBottom: '20px' }}>
      <Step title="第一步" />
      <Step title="第二步" />
      <Step title="第三步" />
    </Steps>
    <Steps current={2}>
      <Step title="第一步" />
      <Step title="第二步" />
      <Step title="第三步" />
    </Steps>
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Steps } from 'brickd';

const { Step } = Steps;

export default () => (
  <div>
    <Steps 
      current={1}
      className="custom-steps"
      style={{ 
        padding: '16px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px'
      }}
    >
      <Step title="第一步" />
      <Step title="第二步" />
      <Step title="第三步" />
    </Steps>
  </div>
);
```

## 受控模式

```tsx
import React, { useState } from 'react';
import { Steps, Button } from 'brickd';

const { Step } = Steps;

export default () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent(current + 1);
  };
  
  const prev = () => {
    setCurrent(current - 1);
  };
  
  return (
    <div>
      <Steps current={current}>
        <Step title="第一步" description="开始操作" />
        <Step title="第二步" description="进行中" />
        <Step title="第三步" description="完成操作" />
      </Steps>
      <div style={{ marginTop: '20px' }}>
        <Button 
          onClick={prev} 
          disabled={current === 0}
          style={{ marginRight: '10px' }}
        >
          上一步
        </Button>
        <Button 
          type="primary" 
          onClick={next} 
          disabled={current === 2}
        >
          {current === 2 ? '完成' : '下一步'}
        </Button>
      </div>
    </div>
  );
};
```

## API

### Steps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前步骤 | `number` | `0` |
| direction | 步骤条方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| className | 自定义类名 | `string` | `undefined` |
| style | 自定义样式 | `React.CSSProperties` | `undefined` |
| children | 子步骤 | `React.ReactNode` | `undefined` |

### Steps.Step

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 步骤标题 | `React.ReactNode` | - |
| description | 步骤描述 | `React.ReactNode` | `undefined` |
| className | 自定义类名 | `string` | `undefined` |
| children | 子元素 | `React.ReactNode` | `undefined` |