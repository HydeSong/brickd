# Icon 图标

图标组件用于显示各种图标，支持自定义大小、颜色、旋转等属性。

## 代码演示

### 基本用法

通过 `type` 属性设置图标类型。

```tsx
import Icon from './index';

function IconBasicDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon type="success" />
      <Icon type="error" />
      <Icon type="warning" />
      <Icon type="info" />
      <Icon type="search" />
    </div>
  );
}

export default IconBasicDemo;
```

### 图标大小

通过 `size` 属性设置图标大小，可以是预定义的 `small`、`middle`、`large`，也可以是数字。

```tsx
import Icon from './index';

function IconSizeDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon type="success" size="small" />
      <Icon type="success" size="middle" />
      <Icon type="success" size="large" />
      <Icon type="success" size={32} />
      <Icon type="success" size={48} />
    </div>
  );
}

export default IconSizeDemo;
```

### 图标颜色

通过 `color` 属性设置图标颜色。

```tsx
import Icon from './index';

function IconColorDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon type="success" color="#52c41a" />
      <Icon type="error" color="#ff4d4f" />
      <Icon type="warning" color="#faad14" />
      <Icon type="info" color="#1890ff" />
      <Icon type="search" color="#666" />
    </div>
  );
}

export default IconColorDemo;
```

### 图标旋转

通过 `rotate` 属性设置图标旋转角度。

```tsx
import Icon from './index';

function IconRotateDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon type="arrow-up" />
      <Icon type="arrow-up" rotate={45} />
      <Icon type="arrow-up" rotate={90} />
      <Icon type="arrow-up" rotate={135} />
      <Icon type="arrow-up" rotate={180} />
    </div>
  );
}

export default IconRotateDemo;
```

### 图标动画

通过 `spin` 属性设置图标是否旋转动画。

```tsx
import Icon from './index';

function IconSpinDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon type="loading" spin />
      <Icon type="loading" spin size="large" />
      <Icon type="loading" spin size={48} color="#1890ff" />
    </div>
  );
}

export default IconSpinDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义图标样式。

```tsx
import Icon from './index';

function IconCustomDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon
        type="success"
        style={{
          fontSize: '48px',
          color: '#52c41a',
          background: '#f0f9ff',
          padding: '16px',
          borderRadius: '50%',
        }}
      />
      <Icon
        type="error"
        style={{
          fontSize: '48px',
          color: '#ff4d4f',
          background: '#fff2f0',
          padding: '16px',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}

export default IconCustomDemo;
```

## API

### IconProps

| 属性      | 说明       | 类型                                       | 默认值     |
| --------- | ---------- | ------------------------------------------ | ---------- |
| type      | 图标类型   | `string`                                   | -          |
| size      | 图标大小   | `'small' \| 'middle' \| 'large' \| number` | `'middle'` |
| color     | 图标颜色   | `string`                                   | -          |
| rotate    | 旋转角度   | `number`                                   | -          |
| spin      | 是否旋转   | `boolean`                                  | `false`    |
| className | 自定义类名 | `string`                                   | `''`       |
| style     | 自定义样式 | `React.CSSProperties`                      | `{}`       |
