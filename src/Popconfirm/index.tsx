import React, { useEffect, useRef, useState } from 'react';
import styles from './Popconfirm.module.css';

interface PopconfirmProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'click' | 'hover' | 'focus';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Popconfirm: React.FC<PopconfirmProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
  okText = '确定',
  cancelText = '取消',
  placement = 'top',
  trigger = 'click',
  disabled = false,
  children,
  className,
  style,
}) => {
  const [visible, setVisible] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      const updatePosition = () => {
        if (triggerRef.current && popoverRef.current) {
          const triggerRect = triggerRef.current.getBoundingClientRect();
          const popoverRect = popoverRef.current.getBoundingClientRect();

          let newStyle: React.CSSProperties = {};

          switch (placement) {
            case 'top':
              newStyle = {
                top: `${triggerRect.top - popoverRect.height - 8}px`,
                left: `${
                  triggerRect.left +
                  triggerRect.width / 2 -
                  popoverRect.width / 2
                }px`,
              };
              break;
            case 'bottom':
              newStyle = {
                top: `${triggerRect.bottom + 8}px`,
                left: `${
                  triggerRect.left +
                  triggerRect.width / 2 -
                  popoverRect.width / 2
                }px`,
              };
              break;
            case 'left':
              newStyle = {
                top: `${
                  triggerRect.top +
                  triggerRect.height / 2 -
                  popoverRect.height / 2
                }px`,
                left: `${triggerRect.left - popoverRect.width - 8}px`,
              };
              break;
            case 'right':
              newStyle = {
                top: `${
                  triggerRect.top +
                  triggerRect.height / 2 -
                  popoverRect.height / 2
                }px`,
                left: `${triggerRect.right + 8}px`,
              };
              break;
          }

          setPopoverStyle(newStyle);
        }
      };

      updatePosition();
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
    }
  }, [visible, placement]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        visible &&
        triggerRef.current &&
        popoverRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [visible]);

  const handleTriggerClick = () => {
    if (!disabled) {
      setVisible(!visible);
    }
  };

  const handleTriggerHover = () => {
    if (!disabled && trigger === 'hover') {
      setVisible(true);
    }
  };

  const handleTriggerLeave = () => {
    if (!disabled && trigger === 'hover') {
      setVisible(false);
    }
  };

  const handleConfirm = () => {
    onConfirm();
    setVisible(false);
  };

  const handleCancel = () => {
    onCancel?.();
    setVisible(false);
  };

  const triggerProps = {
    onClick: trigger === 'click' ? handleTriggerClick : undefined,
    onMouseEnter: trigger === 'hover' ? handleTriggerHover : undefined,
    onMouseLeave: trigger === 'hover' ? handleTriggerLeave : undefined,
  };

  return (
    <div className={`${styles.popconfirm} ${className || ''}`} style={style}>
      <div ref={triggerRef} className={styles.trigger} {...triggerProps}>
        {children}
      </div>
      {visible && !disabled && (
        <div
          ref={popoverRef}
          className={`${styles.popover} ${styles[placement]}`}
          style={popoverStyle}
        >
          <div className={styles.content}>
            {title && <div className={styles.title}>{title}</div>}
            {description && (
              <div className={styles.description}>{description}</div>
            )}
          </div>
          <div className={styles.buttons}>
            <button
              type="button"
              className={`${styles.button} ${styles.cancelButton}`}
              onClick={handleCancel}
            >
              {cancelText}
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles.confirmButton}`}
              onClick={handleConfirm}
            >
              {okText}
            </button>
          </div>
          <div className={`${styles.arrow} ${styles[`${placement}Arrow`]}`} />
        </div>
      )}
    </div>
  );
};

export default Popconfirm;
