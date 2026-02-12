# Avatar 头像

头像组件，用于展示用户头像，支持图片、图标等多种形式。

## 代码演示

### 基础用法

最简单的用法，使用图片作为头像。

```tsx
import Avatar from './index';

function AvatarBasicDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20avatar%20of%20a%20person%20with%20short%20hair%20and%20glasses&image_size=square"
        alt="User Avatar"
      />
      <span>John Doe</span>
    </div>
  );
}

export default AvatarBasicDemo;
```

### 不同尺寸

通过 `size` 属性设置头像尺寸，支持 `small`、`default`、`large` 和自定义数值。

```tsx
import Avatar from './index';

function AvatarSizeDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar
        size="small"
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20avatar%20of%20a%20person&image_size=square"
      />
      <Avatar
        size="default"
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20avatar%20of%20a%20person&image_size=square"
      />
      <Avatar
        size="large"
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20avatar%20of%20a%20person&image_size=square"
      />
      <Avatar
        size={64}
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20avatar%20of%20a%20person&image_size=square"
      />
    </div>
  );
}

export default AvatarSizeDemo;
```

### 不同形状

通过 `shape` 属性设置头像形状，支持 `circle`（默认）和 `square`。

```tsx
import Avatar from './index';

function AvatarShapeDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar
        shape="circle"
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20avatar%20of%20a%20person&image_size=square"
      />
      <Avatar
        shape="square"
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20avatar%20of%20a%20person&image_size=square"
      />
    </div>
  );
}

export default AvatarShapeDemo;
```

### 图标头像

通过 `icon` 属性设置图标作为头像，当没有图片时使用。

```tsx
import Avatar from './index';

function AvatarIconDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar icon="👤" size="small" />
      <Avatar icon="👤" />
      <Avatar icon="👤" size="large" />
      <Avatar icon="👤" size={64} />
    </div>
  );
}

export default AvatarIconDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义头像样式。

```tsx
import Avatar from './index';

function AvatarCustomStyleDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20avatar%20of%20a%20person&image_size=square"
        style={{ border: '2px solid #1890ff', boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' }}
      />
      <Avatar
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20avatar%20of%20a%20person&image_size=square"
        style={{ border: '2px solid #52c41a', boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' }}
      />
    </div>
  );
}

export default AvatarCustomStyleDemo;
```

## API

### AvatarProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 头像尺寸 | `'small' \| 'default' \| 'large' \| number` | `'default'` |
| src | 头像图片地址 | `string` | - |
| alt | 头像图片替代文本 | `string` | `''` |
| icon | 头像图标，当没有图片时使用 | `React.ReactNode` | - |
| shape | 头像形状 | `'circle' \| 'square'` | `'circle'` |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |
