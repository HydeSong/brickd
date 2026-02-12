# Button 按钮

按钮用于触发一个操作，如提交表单、打开对话框等。

## 代码演示

### 按钮类型

按钮支持五种类型：`primary`、`default`、`dashed`、`text` 和 `link`。

```tsx
import Button from './index';

function ButtonTypeDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button type="primary">主要按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="dashed">虚线按钮</Button>
      <Button type="text">文本按钮</Button>
      <Button type="link">链接按钮</Button>
    </div>
  );
}

export default ButtonTypeDemo;
```

### 按钮尺寸

按钮支持三种尺寸：`small`、`default` 和 `large`。

```tsx
import Button from './index';

function ButtonSizeDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="small">小按钮</Button>
      <Button size="default">默认按钮</Button>
      <Button size="large">大按钮</Button>
    </div>
  );
}

export default ButtonSizeDemo;
```

### 禁用状态

通过 `disabled` 属性设置按钮为禁用状态。

```tsx
import Button from './index';

function ButtonDisabledDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button type="primary" disabled>
        禁用的主要按钮
      </Button>
      <Button disabled>禁用的默认按钮</Button>
    </div>
  );
}

export default ButtonDisabledDemo;
```

### 点击事件

通过 `onClick` 属性设置按钮的点击事件处理函数。

```tsx
import Button from './index';

function ButtonClickDemo() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Button type="primary" onClick={handleClick}>
      点击我
    </Button>
  );
}

export default ButtonClickDemo;
```

## API

### ButtonProps

| 属性      | 说明             | 类型                                                     | 默认值      |
| --------- | ---------------- | -------------------------------------------------------- | ----------- |
| type      | 按钮类型         | `'primary' \| 'default' \| 'dashed' \| 'text' \| 'link'` | `'default'` |
| size      | 按钮尺寸         | `'small' \| 'default' \| 'large'`                        | `'default'` |
| disabled  | 是否禁用         | `boolean`                                                | `false`     |
| children  | 按钮内容         | `React.ReactNode`                                        | -           |
| onClick   | 点击事件处理函数 | `() => void`                                             | -           |
| className | 自定义类名       | `string`                                                 | `''`        |
| style     | 自定义样式       | `React.CSSProperties`                                    | `{}`        |
| htmlType  | 按钮的 HTML 类型 | `'button' \| 'submit' \| 'reset'`                        | `'button'`  |
