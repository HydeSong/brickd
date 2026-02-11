import React, { useState } from 'react';
import styles from './Segmented.module.css';

const Segmented = ({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  disabled = false,
  className,
  style,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || (options[0]?.value || ''));

  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

  const handleClick = (option) => {
    if (disabled || option.disabled) return;
    
    const newValue = option.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div
      className={`${styles.segmented} ${className || ''} ${disabled ? styles.disabled : ''}`}
      style={style}
    >
      {options.map((option, index) => {
        const isActive = currentValue === option.value;
        const isDisabled = disabled || option.disabled;
        
        return (
          <div
            key={option.value}
            className={`${styles.segmentedItem} ${isActive ? styles.active : ''} ${isDisabled ? styles.itemDisabled : ''}`}
            style={{
              borderLeft: index === 0 ? '1px solid #d9d9d9' : 'none',
            }}
            onClick={() => handleClick(option)}
          >
            <div className={styles.segmentedItemLabel}>{option.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Segmented;