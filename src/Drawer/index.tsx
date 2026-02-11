import React, { useState, useEffect, useRef } from 'react';
import styles from './Drawer.module.css';

interface DrawerProps {
  title?: React.ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  width?: number | string;
  height?: number | string;
  mask?: boolean;
  maskClosable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  closable?: boolean;
  destroyOnClose?: boolean;
  zIndex?: number;
  [key: string]: any;
}

const Drawer: React.FC<DrawerProps> = ({
  title,
  placement = 'right',
  visible,
  defaultVisible = false,
  onVisibleChange,
  width = 300,
  height = 300,
  mask = true,
  maskClosable = true,
  className = '',
  style = {},
  bodyStyle = {},
  children,
  footer,
  closable = true,
  destroyOnClose = false,
  zIndex = 1050,
  ...rest
}) => {
  const [internalVisible, setInternalVisible] = useState<boolean>(
    visible !== undefined ? visible : defaultVisible
  );
  const drawerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  // 当外部 visible 变化时，更新内部状态
  useEffect(() => {
    if (visible !== undefined) {
      setInternalVisible(visible);
    }
  }, [visible]);

  // 处理键盘 ESC 关闭
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && internalVisible) {
        handleClose();
      }
    };

    if (internalVisible) {
      document.addEventListener('keydown', handleKeyDown);
      // 禁止背景滚动
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // 恢复背景滚动
      document.body.style.overflow = '';
    };
  }, [internalVisible]);

  const handleClose = () => {
    setInternalVisible(false);
    if (onVisibleChange) {
      onVisibleChange(false);
    }
  };

  const handleMaskClick = () => {
    if (maskClosable) {
      handleClose();
    }
  };

  if (!internalVisible && destroyOnClose) {
    return null;
  }

  if (!internalVisible && !destroyOnClose) {
    return (
      <div className={styles.drawerHidden}>
        {children}
      </div>
    );
  }

  const drawerStyle = {
    zIndex,
    ...style,
  };

  const placementStyle = {
    [placement]: 0,
  };

  const sizeStyle = {
    width: ['left', 'right'].includes(placement) ? width : undefined,
    height: ['top', 'bottom'].includes(placement) ? height : undefined,
  };

  return (
    <>
      {mask && (
        <div
          ref={maskRef}
          className={styles.drawerMask}
          style={{ zIndex }}
          onClick={handleMaskClick}
        />
      )}
      <div
        ref={drawerRef}
        className={`${styles.drawer} ${styles[`drawer${placement.charAt(0).toUpperCase() + placement.slice(1)}`]} ${className}`}
        style={{ ...drawerStyle, ...placementStyle, ...sizeStyle }}
        {...rest}
      >
        <div className={styles.drawerHeader}>
          {title && <div className={styles.drawerTitle}>{title}</div>}
          {closable && (
            <button
              className={styles.drawerClose}
              onClick={handleClose}
              aria-label="Close"
            >
              ×
            </button>
          )}
        </div>
        <div className={styles.drawerBody} style={bodyStyle}>
          {children}
        </div>
        {footer && <div className={styles.drawerFooter}>{footer}</div>}
      </div>
    </>
  );
};

export default Drawer;