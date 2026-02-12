---
title: Tour
nav: components
order: 54
---

# Tour

引导组件，用于创建产品功能导览，引导用户了解产品的主要功能。

## 基本用法

最简单的引导流程。

```tsx
import React, { useState, useEffect } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 模拟页面加载后显示引导
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      title: '欢迎使用',
      content: '这是一个产品导览示例，将引导您了解主要功能',
      target: '.tour-target-1',
      placement: 'bottom',
    },
    {
      title: '按钮功能',
      content: '点击此按钮可以触发操作',
      target: '.tour-target-2',
      placement: 'right',
    },
    {
      title: '完成导览',
      content: '导览已完成，您可以开始使用产品了',
      target: '.tour-target-3',
      placement: 'left',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="tour-target-1">产品标题</h1>
      <p>产品介绍内容...</p>
      <Button
        className="tour-target-2"
        type="primary"
        style={{ margin: '10px 0' }}
      >
        主要按钮
      </Button>
      <div className="tour-target-3" style={{ marginTop: '20px' }}>
        <h3>其他功能区域</h3>
        <p>这里是其他功能的说明...</p>
      </div>

      <Tour
        visible={visible}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />

      <Button onClick={() => setVisible(true)} style={{ marginTop: '20px' }}>
        重新开始导览
      </Button>
    </div>
  );
};

export default App;
```

## 自定义步骤

自定义引导步骤的内容和位置。

```tsx
import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';
import Icon from '../Icon';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      title: '第一步',
      content: (
        <div>
          <p>这是第一步的详细说明</p>
          <p>可以包含多行文本和其他元素</p>
        </div>
      ),
      target: '.step-1',
      placement: 'top',
    },
    {
      title: '第二步',
      content: (
        <div>
          <p>这是第二步的详细说明</p>
          <p>
            包含图标：
            <Icon name="info" />
          </p>
        </div>
      ),
      target: '.step-2',
      placement: 'bottom',
    },
    {
      title: '第三步',
      content: (
        <div>
          <p>这是第三步的详细说明</p>
          <p>导览即将完成</p>
        </div>
      ),
      target: '.step-3',
      placement: 'right',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="step-1" style={{ margin: '20px 0' }}>
        <h3>功能区域 1</h3>
        <p>这里是功能区域 1 的内容</p>
      </div>

      <div className="step-2" style={{ margin: '40px 0' }}>
        <h3>功能区域 2</h3>
        <p>这里是功能区域 2 的内容</p>
      </div>

      <div className="step-3" style={{ margin: '40px 0' }}>
        <h3>功能区域 3</h3>
        <p>这里是功能区域 3 的内容</p>
      </div>

      <Button onClick={() => setVisible(true)}>开始导览</Button>

      <Tour
        visible={visible}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default App;
```

## 受控模式

通过状态控制引导步骤。

```tsx
import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: '步骤 1',
      content: '这是步骤 1 的说明',
      target: '.controlled-step-1',
      placement: 'top',
    },
    {
      title: '步骤 2',
      content: '这是步骤 2 的说明',
      target: '.controlled-step-2',
      placement: 'bottom',
    },
    {
      title: '步骤 3',
      content: '这是步骤 3 的说明',
      target: '.controlled-step-3',
      placement: 'right',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="controlled-step-1" style={{ margin: '20px 0' }}>
        <h3>受控步骤 1</h3>
        <p>内容 1</p>
      </div>

      <div className="controlled-step-2" style={{ margin: '40px 0' }}>
        <h3>受控步骤 2</h3>
        <p>内容 2</p>
      </div>

      <div className="controlled-step-3" style={{ margin: '40px 0' }}>
        <h3>受控步骤 3</h3>
        <p>内容 3</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Button onClick={() => setVisible(true)}>开始导览</Button>
        <Button
          onClick={() => setCurrentStep(0)}
          style={{ marginLeft: '10px' }}
        >
          回到第一步
        </Button>
        <Button
          onClick={() => setCurrentStep(1)}
          style={{ marginLeft: '10px' }}
        >
          回到第二步
        </Button>
        <Button
          onClick={() => setCurrentStep(2)}
          style={{ marginLeft: '10px' }}
        >
          回到第三步
        </Button>
      </div>

      <Tour
        visible={visible}
        current={currentStep}
        onCurrentChange={setCurrentStep}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />

      <p>
        当前步骤：{currentStep + 1}/{steps.length}
      </p>
    </div>
  );
};

export default App;
```

