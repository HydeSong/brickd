---
title: Grid
order: 1
---

# Grid 栅格

基于 24 栅格系统的布局组件，用于快速构建响应式布局。

## 基本用法

```tsx
import React from 'react';
import { Row, Col } from '../Grid';

const App: React.FC = () => {
  return (
    <div>
      <h3>基本栅格布局</h3>
      <Row>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#d0d0d0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
      </Row>

      <h3>不等宽栅格</h3>
      <Row>
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占6格
          </div>
        </Col>
        <Col span={12}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占12格
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#d0d0d0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占6格
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
```

## 栅格间距

```tsx
import React from 'react';
import { Row, Col } from '../Grid';

const App: React.FC = () => {
  return (
    <div>
      <h3>水平间距</h3>
      <Row gutter={16}>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#d0d0d0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
      </Row>

      <h3>垂直间距</h3>
      <Row gutter={[16, 24]}>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#d0d0d0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#c0c0c0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#b0b0b0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#a0a0a0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
```

## 栅格对齐

```tsx
import React from 'react';
import { Row, Col } from '../Grid';

const App: React.FC = () => {
  return (
    <div>
      <h3>水平对齐</h3>
      <Row justify="start">
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            左对齐
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            左对齐
          </div>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            居中对齐
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            居中对齐
          </div>
        </Col>
      </Row>

      <Row justify="end">
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            右对齐
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            右对齐
          </div>
        </Col>
      </Row>

      <Row justify="space-between">
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            两端对齐
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            两端对齐
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#d0d0d0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            两端对齐
          </div>
        </Col>
      </Row>

      <h3>垂直对齐</h3>
      <Row align="top" style={{ height: 100, backgroundColor: '#f5f5f5' }}>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 8,
              textAlign: 'center',
            }}
          >
            上对齐
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            上对齐
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#d0d0d0',
              padding: 24,
              textAlign: 'center',
            }}
          >
            上对齐
          </div>
        </Col>
      </Row>

      <Row align="middle" style={{ height: 100, backgroundColor: '#f5f5f5' }}>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 8,
              textAlign: 'center',
            }}
          >
            居中对齐
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            居中对齐
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#d0d0d0',
              padding: 24,
              textAlign: 'center',
            }}
          >
            居中对齐
          </div>
        </Col>
      </Row>

      <Row align="bottom" style={{ height: 100, backgroundColor: '#f5f5f5' }}>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 8,
              textAlign: 'center',
            }}
          >
            下对齐
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            下对齐
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#d0d0d0',
              padding: 24,
              textAlign: 'center',
            }}
          >
            下对齐
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
```

## 栅格偏移

```tsx
import React from 'react';
import { Row, Col } from '../Grid';

const App: React.FC = () => {
  return (
    <div>
      <h3>栅格偏移</h3>
      <Row>
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占6格
          </div>
        </Col>
        <Col span={6} offset={6}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占6格，偏移6格
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={8} offset={4}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格，偏移4格
          </div>
        </Col>
        <Col span={8} offset={4}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占8格，偏移4格
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
```

## 栅格排序

```tsx
import React from 'react';
import { Row, Col } from '../Grid';

const App: React.FC = () => {
  return (
    <div>
      <h3>栅格排序</h3>
      <Row>
        <Col span={6} push={6}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占6格，右移6格
          </div>
        </Col>
        <Col span={6} pull={6}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占6格，左移6格
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              backgroundColor: '#d0d0d0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            占6格
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
```

## 响应式布局

```tsx
import React from 'react';
import { Row, Col } from '../Grid';

const App: React.FC = () => {
  return (
    <div>
      <h3>响应式布局</h3>
      <Row>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            响应式栅格
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            响应式栅格
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div
            style={{
              backgroundColor: '#d0d0d0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            响应式栅格
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div
            style={{
              backgroundColor: '#c0c0c0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            响应式栅格
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div
            style={{
              backgroundColor: '#b0b0b0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            响应式栅格
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div
            style={{
              backgroundColor: '#a0a0a0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            响应式栅格
          </div>
        </Col>
      </Row>

      <h3>响应式偏移</h3>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 8, offset: 4 }}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            响应式偏移
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8, offset: 4 }}>
          <div
            style={{
              backgroundColor: '#e0e0e0',
              padding: 16,
              textAlign: 'center',
            }}
          >
            响应式偏移
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import { Row, Col } from '../Grid';

const App: React.FC = () => {
  return (
    <div>
      <h3>自定义样式</h3>
      <Row style={{ borderRadius: 8, overflow: 'hidden' }}>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#1890ff',
              color: '#fff',
              padding: 20,
              textAlign: 'center',
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            自定义样式1
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#52c41a',
              color: '#fff',
              padding: 20,
              textAlign: 'center',
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            自定义样式2
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: '#faad14',
              color: '#fff',
              padding: 20,
              textAlign: 'center',
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            自定义样式3
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
```

## API

### Row

| 属性      | 类型                                                                                  | 默认值    | 说明                         |
| --------- | ------------------------------------------------------------------------------------- | --------- | ---------------------------- |
| gutter    | `number \| [number, number]`                                                          | `0`       | 栅格间距，支持水平和垂直间距 |
| justify   | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` | 水平排列方式                 |
| align     | `'top' \| 'middle' \| 'bottom'`                                                       | `'top'`   | 垂直对齐方式                 |
| className | `string`                                                                              | `''`      | 自定义类名                   |
| style     | `React.CSSProperties`                                                                 | `{}`      | 自定义样式                   |
| children  | `React.ReactNode`                                                                     | -         | 子元素                       |

### Col

| 属性      | 类型                                                                         | 默认值 | 说明                          |
| --------- | ---------------------------------------------------------------------------- | ------ | ----------------------------- |
| span      | `number`                                                                     | -      | 栅格占位格数                  |
| offset    | `number`                                                                     | -      | 栅格左侧的间隔格数            |
| push      | `number`                                                                     | -      | 栅格向右移动格数              |
| pull      | `number`                                                                     | -      | 栅格向左移动格数              |
| xs        | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | -      | 超小屏幕（<576px）响应式配置  |
| sm        | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | -      | 小屏幕（≥576px）响应式配置    |
| md        | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | -      | 中等屏幕（≥768px）响应式配置  |
| lg        | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | -      | 大屏幕（≥992px）响应式配置    |
| xl        | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | -      | 超大屏幕（≥1200px）响应式配置 |
| xxl       | `number \| { span?: number; offset?: number; push?: number; pull?: number }` | -      | 特大屏幕（≥1600px）响应式配置 |
| className | `string`                                                                     | `''`   | 自定义类名                    |
| style     | `React.CSSProperties`                                                        | `{}`   | 自定义样式                    |
| children  | `React.ReactNode`                                                            | -      | 子元素                        |
