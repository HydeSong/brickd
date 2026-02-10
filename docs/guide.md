# 快速开始

欢迎使用 brickd 组件库！本指南将帮助你快速上手，了解如何在项目中集成和使用 brickd 组件。

## 安装

你可以使用 npm、yarn 或 pnpm 安装 brickd：

### 使用 npm

```bash
npm install brickd
```

### 使用 yarn

```bash
yarn add brickd
```

### 使用 pnpm

```bash
pnpm add brickd
```

## 快速开始

### 1. 导入组件

在你的 React 组件中，你可以按需导入 brickd 的组件：

```tsx
import { Button } from 'brickd';

function App() {
  return (
    <div>
      <Button type="primary">Hello Brickd</Button>
    </div>
  );
}

export default App;
```

### 2. 导入样式

brickd 组件的样式已经内置在组件中，无需单独导入。

## 组件示例

### Button 组件

```tsx
import { Button } from 'brickd';

function ButtonExample() {
  return (
    <div>
      <Button type="primary">主要按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="dashed">虚线按钮</Button>
      <Button type="text">文本按钮</Button>
      <Button type="link">链接按钮</Button>
    </div>
  );
}
```

### 其他组件

请参考各个组件的详细文档，了解如何使用其他组件。

## 主题定制

brickd 支持主题定制，你可以通过主题配置来调整组件的样式。

### 全局主题配置

```tsx
import { ConfigProvider } from 'brickd';

function App() {
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#1890ff',
        borderRadius: 4,
      },
    }}>
      {/* 你的应用内容 */}
    </ConfigProvider>
  );
}
```

## 常见问题

### 1. 组件不显示或样式异常

- 请确保你已经正确安装了 brickd
- 请检查你的 React 版本是否符合要求（brickd 要求 React 16.9.0 或更高版本）

### 2. 类型错误

- 请确保你的项目中配置了 TypeScript，并且版本符合要求
- brickd 提供了完整的 TypeScript 类型定义，无需单独安装类型包

### 3. 性能问题

- 对于大型应用，建议使用按需导入，只导入你需要的组件
- 避免在渲染函数中创建新的对象或数组作为组件的 props

## 下一步

- 查看 [组件文档](/components) 了解更多组件的使用方法
- 查看 [GitHub 仓库](https://github.com/brickd/brickd) 获取最新版本和贡献指南

## 反馈与支持

如果你在使用过程中遇到任何问题，或有任何建议，请在 [GitHub Issues](https://github.com/brickd/brickd/issues) 中提交，我们会尽快回复你。