## 无遮罩模式

不显示遮罩层的引导。

```tsx
import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      title: '无遮罩导览',
      content: '这是一个没有遮罩层的导览示例',
      target: '.no-mask-step-1',
      placement: 'top',
    },
    {
      title: '第二步',
      content: '可以清晰看到页面内容',
      target: '.no-mask-step-2',
      placement: 'bottom',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="no-mask-step-1" style={{ margin: '20px 0' }}>
        <h3>功能区域</h3>
        <p>这里是功能区域的内容</p>
      </div>

      <div className="no-mask-step-2" style={{ margin: '40px 0' }}>
        <h3>另一个功能区域</h3>
        <p>这里是另一个功能区域的内容</p>
      </div>

      <Button onClick={() => setVisible(true)}>开始无遮罩导览</Button>

      <Tour
        visible={visible}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        mask={false}
      />
    </div>
  );
};

export default App;
```

## 不可点击遮罩

设置遮罩层不可点击关闭。

```tsx
import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      title: '不可点击遮罩',
      content: '点击遮罩层不会关闭导览，只能通过按钮关闭',
      target: '.mask-closable-step-1',
      placement: 'top',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="mask-closable-step-1" style={{ margin: '20px 0' }}>
        <h3>功能区域</h3>
        <p>这里是功能区域的内容</p>
      </div>

      <Button onClick={() => setVisible(true)}>开始导览</Button>

      <Tour
        visible={visible}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        maskClosable={false}
      />
    </div>
  );
};

export default App;
```

## 自定义样式

通过 className 和 style 属性自定义引导样式。

```tsx
import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      title: '自定义样式导览',
      content: '这是一个使用自定义样式的导览示例',
      target: '.custom-style-step-1',
      placement: 'top',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="custom-style-step-1" style={{ margin: '20px 0' }}>
        <h3>功能区域</h3>
        <p>这里是功能区域的内容</p>
      </div>

      <Button onClick={() => setVisible(true)}>开始自定义样式导览</Button>

      <Tour
        visible={visible}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        style={
          {
            // 自定义样式
          }
        }
      />
    </div>
  );
};

export default App;
```

## API

### TourProps

| 属性            | 类型                      | 默认值 | 说明                     |
| --------------- | ------------------------- | ------ | ------------------------ |
| steps           | TourStep[]                | -      | 导览步骤数组             |
| visible         | boolean                   | -      | 是否显示导览             |
| current         | number                    | -      | 当前步骤索引（受控模式） |
| onFinish        | () => void                | -      | 完成导览时的回调函数     |
| onCancel        | () => void                | -      | 取消导览时的回调函数     |
| onCurrentChange | (current: number) => void | -      | 步骤变化时的回调函数     |
| mask            | boolean                   | true   | 是否显示遮罩层           |
| maskClosable    | boolean                   | true   | 点击遮罩层是否可关闭导览 |
| className       | string                    | -      | 自定义类名               |
| style           | React.CSSProperties       | -      | 自定义样式               |

### TourStep

| 属性      | 类型                                   | 默认值 | 说明                     |
| --------- | -------------------------------------- | ------ | ------------------------ |
| title     | React.ReactNode                        | -      | 步骤标题                 |
| content   | React.ReactNode                        | -      | 步骤内容                 |
| target    | string \| HTMLElement                  | -      | 目标元素选择器或元素引用 |
| placement | 'top' \| 'bottom' \| 'left' \| 'right' | 'top'  | 提示框位置               |
| offset    | number                                 | 10     | 提示框与目标元素的偏移量 |
