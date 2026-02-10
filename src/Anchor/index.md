---
title: Anchor 锚点
order: 10
---

# Anchor 锚点

用于页面导航和定位，支持点击跳转和滚动高亮。

## 基本用法

```jsx
import { Anchor } from 'brickd';

function App() {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{ width: 200 }}>
        <Anchor>
          <Anchor.Link href="#section1" title="Section 1" />
          <Anchor.Link href="#section2" title="Section 2" />
          <Anchor.Link href="#section3" title="Section 3" />
        </Anchor>
      </div>
      <div style={{ flex: 1 }}>
        <section id="section1" style={{ height: 500, backgroundColor: '#f0f0f0', padding: 24, marginBottom: 24 }}>
          <h2>Section 1</h2>
          <p>Content for section 1...</p>
        </section>
        <section id="section2" style={{ height: 500, backgroundColor: '#e0e0e0', padding: 24, marginBottom: 24 }}>
          <h2>Section 2</h2>
          <p>Content for section 2...</p>
        </section>
        <section id="section3" style={{ height: 500, backgroundColor: '#d0d0d0', padding: 24, marginBottom: 24 }}>
          <h2>Section 3</h2>
          <p>Content for section 3...</p>
        </section>
      </div>
    </div>
  );
}

export default App;
```

## 嵌套菜单

```jsx
import { Anchor } from 'brickd';

function App() {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{ width: 200 }}>
        <Anchor>
          <Anchor.Link href="#section1" title="Section 1">
            <Anchor.Link href="#section1-1" title="Subsection 1.1" />
            <Anchor.Link href="#section1-2" title="Subsection 1.2" />
          </Anchor.Link>
          <Anchor.Link href="#section2" title="Section 2">
            <Anchor.Link href="#section2-1" title="Subsection 2.1" />
          </Anchor.Link>
          <Anchor.Link href="#section3" title="Section 3" />
        </Anchor>
      </div>
      <div style={{ flex: 1 }}>
        <section id="section1" style={{ height: 400, backgroundColor: '#f0f0f0', padding: 24, marginBottom: 24 }}>
          <h2>Section 1</h2>
          <p>Content for section 1...</p>
        </section>
        <section id="section1-1" style={{ height: 300, backgroundColor: '#f5f5f5', padding: 24, marginBottom: 24, marginLeft: 24 }}>
          <h3>Subsection 1.1</h3>
          <p>Content for subsection 1.1...</p>
        </section>
        <section id="section1-2" style={{ height: 300, backgroundColor: '#f5f5f5', padding: 24, marginBottom: 24, marginLeft: 24 }}>
          <h3>Subsection 1.2</h3>
          <p>Content for subsection 1.2...</p>
        </section>
        <section id="section2" style={{ height: 400, backgroundColor: '#e0e0e0', padding: 24, marginBottom: 24 }}>
          <h2>Section 2</h2>
          <p>Content for section 2...</p>
        </section>
        <section id="section2-1" style={{ height: 300, backgroundColor: '#e5e5e5', padding: 24, marginBottom: 24, marginLeft: 24 }}>
          <h3>Subsection 2.1</h3>
          <p>Content for subsection 2.1...</p>
        </section>
        <section id="section3" style={{ height: 400, backgroundColor: '#d0d0d0', padding: 24, marginBottom: 24 }}>
          <h2>Section 3</h2>
          <p>Content for section 3...</p>
        </section>
      </div>
    </div>
  );
}

export default App;
```

## 自定义偏移量

```jsx
import { Anchor } from 'brickd';

function App() {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{ width: 200 }}>
        <Anchor offset={80}>
          <Anchor.Link href="#section1" title="Section 1" />
          <Anchor.Link href="#section2" title="Section 2" />
        </Anchor>
      </div>
      <div style={{ flex: 1 }}>
        <section id="section1" style={{ height: 500, backgroundColor: '#f0f0f0', padding: 24, marginBottom: 24 }}>
          <h2>Section 1</h2>
          <p>Content for section 1...</p>
        </section>
        <section id="section2" style={{ height: 500, backgroundColor: '#e0e0e0', padding: 24, marginBottom: 24 }}>
          <h2>Section 2</h2>
          <p>Content for section 2...</p>
        </section>
      </div>
    </div>
  );
}

export default App;
```

## API

### Anchor

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offset | 滚动偏移量 | `number` | `0` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 子元素 | `React.ReactNode` | - |

### Anchor.Link

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 锚点链接 | `string` | - |
| title | 显示文本 | `string` | - |
| className | 自定义类名 | `string` | - |
| children | 子元素（用于嵌套） | `React.ReactNode` | - |
