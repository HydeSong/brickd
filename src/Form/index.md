---
title: Form
order: 1
---

# Form 表单

用于创建表单并处理表单数据和验证。

## 基本用法

```tsx
import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  const handleFinishFailed = (errors: Record<string, string[]>) => {
    console.log('Form validation failed:', errors);
  };

  return (
    <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
      <Form.Item label="用户名" name="username" required>
        <input />
      </Form.Item>
      <Form.Item label="密码" name="password" required>
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};

export default App;
```

## 不同布局

```tsx
import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <div>
      <h3>垂直布局（默认）</h3>
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item label="用户名" name="username" required>
          <input />
        </Form.Item>
        <Form.Item label="密码" name="password" required>
          <input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>

      <h3>水平布局</h3>
      <Form layout="horizontal" onFinish={handleFinish}>
        <Form.Item label="用户名" name="username" required>
          <input />
        </Form.Item>
        <Form.Item label="密码" name="password" required>
          <input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>

      <h3>内联布局</h3>
      <Form layout="inline" onFinish={handleFinish}>
        <Form.Item label="用户名" name="username" required>
          <input />
        </Form.Item>
        <Form.Item label="密码" name="password" required>
          <input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
```

## 表单项属性

```tsx
import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item 
        label="用户名" 
        name="username" 
        required 
        help="请输入您的用户名"
      >
        <input />
      </Form.Item>
      <Form.Item 
        label="邮箱" 
        name="email" 
        required 
        validateStatus="success"
      >
        <input type="email" />
      </Form.Item>
      <Form.Item 
        label="密码" 
        name="password" 
        required 
        validateStatus="error"
        help="密码长度至少为6位"
      >
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};

export default App;
```

## 使用 Form.Control 包装普通输入组件

```tsx
import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item label="用户名" name="username" required>
        <Form.Control name="username">
          <input />
        </Form.Control>
      </Form.Item>
      <Form.Item label="密码" name="password" required>
        <Form.Control name="password">
          <input type="password" />
        </Form.Control>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};

export default App;
```

## 使用 useForm Hook

```tsx
import React from 'react';
import Form, { useForm } from '../Form';
import Button from '../Button';

const CustomInput: React.FC<{ name: string; label: string }> = ({ name, label }) => {
  const form = useForm();
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    form.setFieldValue(name, newValue);
  };

  const error = form.getFieldError(name);

  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={handleChange} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item name="username" required>
        <CustomInput name="username" label="用户名" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};

export default App;
```

## 表单提交和错误处理

```tsx
import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted successfully:', values);
    // 处理表单提交逻辑
  };

  const handleFinishFailed = (errors: Record<string, string[]>) => {
    console.log('Form validation failed:', errors);
    // 处理表单验证失败逻辑
  };

  return (
    <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
      <Form.Item label="用户名" name="username" required>
        <input />
      </Form.Item>
      <Form.Item label="密码" name="password" required>
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};

export default App;
```

## 重置表单

```tsx
import React, { useRef } from 'react';
import Form, { useForm } from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  const ResetButton: React.FC = () => {
    const form = useForm();
    return (
      <Button onClick={() => form.resetFields()}>重置</Button>
    );
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item label="用户名" name="username" required>
        <input />
      </Form.Item>
      <Form.Item label="密码" name="password" required>
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
        <ResetButton />
      </Form.Item>
    </Form>
  );
};

export default App;
```

## 自定义验证消息

```tsx
import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  const validateMessages = {
    required: '${label} 不能为空',
    whitespace: '${label} 不能只包含空格',
  };

  return (
    <Form 
      onFinish={handleFinish}
      validateMessages={validateMessages}
    >
      <Form.Item label="用户名" name="username" required>
        <input />
      </Form.Item>
      <Form.Item label="密码" name="password" required>
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};

export default App;
```

## 禁用状态

```tsx
import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form onFinish={handleFinish} disabled>
      <Form.Item label="用户名" name="username" required>
        <input />
      </Form.Item>
      <Form.Item label="密码" name="password" required>
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};

export default App;
```

## 自定义样式

```tsx
import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form 
      onFinish={handleFinish}
      style={{ 
        backgroundColor: '#f5f5f5', 
        padding: 20, 
        borderRadius: 8,
        maxWidth: 500
      }}
    >
      <Form.Item 
        label="用户名" 
        name="username" 
        required
        style={{ marginBottom: 16 }}
      >
        <input style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #d9d9d9' }} />
      </Form.Item>
      <Form.Item 
        label="密码" 
        name="password" 
        required
        style={{ marginBottom: 16 }}
      >
        <input 
          type="password" 
          style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #d9d9d9' }}
        />
      </Form.Item>
      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit"
          style={{ width: '100%', padding: 10 }}
        >
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
```

## API

### Form

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| layout | `'horizontal' \| 'vertical' \| 'inline'` | `'vertical'` | 表单布局 |
| disabled | `boolean` | `false` | 是否禁用表单 |
| onFinish | `(values: Record<string, any>) => void` | - | 表单提交成功回调 |
| onFinishFailed | `(errors: Record<string, string[]>) => void` | - | 表单提交失败回调 |
| validateMessages | `Record<string, string>` | `{ required: '${label} is required', whitespace: '${label} cannot be empty' }` | 验证消息 |
| className | `string` | `''` | 自定义类名 |
| style | `React.CSSProperties` | `{}` | 自定义样式 |
| children | `ReactNode` | - | 子元素 |

### Form.Item

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | `string` | - | 表单项标签 |
| name | `string` | - | 表单项名称 |
| required | `boolean` | `false` | 是否必填 |
| help | `string` | - | 表单项帮助信息 |
| validateStatus | `'success' \| 'warning' \| 'error' \| 'validating'` | - | 表单项验证状态 |
| className | `string` | `''` | 自定义类名 |
| style | `React.CSSProperties` | `{}` | 自定义样式 |
| children | `ReactNode` | - | 子元素 |

### Form.Control

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | `string` | - | 表单控件名称 |
| children | `React.ReactElement` | - | 要包装的输入组件 |

### useForm Hook

`useForm` Hook 提供了以下方法：

| 方法 | 类型 | 说明 |
| --- | --- | --- |
| layout | `'horizontal' \| 'vertical' \| 'inline'` | 表单布局 |
| disabled | `boolean` | 是否禁用表单 |
| validateMessages | `Record<string, string>` | 验证消息 |
| registerField | `(name: string, field: FormField) => void` | 注册字段 |
| unregisterField | `(name: string) => void` | 取消注册字段 |
| getFieldValue | `(name: string) => any` | 获取字段值 |
| setFieldValue | `(name: string, value: any) => void` | 设置字段值 |
| getFieldError | `(name: string) => string` | 获取字段错误 |
| setFieldError | `(name: string, error: string) => void` | 设置字段错误 |
| validateFields | `() => Promise<Record<string, any>>` | 验证所有字段 |
| resetFields | `() => void` | 重置所有字段 |