import React, { useEffect, useRef, useState } from 'react';
import styles from './Tooltip.module.css';

export interface TooltipProps {
  title: React.ReactNode;
  children: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'focus' | 'click';
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  delay?: number;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  placement = 'top',
  trigger = 'hover',
  visible: controlledVisible,
  onVisibleChange,
  delay = 0,
  overlayClassName,
  overlayStyle,
  className,
  style,
}) => {
  const [visible, setVisible] = useState(false);
  const [showing, setShowing] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledVisible !== undefined;
  const currentVisible = isControlled ? controlledVisible : visible;

  // 当 controlledVisible 变化时，同步 showing 状态
  useEffect(() => {
    if (isControlled) {
      if (controlledVisible) {
        setShowing(true);
      } else {
        setShowing(false);
      }
    }
  }, [controlledVisible, isControlled]);

  const handleShow = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      const newVisible = true;
      if (!isControlled) {
        setVisible(newVisible);
      }
      if (onVisibleChange) {
        onVisibleChange(newVisible);
      }
      setShowing(true);
    }, delay);
  };

  const handleHide = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const newVisible = false;
    if (!isControlled) {
      setVisible(newVisible);
    }
    if (onVisibleChange) {
      onVisibleChange(newVisible);
    }
    setShowing(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const tooltipClassName = [
    styles.tooltip,
    styles[`tooltip-${placement}`],
    currentVisible ? styles.tooltipVisible : styles.tooltipHidden,
    overlayClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const triggerClassName = [styles.tooltipTrigger, className]
    .filter(Boolean)
    .join(' ');

  const triggerProps = {
    className: triggerClassName,
    style,
    ref: triggerRef,
  };

  const eventProps: React.HTMLAttributes<HTMLDivElement> = {};

  if (trigger === 'hover') {
    eventProps.onMouseEnter = handleShow;
    eventProps.onMouseLeave = handleHide;
  } else if (trigger === 'focus') {
    eventProps.onFocus = handleShow;
    eventProps.onBlur = handleHide;
  } else if (trigger === 'click') {
    eventProps.onClick = () => {
      if (currentVisible) {
        handleHide();
      } else {
        handleShow();
      }
    };
  }

  return (
    <div className={styles.tooltipWrapper}>
      <div {...triggerProps} {...eventProps}>
        {children}
      </div>
      {currentVisible && showing && (
        <div ref={tooltipRef} className={tooltipClassName} style={overlayStyle}>
          <div className={styles.tooltipArrow} />
          <div className={styles.tooltipInner}>{title}</div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
