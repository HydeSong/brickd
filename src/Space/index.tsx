
import styles from './Space.module.css';

interface SpaceProps {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'middle' | 'large' | number;
  wrap?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Space: React.FC<SpaceProps> = ({
  direction = 'horizontal',
  size = 'middle',
  wrap = false,
  className,
  children,
}) => {
  const getSizeValue = () => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'small':
        return 8;
      case 'large':
        return 24;
      case 'middle':
      default:
        return 16;
    }
  };

  const sizeValue = getSizeValue();

  return (
    <div
      className={`
        ${styles.space}
        ${styles[direction]}
        ${wrap ? styles.wrap : ''}
        ${className || ''}
      `}
      style={{
        gap: direction === 'horizontal' ? `${sizeValue}px` : undefined,
        rowGap: direction === 'vertical' ? `${sizeValue}px` : undefined,
        columnGap: direction === 'vertical' ? undefined : `${sizeValue}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Space;
