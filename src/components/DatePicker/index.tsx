import React, { useEffect, useRef, useState } from 'react';
import styles from './DatePicker.module.css';

interface DatePickerProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (date: string) => void;
  onOpenChange?: (open: boolean) => void;
  placeholder?: string;
  format?: string;
  className?: string;
  style?: React.CSSProperties;
}

// 格式化日期
const formatDate = (date: Date, format: string = 'YYYY-MM-DD'): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day);
};

// 获取月份的天数
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

// 获取月份的第一天是星期几
const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

// 生成月份的日期数组
const generateMonthDays = (year: number, month: number) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const days: { date: Date; isCurrentMonth: boolean }[] = [];

  // 添加上个月的日期
  const daysInPrevMonth = getDaysInMonth(year, month - 1);
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, daysInPrevMonth - i),
      isCurrentMonth: false,
    });
  }

  // 添加当前月的日期
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(year, month, i),
      isCurrentMonth: true,
    });
  }

  // 添加下个月的日期
  const daysToAdd = 42 - days.length; // 6 rows * 7 days
  for (let i = 1; i <= daysToAdd; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      isCurrentMonth: false,
    });
  }

  return days;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  size = 'default',
  disabled = false,
  value,
  defaultValue = '',
  onChange,
  onOpenChange,
  placeholder = '请选择日期',
  format = 'YYYY-MM-DD',
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<string>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // 处理日期选择
  const handleDateSelect = (date: Date) => {
    const formattedDate = formatDate(date, format);
    setInternalValue(formattedDate);
  };

  // 处理确认按钮点击
  const handleConfirm = () => {
    if (onChange) {
      onChange(internalValue);
    }
    setIsOpen(false);
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  // 处理取消按钮点击
  const handleCancel = () => {
    // 重置为之前的选择
    setIsOpen(false);
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  // 处理今天按钮点击
  const handleToday = () => {
    const today = new Date();
    const formattedDate = formatDate(today, format);
    setInternalValue(formattedDate);
    setCurrentDate(today);
  };

  // 处理月份导航
  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
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
    const classes = [styles.datePickerTrigger];

    if (size !== 'default') {
      classes.push(
        styles[`datePickerSize${size.charAt(0).toUpperCase() + size.slice(1)}`],
      );
    }

    if (disabled) {
      classes.push(styles.datePickerTriggerDisabled);
    }

    return classes.join(' ');
  };

  // 生成月份的日期
  const days = generateMonthDays(
    currentDate.getFullYear(),
    currentDate.getMonth(),
  );

  // 渲染日期选择面板
  const renderDatePanel = () => {
    if (!isOpen) return null;

    return (
      <div ref={menuRef} className={styles.datePickerMenu}>
        {/* 头部导航 */}
        <div className={styles.datePickerHeader}>
          <div className={styles.datePickerHeaderNavigation}>
            <button
              type="button"
              className={styles.datePickerHeaderButton}
              onClick={handlePrevMonth}
            >
              ‹
            </button>
            <span className={styles.datePickerHeaderTitle}>
              {currentDate.getFullYear()}年{currentDate.getMonth() + 1}月
            </span>
            <button
              type="button"
              className={styles.datePickerHeaderButton}
              onClick={handleNextMonth}
            >
              ›
            </button>
          </div>
        </div>

        {/* 星期标题 */}
        <div className={styles.datePickerBody}>
          <div className={styles.datePickerWeekdays}>
            {['日', '一', '二', '三', '四', '五', '六'].map((weekday) => (
              <div key={weekday} className={styles.datePickerWeekday}>
                {weekday}
              </div>
            ))}
          </div>

          {/* 日期网格 */}
          <div className={styles.datePickerDays}>
            {days.map(({ date, isCurrentMonth }) => {
              const dateString = formatDate(date, format);
              const isSelected = internalValue === dateString;
              const isDisabled = !isCurrentMonth;

              return (
                <div
                  key={dateString}
                  className={`${styles.datePickerDay} ${
                    isSelected ? styles.datePickerDaySelected : ''
                  } ${isDisabled ? styles.datePickerDayDisabled : ''} ${
                    !isCurrentMonth ? styles.datePickerDayOtherMonth : ''
                  }`}
                  onClick={() => isCurrentMonth && handleDateSelect(date)}
                >
                  {date.getDate()}
                </div>
              );
            })}
          </div>
        </div>

        {/* 底部按钮 */}
        <div className={styles.datePickerFooter}>
          <button
            type="button"
            className={`${styles.datePickerFooterButton} ${styles.datePickerFooterButtonToday}`}
            onClick={handleToday}
          >
            今天
          </button>
          <button
            type="button"
            className={styles.datePickerFooterButton}
            onClick={handleCancel}
          >
            取消
          </button>
          <button
            type="button"
            className={`${styles.datePickerFooterButton} ${styles.datePickerFooterButtonPrimary}`}
            onClick={handleConfirm}
          >
            确定
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.datePicker} ${className}`} style={style}>
      <div
        ref={triggerRef}
        className={getTriggerClass()}
        onClick={handleTriggerClick}
      >
        <span>{internalValue || placeholder}</span>
        <span>{isOpen ? '▼' : '▶'}</span>
      </div>
      {renderDatePanel()}
    </div>
  );
};

export default DatePicker;
