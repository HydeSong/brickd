import React from 'react';
import styles from './Statistic.module.css';

interface StatisticProps {
  title?: React.ReactNode;
  value?: React.ReactNode;
  valueStyle?: React.CSSProperties;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  precision?: number;
  decimalSeparator?: string;
  thousandSeparator?: string;
  formatter?: (value: any) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Statistic: React.FC<StatisticProps> = ({
  title,
  value,
  valueStyle,
  prefix,
  suffix,
  precision,
  decimalSeparator = '.',
  thousandSeparator = ',',
  formatter,
  className,
  style,
}) => {
  const formatValue = (val: any) => {
    if (formatter) {
      return formatter(val);
    }

    if (typeof val === 'number') {
      if (precision !== undefined) {
        val = val.toFixed(precision);
      }
      
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
    }

    return val;
  };

  return (
    <div className={`${styles.statistic} ${className || ''}`} style={style}>
      {title && <div className={styles.statisticTitle}>{title}</div>}
      <div className={styles.statisticValueWrapper}>
        {prefix && <div className={styles.statisticPrefix}>{prefix}</div>}
        <div className={styles.statisticValue} style={valueStyle}>
          {formatValue(value)}
        </div>
        {suffix && <div className={styles.statisticSuffix}>{suffix}</div>}
      </div>
    </div>
  );
};

export default Statistic;