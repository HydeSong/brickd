import styles from './Card.module.css';

interface CardProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  bordered?: boolean;
  hoverable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface CardHeaderProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface CardBodyProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface CardFooterProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
} = ({
  title,
  extra,
  bordered = true,
  hoverable = false,
  className = '',
  style = {},
  children,
}) => {
  const getCardClass = () => {
    const classes = [styles.card];
    if (bordered) {
      classes.push(styles.cardBordered);
    }
    if (hoverable) {
      classes.push(styles.cardHoverable);
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  // 检查是否包含 Card.Header 或 Card.Body
  let hasHeader = false;
  let hasBody = false;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Card.Header) {
        hasHeader = true;
      } else if (child.type === Card.Body) {
        hasBody = true;
      }
    }
  });

  return (
    <div className={getCardClass()} style={style}>
      {(title || extra) && !hasHeader && (
        <div className={styles.cardHeader}>
          {title && <div className={styles.cardTitle}>{title}</div>}
          {extra && <div className={styles.cardExtra}>{extra}</div>}
        </div>
      )}
      {!hasBody && <div className={styles.cardBody}>{children}</div>}
      {hasBody && children}
    </div>
  );
};

Card.Header = ({ title, extra, className = '', style = {} }) => {
  return (
    <div className={`${styles.cardHeader} ${className}`} style={style}>
      {title && <div className={styles.cardTitle}>{title}</div>}
      {extra && <div className={styles.cardExtra}>{extra}</div>}
    </div>
  );
};

Card.Body = ({ className = '', style = {}, children }) => {
  return (
    <div className={`${styles.cardBody} ${className}`} style={style}>
      {children}
    </div>
  );
};

Card.Footer = ({ className = '', style = {}, children }) => {
  return (
    <div className={`${styles.cardFooter} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
