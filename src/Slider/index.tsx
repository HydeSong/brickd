import React, { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css';

interface SliderMark {
  value: number;
  label: React.ReactNode;
}

interface SliderProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  onAfterChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  marks?: SliderMark[];
  dots?: boolean;
  range?: boolean;
  vertical?: boolean;
  tooltip?: boolean | { open?: boolean };
  tooltipVisible?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Slider: React.FC<SliderProps> = ({
  size = 'default',
  disabled = false,
  value,
  defaultValue = 0,
  onChange,
  onAfterChange,
  min = 0,
  max = 100,
  step = 1,
  marks = [],
  dots = false,
  range = false,
  vertical = false,
  tooltip = true,
  tooltipVisible,
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<number>(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // 处理鼠标按下事件
  const handleMouseDown = (e: React.MouseEvent) => {
    if (disabled) return;
    setIsDragging(true);
    updateValue(e);
    setTooltipOpen(true);
  };

  // 处理鼠标移动事件
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updateValue(e);
  };

  // 处理鼠标松开事件
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setTooltipOpen(false);
      if (onAfterChange) {
        onAfterChange(internalValue);
      }
    }
  };

  // 处理鼠标离开事件
  const handleMouseLeave = () => {
    if (!isDragging) {
      setTooltipOpen(false);
    }
  };

  // 处理鼠标悬停事件
  const handleMouseEnter = () => {
    if (!isDragging) {
      setTooltipOpen(true);
    }
  };

  // 更新滑块值
  const updateValue = (e: React.MouseEvent | MouseEvent) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    let percentage: number;

    if (vertical) {
      const clientY = 'clientY' in e ? e.clientY : (e as MouseEvent).clientY;
      percentage = 1 - (clientY - rect.top) / rect.height;
    } else {
      const clientX = 'clientX' in e ? e.clientX : (e as MouseEvent).clientX;
      percentage = (clientX - rect.left) / rect.width;
    }

    // 限制百分比在 0-1 之间
    percentage = Math.max(0, Math.min(1, percentage));

    // 计算实际值
    let newValue = min + percentage * (max - min);

    // 按步长取整
    newValue = Math.round(newValue / step) * step;

    // 限制在 min-max 之间
    newValue = Math.max(min, Math.min(max, newValue));

    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  // 监听全局鼠标事件
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  // 计算滑块位置百分比
  const getPercentage = () => {
    return ((internalValue - min) / (max - min)) * 100;
  };

  // 获取滑块样式
  const getSliderStyle = () => {
    const percentage = getPercentage();
    if (vertical) {
      return {
        height: `${percentage}%`,
      };
    } else {
      return {
        width: `${percentage}%`,
      };
    }
  };

  // 获取滑块把手样式
  const getHandleStyle = () => {
    const percentage = getPercentage();
    if (vertical) {
      return {
        bottom: `${percentage}%`,
      };
    } else {
      return {
        left: `${percentage}%`,
      };
    }
  };

  // 获取滑块类名
  const getSliderClass = () => {
    const classes = [styles.slider];

    if (size !== 'default') {
      classes.push(styles[`sliderSize${size.charAt(0).toUpperCase() + size.slice(1)}`]);
    }

    if (disabled) {
      classes.push(styles.sliderDisabled);
    }

    if (vertical) {
      classes.push(styles.sliderVertical);
    }

    return classes.join(' ');
  };

  // 渲染标记
  const renderMarks = () => {
    if (!marks || marks.length === 0) return null;

    return (
      <div className={styles.sliderMarks}>
        {marks.map(mark => {
          const percentage = ((mark.value - min) / (max - min)) * 100;
          const isActive = mark.value === internalValue;
          const markStyle = vertical ? { bottom: `${percentage}%` } : { left: `${percentage}%` };

          return (
            <div
              key={mark.value}
              className={`${styles.sliderMark} ${isActive ? styles.sliderMarkActive : ''}`}
              style={markStyle}
            >
              {mark.label}
            </div>
          );
        })}
      </div>
    );
  };

  // 渲染 tooltip
  const renderTooltip = () => {
    const shouldShowTooltip = tooltipVisible !== undefined ? tooltipVisible : (tooltip && tooltipOpen);
    if (!shouldShowTooltip) return null;

    return (
      <div className={styles.sliderTooltip}>
        {internalValue}
      </div>
    );
  };

  return (
    <div className={`${getSliderClass()} ${className}`} style={style}>
      <div
        ref={sliderRef}
        className={styles.sliderTrack}
        onClick={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.sliderTrackHighlight} style={getSliderStyle()} />
        <div
          className={`${styles.sliderHandle} ${
            isDragging ? styles.sliderHandleActive : ''
          } ${
            disabled ? styles.sliderHandleDisabled : ''
          }`}
          style={getHandleStyle()}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {renderTooltip()}
        </div>
      </div>
      {renderMarks()}
    </div>
  );
};

export default Slider;