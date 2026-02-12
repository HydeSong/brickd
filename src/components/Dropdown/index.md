---
title: Dropdown
order: 1
---

# Dropdown 下拉菜单

用于展示下拉菜单，支持点击和悬停两种触发方式。

## 基本用法

```tsx
import React from 'react';
import Dropdown from '../Dropdown';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <Dropdown>
      <Button>下拉菜单</Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem onClick={() => console.log('选项1')}>
          选项1
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => console.log('选项2')}>
          选项2
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => console.log('选项3')}>
          选项3
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default App;
```

## 点击触发

```tsx
import React from 'react';
import Dropdown from '../Dropdown';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <Dropdown trigger="click">
      <Button>点击触发</Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem onClick={() => console.log('选项1')}>
          选项1
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => console.log('选项2')}>
          选项2
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => console.log('选项3')}>
          选项3
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default App;
```

## 悬停触发

```tsx
import React from 'react';
import Dropdown from '../Dropdown';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <Dropdown trigger="hover">
      <Button>悬停触发</Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem onClick={() => console.log('选项1')}>
          选项1
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => console.log('选项2')}>
          选项2
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => console.log('选项3')}>
          选项3
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default App;
```

## 带分隔线的菜单

```tsx
import React from 'react';
import Dropdown from '../Dropdown';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <Dropdown>
      <Button>带分隔线</Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem onClick={() => console.log('选项1')}>
          选项1
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => console.log('选项2')}>
          选项2
        </Dropdown.MenuItem>
        <Dropdown.MenuSeparator />
        <Dropdown.MenuItem onClick={() => console.log('选项3')}>
          选项3
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => console.log('选项4')}>
          选项4
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import Dropdown from '../Dropdown';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <Dropdown style={{ marginRight: 20 }}>
      <Button type="primary">自定义菜单样式</Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem
          style={{ color: '#1890ff' }}
          onClick={() => console.log('选项1')}
        >
          选项1
        </Dropdown.MenuItem>
        <Dropdown.MenuItem
          style={{ backgroundColor: '#f5f5f5' }}
          onClick={() => console.log('选项2')}
        >
          选项2
        </Dropdown.MenuItem>
        <Dropdown.MenuSeparator />
        <Dropdown.MenuItem
          style={{ fontWeight: 'bold' }}
          onClick={() => console.log('选项3')}
        >
          选项3
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default App;
```

## 嵌套下拉菜单

```tsx
import React from 'react';
import Dropdown from '../Dropdown';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <Dropdown>
      <Button>嵌套菜单</Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem onClick={() => console.log('选项1')}>
          选项1
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => console.log('选项2')}>
          选项2
        </Dropdown.MenuItem>
        <Dropdown.MenuItem>
          <Dropdown>
            <span>子菜单</span>
            <Dropdown.Menu>
              <Dropdown.MenuItem onClick={() => console.log('子选项1')}>
                子选项1
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => console.log('子选项2')}>
                子选项2
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default App;
```

## API

### Dropdown

| 属性      | 类型                  | 默认值    | 说明                                             |
| --------- | --------------------- | --------- | ------------------------------------------------ |
| trigger   | `'click' \| 'hover'`  | `'click'` | 触发方式                                         |
| className | `string`              | `''`      | 自定义类名                                       |
| style     | `React.CSSProperties` | `{}`      | 自定义样式                                       |
| children  | `React.ReactNode`     | -         | 子元素，第一个元素作为触发元素，其余作为菜单元素 |

### Dropdown.Menu

| 属性      | 类型              | 默认值 | 说明                                                       |
| --------- | ----------------- | ------ | ---------------------------------------------------------- |
| className | `string`          | `''`   | 自定义类名                                                 |
| children  | `React.ReactNode` | -      | 子元素，通常是 Dropdown.MenuItem 或 Dropdown.MenuSeparator |

### Dropdown.MenuItem

| 属性      | 类型              | 默认值 | 说明       |
| --------- | ----------------- | ------ | ---------- |
| onClick   | `() => void`      | -      | 点击回调   |
| className | `string`          | `''`   | 自定义类名 |
| children  | `React.ReactNode` | -      | 子元素     |

### Dropdown.MenuSeparator

| 属性      | 类型     | 默认值 | 说明       |
| --------- | -------- | ------ | ---------- |
| className | `string` | `''`   | 自定义类名 |
