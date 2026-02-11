import React from 'react';
import styles from './Empty.module.css';

interface EmptyProps {
  description?: React.ReactNode;
  image?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Empty: React.FC<EmptyProps> = ({ 
  description, 
  image, 
  className = '', 
  style = {}, 
  children 
}) => {
  const defaultImage = (
    <svg 
      width="128" 
      height="128" 
      viewBox="0 0 128 128" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="8" fill="#F5F5F5"/>
      <path d="M64 32C50.7452 32 40 42.7452 40 56C40 69.2548 50.7452 80 64 80C77.2548 80 88 69.2548 88 56C88 42.7452 77.2548 32 64 32ZM64 72C55.1634 72 48 64.8366 48 56C48 47.1634 55.1634 40 64 40C72.8366 40 80 47.1634 80 56C80 64.8366 72.8366 72 64 72Z" fill="#D9D9D9"/>
      <path d="M64 96C60.6863 96 58 93.3137 58 90H70C70 93.3137 67.3137 96 64 96Z" fill="#D9D9D9"/>
    </svg>
  );

  return (
    <div className={`${styles.empty} ${className}`} style={style}>
      <div className={styles.emptyImage}>
        {image || defaultImage}
      </div>
      {description && (
        <div className={styles.emptyDescription}>
          {description}
        </div>
      )}
      {children && (
        <div className={styles.emptyAction}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Empty;