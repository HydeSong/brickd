---
title: Timeline
nav: components
order: 52
---

# Timeline

时间线组件，用于展示时间顺序的事件流。

## 基本用法

最简单的时间线使用方式。

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <Timeline>
      <Timeline.Item>创建项目</Timeline.Item>
      <Timeline.Item>开发功能</Timeline.Item>
      <Timeline.Item>测试代码</Timeline.Item>
      <Timeline.Item>部署上线</Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## 不同模式

时间线支持三种模式：left、alternate 和 right。

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <div>
      <h3>Left 模式（默认）</h3>
      <Timeline mode="left">
        <Timeline.Item>事件 1</Timeline.Item>
        <Timeline.Item>事件 2</Timeline.Item>
        <Timeline.Item>事件 3</Timeline.Item>
      </Timeline>

      <h3>Alternate 模式</h3>
      <Timeline mode="alternate">
        <Timeline.Item>事件 1</Timeline.Item>
        <Timeline.Item>事件 2</Timeline.Item>
        <Timeline.Item>事件 3</Timeline.Item>
      </Timeline>

      <h3>Right 模式</h3>
      <Timeline mode="right">
        <Timeline.Item>事件 1</Timeline.Item>
        <Timeline.Item>事件 2</Timeline.Item>
        <Timeline.Item>事件 3</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default App;
```

## 自定义颜色

为时间线节点设置自定义颜色。

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <Timeline>
      <Timeline.Item color="#1890ff">成功事件</Timeline.Item>
      <Timeline.Item color="#52c41a">完成事件</Timeline.Item>
      <Timeline.Item color="#faad14">警告事件</Timeline.Item>
      <Timeline.Item color="#f5222d">错误事件</Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## 自定义节点

使用自定义节点替换默认的圆点。

```tsx
import React from 'react';
import Timeline from './index';
import Icon from '../Icon';

const App: React.FC = () => {
  return (
    <Timeline>
      <Timeline.Item dot={<Icon name="check" size={12} color="white" />}>
        成功完成
      </Timeline.Item>
      <Timeline.Item dot={<Icon name="warning" size={12} color="white" />}>
        需要注意
      </Timeline.Item>
      <Timeline.Item dot={<Icon name="error" size={12} color="white" />}>
        发生错误
      </Timeline.Item>
      <Timeline.Item dot={<Icon name="info" size={12} color="white" />}>
        信息提示
      </Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## 额外内容

为时间线项添加额外内容。

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <Timeline>
      <Timeline.Item extra="2024-01-01">
        <div>
          <h4>项目启动</h4>
          <p>开始新项目的开发工作</p>
        </div>
      </Timeline.Item>
      <Timeline.Item extra="2024-01-15">
        <div>
          <h4>需求分析</h4>
          <p>完成产品需求文档的编写</p>
        </div>
      </Timeline.Item>
      <Timeline.Item extra="2024-02-01">
        <div>
          <h4>开发阶段</h4>
          <p>开始核心功能的开发</p>
        </div>
      </Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## Pending 状态

显示待处理状态的时间线。

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <Timeline pending>
      <Timeline.Item>第一步</Timeline.Item>
      <Timeline.Item>第二步</Timeline.Item>
      <Timeline.Item>第三步</Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## 自定义 Pending 内容

自定义待处理状态的内容。

```tsx
import React from 'react';
import Timeline from './index';
import Icon from '../Icon';

const App: React.FC = () => {
  return (
    <Timeline pending={<Icon name="loading" size={16} spin />}>
      <Timeline.Item>已完成步骤 1</Timeline.Item>
      <Timeline.Item>已完成步骤 2</Timeline.Item>
      <Timeline.Item>已完成步骤 3</Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## 复杂内容

时间线项包含复杂内容。

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <div>
          <h4>项目启动会议</h4>
          <p>时间：2024-01-01</p>
          <p>地点：会议室 A</p>
          <p>参会人员：产品经理、设计师、开发人员</p>
          <p>内容：讨论项目需求和技术方案</p>
        </div>
      </Timeline.Item>
      <Timeline.Item>
        <div>
          <h4>需求评审</h4>
          <p>时间：2024-01-10</p>
          <p>地点：会议室 B</p>
          <p>参会人员：产品经理、设计师、开发人员</p>
          <p>内容：评审产品需求文档</p>
        </div>
      </Timeline.Item>
      <Timeline.Item>
        <div>
          <h4>技术方案评审</h4>
          <p>时间：2024-01-15</p>
          <p>地点：会议室 C</p>
          <p>参会人员：开发人员、架构师</p>
          <p>内容：评审技术实现方案</p>
        </div>
      </Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## 自定义样式

通过 className 和 style 属性自定义时间线样式。

```tsx
import React from 'react';
import Timeline from './index';

const App: React.FC = () => {
  return (
    <Timeline
      style={{
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <Timeline.Item
        style={{
          padding: '16px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          marginBottom: '16px',
        }}
      >
        <div style={{ fontWeight: 'bold' }}>自定义样式项 1</div>
        <div>这是一个带有自定义样式的时间线项</div>
      </Timeline.Item>
      <Timeline.Item
        style={{
          padding: '16px',
          backgroundColor: '#e6f7ff',
          borderRadius: '8px',
          marginBottom: '16px',
        }}
      >
        <div style={{ fontWeight: 'bold' }}>自定义样式项 2</div>
        <div>这是另一个带有自定义样式的时间线项</div>
      </Timeline.Item>
    </Timeline>
  );
};

export default App;
```

## API

### TimelineProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | React.ReactNode | - | 时间线项 |
| mode | 'left' \| 'alternate' \| 'right' | 'left' | 时间线模式 |
| pending | boolean \| React.ReactNode | false | 是否显示 pending 状态 |
| className | string | - | 自定义类名 |
| style | React.CSSProperties | - | 自定义样式 |

### TimelineItemProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | React.ReactNode | - | 时间线项内容 |
| color | string | - | 节点颜色 |
| dot | React.ReactNode | - | 自定义节点 |
| extra | React.ReactNode | - | 额外内容 |
| className | string | - | 自定义类名 |
| style | React.CSSProperties | - | 自定义样式 |