# Tour 漫游式引导

为新用户提供分步式的功能引导。

## 基本用法

```tsx
import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      title: '欢迎使用',
      content: '这是一个漫游式引导组件，用于引导用户了解产品功能',
      target: 'body',
      placement: 'center',
    },
    {
      title: '开始按钮',
      content: '点击此按钮开始使用产品',
      target: '.start-button',
      placement: 'bottom',
    },
    {
      title: '设置菜单',
      content: '在这里可以配置产品参数',
      target: '.settings-button',
      placement: 'left',
    },
  ];

  return (
    <div>
      <Button className="start-button" onClick={() => setVisible(true)}>
        开始引导
      </Button>
      <Button className="settings-button" style={{ marginLeft: '10px' }}>
        设置
      </Button>

      <Tour
        steps={steps}
        visible={visible}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default App;
```

## 自定义配置

```tsx
import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: '步骤 1',
      content: '这是第一步引导',
      target: 'body',
      placement: 'top',
    },
    {
      title: '步骤 2',
      content: '这是第二步引导',
      target: 'body',
      placement: 'bottom',
    },
    {
      title: '步骤 3',
      content: '这是第三步引导',
      target: 'body',
      placement: 'right',
    },
  ];

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        开始引导
      </Button>

      <Tour
        steps={steps}
        visible={visible}
        current={current}
        onCurrentChange={setCurrent}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        mask={true}
        maskClosable={false}
      />
    </div>
  );
};

export default App;
```

## API

### Tour

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| steps | 引导步骤 | TourStep[] | - |
| visible | 是否可见 | boolean | - |
| current | 当前步骤索引 | number | 0 |
| onFinish | 完成回调 | () => void | - |
| onCancel | 取消回调 | () => void | - |
| onCurrentChange | 当前步骤变化回调 | (current: number) => void | - |
| mask | 是否显示遮罩 | boolean | true |
| maskClosable | 点击遮罩是否可关闭 | boolean | true |
| className | 自定义类名 | string | - |
| style | 自定义样式 | React.CSSProperties | - |

### TourStep

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 步骤标题 | React.ReactNode | - |
| content | 步骤内容 | React.ReactNode | - |
| target | 目标元素 | string  HTMLElement | - |
| placement | 位置 | 'top'  'bottom'  'left'  'right' | 'top' |
| offset | 偏移量 | number | 10 |