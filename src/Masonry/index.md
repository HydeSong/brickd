# Masonry 瀑布流

瀑布流组件用于实现不规则高度的网格布局，支持自定义列数和间距。

## 代码演示

### 基本用法

```tsx
import Masonry from './index';
import Image from '../Image';

function MasonryBasicDemo() {
  const images = [
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9",
      height: 300
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3",
      height: 400
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square",
      height: 350
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20beach%20with%20ocean&image_size=landscape_4_3",
      height: 280
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20mountain%20peak%20with%20snow&image_size=portrait_16_9",
      height: 420
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20waterfall%20in%20forest&image_size=square",
      height: 320
    }
  ];

  return (
    <Masonry>
      {images.map((image, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <Image 
            src={image.src} 
            width="100%" 
            height={image.height} 
            style={{ borderRadius: '8px' }}
          />
        </div>
      ))}
    </Masonry>
  );
}

export default MasonryBasicDemo;
```

### 自定义列数

通过 `columns` 属性设置瀑布流的列数。

```tsx
import Masonry from './index';
import Image from '../Image';

function MasonryColumnsDemo() {
  const images = [
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9",
      height: 300
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3",
      height: 400
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square",
      height: 350
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20beach%20with%20ocean&image_size=landscape_4_3",
      height: 280
    }
  ];

  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <div>
        <h4>2列布局</h4>
        <Masonry columns={2}>
          {images.map((image, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <Image 
                src={image.src} 
                width="100%" 
                height={image.height} 
                style={{ borderRadius: '8px' }}
              />
            </div>
          ))}
        </Masonry>
      </div>
      <div>
        <h4>4列布局</h4>
        <Masonry columns={4}>
          {images.map((image, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <Image 
                src={image.src} 
                width="100%" 
                height={image.height} 
                style={{ borderRadius: '8px' }}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default MasonryColumnsDemo;
```

### 自定义间距

通过 `gap` 属性设置瀑布流的间距。

```tsx
import Masonry from './index';
import Image from '../Image';

function MasonryGapDemo() {
  const images = [
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9",
      height: 300
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3",
      height: 400
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square",
      height: 350
    }
  ];

  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <div>
        <h4>小间距</h4>
        <Masonry columns={3} gap={8}>
          {images.map((image, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              <Image 
                src={image.src} 
                width="100%" 
                height={image.height} 
                style={{ borderRadius: '8px' }}
              />
            </div>
          ))}
        </Masonry>
      </div>
      <div>
        <h4>大间距</h4>
        <Masonry columns={3} gap={24}>
          {images.map((image, index) => (
            <div key={index} style={{ marginBottom: '24px' }}>
              <Image 
                src={image.src} 
                width="100%" 
                height={image.height} 
                style={{ borderRadius: '8px' }}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default MasonryGapDemo;
```

### 混合内容

瀑布流组件可以包含混合内容，不仅仅是图片。

```tsx
import Masonry from './index';
import Image from '../Image';
import Card from '../Card';

function MasonryMixedContentDemo() {
  const images = [
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9",
      height: 300
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3",
      height: 400
    }
  ];

  return (
    <Masonry columns={3} gap={16}>
      <div style={{ marginBottom: '16px' }}>
        <Image 
          src={images[0].src} 
          width="100%" 
          height={images[0].height} 
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Card style={{ height: '200px' }}>
          <Card.Header>卡片标题</Card.Header>
          <Card.Body>
            <p>这是一张卡片内容，用于展示瀑布流中的混合内容。</p>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Image 
          src={images[1].src} 
          width="100%" 
          height={images[1].height} 
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Card style={{ height: '250px' }}>
          <Card.Header>卡片标题</Card.Header>
          <Card.Body>
            <p>这是另一张卡片内容，高度与第一张不同，展示瀑布流的不规则布局效果。</p>
            <p>多行文本内容，增加卡片高度。</p>
            <p>继续添加文本内容。</p>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ 
          background: '#f0f2f5', 
          padding: '24px', 
          borderRadius: '8px', 
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p>这是一个普通的div元素，用于展示瀑布流中的混合内容。</p>
        </div>
      </div>
    </Masonry>
  );
}

export default MasonryMixedContentDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义瀑布流的样式。

```tsx
import Masonry from './index';
import Image from '../Image';

function MasonryCustomStyleDemo() {
  const images = [
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9",
      height: 300
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3",
      height: 400
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square",
      height: 350
    }
  ];

  return (
    <Masonry 
      columns={3} 
      gap={16}
      style={{ 
        padding: '24px', 
        background: '#f9f9f9', 
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      {images.map((image, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <Image 
            src={image.src} 
            width="100%" 
            height={image.height} 
            style={{ 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      ))}
    </Masonry>
  );
}

export default MasonryCustomStyleDemo;
```

## API

### MasonryProps

| 属性      | 说明             | 类型                       | 默认值   |
| --------- | ---------------- | -------------------------- | -------- |
| columns   | 列数             | `number`                   | `3`      |
| gap       | 间距（像素）     | `number`                   | `16`     |
| className | 自定义类名       | `string`                   | `''`     |
| style     | 自定义样式       | `React.CSSProperties`      | `{}`     |
| children  | 子组件           | `React.ReactNode`          | -        |