import React, { useEffect, useRef, useState } from 'react';
import styles from './Popover.module.css';

interface PopoverProps {
  content: React.ReactNode;
  trigger?: 'click' | 'hover' | 'focus';
  placement?: 'top' | 'bottom' | 'left' | 'right';
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({
  content,
  trigger = 'click',
  placement = 'top',
  visible,
  defaultVisible = false,
  onVisibleChange,
  className = '',
  style = {},
  children,
}) => {
  const [internalVisible, setInternalVisible] = useState<boolean>(
    visible !== undefined ? visible : defaultVisible,
  );
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // 当外部 visible 变化时，更新内部状态
  useEffect(() => {
    if (visible !== undefined) {
      setInternalVisible(visible);
    }
  }, [visible]);

  // 点击外部关闭 popover
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        triggerRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setInternalVisible(false);
        if (onVisibleChange) {
          onVisibleChange(false);
        }
      }
    };

    if (internalVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [internalVisible, onVisibleChange]);

  const handleTriggerClick = () => {
    const newVisible = !internalVisible;
    setInternalVisible(newVisible);
    if (onVisibleChange) {
      onVisibleChange(newVisible);
    }
  };

  const handleTriggerMouseEnter = () => {
    if (trigger === 'hover') {
      setInternalVisible(true);
      if (onVisibleChange) {
        onVisibleChange(true);
      }
    }
  };

  const handleTriggerMouseLeave = () => {
    if (trigger === 'hover') {
      setInternalVisible(false);
      if (onVisibleChange) {
        onVisibleChange(false);
      }
    }
  };

  const handleTriggerFocus = () => {
    if (trigger === 'focus') {
      setInternalVisible(true);
      if (onVisibleChange) {
        onVisibleChange(true);
      }
    }
  };

  const handleTriggerBlur = () => {
    if (trigger === 'focus') {
      setInternalVisible(false);
      if (onVisibleChange) {
        onVisibleChange(false);
      }
    }
  };

  const getPlacementClass = () => {
    return styles[
      `popover${placement.charAt(0).toUpperCase() + placement.slice(1)}`
    ];
  };

  return (
    <div className={`${styles.popoverWrapper} ${className}`} style={style}>
      <div
        ref={triggerRef}
        className={styles.popoverTrigger}
        onClick={trigger === 'click' ? handleTriggerClick : undefined}
        onMouseEnter={handleTriggerMouseEnter}
        onMouseLeave={handleTriggerMouseLeave}
        onFocus={handleTriggerFocus}
        onBlur={handleTriggerBlur}
        tabIndex={trigger === 'focus' ? 0 : undefined}
      >
        {children}
      </div>
      {internalVisible && (
        <div
          ref={popoverRef}
          className={`${styles.popover} ${getPlacementClass()}`}
        >
          <div className={styles.popoverContent}>{content}</div>
          <div
            className={`${styles.popoverArrow} ${
              styles[
                `arrow${placement.charAt(0).toUpperCase() + placement.slice(1)}`
              ]
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default Popover;
