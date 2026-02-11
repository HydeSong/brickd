import React from 'react';
import styles from './Spin.module.css';

interface SpinProps {
  spinning?: boolean;
  size?: 'small' | 'default' | 'large';
  tip?: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  indicator?: React.ReactNode;
  color?: string;
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
}

const Spin: React.FC<SpinProps> = ({
  spinning = true,
  size = 'default',
  tip,
  delay,
  className = '',
  style = {},
  children,
  indicator,
  color,
  wrapperClassName = '',
  wrapperStyle = {},
}) => {
  if (!spinning) {
    return children || null;
  }

  const spinSize = {
    small: 16,
    default: 24,
    large: 32,
  }[size];

  const spinStyle = {
    width: spinSize,
    height: spinSize,
    color: color || '#1890ff',
  };

  const renderIndicator = () => {
    if (indicator) {
      return <div className={styles.spinIndicator}>{indicator}</div>;
    }

    return (
      <div className={styles.spinContent} style={spinStyle}>
        <div className={styles.spinDot}>
          <div className={styles.spinDotItem} />
          <div className={styles.spinDotItem} />
          <div className={styles.spinDotItem} />
          <div className={styles.spinDotItem} />
        </div>
      </div>
    );
  };

  if (children) {
    return (
      <div className={`${styles.spinWrapper} ${wrapperClassName}`} style={wrapperStyle}>
        <div className={`${styles.spin} ${className}`} style={style} role="status" aria-label="Loading">
          {renderIndicator()}
          {tip && <div className={styles.spinTip}>{tip}</div>}
        </div>
        <div className={styles.spinChildren}>{children}</div>
      </div>
    );
  }

  return (
    <div className={`${styles.spin} ${className}`} style={style} role="status" aria-label="Loading">
      {renderIndicator()}
      {tip && <div className={styles.spinTip}>{tip}</div>}
    </div>
  );
};

export default Spin;