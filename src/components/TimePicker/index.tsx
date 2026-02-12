import React, { useEffect, useRef, useState } from 'react';
import styles from './TimePicker.module.css';

interface TimePickerProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (time: string) => void;
  onOpenChange?: (open: boolean) => void;
  placeholder?: string;
  format?: string;
  use12Hours?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// 格式化时间
const formatTime = (
  hours: number,
  minutes: number,
  use12Hours: boolean = false,
): string => {
  if (use12Hours) {
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')} ${period}`;
  }
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
};

// 解析时间字符串
const parseTime = (timeString: string): { hours: number; minutes: number } => {
  if (!timeString) {
    return { hours: 0, minutes: 0 };
  }

  const match = timeString.match(/^(\d+):(\d+)(?:\s*(AM|PM))?$/i);
  if (!match) {
    return { hours: 0, minutes: 0 };
  }

  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3];

  if (period) {
    if (period.toUpperCase() === 'PM' && hours < 12) {
      hours += 12;
    } else if (period.toUpperCase() === 'AM' && hours === 12) {
      hours = 0;
    }
  }

  return { hours, minutes };
};

export const TimePicker: React.FC<TimePickerProps> = ({
  size = 'default',
  disabled = false,
  value,
  defaultValue = '',
  onChange,
  onOpenChange,
  placeholder = '请选择时间',
  use12Hours = false,
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<string>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHours, setSelectedHours] = useState<number>(0);
  const [selectedMinutes, setSelectedMinutes] = useState<number>(0);
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>('AM');

  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
      const { hours, minutes } = parseTime(value);
      setSelectedHours(hours);
      setSelectedMinutes(minutes);
      setSelectedPeriod(hours >= 12 ? 'PM' : 'AM');
    }
  }, [value]);

  // 当初始值变化时，更新内部状态
  useEffect(() => {
    if (defaultValue && !value) {
      setInternalValue(defaultValue);
      const { hours, minutes } = parseTime(defaultValue);
      setSelectedHours(hours);
      setSelectedMinutes(minutes);
      setSelectedPeriod(hours >= 12 ? 'PM' : 'AM');
    }
  }, [defaultValue, value]);

  // 处理小时选择
  const handleHourSelect = (hour: number) => {
    let newHours = hour;
    if (use12Hours) {
      if (selectedPeriod === 'PM' && newHours < 12) {
        newHours += 12;
      } else if (selectedPeriod === 'AM' && newHours === 12) {
        newHours = 0;
      }
    }
    setSelectedHours(newHours);
  };

  // 处理分钟选择
  const handleMinuteSelect = (minute: number) => {
    setSelectedMinutes(minute);
  };

  // 处理周期选择（AM/PM）
  const handlePeriodSelect = (period: 'AM' | 'PM') => {
    setSelectedPeriod(period);
    if (selectedHours === 0) {
      setSelectedHours(12);
    } else if (selectedHours === 12) {
      setSelectedHours(0);
    }
  };

  // 处理确认按钮点击
  const handleConfirm = () => {
    const newTime = formatTime(selectedHours, selectedMinutes, use12Hours);
    setInternalValue(newTime);
    if (onChange) {
      onChange(newTime);
    }
    setIsOpen(false);
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  // 处理取消按钮点击
  const handleCancel = () => {
    setIsOpen(false);
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  // 处理现在按钮点击
  const handleNow = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    setSelectedHours(hours);
    setSelectedMinutes(minutes);
    setSelectedPeriod(hours >= 12 ? 'PM' : 'AM');
  };

  // 处理触发器点击
  const handleTriggerClick = () => {
    if (!disabled) {
      const newOpenState = !isOpen;
      setIsOpen(newOpenState);
      if (onOpenChange) {
        onOpenChange(newOpenState);
      }
    }
  };

  // 处理点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        if (onOpenChange) {
          onOpenChange(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOpenChange]);

  // 获取触发器类名
  const getTriggerClass = () => {
    const classes = [styles.timePickerTrigger];

    if (size !== 'default') {
      classes.push(
        styles[`timePickerSize${size.charAt(0).toUpperCase() + size.slice(1)}`],
      );
    }

    if (disabled) {
      classes.push(styles.timePickerTriggerDisabled);
    }

    return classes.join(' ');
  };

  // 生成小时选项
  const generateHours = () => {
    const hours = [];
    const maxHours = use12Hours ? 12 : 24;
    for (let i = 0; i < maxHours; i++) {
      const displayHour = use12Hours ? (i === 0 ? 12 : i) : i;
      const isActive = use12Hours
        ? displayHour === 12
          ? selectedHours === 0 || selectedHours === 12
          : selectedHours === i
        : selectedHours === i;
      hours.push(
        <div
          key={i}
          className={`${styles.timePickerItem} ${
            isActive ? styles.timePickerItemActive : ''
          }`}
          onClick={() => handleHourSelect(i)}
        >
          {displayHour.toString().padStart(2, '0')}
        </div>,
      );
    }
    return hours;
  };

  // 生成分钟选项
  const generateMinutes = () => {
    const minutes = [];
    for (let i = 0; i < 60; i += 5) {
      const isActive = selectedMinutes === i;
      minutes.push(
        <div
          key={i}
          className={`${styles.timePickerItem} ${
            isActive ? styles.timePickerItemActive : ''
          }`}
          onClick={() => handleMinuteSelect(i)}
        >
          {i.toString().padStart(2, '0')}
        </div>,
      );
    }
    return minutes;
  };

  // 生成周期选项（AM/PM）
  const generatePeriods = () => {
    if (!use12Hours) return null;

    return (
      <div className={styles.timePickerColumn}>
        <div className={styles.timePickerColumnTitle}>周期</div>
        <div className={styles.timePickerItems}>
          <div
            className={`${styles.timePickerItem} ${
              selectedPeriod === 'AM' ? styles.timePickerItemActive : ''
            }`}
            onClick={() => handlePeriodSelect('AM')}
          >
            AM
          </div>
          <div
            className={`${styles.timePickerItem} ${
              selectedPeriod === 'PM' ? styles.timePickerItemActive : ''
            }`}
            onClick={() => handlePeriodSelect('PM')}
          >
            PM
          </div>
        </div>
      </div>
    );
  };

  // 渲染时间选择菜单
  const renderMenu = () => {
    if (!isOpen) return null;

    return (
      <div ref={menuRef} className={styles.timePickerMenu}>
        <div className={styles.timePickerHeader}>
          <div className={styles.timePickerHeaderTitle}>选择时间</div>
        </div>

        <div className={styles.timePickerBody}>
          <div className={styles.timePickerColumns}>
            <div className={styles.timePickerColumn}>
              <div className={styles.timePickerColumnTitle}>小时</div>
              <div className={styles.timePickerItems}>{generateHours()}</div>
            </div>

            <div className={styles.timePickerColumn}>
              <div className={styles.timePickerColumnTitle}>分钟</div>
              <div className={styles.timePickerItems}>{generateMinutes()}</div>
            </div>

            {generatePeriods()}
          </div>
        </div>

        <div className={styles.timePickerFooter}>
          <button
            type="button"
            className={styles.timePickerFooterButton}
            onClick={handleNow}
          >
            现在
          </button>
          <button
            type="button"
            className={styles.timePickerFooterButton}
            onClick={handleCancel}
          >
            取消
          </button>
          <button
            type="button"
            className={`${styles.timePickerFooterButton} ${styles.timePickerFooterButtonPrimary}`}
            onClick={handleConfirm}
          >
            确定
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.timePicker} ${className}`} style={style}>
      <div
        ref={triggerRef}
        className={getTriggerClass()}
        onClick={handleTriggerClick}
      >
        <span
          className={
            internalValue
              ? styles.timePickerValue
              : styles.timePickerPlaceholder
          }
        >
          {internalValue || placeholder}
        </span>
        <span
          className={`${styles.timePickerArrow} ${
            isOpen ? styles.timePickerArrowOpen : ''
          }`}
        >
          ▼
        </span>
      </div>
      {renderMenu()}
    </div>
  );
};

export default TimePicker;
