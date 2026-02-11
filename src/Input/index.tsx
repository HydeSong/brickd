import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'> {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  size = 'default',
  disabled = false,
  readOnly = false,
  error = false,
  prefix,
  suffix,
  className = '',
  style = {},
  ...rest
}) => {
  const getInputClass = () => {
    const classes = [styles.inputElement];
    
    // Add size class
    if (size !== 'default') {
      classes.push(styles[`inputSize${size.charAt(0).toUpperCase() + size.slice(1)}`]);
    }
    
    // Add error class
    if (error) {
      classes.push(styles.inputError);
    }
    
    return classes.join(' ');
  };

  return (
    <div className={`${styles.input} ${className}`} style={style}>
      <div className={styles.inputWrapper}>
        {prefix && <span className={styles.inputPrefix}>{prefix}</span>}
        <input
          className={getInputClass()}
          disabled={disabled}
          readOnly={readOnly}
          {...rest}
        />
        {suffix && <span className={styles.inputSuffix}>{suffix}</span>}
      </div>
    </div>
  );
};

export default Input;