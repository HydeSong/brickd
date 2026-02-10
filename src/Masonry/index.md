---
title: Masonry 瀑布流
order: 9
---

# Masonry 瀑布流

用于创建瀑布流布局，适用于展示不规则高度的内容。

## 基本用法

```jsx
import { Masonry } from 'brickd';

function App() {
  return (
    <Masonry>
      <div style={{ height: 200, backgroundColor: '#f0f0f0', padding: 16 }}>Item 1 (200px)</div>
      <div style={{ height: 150, backgroundColor: '#e0e0e0', padding: 16 }}>Item 2 (150px)</div>
      <div style={{ height: 250, backgroundColor: '#d0d0d0', padding: 16 }}>Item 3 (250px)</div>
      <div style={{ height: 180, backgroundColor: '#c0c0c0', padding: 16 }}>Item 4 (180px)</div>
      <div style={{ height: 220, backgroundColor: '#b0b0b0', padding: 16 }}>Item 5 (220px)</div>
      <div style={{ height: 160, backgroundColor: '#a0a0a0', padding: 16 }}>Item 6 (160px)</div>
    </Masonry>
  );
}

export default App;
```

## 自定义列数和间距

```jsx
import { Masonry } from 'brickd';

function App() {
  return (
    <Masonry columns={4} gap={24}>
      <div style={{ height: 200, backgroundColor: '#f0f0f0', padding: 16 }}>Item 1</div>
      <div style={{ height: 150, backgroundColor: '#e0e0e0', padding: 16 }}>Item 2</div>
      <div style={{ height: 250, backgroundColor: '#d0d0d0', padding: 16 }}>Item 3</div>
      <div style={{ height: 180, backgroundColor: '#c0c0c0', padding: 16 }}>Item 4</div>
      <div style={{ height: 220, backgroundColor: '#b0b0b0', padding: 16 }}>Item 5</div>
      <div style={{ height: 160, backgroundColor: '#a0a0a0', padding: 16 }}>Item 6</div>
      <div style={{ height: 190, backgroundColor: '#909090', padding: 16 }}>Item 7</div>
      <div style={{ height: 210, backgroundColor: '#808080', padding: 16 }}>Item 8</div>
    </Masonry>
  );
}

export default App;
```

## 图片瀑布流

```jsx
import { Masonry } from 'brickd';

function App() {
  // 模拟不同高度的图片
  const images = [
    { src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20photo%20with%20mountains%20and%20lake&image_size=portrait_4_3', height: 300 },
    { src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20sunset%20at%20beach&image_size=portrait_4_3', height: 250 },
    { src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20city%20skyline%20at%20night&image_size=portrait_4_3', height: 320 },
    { src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=peaceful%20forest%20path%20with%20sunlight%20filtering%20through%20trees&image_size=portrait_4_3', height: 280 },
    { src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mountain%20peak%20with%20snow%20and%20clouds&image_size=portrait_4_3', height: 350 },
    { src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coastal%20cliffs%20with%20ocean%20view&image_size=portrait_4_3', height: 260 },
  ];

  return (
    <Masonry columns={3} gap={12}>
      {images.map((image, index) => (
        <div key={index} style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <img 
            src={image.src} 
            alt={`Image ${index + 1}`} 
            style={{ width: '100%', height: image.height, objectFit: 'cover' }}
          />
        </div>
      ))}
    </Masonry>
  );
}

export default App;
```

## 响应式布局

```jsx
import { Masonry } from 'brickd';

function App() {
  return (
    <Masonry columns={4}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div 
          key={index} 
          style={{
            height: Math.floor(Math.random() * 150) + 100,
            backgroundColor: `hsl(${index * 30}, 70%, 80%)`,
            padding: 16,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Item {index + 1}
        </div>
      ))}
    </Masonry>
  );
}

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 列数 | `number` | `3` |
| gap | 间距（像素） | `number` | `16` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |
