import React from 'react';
import styles from './Divider.module.css';

interface DividerProps {
  type?: 'horizontal' | 'vertical';
  orientation?: 'left' | 'center' | 'right';
  dashed?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Divider: React.FC<DividerProps> = ({
  type = 'horizontal',
  orientation = 'center',
  dashed = false,
  children,
  className = '',
  style = {},
}) => {
  const getDividerClass = () => {
    const classes = [styles.divider];

    // Add type class
    classes.push(styles[type]);

    // Add orientation class
    if (children) {
      classes.push(styles[orientation]);
    }

    // Add dashed class
    if (dashed) {
      classes.push(styles.dashed);
    }

    // Add custom class
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  };

  if (type === 'horizontal') {
    return (
      <div className={getDividerClass()} style={style}>
        {children && <span className={styles.innerText}>{children}</span>}
      </div>
    );
  }

  return <div className={getDividerClass()} style={style} />;
};

export default Divider;
