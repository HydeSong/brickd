---
title: Typography
nav: components
order: 58
---

# Typography

排版组件，用于统一页面的文字样式。

## 基本用法

最简单的排版组件使用方式。

```tsx
import React from 'react';
import Typography from './index';

const App: React.FC = () => {
  return (
    <div>
      <Typography.Title level={1}>一级标题</Typography.Title>
      <Typography.Paragraph>
        这是一个段落，用于展示普通文本内容。可以包含多个句子，形成一个完整的段落。
      </Typography.Paragraph>
      <Typography.Text>这是一段普通文本。</Typography.Text>
    </div>
  );
};

export default App;
```

## 标题级别

不同级别的标题。

```tsx
import React from 'react';
import Typography from './index';

const App: React.FC = () => {
  return (
    <div>
      <Typography.Title level={1}>一级标题</Typography.Title>
      <Typography.Title level={2}>二级标题</Typography.Title>
      <Typography.Title level={3}>三级标题</Typography.Title>
      <Typography.Title level={4}>四级标题</Typography.Title>
      <Typography.Title level={5}>五级标题</Typography.Title>
      <Typography.Title level={6}>六级标题</Typography.Title>
    </div>
  );
};

export default App;
```

## 标题加粗

加粗的标题。

```tsx
import React from 'react';
import Typography from './index';

const App: React.FC = () => {
  return (
    <div>
      <Typography.Title level={1} strong>加粗一级标题</Typography.Title>
      <Typography.Title level={2} strong>加粗二级标题</Typography.Title>
    </div>
  );
};

export default App;
```

## 文本类型

不同类型的文本。

```tsx
import React from 'react';
import Typography from './index';

const App: React.FC = () => {
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
};

export default App;
```

## 文本样式

不同样式的文本。

```tsx
import React from 'react';
import Typography from './index';

const App: React.FC = () => {
  return (
    <div>
      <Typography.Text strong>加粗文本</Typography.Text>
      <br />
      <Typography.Text italic>斜体文本</Typography.Text>
      <br />
      <Typography.Text underline>下划线文本</Typography.Text>
      <br />
      <Typography.Text delete>删除线文本</Typography.Text>
      <br />
      <Typography.Text code>代码文本</Typography.Text>
    </div>
  );
};

export default App;
```

## 文本样式组合

文本样式的组合使用。

```tsx
import React from 'react';
import Typography from './index';

const App: React.FC = () => {
  return (
    <div>
      <Typography.Text strong italic>加粗斜体文本</Typography.Text>
      <br />
      <Typography.Text underline delete>下划线删除线文本</Typography.Text>
      <br />
      <Typography.Text type="primary" strong>主要加粗文本</Typography.Text>
    </div>
  );
};

export default App;
```

## 段落省略

文本段落的省略显示。

```tsx
import React from 'react';
import Typography from './index';

const App: React.FC = () => {
  return (
    <div>
      <Typography.Paragraph ellipsis rows={1}>
        这是一段很长的文本，当设置了 ellipsis 属性后，超出部分会显示省略号。这是一段很长的文本，当设置了 ellipsis 属性后，超出部分会显示省略号。
      </Typography.Paragraph>
      <br />
      <Typography.Paragraph ellipsis rows={2}>
        这是一段很长的文本，当设置了 ellipsis 属性后，超出部分会显示省略号。这是一段很长的文本，当设置了 ellipsis 属性后，超出部分会显示省略号。这是一段很长的文本，当设置了 ellipsis 属性后，超出部分会显示省略号。
      </Typography.Paragraph>
    </div>
  );
};

export default App;
```

## 自定义样式

通过 className 和 style 属性自定义排版组件样式。

```tsx
import React from 'react';
import Typography from './index';

const App: React.FC = () => {
  return (
    <div>
      <Typography.Title 
        level={1} 
        style={{
          color: '#1890ff',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        自定义样式标题
      </Typography.Title>
      <Typography.Paragraph 
        style={{
          lineHeight: '1.8',
          color: '#666',
          fontSize: '16px',
        }}
      >
        这是一段带有自定义样式的段落，设置了行高、颜色和字体大小。
      </Typography.Paragraph>
      <Typography.Text 
        style={{
          fontSize: '14px',
          fontWeight: '500',
          color: '#52c41a',
        }}
      >
        自定义样式文本
      </Typography.Text>
    </div>
  );
};

export default App;
```

## 组合使用

排版组件的组合使用。

```tsx
import React from 'react';
import Typography from './index';

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <Typography.Title level={2}>文章标题</Typography.Title>
      <Typography.Paragraph>
        这是文章的第一段内容，介绍了文章的主题和背景。
        <Typography.Text type="primary">主要信息</Typography.Text> 会被突出显示，
        <Typography.Text type="warning">警告信息</Typography.Text> 会以黄色显示，
        <Typography.Text type="error">错误信息</Typography.Text> 会以红色显示。
      </Typography.Paragraph>
      <Typography.Paragraph>
        这是文章的第二段内容，包含了更多的详细信息。
        可以使用 <Typography.Text code>code</Typography.Text> 标签来显示代码，
        也可以使用 <Typography.Text strong>加粗</Typography.Text> 来强调重要内容。
      </Typography.Paragraph>
      <Typography.Title level={3}>章节标题</Typography.Title>
      <Typography.Paragraph>
        这是章节的内容，详细说明了某个具体的主题。
        当内容过多时，可以使用 <Typography.Text underline>省略</Typography.Text> 来隐藏部分内容。
      </Typography.Paragraph>
    </div>
  );
};

export default App;
```

## API

### Typography.Title

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| level | 1 \| 2 \| 3 \| 4 \| 5 \| 6 | 1 | 标题级别 |
| strong | boolean | false | 是否加粗 |
| className | string | - | 自定义类名 |
| style | React.CSSProperties | - | 自定义样式 |
| children | React.ReactNode | - | 标题内容 |

### Typography.Paragraph

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| ellipsis | boolean | false | 是否显示省略号 |
| rows | number | - | 显示的行数 |
| className | string | - | 自定义类名 |
| style | React.CSSProperties | - | 自定义样式 |
| children | React.ReactNode | - | 段落内容 |

### Typography.Text

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' | 'secondary' | 文本类型 |
| strong | boolean | false | 是否加粗 |
| italic | boolean | false | 是否斜体 |
| underline | boolean | false | 是否下划线 |
| delete | boolean | false | 是否删除线 |
| code | boolean | false | 是否代码样式 |
| className | string | - | 自定义类名 |
| style | React.CSSProperties | - | 自定义样式 |
| children | React.ReactNode | - | 文本内容 |