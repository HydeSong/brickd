import styles from './Tag.module.css';

export interface TagProps {
  children: React.ReactNode;
  color?: string;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  disabled?: boolean;
  size?: 'small' | 'default' | 'large';
  variant?: 'filled' | 'outlined' | 'light';
  className?: string;
  style?: React.CSSProperties;
}

const Tag: React.FC<TagProps> = ({
  children,
  color,
  icon,
  closable = false,
  onClose,
  disabled = false,
  size = 'default',
  variant = 'filled',
  className,
  style,
}) => {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };

  const tagClassName = [
    styles.tag,
    styles[`tag-${size}`],
    styles[`tag-${variant}`],
    color ? styles[`tag-${color}`] : undefined,
    disabled ? styles['tag-disabled'] : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={tagClassName} style={style}>
      {icon && <span className={styles.tagIcon}>{icon}</span>}
      <span className={styles.tagContent}>{children}</span>
      {closable && !disabled && (
        <button
          type="button"
          className={styles.tagClose}
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </span>
  );
};

export default Tag;
