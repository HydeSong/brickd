import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './InputNumber.module.css';

interface InputNumberProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number | undefined) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const InputNumber: React.FC<InputNumberProps> = ({
  size = 'default',
  disabled = false,
  readOnly = false,
  error = false,
  min,
  max,
  step = 1,
  value,
  defaultValue,
  onChange,
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<number | undefined>(
    defaultValue,
  );

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // 处理空值
    if (inputValue === '') {
      setInternalValue(undefined);
      if (onChange) {
        onChange(undefined);
      }
      return;
    }

    // 处理数字输入
    const numValue = Number(inputValue);
    if (!isNaN(numValue)) {
      // 检查最小值和最大值
      let validValue = numValue;
      if (min !== undefined && validValue < min) {
        validValue = min;
      }
      if (max !== undefined && validValue > max) {
        validValue = max;
      }

      setInternalValue(validValue);
      if (onChange) {
        onChange(validValue);
      }
    }
  };

  const handleIncrement = () => {
    if (disabled || readOnly) return;

    const currentValue = internalValue || 0;
    const newValue = currentValue + step;

    // 检查最大值
    if (max === undefined || newValue <= max) {
      setInternalValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  const handleDecrement = () => {
    if (disabled || readOnly) return;

    const currentValue = internalValue || 0;
    const newValue = currentValue - step;

    // 检查最小值
    if (min === undefined || newValue >= min) {
      setInternalValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  const getWrapperClass = () => {
    const classes = [styles.inputNumberWrapper];

    // Add size class
    if (size !== 'default') {
      classes.push(
        styles[
          `inputNumberSize${size.charAt(0).toUpperCase() + size.slice(1)}`
        ],
      );
    }

    // Add error class
    if (error) {
      classes.push(styles.inputNumberError);
    }

    return classes.join(' ');
  };

  return (
    <div className={`${styles.inputNumber} ${className}`} style={style}>
      <div className={getWrapperClass()}>
        <input
          type="number"
          className={styles.inputNumberInput}
          disabled={disabled}
          readOnly={readOnly}
          value={internalValue === undefined ? '' : internalValue}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
        />
        <div className={styles.inputNumberControls}>
          <button
            type="button"
            className={styles.inputNumberButton}
            disabled={
              disabled ||
              readOnly ||
              (max !== undefined && (internalValue || 0) >= max)
            }
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            type="button"
            className={styles.inputNumberButton}
            disabled={
              disabled ||
              readOnly ||
              (min !== undefined && (internalValue || 0) <= min)
            }
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
