# Badge 徽章

徽章组件，用于显示通知、消息数量等标记，支持数字、红点等多种形式。

## 代码演示

### 基础用法

最简单的用法，显示数字徽章。

```tsx
import Badge from './index';
import Button from '../Button';

function BadgeBasicDemo() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Badge count={5}>
        <Button type="default">消息</Button>
      </Badge>
      <Badge count={10}>
        <Button type="default">通知</Button>
      </Badge>
    </div>
  );
}

export default BadgeBasicDemo;
```

### 红点模式

通过 `dot` 属性设置为红点模式，不显示具体数字。

```tsx
import Badge from './index';
import Button from '../Button';

function BadgeDotDemo() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Badge dot>
        <Button type="default">消息</Button>
      </Badge>
      <Badge dot>
        <Button type="default">通知</Button>
      </Badge>
    </div>
  );
}

export default BadgeDotDemo;
```

### 自定义最大数

通过 `maxCount` 属性设置最大显示数字，超过该数字会显示为 `maxCount+`。

```tsx
import Badge from './index';
import Button from '../Button';

function BadgeMaxCountDemo() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Badge count={99} maxCount={99}>
        <Button type="default">消息</Button>
      </Badge>
      <Badge count={100} maxCount={99}>
        <Button type="default">通知</Button>
      </Badge>
      <Badge count={999} maxCount={999}>
        <Button type="default">提醒</Button>
      </Badge>
    </div>
  );
}

export default BadgeMaxCountDemo;
```

### 显示零

通过 `showZero` 属性设置为显示零，默认情况下，当 `count` 为 0 时不会显示徽章。

```tsx
import Badge from './index';
import Button from '../Button';

function BadgeShowZeroDemo() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Badge count={0}>
        <Button type="default">默认</Button>
      </Badge>
      <Badge count={0} showZero>
        <Button type="default">显示零</Button>
      </Badge>
    </div>
  );
}

export default BadgeShowZeroDemo;
```

### 自定义颜色

通过 `color` 属性自定义徽章颜色。

```tsx
import Badge from './index';
import Button from '../Button';

function BadgeCustomColorDemo() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Badge count={5} color="#1890ff">
        <Button type="default">蓝色</Button>
      </Badge>
      <Badge count={10} color="#52c41a">
        <Button type="default">绿色</Button>
      </Badge>
      <Badge count={15} color="#faad14">
        <Button type="default">黄色</Button>
      </Badge>
      <Badge count={20} color="#f5222d">
        <Button type="default">红色</Button>
      </Badge>
    </div>
  );
}

export default BadgeCustomColorDemo;
```

### 独立使用

徽章可以独立使用，不包裹子元素。

```tsx
import Badge from './index';

function BadgeStandaloneDemo() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Badge count={5} />
      <Badge count={10} color="#52c41a" />
      <Badge dot />
    </div>
  );
}

export default BadgeStandaloneDemo;
```

## API

### BadgeProps

| 属性      | 说明           | 类型                  | 默认值  |
| --------- | -------------- | --------------------- | ------- |
| count     | 显示的数字     | `number`              | -       |
| dot       | 是否显示为红点 | `boolean`             | `false` |
| maxCount  | 最大显示数字   | `number`              | `99`    |
| showZero  | 是否显示零     | `boolean`             | `false` |
| color     | 自定义颜色     | `string`              | -       |
| className | 自定义类名     | `string`              | `''`    |
| style     | 自定义样式     | `React.CSSProperties` | `{}`    |
| children  | 子元素         | `React.ReactNode`     | -       |
