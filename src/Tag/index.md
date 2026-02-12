---
title: Tag
nav: components
order: 50
---

# Tag

标签组件，用于标记和分类内容。

## 基本用法

最简单的标签使用方式。

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag>Default Tag</Tag>
    </div>
  );
};

export default App;
```

## 不同尺寸

标签支持三种尺寸：small、default 和 large。

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag size="small">Small Tag</Tag>
      <Tag size="default">Default Tag</Tag>
      <Tag size="large">Large Tag</Tag>
    </div>
  );
};

export default App;
```

## 不同类型

标签支持三种类型：filled、outlined 和 light。

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag variant="filled">Filled Tag</Tag>
      <Tag variant="outlined">Outlined Tag</Tag>
      <Tag variant="light">Light Tag</Tag>
    </div>
  );
};

export default App;
```

## 不同颜色

标签支持多种颜色。

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag color="primary">Primary Tag</Tag>
      <Tag color="success">Success Tag</Tag>
      <Tag color="warning">Warning Tag</Tag>
      <Tag color="error">Error Tag</Tag>
      <Tag color="info">Info Tag</Tag>
    </div>
  );
};

export default App;
```

## 可关闭标签

带有关闭按钮的标签。

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  const [tags, setTags] = React.useState([
    { id: 1, name: 'Tag 1' },
    { id: 2, name: 'Tag 2' },
    { id: 3, name: 'Tag 3' },
  ]);

  const handleClose = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return (
    <div>
      {tags.map(tag => (
        <Tag key={tag.id} closable onClose={() => handleClose(tag.id)}>
          {tag.name}
        </Tag>
      ))}
    </div>
  );
};

export default App;
```

## 带图标标签

带有图标的标签。

```tsx
import React from 'react';
import Tag from './index';
import Icon from '../Icon';

const App: React.FC = () => {
  return (
    <div>
      <Tag icon={<Icon name="check" size={12} />}>Success Tag</Tag>
      <Tag icon={<Icon name="warning" size={12} />}>Warning Tag</Tag>
      <Tag icon={<Icon name="error" size={12} />}>Error Tag</Tag>
      <Tag icon={<Icon name="info" size={12} />}>Info Tag</Tag>
    </div>
  );
};

export default App;
```

## 禁用状态

禁用的标签。

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag disabled>Disabled Tag</Tag>
      <Tag disabled closable>Disabled Closable Tag</Tag>
    </div>
  );
};

export default App;
```

## 受控模式

通过状态控制标签的显示和隐藏。

```tsx
import React, { useState } from 'react';
import Tag from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible && (
        <Tag closable onClose={() => setVisible(false)}>
          Controlled Tag
        </Tag>
      )}
      <Button onClick={() => setVisible(true)} disabled={visible}>
        Show Tag
      </Button>
    </div>
  );
};

export default App;
```

## 自定义样式

通过 className 和 style 属性自定义标签样式。

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag
        style={{
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '0 16px',
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
        }}
      >
        Custom Styled Tag
      </Tag>
      <Tag
        className="custom-tag"
        style={{
          border: '2px dashed #1890ff',
          borderRadius: '4px',
          color: '#1890ff',
          background: 'transparent',
        }}
      >
        Dashed Tag
      </Tag>
    </div>
  );
};

export default App;
```

## API

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | React.ReactNode | - | 标签内容 |
| color | string | - | 标签颜色，可选值：primary、success、warning、error、info 或自定义颜色值 |
| icon | React.ReactNode | - | 标签图标 |
| closable | boolean | false | 是否可关闭 |
| onClose | () => void | - | 关闭标签时的回调函数 |
| disabled | boolean | false | 是否禁用 |
| size | 'small' \| 'default' \| 'large' | 'default' | 标签尺寸 |
| variant | 'filled' \| 'outlined' \| 'light' | 'filled' | 标签类型 |
| className | string | - | 自定义类名 |
| style | React.CSSProperties | - | 自定义样式 |