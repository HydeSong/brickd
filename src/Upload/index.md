---
title: Upload
nav: components
order: 59
---

# Upload

文件上传组件，用于上传文件到服务器。

## 基本用法

最简单的文件上传使用方式。

```tsx
import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  const handleChange = (file: any, fileList: any[]) => {
    console.log('File:', file);
    console.log('File List:', fileList);
  };

  const handleProgress = (percent: number, file: any) => {
    console.log('Upload progress:', percent, '%');
  };

  const handleSuccess = (response: any, file: any) => {
    console.log('Upload success:', file);
  };

  const handleError = (error: any, file: any) => {
    console.log('Upload error:', error);
  };

  return (
    <Upload
      action="/upload"
      onChange={handleChange}
      onProgress={handleProgress}
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default App;
```

## 多文件上传

支持上传多个文件。

```tsx
import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  return (
    <Upload
      action="/upload"
      multiple
    />
  );
};

export default App;
```

## 自定义上传按钮

自定义上传按钮的内容。

```tsx
import React from 'react';
import Upload from './index';
import Button from '../Button';
import Icon from '../Icon';

const App: React.FC = () => {
  return (
    <Upload action="/upload">
      <Button type="primary">
        <Icon name="upload" size={16} style={{ marginRight: '8px' }} />
        点击上传
      </Button>
    </Upload>
  );
};

export default App;
```

## 文件类型限制

限制上传文件的类型。

```tsx
import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  return (
    <div>
      <Upload action="/upload" accept=".jpg,.jpeg,.png,.gif">
        仅支持图片文件
      </Upload>
      <br />
      <Upload action="/upload" accept=".pdf">
        仅支持 PDF 文件
      </Upload>
      <br />
      <Upload action="/upload" accept=".doc,.docx">
        仅支持 Word 文件
      </Upload>
    </div>
  );
};

export default App;
```

## 文件数量限制

限制上传文件的数量。

```tsx
import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  return (
    <Upload
      action="/upload"
      multiple
      maxCount={3}
    >
      最多上传 3 个文件
    </Upload>
  );
};

export default App;
```

## 禁用状态

禁用的上传组件。

```tsx
import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  return (
    <Upload
      action="/upload"
      disabled
    >
      禁用上传
    </Upload>
  );
};

export default App;
```

## 受控模式

通过状态控制上传文件列表。

```tsx
import React, { useState } from 'react';
import Upload from './index';

const App: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (file: any, list: any[]) => {
    setFileList(list);
    console.log('File:', file);
    console.log('File List:', list);
  };

  return (
    <div>
      <Upload
        action="/upload"
        fileList={fileList}
        onChange={handleChange}
      />
      <p>已上传文件数量: {fileList.length}</p>
    </div>
  );
};

export default App;
```

## 带默认文件

设置默认已上传的文件。

```tsx
import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  const defaultFileList = [
    {
      uid: '1',
      name: 'default-file-1.jpg',
      status: 'done',
      url: 'https://via.placeholder.com/100',
    },
    {
      uid: '2',
      name: 'default-file-2.pdf',
      status: 'done',
      url: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <Upload
      action="/upload"
      defaultFileList={defaultFileList}
    />
  );
};

export default App;
```

## 上传前校验

上传前对文件进行校验。

```tsx
import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      alert('只能上传 JPG/PNG 图片!');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      alert('图片大小不能超过 2MB!');
      return false;
    }
    return true;
  };

  return (
    <Upload
      action="/upload"
      beforeUpload={beforeUpload}
    >
      上传前校验
    </Upload>
  );
};

export default App;
```

## 自定义样式

通过 className 和 style 属性自定义上传组件样式。

```tsx
import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  return (
    <Upload
      action="/upload"
      style={{
        border: '2px dashed #1890ff',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f0f8ff',
        width: '300px',
      }}
    >
      自定义样式上传
    </Upload>
  );
};

export default App;
```

## API

### UploadProps

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| action | string | '' | 上传接口地址 |
| method | string | 'post' | 上传方法 |
| headers | Record<string, string> | {} | 上传请求头 |
| data | Record<string, any> | {} | 上传额外数据 |
| name | string | 'file' | 上传文件字段名 |
| withCredentials | boolean | false | 是否携带凭证 |
| multiple | boolean | false | 是否支持多文件上传 |
| accept | string | '*' | 接受的文件类型 |
| maxCount | number | - | 最大上传文件数量 |
| disabled | boolean | false | 是否禁用 |
| beforeUpload | (file: File) => boolean \| Promise<boolean> | - | 上传前校验 |
| onChange | (file: UploadFile, fileList: UploadFile[]) => void | - | 文件状态变化时的回调 |
| onProgress | (percent: number, file: UploadFile) => void | - | 上传进度回调 |
| onSuccess | (response: any, file: UploadFile) => void | - | 上传成功回调 |
| onError | (error: any, file: UploadFile) => void | - | 上传失败回调 |
| onRemove | (file: UploadFile) => void | - | 文件移除回调 |
| fileList | UploadFile[] | - | 受控模式下的文件列表 |
| defaultFileList | UploadFile[] | [] | 默认文件列表 |
| className | string | - | 自定义类名 |
| style | React.CSSProperties | - | 自定义样式 |
| children | React.ReactNode | - | 自定义上传按钮 |

### UploadFile

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| uid | string | - | 文件唯一标识 |
| name | string | - | 文件名 |
| status | 'uploading' \| 'done' \| 'error' \| 'removed' | - | 文件状态 |
| url | string | - | 文件上传后的 URL |
| percent | number | - | 上传进度百分比 |