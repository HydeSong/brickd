
import styles from './FloatButton.module.css';

interface FloatButtonProps {
  icon?: React.ReactNode;
  onClick?: () => void;
  position?: {
    bottom?: string;
    right?: string;
    left?: string;
    top?: string;
  };
  size?: 'small' | 'default' | 'large';
  type?: 'primary' | 'default';
  shape?: 'circle' | 'square';
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const FloatButton: React.FC<FloatButtonProps> = ({
  icon,
  onClick,
  position = {
    bottom: '24px',
    right: '24px',
  },
  size = 'default',
  type = 'primary',
  shape = 'circle',
  className = '',
  style = {},
  disabled = false,
}) => {
  const getFloatButtonClass = () => {
    const classes = [styles.floatButton];
    
    // Add size class
    classes.push(styles[size]);
    
    // Add type class
    classes.push(styles[type]);
    
    // Add shape class
    classes.push(styles[shape]);
    
    // Add disabled class
    if (disabled) {
      classes.push(styles.disabled);
    }
    
    // Add custom class
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const buttonStyle = {
    ...style,
    ...position,
  };

  return (
    <button
      type="button"
      className={getFloatButtonClass()}
      style={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default FloatButton;