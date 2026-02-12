import React, { useState } from 'react';
import styles from './Alert.module.css';

interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  message: React.ReactNode;
  description?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  message,
  description,
  closable = true,
  onClose,
  className = '',
  style = {},
}) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`${styles.alert} ${
        styles[`alert${type.charAt(0).toUpperCase() + type.slice(1)}`]
      } ${className}`}
      style={style}
    >
      <div className={styles.alertContent}>
        <div className={styles.alertIcon}>
          {type === 'info' && 'ℹ️'}
          {type === 'success' && '✅'}
          {type === 'warning' && '⚠️'}
          {type === 'error' && '❌'}
        </div>
        <div className={styles.alertMessage}>
          <div className={styles.alertTitle}>{message}</div>
          {description && (
            <div className={styles.alertDescription}>{description}</div>
          )}
        </div>
        {closable && (
          <button
            type="button"
            className={styles.alertClose}
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
