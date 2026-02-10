import React, { useState, useEffect } from 'react';
import styles from './Radio.module.css';

interface RadioProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  value?: string | number | boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck?: (checked: boolean) => void;
  label?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface RadioOption {
  label: React.ReactNode;
  value: string | number | boolean;
  disabled?: boolean;
}

interface RadioGroupProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  options?: RadioOption[];
  value?: string | number | boolean;
  defaultValue?: string | number | boolean;
  onChange?: (value: string | number | boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Radio: React.FC<RadioProps> = ({
  size = 'default',
  disabled = false,
  checked,
  defaultChecked,
  value,
  onChange,
  onCheck,
  label,
  className = '',
  style = {},
}) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked || false);
  
  // 当外部 checked 变化时，更新内部状态
  useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setInternalChecked(newChecked);
    
    if (onChange) {
      onChange(e);
    }
    if (onCheck) {
      onCheck(newChecked);
    }
  };

  const getRadioClass = () => {
    const classes = [styles.radio];
    
    // Add size class
    if (size !== 'default') {
      classes.push(styles[`radioSize${size.charAt(0).toUpperCase() + size.slice(1)}`]);
    }
    
    return classes.join(' ');
  };

  return (
    <label className={`${getRadioClass()} ${className}`} style={style}>
      <input
        type="radio"
        className={styles.radioInput}
        disabled={disabled}
        checked={internalChecked}
        onChange={handleChange}
        value={value}
      />
      <span className={styles.radioInner}></span>
      {label && <span className={styles.radioLabel}>{label}</span>}
    </label>
  );
};

const RadioGroup: React.FC<RadioGroupProps> = ({ 
  size = 'default',
  disabled = false,
  direction = 'horizontal',
  options = [],
  value,
  defaultValue,
  onChange,
  className = '',
  style = {},
  children,
}) => {
  const [internalValue, setInternalValue] = useState<string | number | boolean>(defaultValue);
  
  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleOptionChange = (optionValue: string | number | boolean) => {
    setInternalValue(optionValue);
    if (onChange) {
      onChange(optionValue);
    }
  };

  // 渲染选项
  const renderOptions = () => {
    return options.map((option, index) => (
      <Radio
        key={index}
        size={size}
        disabled={disabled || option.disabled}
        checked={internalValue === option.value}
        value={option.value}
        onCheck={() => handleOptionChange(option.value)}
        label={option.label}
        className={styles.radioGroupItem}
      />
    ));
  };

  const groupClass = `${styles.radioGroup} ${styles[`radioGroup${direction.charAt(0).toUpperCase() + direction.slice(1)}`]} ${className}`;

  return (
    <div className={groupClass} style={style}>
      {options.length > 0 ? renderOptions() : children}
    </div>
  );
};

Radio.Group = RadioGroup;

export default Radio;