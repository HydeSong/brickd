
import styles from './Badge.module.css';

interface BadgeProps {
  count?: number;
  dot?: boolean;
  maxCount?: number;
  showZero?: boolean;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  count,
  dot = false,
  maxCount = 99,
  showZero = false,
  color,
  className = '',
  style = {},
  children,
}) => {
  const getBadgeContent = () => {
    if (dot) {
      return null;
    }
    if (count === undefined) {
      return null;
    }
    if (count === 0 && !showZero) {
      return null;
    }
    if (count > maxCount) {
      return `${maxCount}+`;
    }
    return count;
  };

  const getBadgeClass = () => {
    const classes = [styles.badge];
    if (dot) {
      classes.push(styles.badgeDot);
    }
    if (count === 0 && !showZero) {
      classes.push(styles.badgeHidden);
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const badgeStyle = {
    ...style,
    backgroundColor: color,
  };

  const content = getBadgeContent();
  if (children) {
    return (
      <div className={styles.badgeWrapper}>
        {children}
        <span className={getBadgeClass()} style={badgeStyle}>
          {content}
        </span>
      </div>
    );
  }

  return (
    <span className={getBadgeClass()} style={badgeStyle}>
      {content}
    </span>
  );
};

export default Badge;