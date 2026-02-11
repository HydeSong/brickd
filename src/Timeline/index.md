# Timeline 时间轴

可视化地展示时间流信息。

## 基本用法

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <Timeline>
      <Timeline.Item>创建成功</Timeline.Item>
      <Timeline.Item>审核中</Timeline.Item>
      <Timeline.Item>审核通过</Timeline.Item>
      <Timeline.Item>已上线</Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## 不同模式

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <div>
      <h3>左侧模式</h3>
      <Timeline mode="left">
        <Timeline.Item>左侧内容 1</Timeline.Item>
        <Timeline.Item>左侧内容 2</Timeline.Item>
      </Timeline>

      <h3>右侧模式</h3>
      <Timeline mode="right">
        <Timeline.Item>右侧内容 1</Timeline.Item>
        <Timeline.Item>右侧内容 2</Timeline.Item>
      </Timeline>

      <h3>交替模式</h3>
      <Timeline mode="alternate">
        <Timeline.Item>交替内容 1</Timeline.Item>
        <Timeline.Item>交替内容 2</Timeline.Item>
        <Timeline.Item>交替内容 3</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default App;
```

## 自定义颜色

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <Timeline>
      <Timeline.Item color="green">成功状态</Timeline.Item>
      <Timeline.Item color="blue">进行中状态</Timeline.Item>
      <Timeline.Item color="orange">警告状态</Timeline.Item>
      <Timeline.Item color="red">错误状态</Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## 自定义节点

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <Timeline>
      <Timeline.Item dot={<span>✓</span>}>成功完成</Timeline.Item>
      <Timeline.Item dot={<span>!</span>}>需要注意</Timeline.Item>
      <Timeline.Item dot={<span>×</span>}>失败</Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## 带有额外内容

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <Timeline>
      <Timeline.Item extra="2023-01-01 10:00">
        提交申请
      </Timeline.Item>
      <Timeline.Item extra="2023-01-02 14:30">
        审核通过
      </Timeline.Item>
      <Timeline.Item extra="2023-01-03 09:15">
        开始执行
      </Timeline.Item>
    </Timeline>
  );
};

export default App;
```

##  pending 状态

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <div>
      <h3>默认 pending</h3>
      <Timeline pending>
        <Timeline.Item>步骤 1</Timeline.Item>
        <Timeline.Item>步骤 2</Timeline.Item>
      </Timeline>

      <h3>自定义 pending</h3>
      <Timeline pending="处理中...">
        <Timeline.Item>步骤 1</Timeline.Item>
        <Timeline.Item>步骤 2</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default App;
```

## API

### Timeline

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 时间轴项 | React.ReactNode | - |
| mode | 时间轴模式 | 'left'  'alternate'  'right' | 'left' |
| pending | 是否处于加载状态 | boolean  React.ReactNode | false |
| className | 自定义类名 | string | - |
| style | 自定义样式 | React.CSSProperties | - |

### Timeline.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 内容 | React.ReactNode | - |
| color | 节点颜色 | string | '#1890ff' |
| dot | 自定义节点 | React.ReactNode | - |
| extra | 额外内容 | React.ReactNode | - |
| className | 自定义类名 | string | - |
| style | 自定义样式 | React.CSSProperties | - |