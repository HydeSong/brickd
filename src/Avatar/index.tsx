import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  size?: 'small' | 'default' | 'large' | number;
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
  shape?: 'circle' | 'square';
  className?: string;
  style?: React.CSSProperties;
}

const Avatar: React.FC<AvatarProps> = ({
  size = 'default',
  src,
  alt = '',
  icon,
  shape = 'circle',
  className = '',
  style = {},
}) => {
  const getSizeValue = () => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'small':
        return 32;
      case 'large':
        return 48;
      case 'default':
      default:
        return 40;
    }
  };

  const sizeValue = getSizeValue();

  const getAvatarClass = () => {
    const classes = [styles.avatar];
    classes.push(styles[shape]);
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const avatarStyle = {
    ...style,
    width: `${sizeValue}px`,
    height: `${sizeValue}px`,
  };

  return (
    <div className={getAvatarClass()} style={avatarStyle}>
      {src ? (
        <img src={src} alt={alt} className={styles.avatarImg} />
      ) : icon ? (
        <div className={styles.avatarIcon}>{icon}</div>
      ) : (
        <div className={styles.avatarText}></div>
      )}
    </div>
  );
};

export default Avatar;