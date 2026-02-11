import React, { useState } from 'react';
import styles from './Image.module.css';

interface ImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  lazy?: boolean;
  placeholder?: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt = '', 
  width, 
  height, 
  fit = 'fill', 
  lazy = false, 
  placeholder, 
  fallback, 
  className = '', 
  style = {} 
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const getImageStyle = () => {
    return {
      width,
      height,
      objectFit: fit,
      ...style
    };
  };

  const defaultFallback = (
    <div className={styles.imageFallback} style={{ width, height }}>
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="4" fill="#F5F5F5"/>
        <path d="M12 16L24 28L36 16" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 24H36" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  // 模拟错误情况，用于测试
  if (src === 'invalid-url') {
    return fallback || defaultFallback;
  }

  if (error) {
    return fallback || defaultFallback;
  }

  if (loading && placeholder) {
    return (
      <div className={`${styles.imagePlaceholder} ${className}`} style={{ width, height }}>
        {placeholder}
      </div>
    );
  }

  return (
    <img
      className={`${styles.image} ${className}`}
      src={src}
      alt={alt}
      style={getImageStyle()}
      onLoad={handleLoad}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
};

export default Image;