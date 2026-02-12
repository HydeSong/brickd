# Progress 进度条

进度条组件用于显示任务的完成进度，支持线性和圆形两种类型，以及自定义状态、颜色等属性。

## 代码演示

### 基本用法

通过 `percent` 属性设置进度百分比。

```tsx
import Progress from './index';

function ProgressBasicDemo() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
      }}
    >
      <Progress percent={30} />
      <Progress percent={60} />
      <Progress percent={90} />
    </div>
  );
}

export default ProgressBasicDemo;
```

### 不同类型

通过 `type` 属性设置进度条类型，支持 `line` 和 `circle`。

```tsx
import Progress from './index';

function ProgressDifferentTypeDemo() {
  return (
    <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <Progress percent={70} type="line" />
      </div>
      <Progress percent={70} type="circle" />
    </div>
  );
}

export default ProgressDifferentTypeDemo;
```

### 不同状态

通过 `status` 属性设置进度条状态，支持 `success`、`active` 和 `exception`。

```tsx
import Progress from './index';

function ProgressDifferentStatusDemo() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
      }}
    >
      <Progress percent={60} status="active" />
      <Progress percent={100} status="success" />
      <Progress percent={60} status="exception" />
    </div>
  );
}

export default ProgressDifferentStatusDemo;
```

### 不同线条宽度

通过 `strokeWidth` 属性设置进度条的线条宽度。

```tsx
import Progress from './index';

function ProgressDifferentStrokeWidthDemo() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
      }}
    >
      <Progress percent={60} strokeWidth={4} />
      <Progress percent={60} strokeWidth={8} />
      <Progress percent={60} strokeWidth={12} />
    </div>
  );
}

export default ProgressDifferentStrokeWidthDemo;
```

### 隐藏进度信息

通过 `showInfo={false}` 隐藏进度信息。

```tsx
import Progress from './index';

function ProgressHideInfoDemo() {
  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <Progress percent={60} showInfo={false} />
    </div>
  );
}

export default ProgressHideInfoDemo;
```

### 自定义进度信息

通过 `format` 属性自定义进度信息的显示格式。

```tsx
import Progress from './index';

function ProgressCustomFormatDemo() {
  return (
    <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <Progress
          percent={60}
          format={(percent) => `${percent.toFixed(1)}% 完成`}
        />
      </div>
      <Progress
        percent={60}
        type="circle"
        format={(percent) => `${Math.round(percent)}%`}
      />
    </div>
  );
}

export default ProgressCustomFormatDemo;
```

### 自定义颜色

通过 `strokeColor` 属性设置进度条的颜色，通过 `trailColor` 属性设置轨道的颜色。

```tsx
import Progress from './index';

function ProgressCustomColorDemo() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
      }}
    >
      <Progress percent={60} strokeColor="#52c41a" />
      <Progress percent={60} strokeColor="#faad14" trailColor="#fff2f0" />
      <Progress percent={60} strokeColor="#13c2c2" trailColor="#e6f7ff" />
    </div>
  );
}

export default ProgressCustomColorDemo;
```

### 自定义样式

通过 `className` 和 `style` 属性自定义进度条的样式。

```tsx
import Progress from './index';

function ProgressCustomStyleDemo() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
      }}
    >
      <Progress
        percent={60}
        style={{
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        }}
      />
      <Progress
        percent={60}
        type="circle"
        style={{
          transform: 'scale(1.2)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        }}
      />
    </div>
  );
}

export default ProgressCustomStyleDemo;
```

## API

### ProgressProps

| 属性        | 说明               | 类型                                   | 默认值   |
| ----------- | ------------------ | -------------------------------------- | -------- |
| percent     | 进度百分比         | `number`                               | -        |
| type        | 进度条类型         | `'line' \| 'circle'`                   | `'line'` |
| status      | 进度条状态         | `'success' \| 'active' \| 'exception'` | -        |
| strokeWidth | 线条宽度           | `number`                               | `8`      |
| showInfo    | 是否显示进度信息   | `boolean`                              | `true`   |
| format      | 自定义进度信息格式 | `(percent: number) => React.ReactNode` | -        |
| className   | 自定义类名         | `string`                               | `''`     |
| style       | 自定义样式         | `React.CSSProperties`                  | `{}`     |
| strokeColor | 进度条颜色         | `string`                               | -        |
| trailColor  | 轨道颜色           | `string`                               | -        |
