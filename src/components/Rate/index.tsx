import React, { useEffect, useState } from 'react';
import styles from './Rate.module.css';

interface RateProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  onHoverChange?: (value: number) => void;
  count?: number;
  allowHalf?: boolean;
  allowClear?: boolean;
  readOnly?: boolean;
  character?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Rate: React.FC<RateProps> = ({
  size = 'default',
  disabled = false,
  value,
  defaultValue = 0,
  onChange,
  onHoverChange,
  count = 5,
  allowHalf = false,
  allowClear = true,
  readOnly = false,
  character = '★',
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<number>(defaultValue);
  const [hoverValue, setHoverValue] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // 处理点击事件
  const handleClick = (index: number, e: React.MouseEvent) => {
    if (disabled || readOnly) return;

    let newValue: number;
    if (allowHalf) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const halfWidth = rect.width / 2;
      newValue = index + (clickX < halfWidth ? 0.5 : 1);
    } else {
      newValue = index + 1;
    }

    // 支持清空
    if (allowClear && newValue === internalValue) {
      newValue = 0;
    }

    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  // 处理鼠标悬停事件
  const handleMouseEnter = (index: number, e: React.MouseEvent) => {
    if (disabled || readOnly) return;

    let newValue: number;
    if (allowHalf) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const hoverX = e.clientX - rect.left;
      const halfWidth = rect.width / 2;
      newValue = index + (hoverX < halfWidth ? 0.5 : 1);
    } else {
      newValue = index + 1;
    }

    setHoverValue(newValue);
    setIsHovering(true);
    if (onHoverChange) {
      onHoverChange(newValue);
    }
  };

  // 处理鼠标离开事件
  const handleMouseLeave = () => {
    if (disabled || readOnly) return;

    setHoverValue(0);
    setIsHovering(false);
    if (onHoverChange) {
      onHoverChange(0);
    }
  };

  // 获取当前显示的值
  const getCurrentValue = () => {
    return isHovering ? hoverValue : internalValue;
  };

  // 获取评分项类名
  const getItemClass = (index: number) => {
    const currentValue = getCurrentValue();
    const itemValue = index + 1;
    const classes = [styles.rateItem];

    if (disabled) {
      classes.push(styles.rateItemDisabled);
    }

    if (itemValue <= currentValue) {
      classes.push(styles.rateItemActive);
    } else if (allowHalf && itemValue - 0.5 === currentValue) {
      classes.push(styles.rateItemHalf);
    }

    return classes.join(' ');
  };

  // 获取评分组件类名
  const getRateClass = () => {
    const classes = [styles.rate];

    if (size !== 'default') {
      classes.push(
        styles[`rateSize${size.charAt(0).toUpperCase() + size.slice(1)}`],
      );
    }

    if (allowHalf) {
      classes.push(styles.rateAllowHalf);
    }

    if (readOnly) {
      classes.push(styles.rateReadOnly);
    }

    return classes.join(' ');
  };

  // 渲染评分项
  const renderItems = () => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(
        <div
          key={i}
          className={getItemClass(i)}
          onClick={(e) => handleClick(i, e)}
          onMouseEnter={(e) => handleMouseEnter(i, e)}
          onMouseLeave={handleMouseLeave}
        >
          {character}
        </div>,
      );
    }
    return items;
  };

  return (
    <div className={`${getRateClass()} ${className}`} style={style}>
      {renderItems()}
    </div>
  );
};

export default Rate;
