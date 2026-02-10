---
title: Steps 步骤条
order: 15
---

# Steps 步骤条

用于显示操作流程的步骤，支持水平和垂直两种模式。

## 基本用法

```jsx
import { Steps } from 'brickd';

function App() {
  return (
    <Steps current={1}>
      <Steps.Step title="步骤 1" description="第一步的描述" />
      <Steps.Step title="步骤 2" description="第二步的描述" />
      <Steps.Step title="步骤 3" description="第三步的描述" />
    </Steps>
  );
}

export default App;
```

## 垂直步骤条

```jsx
import { Steps } from 'brickd';

function App() {
  return (
    <Steps current={1} direction="vertical">
      <Steps.Step title="步骤 1" description="第一步的描述" />
      <Steps.Step title="步骤 2" description="第二步的描述" />
      <Steps.Step title="步骤 3" description="第三步的描述" />
    </Steps>
  );
}

export default App;
```

## 不同状态的步骤条

```jsx
import { Steps } from 'brickd';

function App() {
  return (
    <div>
      <Steps current={0}>
        <Steps.Step title="步骤 1" description="第一步的描述" />
        <Steps.Step title="步骤 2" description="第二步的描述" />
        <Steps.Step title="步骤 3" description="第三步的描述" />
      </Steps>
      <br />
      <Steps current={1}>
        <Steps.Step title="步骤 1" description="第一步的描述" />
        <Steps.Step title="步骤 2" description="第二步的描述" />
        <Steps.Step title="步骤 3" description="第三步的描述" />
      </Steps>
      <br />
      <Steps current={2}>
        <Steps.Step title="步骤 1" description="第一步的描述" />
        <Steps.Step title="步骤 2" description="第二步的描述" />
        <Steps.Step title="步骤 3" description="第三步的描述" />
      </Steps>
      <br />
      <Steps current={3}>
        <Steps.Step title="步骤 1" description="第一步的描述" />
        <Steps.Step title="步骤 2" description="第二步的描述" />
        <Steps.Step title="步骤 3" description="第三步的描述" />
      </Steps>
    </div>
  );
}

export default App;
```

## 简洁的步骤条

```jsx
import { Steps } from 'brickd';

function App() {
  return (
    <Steps current={1}>
      <Steps.Step title="步骤 1" />
      <Steps.Step title="步骤 2" />
      <Steps.Step title="步骤 3" />
    </Steps>
  );
}

export default App;
```

## API

### Steps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前步骤索引 | `number` | `0` |
| direction | 步骤条方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Steps.Step

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 步骤标题 | `React.ReactNode` | - |
| description | 步骤描述 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| children | 子元素 | `React.ReactNode` | - |
