# Anchor 锚点

锚点组件，用于页面内导航，通过点击锚点可以快速跳转到页面的指定位置。

## 代码演示

### 基础用法

最简单的锚点用法，点击锚点跳转到页面指定位置。

```tsx
import Anchor from './index';

function AnchorBasicDemo() {
  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div style={{ width: '200px', position: 'sticky', top: '20px' }}>
        <Anchor>
          <Anchor.Link href="#section1" title="第一部分" />
          <Anchor.Link href="#section2" title="第二部分" />
          <Anchor.Link href="#section3" title="第三部分" />
        </Anchor>
      </div>
      <div style={{ flex: 1 }}>
        <section id="section1" style={{ height: '400px', padding: '20px', background: '#f5f5f5', marginBottom: '40px' }}>
          <h2>第一部分</h2>
          <p>这里是第一部分的内容...</p>
        </section>
        <section id="section2" style={{ height: '400px', padding: '20px', background: '#f5f5f5', marginBottom: '40px' }}>
          <h2>第二部分</h2>
          <p>这里是第二部分的内容...</p>
        </section>
        <section id="section3" style={{ height: '400px', padding: '20px', background: '#f5f5f5', marginBottom: '40px' }}>
          <h2>第三部分</h2>
          <p>这里是第三部分的内容...</p>
        </section>
      </div>
    </div>
  );
}

export default AnchorBasicDemo;
```

### 嵌套锚点

Anchor 支持嵌套的锚点链接，用于多级导航。

```tsx
import Anchor from './index';

function AnchorNestedDemo() {
  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div style={{ width: '200px', position: 'sticky', top: '20px' }}>
        <Anchor>
          <Anchor.Link href="#chapter1" title="第一章">
            <Anchor.Link href="#section1-1" title="第一节" />
            <Anchor.Link href="#section1-2" title="第二节" />
          </Anchor.Link>
          <Anchor.Link href="#chapter2" title="第二章">
            <Anchor.Link href="#section2-1" title="第一节" />
            <Anchor.Link href="#section2-2" title="第二节" />
          </Anchor.Link>
        </Anchor>
      </div>
      <div style={{ flex: 1 }}>
        <section id="chapter1" style={{ padding: '20px', marginBottom: '40px' }}>
          <h2>第一章</h2>
          <section id="section1-1" style={{ height: '300px', padding: '20px', background: '#f5f5f5', marginBottom: '40px' }}>
            <h3>第一节</h3>
            <p>这里是第一章第一节的内容...</p>
          </section>
          <section id="section1-2" style={{ height: '300px', padding: '20px', background: '#f5f5f5', marginBottom: '40px' }}>
            <h3>第二节</h3>
            <p>这里是第一章第二节的内容...</p>
          </section>
        </section>
        <section id="chapter2" style={{ padding: '20px', marginBottom: '40px' }}>
          <h2>第二章</h2>
          <section id="section2-1" style={{ height: '300px', padding: '20px', background: '#f5f5f5', marginBottom: '40px' }}>
            <h3>第一节</h3>
            <p>这里是第二章第一节的内容...</p>
          </section>
          <section id="section2-2" style={{ height: '300px', padding: '20px', background: '#f5f5f5', marginBottom: '40px' }}>
            <h3>第二节</h3>
            <p>这里是第二章第二节的内容...</p>
          </section>
        </section>
      </div>
    </div>
  );
}

export default AnchorNestedDemo;
```

### 自定义偏移量

通过 `offset` 属性设置滚动偏移量，用于调整滚动位置。

```tsx
import Anchor from './index';

function AnchorOffsetDemo() {
  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div style={{ width: '200px', position: 'sticky', top: '20px' }}>
        <Anchor offset={80}>
          <Anchor.Link href="#section1" title="第一部分" />
          <Anchor.Link href="#section2" title="第二部分" />
        </Anchor>
      </div>
      <div style={{ flex: 1 }}>
        <section id="section1" style={{ height: '400px', padding: '20px', background: '#f5f5f5', marginBottom: '40px' }}>
          <h2>第一部分</h2>
          <p>这里是第一部分的内容...</p>
        </section>
        <section id="section2" style={{ height: '400px', padding: '20px', background: '#f5f5f5', marginBottom: '40px' }}>
          <h2>第二部分</h2>
          <p>这里是第二部分的内容...</p>
        </section>
      </div>
    </div>
  );
}

export default AnchorOffsetDemo;
```

## API

### Anchor

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| offset | 滚动偏移量，单位为像素 | `number` | `0` |
| children | 子元素，通常是 Anchor.Link 组件 | `React.ReactNode` | - |

### Anchor.Link

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 锚点链接，对应页面中的 section id | `string` | - |
| title | 锚点标题 | `string` | - |
| className | 自定义类名 | `string` | - |
| children | 子元素，用于嵌套锚点 | `React.ReactNode` | - |
