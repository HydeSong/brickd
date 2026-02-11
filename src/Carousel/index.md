# Carousel 走马灯

### 导入组件

```javascript
import Carousel from 'brickd';
```

### 基本用法

```jsx
import React from 'react';
import Carousel from 'brickd';

const App = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div style={{ width: '100%', height: '300px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Slide 1
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: '100%', height: '300px', backgroundColor: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Slide 2
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: '100%', height: '300px', backgroundColor: '#d9d9d9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Slide 3
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default App;
```

### 自定义自动播放

```jsx
import React from 'react';
import Carousel from 'brickd';

const App = () => {
  return (
    <Carousel autoplay={true} autoplaySpeed={5000}>
      <Carousel.Item>
        <div style={{ width: '100%', height: '300px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Slide 1
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: '100%', height: '300px', backgroundColor: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Slide 2
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: '100%', height: '300px', backgroundColor: '#d9d9d9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Slide 3
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default App;
```

### 手动控制

```jsx
import React, { useState } from 'react';
import Carousel from 'brickd';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Carousel activeIndex={activeIndex} onChange={setActiveIndex}>
        <Carousel.Item>
          <div style={{ width: '100%', height: '300px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Slide 1
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '100%', height: '300px', backgroundColor: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Slide 2
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '100%', height: '300px', backgroundColor: '#d9d9d9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Slide 3
          </div>
        </Carousel.Item>
      </Carousel>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setActiveIndex(0)}>Slide 1</button>
        <button onClick={() => setActiveIndex(1)}>Slide 2</button>
        <button onClick={() => setActiveIndex(2)}>Slide 3</button>
      </div>
    </div>
  );
};

export default App;
```

### API

#### Carousel

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否自动播放 | boolean | true |
| autoplaySpeed | 自动播放速度（毫秒） | number | 3000 |
| defaultActiveIndex | 默认激活的幻灯片索引 | number | 0 |
| activeIndex | 当前激活的幻灯片索引（受控） | number | - |
| onChange | 幻灯片切换时的回调函数 | (current: number) => void | - |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |
| children | 子元素，应为 Carousel.Item | React.ReactNode | - |

#### Carousel.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | string | '' |
| style | 自定义样式 | React.CSSProperties | {} |
| children | 子元素 | React.ReactNode | - |