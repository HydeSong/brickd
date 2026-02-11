import React, { useState, useEffect, useRef } from 'react';
import styles from './Tour.module.css';

export interface TourStep {
  title?: React.ReactNode;
  content: React.ReactNode;
  target: string | HTMLElement;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  offset?: number;
}

export interface TourProps {
  steps: TourStep[];
  visible: boolean;
  current?: number;
  onFinish?: () => void;
  onCancel?: () => void;
  onCurrentChange?: (current: number) => void;
  mask?: boolean;
  maskClosable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Tour: React.FC<TourProps> = ({
  steps,
  visible,
  current: controlledCurrent,
  onFinish,
  onCancel,
  onCurrentChange,
  mask = true,
  maskClosable = true,
  className,
  style,
}) => {
  const [current, setCurrent] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const tourRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledCurrent !== undefined;
  const currentStep = isControlled ? controlledCurrent : current;
  const step = steps[currentStep];

  // Update current state when controlledCurrent changes
  useEffect(() => {
    if (isControlled && controlledCurrent !== current) {
      setCurrent(controlledCurrent);
    }
  }, [controlledCurrent, isControlled]);

  // Update target rect when step changes
  useEffect(() => {
    if (visible && step) {
      updateTargetRect();
    }
  }, [visible, step]);

  const getTargetElement = (target: string | HTMLElement): HTMLElement | null => {
    if (typeof target === 'string') {
      return document.querySelector(target);
    }
    return target;
  };

  const updateTargetRect = () => {
    if (!step) return;
    const targetElement = getTargetElement(step.target);
    if (targetElement) {
      setTargetRect(targetElement.getBoundingClientRect());
    }
  };

  useEffect(() => {
    if (visible && step) {
      updateTargetRect();
      window.addEventListener('resize', updateTargetRect);
      return () => {
        window.removeEventListener('resize', updateTargetRect);
      };
    }
  }, [visible, step]);

  const handleNext = () => {
    const nextStep = currentStep + 1;
    if (nextStep < steps.length) {
      if (!isControlled) {
        setCurrent(nextStep);
      }
      if (onCurrentChange) {
        onCurrentChange(nextStep);
      }
      setTimeout(updateTargetRect, 0);
    } else {
      if (onFinish) {
        onFinish();
      }
    }
  };

  const handlePrev = () => {
    const prevStep = currentStep - 1;
    if (prevStep >= 0) {
      if (!isControlled) {
        setCurrent(prevStep);
      }
      if (onCurrentChange) {
        onCurrentChange(prevStep);
      }
      setTimeout(updateTargetRect, 0);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleMaskClick = () => {
    if (maskClosable) {
      handleCancel();
    }
  };

  if (!visible || !step) return null;

  const placement = step.placement || 'top';
  const offset = step.offset || 10;

  let popupStyle: React.CSSProperties = {};
  if (targetRect) {
    if (placement === 'top') {
      popupStyle = {
        top: targetRect.top - offset - 300,
        left: targetRect.left + targetRect.width / 2,
        transform: 'translateX(-50%)',
      };
    } else if (placement === 'bottom') {
      popupStyle = {
        top: targetRect.bottom + offset,
        left: targetRect.left + targetRect.width / 2,
        transform: 'translateX(-50%)',
      };
    } else if (placement === 'left') {
      popupStyle = {
        top: targetRect.top + targetRect.height / 2,
        left: targetRect.left - offset - 300,
        transform: 'translateY(-50%)',
      };
    } else if (placement === 'right') {
      popupStyle = {
        top: targetRect.top + targetRect.height / 2,
        left: targetRect.right + offset,
        transform: 'translateY(-50%)',
      };
    }
  }

  const tourClassName = [
    styles.tour,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={tourClassName} style={style} ref={tourRef}>
      {mask && (
        <div 
          className={styles.tourMask} 
          ref={maskRef}
          onClick={handleMaskClick}
        >
          {targetRect && (
            <div 
              className={styles.tourMaskHole}
              style={{
                top: targetRect.top,
                left: targetRect.left,
                width: targetRect.width,
                height: targetRect.height,
              }}
            />
          )}
        </div>
      )}
      <div className={styles.tourPopup} style={popupStyle}>
        <div className={styles.tourPopupContent}>
          {step.title && (
            <div className={styles.tourPopupTitle}>
              {step.title}
            </div>
          )}
          <div className={styles.tourPopupDescription}>
            {step.content}
          </div>
          <div className={styles.tourPopupFooter}>
            <button
              className={styles.tourPopupButton}
              onClick={handleCancel}
            >
              取消
            </button>
            <div className={styles.tourPopupControls}>
              {currentStep > 0 && (
                <button
                  className={styles.tourPopupButton}
                  onClick={handlePrev}
                >
                  上一步
                </button>
              )}
              <button
                className={`${styles.tourPopupButton} ${styles.tourPopupButtonPrimary}`}
                onClick={handleNext}
              >
                {currentStep === steps.length - 1 ? '完成' : '下一步'}
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.tourPopupArrow} ${styles[`tourPopupArrow-${placement}`]}`} />
      </div>
    </div>
  );
};

export default Tour;