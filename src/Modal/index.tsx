
import styles from './Modal.module.css';

const Modal = ({
  visible,
  onCancel,
  onOk,
  title,
  children,
  footer,
  mask = true,
  maskClosable = true,
  confirmLoading = false,
  width = 520,
  zIndex = 1000,
  className,
  style,
  keyboard = true,
  wrapClassName,
}) => {
  if (!visible) {
    return null;
  }

  const handleMaskClick = (e) => {
    if (maskClosable && e.target === e.currentTarget) {
      onCancel();
    }
  };

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
                  className={styles.modalButton}
                  onClick={onCancel}
                >
                  取消
                </button>
                <button
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