# Carousel 轮播

轮播组件，用于展示幻灯片，支持自动播放、手动切换等功能。

## 代码演示

### 基础用法

最简单的轮播用法，使用 `Carousel.Item` 子组件。

```tsx
import Carousel from './index';

function CarouselBasicDemo() {
  return (
    <div style={{ width: '600px', height: '300px' }}>
      <Carousel>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3>幻灯片 1</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3>幻灯片 2</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#d0d0d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3>幻灯片 3</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBasicDemo;
```

### 禁用自动播放

通过 `autoplay={false}` 属性禁用自动播放。

```tsx
import Carousel from './index';

function CarouselNoAutoplayDemo() {
  return (
    <div style={{ width: '600px', height: '300px' }}>
      <Carousel autoplay={false}>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3>幻灯片 1</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3>幻灯片 2</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#d0d0d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3>幻灯片 3</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselNoAutoplayDemo;
```

### 自定义自动播放速度

通过 `autoplaySpeed` 属性自定义自动播放的速度，单位为毫秒。

```tsx
import Carousel from './index';

function CarouselCustomSpeedDemo() {
  return (
    <div style={{ width: '600px', height: '300px' }}>
      <Carousel autoplaySpeed={5000}>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3>幻灯片 1</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3>幻灯片 2</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#d0d0d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3>幻灯片 3</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselCustomSpeedDemo;
```

### 受控模式

通过 `activeIndex` 和 `onChange` 属性实现受控模式。

```tsx
import Carousel from './index';
import { useState } from 'react';
import Button from '../Button';
import Space from '../Space';

function CarouselControlledDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div style={{ width: '600px', height: '300px', marginBottom: '16px' }}>
        <Carousel
          activeIndex={currentIndex}
          onChange={(index) => setCurrentIndex(index)}
          autoplay={false}
        >
          <Carousel.Item>
            <div style={{ height: '300px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3>幻灯片 1</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ height: '300px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3>幻灯片 2</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ height: '300px', background: '#d0d0d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3>幻灯片 3</h3>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Space>
          <Button onClick={() => setCurrentIndex(0)}>幻灯片 1</Button>
          <Button onClick={() => setCurrentIndex(1)}>幻灯片 2</Button>
          <Button onClick={() => setCurrentIndex(2)}>幻灯片 3</Button>
        </Space>
        <p style={{ marginTop: '16px' }}>当前幻灯片：{currentIndex + 1}</p>
      </div>
    </div>
  );
}

export default CarouselControlledDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义轮播样式。

```tsx
import Carousel from './index';

function CarouselCustomStyleDemo() {
  return (
    <div style={{ width: '600px', height: '300px' }}>
      <Carousel
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}
      >
        <Carousel.Item>
          <div style={{ height: '300px', background: '#1890ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <h3>幻灯片 1</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#52c41a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <h3>幻灯片 2</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: '300px', background: '#faad14', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <h3>幻灯片 3</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselCustomStyleDemo;
```

## API

### Carousel

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否自动播放 | `boolean` | `true` |
| autoplaySpeed | 自动播放速度，单位为毫秒 | `number` | `3000` |
| defaultActiveIndex | 默认激活的幻灯片索引 | `number` | `0` |
| activeIndex | 激活的幻灯片索引（受控模式） | `number` | - |
| onChange | 幻灯片切换时的回调函数 | `(current: number) => void` | - |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |
| children | 子元素，通常是 Carousel.Item 组件 | `React.ReactNode` | - |

### Carousel.Item

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |
| children | 子元素 | `React.ReactNode` | - |
