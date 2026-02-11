import React from 'react';
import styles from './Segmented.module.css';

function Segmented(props) {
  const {
    options = [],
    value: controlledValue,
    defaultValue,
    onChange,
    disabled = false,
    className = '',
    style = {},
  } = props;

  const [internalValue, setInternalValue] = React.useState(defaultValue || (options[0] ? options[0].value : ''));

  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

  function handleClick(option) {
    if (disabled || option.disabled) return;
    
    const newValue = option.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  }

  return React.createElement('div', {
    className: `${styles.segmented} ${className} ${disabled ? styles.disabled : ''}`,
    style: style,
  }, options.map((option, index) => {
    const isActive = currentValue === option.value;
    const isDisabled = disabled || option.disabled;
    
    return React.createElement('div', {
      key: option.value,
      className: `${styles.segmentedItem} ${isActive ? styles.active : ''} ${isDisabled ? styles.itemDisabled : ''}`,
      style: {
        borderLeft: index === 0 ? '1px solid #d9d9d9' : 'none',
      },
      onClick: function() {
        handleClick(option);
      },
    }, React.createElement('div', {
      className: styles.segmentedItemLabel,
    }, option.label));
  }));
}

export default Segmented;