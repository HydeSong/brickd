
import styles from './Icon.module.css';

interface IconProps {
  type: string;
  size?: 'small' | 'middle' | 'large' | number;
  color?: string;
  rotate?: number;
  spin?: boolean;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  type,
  size = 'middle',
  color,
  rotate,
  spin,
  className,
}) => {
  const getSizeValue = () => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'small':
        return 16;
      case 'large':
        return 24;
      case 'middle':
      default:
        return 20;
    }
  };

  const sizeValue = getSizeValue();

  return (
    <i
      className={`
        ${styles.icon}
        ${styles[type] || ''}
        ${spin ? styles.spin : ''}
        ${className || ''}
      `}
      style={{
        fontSize: `${sizeValue}px`,
        color,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    />
  );
};

export default Icon;
