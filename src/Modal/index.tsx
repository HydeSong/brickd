import React, { useEffect } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  onOk?: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  mask?: boolean;
  maskClosable?: boolean;
  confirmLoading?: boolean;
  width?: number;
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  wrapClassName?: string;
  keyboard?: boolean;
}

const Modal = ({
  visible,
  onCancel,
  onOk = () => {},
  title,
  children,
  footer,
  mask = true,
  maskClosable = true,
  confirmLoading = false,
  width = 520,
  zIndex = 1000,
  className = '',
  style = {},
  wrapClassName = '',
  keyboard = true,
}: ModalProps) => {
  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (maskClosable && e.target === e.currentTarget) {
      onCancel();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (keyboard && e.key === 'Escape') {
        onCancel();
      }
    };

    if (visible && keyboard) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, keyboard, onCancel]);

  if (!visible) {
    return null;
  }

  return (
    <>
      {mask && (
        <div
          className={styles.mask}
          style={{ zIndex }}
          onClick={handleMaskClick}
          role="presentation"
        />
      )}
      <div
        className={`${styles.modal} ${className || ''}`}
        style={{
          width,
          zIndex: zIndex + 1,
          ...style,
        }}
      >
        <div className={`${styles.modalWrap} ${wrapClassName || ''}`}>
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>{title}</div>
            <button
              type="button"
              className={styles.modalClose}
              onClick={onCancel}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className={styles.modalBody}>{children}</div>
          <div className={styles.modalFooter}>
            {footer || (
              <>
                <button
                  type="button"
                  className={styles.modalButton}
                  onClick={onCancel}
                >
                  取消
                </button>
                <button
                  type="button"
                  className={`${styles.modalButton} ${styles.modalButtonPrimary}`}
                  onClick={onOk}
                  disabled={confirmLoading}
                >
                  {confirmLoading ? '加载中...' : '确定'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
