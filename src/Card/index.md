# Card 卡片

卡片组件，用于包裹和展示内容，支持头部、主体和底部结构，以及各种样式定制。

## 代码演示

### 基础用法

最简单的卡片用法，包含标题和内容。

```tsx
import Card from './index';

function CardBasicDemo() {
  return (
    <div style={{ width: '400px' }}>
      <Card title="卡片标题">
        <p>卡片内容区域，可以放置任意内容。</p>
        <p>这是第二行内容。</p>
      </Card>
    </div>
  );
}

export default CardBasicDemo;
```

### 带额外信息

通过 `extra` 属性在卡片标题右侧添加额外信息。

```tsx
import Card from './index';
import Button from '../Button';

function CardWithExtraDemo() {
  return (
    <div style={{ width: '400px' }}>
      <Card
        title="卡片标题"
        extra={<Button size="small">操作</Button>}
      >
        <p>卡片内容区域，可以放置任意内容。</p>
      </Card>
    </div>
  );
}

export default CardWithExtraDemo;
```

### 使用子组件

使用 `Card.Header`、`Card.Body` 和 `Card.Footer` 子组件构建更复杂的卡片结构。

```tsx
import Card from './index';
import Button from '../Button';
import Space from '../Space';

function CardWithSubcomponentsDemo() {
  return (
    <div style={{ width: '400px' }}>
      <Card>
        <Card.Header title="卡片标题" extra={<Button size="small">编辑</Button>} />
        <Card.Body>
          <p>卡片内容区域，可以放置任意内容。</p>
          <p>这是第二行内容。</p>
          <p>这是第三行内容。</p>
        </Card.Body>
        <Card.Footer>
          <Space>
            <Button>取消</Button>
            <Button type="primary">确定</Button>
          </Space>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CardWithSubcomponentsDemo;
```

### 无边框卡片

通过 `bordered={false}` 属性创建无边框卡片。

```tsx
import Card from './index';

function CardNoBorderDemo() {
  return (
    <div style={{ width: '400px' }}>
      <Card title="无边框卡片" bordered={false}>
        <p>卡片内容区域，可以放置任意内容。</p>
      </Card>
    </div>
  );
}

export default CardNoBorderDemo;
```

### 可悬浮卡片

通过 `hoverable` 属性创建鼠标悬浮时有效果的卡片。

```tsx
import Card from './index';

function CardHoverableDemo() {
  return (
    <div style={{ width: '400px' }}>
      <Card title="可悬浮卡片" hoverable>
        <p>鼠标悬浮时，卡片会有阴影效果。</p>
      </Card>
    </div>
  );
}

export default CardHoverableDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义卡片样式。

```tsx
import Card from './index';

function CardCustomStyleDemo() {
  return (
    <div style={{ width: '400px' }}>
      <Card
        title="自定义样式卡片"
        style={{
          borderRadius: '8px',
          boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #f0f0f0'
        }}
      >
        <p>卡片内容区域，可以放置任意内容。</p>
      </Card>
    </div>
  );
}

export default CardCustomStyleDemo;
```

## API

### Card

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | `React.ReactNode` | - |
| extra | 卡片标题右侧的额外信息 | `React.ReactNode` | - |
| bordered | 是否显示边框 | `boolean` | `true` |
| hoverable | 是否可悬浮 | `boolean` | `false` |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |
| children | 子元素 | `React.ReactNode` | - |

### Card.Header

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 头部标题 | `React.ReactNode` | - |
| extra | 头部右侧的额外信息 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |

### Card.Body

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |
| children | 子元素 | `React.ReactNode` | - |

### Card.Footer

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | `''` |
| style | 自定义样式 | `React.CSSProperties` | `{}` |
| children | 子元素 | `React.ReactNode` | - |
