---
title: Typography 排版
order: 7
---

# Typography 排版

用于展示文本内容，提供标题、段落和文本等组件。

## 标题

```jsx
import { Typography } from 'brickd';

function App() {
  return (
    <div>
      <Typography.Title level={1}>H1 标题</Typography.Title>
      <Typography.Title level={2}>H2 标题</Typography.Title>
      <Typography.Title level={3}>H3 标题</Typography.Title>
      <Typography.Title level={4}>H4 标题</Typography.Title>
      <Typography.Title level={5}>H5 标题</Typography.Title>
      <Typography.Title level={6}>H6 标题</Typography.Title>
    </div>
  );
}

export default App;
```

## 粗体标题

```jsx
import { Typography } from 'brickd';

function App() {
  return (
    <div>
      <Typography.Title level={1} strong>H1 粗体标题</Typography.Title>
      <Typography.Title level={2} strong>H2 粗体标题</Typography.Title>
    </div>
  );
}

export default App;
```

## 段落

```jsx
import { Typography } from 'brickd';

function App() {
  return (
    <div>
      <Typography.Paragraph>
        这是一个普通段落，包含了一些文本内容。段落是排版中最基本的单位，用于组织和展示文本信息。
      </Typography.Paragraph>
      <Typography.Paragraph>
        这是另一个段落，展示了如何在页面中使用多个段落来分隔不同的内容块，提高可读性。
      </Typography.Paragraph>
    </div>
  );
}

export default App;
```

## 文本截断

```jsx
import { Typography } from 'brickd';

function App() {
  return (
    <div>
      <Typography.Paragraph ellipsis rows={1}>
        这是一个需要截断的长文本，当文本内容超过一行时，会自动显示省略号。这是一个需要截断的长文本，当文本内容超过一行时，会自动显示省略号。
      </Typography.Paragraph>
      <Typography.Paragraph ellipsis rows={2}>
        这是一个需要截断的长文本，当文本内容超过两行时，会自动显示省略号。这是一个需要截断的长文本，当文本内容超过两行时，会自动显示省略号。这是一个需要截断的长文本，当文本内容超过两行时，会自动显示省略号。
      </Typography.Paragraph>
    </div>
  );
}

export default App;
```

## 文本类型

```jsx
import { Typography } from 'brickd';

function App() {
  return (
    <div>
      <Typography.Text type="primary">主要文本</Typography.Text>
      <br />
      <Typography.Text type="secondary">次要文本</Typography.Text>
      <br />
      <Typography.Text type="success">成功文本</Typography.Text>
      <br />
      <Typography.Text type="warning">警告文本</Typography.Text>
      <br />
      <Typography.Text type="error">错误文本</Typography.Text>
    </div>
  );
}

export default App;
```

## 文本修饰

```jsx
import { Typography } from 'brickd';

function App() {
  return (
    <div>
      <Typography.Text strong>粗体文本</Typography.Text>
      <br />
      <Typography.Text italic>斜体文本</Typography.Text>
      <br />
      <Typography.Text underline>带下划线文本</Typography.Text>
      <br />
      <Typography.Text delete>带删除线文本</Typography.Text>
      <br />
      <Typography.Text code>代码文本</Typography.Text>
    </div>
  );
}

export default App;
```

## 组合使用

```jsx
import { Typography } from 'brickd';

function App() {
  return (
    <div>
      <Typography.Title level={2}>产品介绍</Typography.Title>
      <Typography.Paragraph>
        这是一款功能强大的<span><Typography.Text type="primary" strong>React 组件库</Typography.Text></span>，
        提供了丰富的 UI 组件，帮助开发者快速构建美观、易用的前端界面。
      </Typography.Paragraph>
      <Typography.Paragraph>
        主要特点包括：
      </Typography.Paragraph>
      <ul>
        <li><Typography.Text>TypeScript 类型支持</Typography.Text></li>
        <li><Typography.Text>响应式设计</Typography.Text></li>
        <li><Typography.Text>主题定制</Typography.Text></li>
        <li><Typography.Text>丰富的组件库</Typography.Text></li>
      </ul>
    </div>
  );
}

export default App;
```

## API

### Typography.Title

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| level | 标题级别 | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` |
| strong | 是否加粗 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Typography.Paragraph

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ellipsis | 是否省略 | `boolean` | `false` |
| rows | 省略行数 | `number` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Typography.Text

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 文本类型 | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'secondary'` |
| strong | 是否加粗 | `boolean` | `false` |
| italic | 是否斜体 | `boolean` | `false` |
| underline | 是否带下划线 | `boolean` | `false` |
| delete | 是否带删除线 | `boolean` | `false` |
| code | 是否为代码文本 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |
