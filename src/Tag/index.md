# Tag 标签

用于标记和分类的标签组件。

## 基本用法

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag>默认标签</Tag>
      <Tag color="red">红色标签</Tag>
      <Tag color="orange">橙色标签</Tag>
      <Tag color="green">绿色标签</Tag>
      <Tag color="blue">蓝色标签</Tag>
      <Tag color="purple">紫色标签</Tag>
    </div>
  );
};

export default App;
```

## 不同尺寸

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag size="small">小标签</Tag>
      <Tag size="default">默认标签</Tag>
      <Tag size="large">大标签</Tag>
    </div>
  );
};

export default App;
```

## 不同样式

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag variant="filled">填充样式</Tag>
      <Tag variant="outlined">轮廓样式</Tag>
      <Tag variant="light">浅色样式</Tag>
    </div>
  );
};

export default App;
```

## 可关闭标签

```tsx
import React, { useState } from 'react';
import Tag from './index';

const App: React.FC = () => {
  const [tags, setTags] = useState([
    { id: 1, name: '标签1' },
    { id: 2, name: '标签2' },
    { id: 3, name: '标签3' },
  ]);

  const handleClose = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return (
    <div>
      {tags.map(tag => (
        <Tag
          key={tag.id}
          closable
          onClose={() => handleClose(tag.id)}
        >
          {tag.name}
        </Tag>
      ))}
    </div>
  );
};

export default App;
```

## 禁用状态

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag disabled>禁用标签</Tag>
      <Tag disabled closable>禁用可关闭标签</Tag>
    </div>
  );
};

export default App;
```

## 带图标

```tsx
import React from 'react';
import Tag from './index';

const App: React.FC = () => {
  return (
    <div>
      <Tag icon={<span>✓</span>}>成功标签</Tag>
      <Tag icon={<span>!</span>} color="orange">警告标签</Tag>
      <Tag icon={<span>×</span>} color="red">错误标签</Tag>
    </div>
  );
};

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 标签内容 | React.ReactNode | - |
| color | 标签颜色 | string | - |
| icon | 标签图标 | React.ReactNode | - |
| closable | 是否可关闭 | boolean | false |
| onClose | 关闭回调 | () => void | - |
| disabled | 是否禁用 | boolean | false |
| size | 标签尺寸 | 'small' \| 'default' \| 'large' | 'default' |
| variant | 标签样式 | 'filled' \| 'outlined' \| 'light' | 'filled' |
| className | 自定义类名 | string | - |
| style | 自定义样式 | React.CSSProperties | - |

## 颜色选项

| 颜色 | 说明 |
| --- | --- |
| red | 红色 |
| orange | 橙色 |
| green | 绿色 |
| blue | 蓝色 |
| purple | 紫色 |