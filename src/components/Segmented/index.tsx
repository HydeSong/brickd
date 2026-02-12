import React from 'react';
import styles from './Segmented.module.css';

interface Option {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
}

interface SegmentedProps {
  options?: Option[];
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function Segmented(props: SegmentedProps) {
  const {
    options = [],
    value: controlledValue,
    defaultValue,
    onChange,
    disabled = false,
    className = '',
    style = {},
  } = props;

  const [internalValue, setInternalValue] = React.useState<string | number>(
    defaultValue || (options[0] ? options[0].value : ''),
  );

  const currentValue =
    controlledValue !== undefined ? controlledValue : internalValue;

  function handleClick(option: Option) {
    if (disabled || option.disabled) return;

    const newValue = option.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  }

  return React.createElement(
    'div',
    {
      className: `${styles.segmented} ${className} ${
        disabled ? styles.disabled : ''
      }`,
      style: style,
    },
    options.map((option: Option, index: number) => {
      const isActive = currentValue === option.value;
      const isDisabled = disabled || option.disabled;

      return React.createElement(
        'div',
        {
          key: option.value,
          className: `${styles.segmentedItem} ${
            isActive ? styles.active : ''
          } ${isDisabled ? styles.itemDisabled : ''}`,
          style: {
            borderLeft: index === 0 ? '1px solid #d9d9d9' : 'none',
          },
          onClick: function () {
            handleClick(option);
          },
        },
        React.createElement(
          'div',
          {
            className: styles.segmentedItemLabel,
          },
          option.label,
        ),
      );
    }),
  );
}

export default Segmented;
