
import styles from './Grid.module.css';

interface RowProps {
  gutter?: number | [number, number];
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
  align?: 'top' | 'middle' | 'bottom';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({
  gutter = 0,
  justify = 'start',
  align = 'top',
  className = '',
  style = {},
  children,
}) => {
  const getRowClass = () => {
    const classes = [styles.row];
    classes.push(styles[`justify-${justify}`]);
    classes.push(styles[`align-${align}`]);
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const rowStyle = {
    ...style,
  };

  // Pass gutter to Col via context or props
  // For simplicity, we'll use a data attribute
  return (
    <div className={getRowClass()} style={rowStyle} data-gutter={gutter}>
      {children}
    </div>
  );
};

interface ColProps {
  span?: number;
  offset?: number;
  push?: number;
  pull?: number;
  xs?: number | { span?: number; offset?: number; push?: number; pull?: number };
  sm?: number | { span?: number; offset?: number; push?: number; pull?: number };
  md?: number | { span?: number; offset?: number; push?: number; pull?: number };
  lg?: number | { span?: number; offset?: number; push?: number; pull?: number };
  xl?: number | { span?: number; offset?: number; push?: number; pull?: number };
  xxl?: number | { span?: number; offset?: number; push?: number; pull?: number };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Col: React.FC<ColProps> = ({
  span,
  offset,
  push,
  pull,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  className = '',
  style = {},
  children,
}) => {
  const getColClass = () => {
    const classes = [styles.col];

    // Base props
    if (span !== undefined) classes.push(styles[`span-${span}`]);
    if (offset !== undefined) classes.push(styles[`offset-${offset}`]);
    if (push !== undefined) classes.push(styles[`push-${push}`]);
    if (pull !== undefined) classes.push(styles[`pull-${pull}`]);

    // Responsive props
    const addResponsiveClass = (prefix: string, value: number | { span?: number; offset?: number; push?: number; pull?: number } | undefined) => {
      if (value === undefined) return;
      if (typeof value === 'number') {
        classes.push(styles[`${prefix}-${value}`]);
      } else {
        if (value.span !== undefined) classes.push(styles[`${prefix}-span-${value.span}`]);
        if (value.offset !== undefined) classes.push(styles[`${prefix}-offset-${value.offset}`]);
        if (value.push !== undefined) classes.push(styles[`${prefix}-push-${value.push}`]);
        if (value.pull !== undefined) classes.push(styles[`${prefix}-pull-${value.pull}`]);
      }
    };

    addResponsiveClass('xs', xs);
    addResponsiveClass('sm', sm);
    addResponsiveClass('md', md);
    addResponsiveClass('lg', lg);
    addResponsiveClass('xl', xl);
    addResponsiveClass('xxl', xxl);

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  };

  return (
    <div className={getColClass()} style={style}>
      {children}
    </div>
  );
};

// For compatibility with default export
export default {
  Row,
  Col,
};
