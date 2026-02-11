
import styles from './Result.module.css';

interface ResultProps {
  type?: 'success' | 'error' | 'info' | 'warning';
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // Custom icon
  icon?: React.ReactNode;
  // Button props
  actions?: React.ReactNode;
}

const Result: React.FC<ResultProps> = ({
  type = 'info',
  title,
  description,
  extra,
  className = '',
  style = {},
  icon,
  actions,
}) => {
  const getIcon = () => {
    if (icon) {
      return <div className={styles.resultIcon}>{icon}</div>;
    }

    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
      warning: '⚠️',
    };

    return (
      <div className={`${styles.resultIcon} ${styles[`resultIcon${type.charAt(0).toUpperCase() + type.slice(1)}`]}`}>
        {icons[type]}
      </div>
    );
  };

  return (
    <div className={`${styles.result} ${className}`} style={style}>
      {getIcon()}
      {title && <div className={styles.resultTitle}>{title}</div>}
      {description && <div className={styles.resultDescription}>{description}</div>}
      {extra && <div className={styles.resultExtra}>{extra}</div>}
      {actions && <div className={styles.resultActions}>{actions}</div>}
    </div>
  );
};

export default Result;