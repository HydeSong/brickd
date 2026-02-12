import React, { useRef, useState } from 'react';
import styles from './Upload.module.css';

interface UploadFile {
  uid: string;
  name: string;
  status: 'uploading' | 'done' | 'error' | 'removed';
  url?: string;
  percent?: number;
}

interface UploadProps {
  action?: string;
  method?: string;
  headers?: Record<string, string>;
  data?: Record<string, any>;
  name?: string;
  withCredentials?: boolean;
  multiple?: boolean;
  accept?: string;
  maxCount?: number;
  disabled?: boolean;
  beforeUpload?: (file: File) => boolean | Promise<boolean>;
  onChange?: (file: UploadFile, fileList: UploadFile[]) => void;
  onProgress?: (percent: number, file: UploadFile) => void;
  onSuccess?: (response: any, file: UploadFile) => void;
  onError?: (error: any, file: UploadFile) => void;
  onRemove?: (file: UploadFile) => void;
  fileList?: UploadFile[];
  defaultFileList?: UploadFile[];
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Upload: React.FC<UploadProps> = ({
  multiple = false,
  accept = '*',
  maxCount,
  disabled = false,
  beforeUpload,
  onChange,
  onProgress,
  onSuccess,
  onRemove,
  fileList: controlledFileList,
  defaultFileList = [],
  className,
  style,
  children,
}) => {
  const [internalFileList, setInternalFileList] =
    useState<UploadFile[]>(defaultFileList);
  const inputRef = useRef<HTMLInputElement>(null);

  const fileList =
    controlledFileList !== undefined ? controlledFileList : internalFileList;

  const handleClick = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const updateFileList = (updatedFile: UploadFile) => {
    const newFileList = fileList.map((file) =>
      file.uid === updatedFile.uid ? updatedFile : file,
    );

    if (controlledFileList === undefined) {
      setInternalFileList(newFileList);
    }

    onChange?.(updatedFile, newFileList);
  };

  const upload = (file: File, uploadFile: UploadFile) => {
    // 模拟上传过程
    let percent = 0;
    const interval = setInterval(() => {
      percent += 10;
      if (percent > 100) {
        clearInterval(interval);
        const updatedFile = {
          ...uploadFile,
          status: 'done' as const,
          percent: 100,
          url: URL.createObjectURL(file),
        };
        updateFileList(updatedFile);
        onSuccess?.({}, updatedFile);
        return;
      }

      const updatedFile = { ...uploadFile, percent };
      updateFileList(updatedFile);
      onProgress?.(percent, updatedFile);
    }, 200);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles: UploadFile[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uploadFile: UploadFile = {
        uid: `${Date.now()}_${i}`,
        name: file.name,
        status: 'uploading',
        percent: 0,
      };

      // 检查 beforeUpload
      if (beforeUpload) {
        const shouldUpload = await beforeUpload(file);
        if (!shouldUpload) continue;
      }

      // 检查文件数量限制
      if (maxCount && fileList.length + newFiles.length >= maxCount) break;

      newFiles.push(uploadFile);
      upload(file, uploadFile);
    }

    // 清空 input value
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleRemove = (file: UploadFile) => {
    onRemove?.(file);

    const newFileList = fileList.filter((f) => f.uid !== file.uid);
    if (controlledFileList === undefined) {
      setInternalFileList(newFileList);
    }

    onChange?.(file, newFileList);
  };

  return (
    <div className={`${styles.upload} ${className || ''}`} style={style}>
      <input
        ref={inputRef}
        type="file"
        className={styles.uploadInput}
        multiple={multiple}
        accept={accept}
        onChange={handleFileChange}
        disabled={disabled}
        data-testid="upload-input"
      />
      <div
        className={`${styles.uploadTrigger} ${disabled ? styles.disabled : ''}`}
        onClick={handleClick}
      >
        {children || (
          <div className={styles.uploadIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Click to Upload</span>
          </div>
        )}
      </div>
      <div className={styles.uploadList}>
        {fileList.map((file) => (
          <div key={file.uid} className={styles.uploadListItem}>
            <div className={styles.uploadListItemInfo}>
              <span className={styles.uploadListItemName}>{file.name}</span>
              {file.status === 'uploading' && (
                <div className={styles.uploadListItemProgress}>
                  <div
                    className={styles.uploadListItemProgressBar}
                    style={{ width: `${file.percent || 0}%` }}
                  />
                </div>
              )}
              {file.status === 'error' && (
                <span className={styles.uploadListItemError}>
                  Upload failed
                </span>
              )}
            </div>
            <button
              type="button"
              className={styles.uploadListItemRemove}
              onClick={() => handleRemove(file)}
              disabled={disabled}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upload;
