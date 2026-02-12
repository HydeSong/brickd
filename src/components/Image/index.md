# Image 图片

图片组件用于显示图片，支持自定义大小、适应模式、懒加载、占位符和错误回退等功能。

## 代码演示

### 基本用法

通过 `src` 属性设置图片源。

```tsx
import Image from './index';

function ImageBasicDemo() {
  return (
    <div>
      <Image
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square"
        width={300}
        height={300}
      />
    </div>
  );
}

export default ImageBasicDemo;
```

### 图片适应模式

通过 `fit` 属性设置图片适应模式，支持 `fill`、`contain`、`cover`、`none` 和 `scale-down`。

```tsx
import Image from './index';

function ImageFitDemo() {
  const imageSrc =
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square';

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}
    >
      <div>
        <p>fill</p>
        <Image src={imageSrc} width={200} height={150} fit="fill" />
      </div>
      <div>
        <p>contain</p>
        <Image src={imageSrc} width={200} height={150} fit="contain" />
      </div>
      <div>
        <p>cover</p>
        <Image src={imageSrc} width={200} height={150} fit="cover" />
      </div>
      <div>
        <p>none</p>
        <Image src={imageSrc} width={200} height={150} fit="none" />
      </div>
      <div>
        <p>scale-down</p>
        <Image src={imageSrc} width={200} height={150} fit="scale-down" />
      </div>
    </div>
  );
}

export default ImageFitDemo;
```

### 懒加载

通过 `lazy` 属性启用图片懒加载。

```tsx
import Image from './index';

function ImageLazyDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100vh' }}>
      <div>
        <p>滚动到此处加载图片</p>
        <Image
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square"
          width={300}
          height={300}
          lazy
        />
      </div>
      <div>
        <p>滚动到此处加载图片</p>
        <Image
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=square"
          width={300}
          height={300}
          lazy
        />
      </div>
    </div>
  );
}

export default ImageLazyDemo;
```

### 占位符

通过 `placeholder` 属性设置图片加载时的占位符。

```tsx
import Image from './index';
import Icon from '../Icon';

function ImagePlaceholderDemo() {
  return (
    <div>
      <Image
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square"
        width={300}
        height={300}
        placeholder={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              background: '#f0f0f0',
            }}
          >
            <Icon type="loading" spin size={32} />
          </div>
        }
      />
    </div>
  );
}

export default ImagePlaceholderDemo;
```

### 错误回退

通过 `fallback` 属性设置图片加载失败时的回退内容。

```tsx
import Image from './index';
import Icon from '../Icon';

function ImageFallbackDemo() {
  return (
    <div>
      <Image
        src="invalid-url"
        width={300}
        height={300}
        fallback={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              background: '#f0f0f0',
            }}
          >
            <Icon type="error" size={32} color="#ff4d4f" />
          </div>
        }
      />
    </div>
  );
}

export default ImageFallbackDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义图片样式。

```tsx
import Image from './index';

function ImageCustomDemo() {
  return (
    <div>
      <Image
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square"
        width={300}
        height={300}
        style={{
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          border: '2px solid #ddd',
        }}
      />
    </div>
  );
}

export default ImageCustomDemo;
```

## API

### ImageProps

| 属性        | 说明         | 类型                                                       | 默认值   |
| ----------- | ------------ | ---------------------------------------------------------- | -------- |
| src         | 图片源       | `string`                                                   | -        |
| alt         | 图片替代文本 | `string`                                                   | `''`     |
| width       | 图片宽度     | `number \| string`                                         | -        |
| height      | 图片高度     | `number \| string`                                         | -        |
| fit         | 图片适应模式 | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'fill'` |
| lazy        | 是否懒加载   | `boolean`                                                  | `false`  |
| placeholder | 加载占位符   | `React.ReactNode`                                          | -        |
| fallback    | 错误回退     | `React.ReactNode`                                          | -        |
| className   | 自定义类名   | `string`                                                   | `''`     |
| style       | 自定义样式   | `React.CSSProperties`                                      | `{}`     |
