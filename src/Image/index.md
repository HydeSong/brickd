# Image 图片

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
import Image from 'brickd';
```

### 基本用法

```jsx
import React from 'react';
import Image from 'brickd';

const App = () => {
  return (
    <Image 
      src="https://via.placeholder.com/300x200"
      alt="示例图片"
      width={300}
      height={200}
    />
  );
};

export default App;
```

### 自定义图片填充方式

```jsx
import React from 'react';
import Image from 'brickd';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Image 
        src="https://via.placeholder.com/300x200"
        alt="fill"
        width={150}
        height={150}
        fit="fill"
      />
      <Image 
        src="https://via.placeholder.com/300x200"
        alt="contain"
        width={150}
        height={150}
        fit="contain"
      />
      <Image 
        src="https://via.placeholder.com/300x200"
        alt="cover"
        width={150}
        height={150}
        fit="cover"
      />
      <Image 
        src="https://via.placeholder.com/300x200"
        alt="none"
        width={150}
        height={150}
        fit="none"
      />
    </div>
  );
};

export default App;
```

### 懒加载

```jsx
import React from 'react';
import Image from 'brickd';

const App = () => {
  return (
    <Image 
      src="https://via.placeholder.com/800x600"
      alt="懒加载图片"
      width={400}
      height={300}
      lazy={true}
    />
  );
};

export default App;
```

### 占位符

```jsx
import React from 'react';
import Image from 'brickd';

const App = () => {
  const placeholder = (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      backgroundColor: '#f0f0f0', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontSize: '14px',
      color: '#999'
    }}>
      加载中...
    </div>
  );

  return (
    <Image 
      src="https://via.placeholder.com/400x300"
      alt="带占位符的图片"
      width={400}
      height={300}
      placeholder={placeholder}
    />
  );
};

export default App;
```

### 错误 fallback

```jsx
import React from 'react';
import Image from 'brickd';

const App = () => {
  const fallback = (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      backgroundColor: '#f5f5f5', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontSize: '14px',
      color: '#999'
    }}>
      图片加载失败
    </div>
  );

  return (
    <Image 
      src="invalid-url"
      alt="错误图片"
      width={400}
      height={300}
      fallback={fallback}
    />
  );
};

export default App;
```

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片地址 | string | - |
| alt | 图片替代文本 | string | '' |
| width | 图片宽度 | number \| string | - |
| height | 图片高度 | number \| string | - |
| fit | 图片填充方式 | 'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down' | 'fill' |
| lazy | 是否懒加载 | boolean | false |
| placeholder | 加载占位符 | React.ReactNode | - |
| fallback | 错误占位符 | React.ReactNode | 默认错误图标 |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |