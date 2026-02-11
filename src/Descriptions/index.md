# Descriptions 描述列表

### 安装依赖

```bash
# npm
npm install brickd

# yarn
yarn add brickd

# pnpm
pnpm add brickd
```

### 导入组件

```javascript
import Descriptions from 'brickd';

const { Item } = Descriptions;
```

### 基本用法

```jsx
import React from 'react';
import Descriptions from 'brickd';

const { Item } = Descriptions;

const App = () => {
  return (
    <Descriptions title="用户信息">
      <Item label="姓名">张三</Item>
      <Item label="年龄">28</Item>
      <Item label="性别">男</Item>
      <Item label="邮箱">zhangsan@example.com</Item>
      <Item label="电话">13800138000</Item>
      <Item label="地址">北京市朝阳区</Item>
    </Descriptions>
  );
};

export default App;
```

### 带边框样式

```jsx
import React from 'react';
import Descriptions from 'brickd';

const { Item } = Descriptions;

const App = () => {
  return (
    <Descriptions title="用户信息" bordered>
      <Item label="姓名">张三</Item>
      <Item label="年龄">28</Item>
      <Item label="性别">男</Item>
      <Item label="邮箱">zhangsan@example.com</Item>
      <Item label="电话">13800138000</Item>
      <Item label="地址">北京市朝阳区</Item>
    </Descriptions>
  );
};

export default App;
```

### 自定义列数

```jsx
import React from 'react';
import Descriptions from 'brickd';

const { Item } = Descriptions;

const App = () => {
  return (
    <Descriptions title="用户信息" column={2}>
      <Item label="姓名">张三</Item>
      <Item label="年龄">28</Item>
      <Item label="性别">男</Item>
      <Item label="邮箱">zhangsan@example.com</Item>
      <Item label="电话">13800138000</Item>
      <Item label="地址">北京市朝阳区</Item>
    </Descriptions>
  );
};

export default App;
```

### 自定义尺寸

```jsx
import React from 'react';
import Descriptions from 'brickd';

const { Item } = Descriptions;

const App = () => {
  return (
    <div>
      <Descriptions title="小型" size="small">
        <Item label="姓名">张三</Item>
        <Item label="年龄">28</Item>
      </Descriptions>
      <Descriptions title="默认" size="default" style={{ margin: '20px 0' }}>
        <Item label="姓名">张三</Item>
        <Item label="年龄">28</Item>
      </Descriptions>
      <Descriptions title="大型" size="large">
        <Item label="姓名">张三</Item>
        <Item label="年龄">28</Item>
      </Descriptions>
    </div>
  );
};

export default App;
```

### 自定义跨度

```jsx
import React from 'react';
import Descriptions from 'brickd';

const { Item } = Descriptions;

const App = () => {
  return (
    <Descriptions title="用户信息" column={3}>
      <Item label="姓名" span={2}>张三</Item>
      <Item label="年龄">28</Item>
      <Item label="性别">男</Item>
      <Item label="邮箱" span={3}>zhangsan@example.com</Item>
    </Descriptions>
  );
};

export default App;
```

### API

#### Descriptions

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 描述列表标题 | React.ReactNode | - |
| bordered | 是否显示边框 | boolean | false |
| column | 列数 | number | 3 |
| size | 尺寸 | 'small' \| 'default' \| 'large' | 'default' |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |
| children | 子元素，应为 Descriptions.Item | React.ReactNode | - |

#### Descriptions.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 标签文本 | React.ReactNode | - |
| span | 占据的列数 | number | 1 |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |
| children | 内容文本 | React.ReactNode | - |