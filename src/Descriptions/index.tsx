import React from 'react';
import styles from './Descriptions.module.css';

interface DescriptionsProps {
  title?: React.ReactNode;
  bordered?: boolean;
  column?: number;
  size?: 'small' | 'default' | 'large';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface DescriptionsItemProps {
  label?: React.ReactNode;
  span?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const DescriptionsItem: React.FC<DescriptionsItemProps> = ({ children }) => {
  return <>{children}</>;
};

const Descriptions: React.FC<DescriptionsProps> & {
  Item: React.FC<DescriptionsItemProps>;
} = ({ 
  title, 
  bordered = false, 
  column = 3, 
  size = 'default', 
  className = '', 
  style = {}, 
  children 
}) => {
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && child.type === DescriptionsItem) {
        const { label, span = 1, className: itemClassName = '', style: itemStyle = {}, children: itemChildren } = child.props;
        
        return (
          <div 
            key={index} 
            className={`${styles.descriptionsItem} ${itemClassName}`}
            style={{ ...itemStyle, gridColumn: `span ${span}` }}
          >
            {label && <div className={styles.descriptionsItemLabel}>{label}</div>}
            <div className={styles.descriptionsItemContent}>{itemChildren}</div>
          </div>
        );
      }
      return child;
    });
  };

  return (
    <div 
      className={`${styles.descriptions} ${bordered ? styles.descriptionsBordered : ''} ${styles[`descriptions${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${className}`}
      style={style}
    >
      {title && <div className={styles.descriptionsTitle}>{title}</div>}
      <div 
        className={styles.descriptionsContent}
        style={{ gridTemplateColumns: `repeat(${column}, 1fr)` }}
      >
        {renderChildren()}
      </div>
    </div>
  );
};

Descriptions.Item = DescriptionsItem;

export default Descriptions;