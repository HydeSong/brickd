# Result 结果

用于反馈操作结果的展示，如成功、失败、警告、信息等状态。

## 安装

```bash
npm install brickd
```

## 导入

```jsx
import Result from 'brickd';
import Button from 'brickd';
```

## 基本用法

### 成功结果

```jsx
import React from 'react';
import Result from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <Result
      type="success"
      title="操作成功"
      description="您的操作已成功完成，感谢您的使用。"
      actions={
        <div>
          <Button type="primary">返回首页</Button>
          <Button>查看详情</Button>
        </div>
      }
    />
  );
};

export default App;
```

### 失败结果

```jsx
import React from 'react';
import Result from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <Result
      type="error"
      title="操作失败"
      description="很抱歉，您的操作未能完成，请稍后重试。"
      actions={
        <div>
          <Button type="primary">重试</Button>
          <Button>联系客服</Button>
        </div>
      }
    />
  );
};

export default App;
```

### 警告结果

```jsx
import React from 'react';
import Result from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <Result
      type="warning"
      title="警告"
      description="您的操作可能会影响其他用户，请谨慎操作。"
      actions={
        <div>
          <Button type="primary">继续操作</Button>
          <Button>取消</Button>
        </div>
      }
    />
  );
};

export default App;
```

### 信息结果

```jsx
import React from 'react';
import Result from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <Result
      type="info"
      title="信息"
      description="这里是一些重要的信息，请您仔细阅读。"
      actions={
        <div>
          <Button type="primary">我知道了</Button>
        </div>
      }
    />
  );
};

export default App;
```

### 自定义图标

```jsx
import React from 'react';
import Result from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <Result
      icon="🎉"
      title="自定义图标"
      description="使用自定义图标展示结果状态。"
      actions={
        <div>
          <Button type="primary">确定</Button>
        </div>
      }
    />
  );
};

export default App;
```

### 带额外内容

```jsx
import React from 'react';
import Result from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <Result
      type="success"
      title="操作成功"
      description="您的操作已成功完成，感谢您的使用。"
      extra={
        <div style={{ padding: '16px', border: '1px solid #e8e8e8', borderRadius: 8, width: '100%', maxWidth: '400px' }}>
          <p>订单号：20260211001</p>
          <p>操作时间：2026-02-11 10:30:00</p>
          <p>操作人：张三</p>
        </div>
      }
      actions={
        <div>
          <Button type="primary">返回首页</Button>
          <Button>查看详情</Button>
        </div>
      }
    />
  );
};

export default App;
```

## API

### ResultProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `type` | `'success' \| 'error' \| 'info' \| 'warning'` | `'info'` | 结果类型 |
| `title` | `React.ReactNode` | - | 结果标题 |
| `description` | `React.ReactNode` | - | 结果描述 |
| `extra` | `React.ReactNode` | - | 额外内容 |
| `actions` | `React.ReactNode` | - | 操作按钮 |
| `icon` | `React.ReactNode` | - | 自定义图标 |
| `className` | `string` | `''` | 自定义类名 |
| `style` | `React.CSSProperties` | `{}` | 自定义样式 |

## 样式

组件使用 CSS Modules 进行样式管理，主要类名如下：

| 类名 | 说明 |
| --- | --- |
| `result` | 基础结果组件类名 |
| `resultIcon` | 图标容器类名 |
| `resultIconSuccess` | 成功图标类名 |
| `resultIconError` | 错误图标类名 |
| `resultIconInfo` | 信息图标类名 |
| `resultIconWarning` | 警告图标类名 |
| `resultTitle` | 标题类名 |
| `resultDescription` | 描述类名 |
| `resultExtra` | 额外内容类名 |
| `resultActions` | 操作按钮类名 |
| `resultSmall` | 小尺寸结果组件类名 |
| `resultLarge` | 大尺寸结果组件类名 |
| `resultBordered` | 带边框结果组件类名 |

## 示例

### 不同尺寸

```jsx
import React from 'react';
import Result from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
      <Result
        className="resultSmall"
        type="success"
        title="小尺寸成功结果"
        description="这是一个小尺寸的结果展示"
        actions={<Button size="small">确定</Button>}
      />
      <Result
        type="success"
        title="默认尺寸成功结果"
        description="这是一个默认尺寸的结果展示"
        actions={<Button>确定</Button>}
      />
      <Result
        className="resultLarge"
        type="success"
        title="大尺寸成功结果"
        description="这是一个大尺寸的结果展示"
        actions={<Button size="large">确定</Button>}
      />
    </div>
  );
};

export default App;
```

### 带边框

```jsx
import React from 'react';
import Result from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <Result
      className="resultBordered"
      type="success"
      title="带边框的结果"
      description="这是一个带边框的结果展示"
      actions={<Button type="primary">确定</Button>}
    />
  );
};

export default App;
```