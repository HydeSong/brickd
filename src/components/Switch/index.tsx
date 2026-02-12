import React, { useEffect, useState } from 'react';
import styles from './Switch.module.css';

interface SwitchProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck?: (checked: boolean) => void;
  label?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Switch: React.FC<SwitchProps> = ({
  size = 'default',
  disabled = false,
  checked,
  defaultChecked,
  onChange,
  onCheck,
  label,
  className = '',
  style = {},
}) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(
    defaultChecked || false,
  );

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

  const getSwitchClass = () => {
    const classes = [styles.switch];

    // Add size class
    if (size !== 'default') {
      classes.push(
        styles[`switchSize${size.charAt(0).toUpperCase() + size.slice(1)}`],
      );
    }

    return classes.join(' ');
  };

  return (
    <label className={`${getSwitchClass()} ${className}`} style={style}>
      <input
        type="checkbox"
        className={styles.switchInput}
        disabled={disabled}
        checked={internalChecked}
        onChange={handleChange}
      />
      <span className={styles.switchInner}></span>
      {label && <span className={styles.switchLabel}>{label}</span>}
    </label>
  );
};

export default Switch;
