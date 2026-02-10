import React from 'react';
import styles from './Breadcrumb.module.css';

interface BreadcrumbItemProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

interface BreadcrumbProps {
  className?: string;
  style?: React.CSSProperties;
  separator?: React.ReactNode;
  children?: React.ReactNode;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ href, className, children }) => {
  if (href) {
    return (
      <li className={`${styles.item} ${className || ''}`}>
        <a href={href} className={styles.link}>{children}</a>
      </li>
    );
  }
  return (
    <li className={`${styles.item} ${styles.active} ${className || ''}`}>
      {children}
    </li>
  );
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className, style, separator = '/', children }) => {
  const items = React.Children.toArray(children);

  return (
    <nav className={`${styles.breadcrumb} ${className || ''}`} style={style}>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            {index < items.length - 1 && (
              <li className={styles.separator}>{separator}</li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
