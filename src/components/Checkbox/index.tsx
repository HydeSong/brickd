import React, { useEffect, useState } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
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

interface CheckboxOption {
  label: React.ReactNode;
  value: string | number | boolean;
  disabled?: boolean;
}

interface CheckboxGroupProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  options?: CheckboxOption[];
  value?: (string | number | boolean)[];
  defaultValue?: (string | number | boolean)[];
  onChange?: (values: (string | number | boolean)[]) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

type CheckboxComponent = React.FC<CheckboxProps> & {
  Group: React.FC<CheckboxGroupProps>;
};

export const Checkbox: CheckboxComponent = ({
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

  const getCheckboxClass = () => {
    const classes = [styles.checkbox];

    // Add size class
    if (size !== 'default') {
      classes.push(
        styles[`checkboxSize${size.charAt(0).toUpperCase() + size.slice(1)}`],
      );
    }

    return classes.join(' ');
  };

  return (
    <label className={`${getCheckboxClass()} ${className}`} style={style}>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        disabled={disabled}
        checked={internalChecked}
        onChange={handleChange}
      />
      <span className={styles.checkboxInner}></span>
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  size = 'default',
  disabled = false,
  direction = 'horizontal',
  options = [],
  value,
  defaultValue = [],
  onChange,
  className = '',
  style = {},
  children,
}) => {
  const [internalValue, setInternalValue] =
    useState<(string | number | boolean)[]>(defaultValue);

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleOptionChange = (
    optionValue: string | number | boolean,
    checked: boolean,
  ) => {
    let newValues: (string | number | boolean)[];
    if (checked) {
      newValues = [...internalValue, optionValue];
    } else {
      newValues = internalValue.filter((item) => item !== optionValue);
    }

    setInternalValue(newValues);
    if (onChange) {
      onChange(newValues);
    }
  };

  const getGroupClass = () => {
    const classes = [styles.checkboxGroup];

    // Add direction class
    classes.push(
      styles[
        `checkboxGroup${direction.charAt(0).toUpperCase() + direction.slice(1)}`
      ],
    );

    return classes.join(' ');
  };

  // 渲染选项
  const renderOptions = () => {
    return options.map((option, index) => (
      <Checkbox
        key={index}
        size={size}
        disabled={disabled || option.disabled}
        checked={internalValue.includes(option.value)}
        onCheck={(checked) => handleOptionChange(option.value, checked)}
        label={option.label}
        className={styles.checkboxGroupItem}
      />
    ));
  };

  return (
    <div className={`${getGroupClass()} ${className}`} style={style}>
      {options.length > 0 ? renderOptions() : children}
    </div>
  );
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
