import React, { useState } from 'react';
import styles from './Calendar.module.css';

interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  defaultValue,
  onChange,
  className = '',
  style = {},
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(value || defaultValue || new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(value || defaultValue || new Date());

  // 当外部 value 变化时，更新内部状态
  React.useEffect(() => {
    if (value) {
      setCurrentDate(value);
      setCurrentMonth(value);
    }
  }, [value]);

  const handleDateChange = (date: Date) => {
    setCurrentDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  const handlePrevMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  const getDaysInMonth = (month: Date) => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: Date) => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    return new Date(year, monthIndex, 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
    const days = [];

    // 添加上个月的占位天数
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`prev-${i}`} className={styles.calendarDay}>
          <span className={styles.calendarDayText}></span>
        </div>
      );
    }

    // 添加当前月的天数
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const isSelected = currentDate && date.toDateString() === currentDate.toDateString();
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <div
          key={`current-${i}`}
          className={`
            ${styles.calendarDay}
            ${isSelected ? styles.calendarDaySelected : ''}
            ${isToday ? styles.calendarDayToday : ''}
          `}
          onClick={() => handleDateChange(date)}
        >
          <span className={styles.calendarDayText}>{i}</span>
        </div>
      );
    }

    return days;
  };

  const getMonthName = (month: Date) => {
    return month.toLocaleString('zh-CN', { year: 'numeric', month: 'long' });
  };

  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  return (
    <div className={`${styles.calendar} ${className}`} style={style}>
      <div className={styles.calendarHeader}>
        <button className={styles.calendarNavButton} onClick={handlePrevMonth}>
          &lt;
        </button>
        <h3 className={styles.calendarMonth}>{getMonthName(currentMonth)}</h3>
        <button className={styles.calendarNavButton} onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className={styles.calendarWeekdays}>
        {weekDays.map((day, index) => (
          <div key={index} className={styles.calendarWeekday}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.calendarDays}>
        {generateCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;