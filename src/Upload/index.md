# Upload 上传

上传组件，用于上传文件。

## 导入

```tsx
import Upload from 'brickd';
```

## 用法

### 基础用法

```tsx
import React from 'react';
import Upload from 'brickd';

const App = () => {
  return (
    <Upload>
      <button>Click to Upload</button>
    </Upload>
  );
};

export default App;
```

### 自定义上传触发区域

```tsx
import React from 'react';
import Upload from 'brickd';
import Button from 'brickd';

const App = () => {
  return (
    <Upload>
      <Button type="primary">Upload File</Button>
    </Upload>
  );
};

export default App;
```

### 控制文件列表

```tsx
import React, { useState } from 'react';
import Upload from 'brickd';

const App = () => {
  const [fileList, setFileList] = useState([]);

  const handleChange = (file, newFileList) => {
    setFileList(newFileList);
  };

  return (
    <Upload
      fileList={fileList}
      onChange={handleChange}
    />
  );
};

export default App;
```

### 多文件上传

```tsx
import React from 'react';
import Upload from 'brickd';

const App = () => {
  return (
    <Upload multiple>
      <button>Upload Multiple Files</button>
    </Upload>
  );
};

export default App;
```

### 文件类型限制

```tsx
import React from 'react';
import Upload from 'brickd';

const App = () => {
  return (
    <Upload accept="image/*">
      <button>Upload Image</button>
    </Upload>
  );
};

export default App;
```

### 上传前校验

```tsx
import React from 'react';
import Upload from 'brickd';
import message from 'brickd';

const App = () => {
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
  };

  return (
    <Upload beforeUpload={beforeUpload}>
      <button>Upload Image</button>
    </Upload>
  );
};

export default App;
```

## API

### Upload

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| action | `string` | `''` | 上传的地址 |
| method | `string` | `'post'` | 上传的方法 |
| headers | `Record<string, string>` | `{}` | 上传的请求头 |
| data | `Record<string, any>` | `{}` | 上传的额外数据 |
| name | `string` | `'file'` | 上传的文件字段名 |
| withCredentials | `boolean` | `false` | 是否携带凭证 |
| multiple | `boolean` | `false` | 是否支持多文件上传 |
| accept | `string` | `'*'` | 接受的文件类型 |
| maxCount | `number` | - | 最大上传文件数量 |
| disabled | `boolean` | `false` | 是否禁用 |
| beforeUpload | `(file: File) => boolean \| Promise<boolean>` | - | 上传前的校验函数 |
| onChange | `(file: UploadFile, fileList: UploadFile[]) => void` | - | 文件状态变化时的回调 |
| onProgress | `(percent: number, file: UploadFile) => void` | - | 上传进度变化时的回调 |
| onSuccess | `(response: any, file: UploadFile) => void` | - | 上传成功时的回调 |
| onError | `(error: any, file: UploadFile) => void` | - | 上传失败时的回调 |
| onRemove | `(file: UploadFile) => void` | - | 文件移除时的回调 |
| fileList | `UploadFile[]` | - | 受控文件列表 |
| defaultFileList | `UploadFile[]` | `[]` | 默认文件列表 |
| className | `string` | - | 自定义类名 |
| style | `React.CSSProperties` | - | 自定义样式 |
| children | `React.ReactNode` | - | 上传触发区域 |

### UploadFile

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| uid | `string` | 文件唯一标识 |
| name | `string` | 文件名 |
| status | `'uploading' \| 'done' \| 'error' \| 'removed'` | 文件状态 |
| url | `string` | 文件链接 |
| percent | `number` | 上传进度 |
