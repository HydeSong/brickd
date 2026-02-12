import React from 'react';
import styles from './Flex.module.css';

interface FlexProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string | number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap,
  className = '',
  style = {},
  children,
}) => {
  const flexStyle = {
    ...style,
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap: gap,
  };

  return (
    <div className={`${styles.flex} ${className}`} style={flexStyle}>
      {children}
    </div>
  );
};

interface FlexItemProps {
  flex?: string | number;
  order?: number;
  alignSelf?: 'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const FlexItem: React.FC<FlexItemProps> = ({
  flex,
  order,
  alignSelf,
  className = '',
  style = {},
  children,
}) => {
  const flexItemStyle = {
    ...style,
    flex,
    order,
    alignSelf,
  };

  return (
    <div className={`${styles.flexItem} ${className}`} style={flexItemStyle}>
      {children}
    </div>
  );
};

export default Flex;