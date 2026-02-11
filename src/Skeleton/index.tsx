import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  type?: 'text' | 'button' | 'image' | 'card' | 'list';
  loading?: boolean;
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  // Text-specific props
  rows?: number;
  width?: number | string | (number | string)[];
  // Button-specific props
  buttonSize?: 'small' | 'default' | 'large';
  // Image-specific props
  imageShape?: 'circle' | 'square';
  imageSize?: number | string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  type = 'text',
  loading = true,
  animated = true,
  className = '',
  style = {},
  children,
  rows = 1,
  width,
  buttonSize = 'default',
  imageShape = 'square',
  imageSize = 40,
}) => {
  if (!loading) {
    return children || null;
  }

  const renderTextSkeleton = () => {
    const widths = Array.isArray(width) ? width : [width];
    const textRows = [];

    for (let i = 0; i < rows; i++) {
      const rowWidth = widths[i] || widths[widths.length - 1] || '100%';
      textRows.push(
        <div
          key={i}
          className={`${styles.skeletonItem} ${styles.skeletonText}`}
          style={{ width: rowWidth }}
        />
      );
    }

    return <div className={styles.skeletonContent}>{textRows}</div>;
  };

  const renderButtonSkeleton = () => {
    const buttonSizes = {
      small: { width: 64, height: 24 },
      default: { width: 96, height: 32 },
      large: { width: 128, height: 40 },
    };

    const size = buttonSizes[buttonSize];

    return (
      <div
        className={`${styles.skeletonItem} ${styles.skeletonButton}`}
        style={{ width: size.width, height: size.height, borderRadius: 4 }}
      />
    );
  };

  const renderImageSkeleton = () => {
    const imageStyle = {
      width: imageSize,
      height: imageSize,
      borderRadius: imageShape === 'circle' ? '50%' : 4,
    };

    return (
      <div
        className={`${styles.skeletonItem} ${styles.skeletonImage}`}
        style={imageStyle}
      />
    );
  };

  const renderCardSkeleton = () => {
    return (
      <div className={styles.skeletonCard}>
        <div className={styles.skeletonCardHeader}>
          <div
            className={`${styles.skeletonItem} ${styles.skeletonImage}`}
            style={{ width: 40, height: 40, borderRadius: 4 }}
          />
          <div className={styles.skeletonCardTitle}>
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText}`}
              style={{ width: '60%' }}
            />
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText}`}
              style={{ width: '40%', marginTop: 8 }}
            />
          </div>
        </div>
        <div className={styles.skeletonCardContent}>
          <div
            className={`${styles.skeletonItem} ${styles.skeletonText}`}
            style={{ width: '100%' }}
          />
          <div
            className={`${styles.skeletonItem} ${styles.skeletonText}`}
            style={{ width: '80%', marginTop: 8 }}
          />
          <div
            className={`${styles.skeletonItem} ${styles.skeletonText}`}
            style={{ width: '90%', marginTop: 8 }}
          />
        </div>
        <div className={styles.skeletonCardFooter}>
          <div
            className={`${styles.skeletonItem} ${styles.skeletonButton}`}
            style={{ width: 80, height: 28, borderRadius: 4 }}
          />
        </div>
      </div>
    );
  };

  const renderListSkeleton = () => {
    const listItems = [];
    for (let i = 0; i < 3; i++) {
      listItems.push(
        <div key={i} className={styles.skeletonListItem}>
          <div
            className={`${styles.skeletonItem} ${styles.skeletonImage}`}
            style={{ width: 48, height: 48, borderRadius: 4 }}
          />
          <div className={styles.skeletonListContent}>
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText}`}
              style={{ width: '80%' }}
            />
            <div
              className={`${styles.skeletonItem} ${styles.skeletonText}`}
              style={{ width: '60%', marginTop: 8 }}
            />
          </div>
        </div>
      );
    }
    return <div className={styles.skeletonList}>{listItems}</div>;
  };

  const renderSkeleton = () => {
    switch (type) {
      case 'text':
        return renderTextSkeleton();
      case 'button':
        return renderButtonSkeleton();
      case 'image':
        return renderImageSkeleton();
      case 'card':
        return renderCardSkeleton();
      case 'list':
        return renderListSkeleton();
      default:
        return renderTextSkeleton();
    }
  };

  return (
    <div
      className={`${styles.skeleton} ${animated ? styles.skeletonAnimated : ''} ${className}`}
      style={style}
      role="status"
      aria-label="Loading"
    >
      {renderSkeleton()}
    </div>
  );
};

// Skeleton subcomponents
export const SkeletonText: React.FC<Omit<SkeletonProps, 'type'>> = (props) => (
  <Skeleton type="text" {...props} />
);

export const SkeletonButton: React.FC<Omit<SkeletonProps, 'type'>> = (props) => (
  <Skeleton type="button" {...props} />
);

export const SkeletonImage: React.FC<Omit<SkeletonProps, 'type'>> = (props) => (
  <Skeleton type="image" {...props} />
);

export const SkeletonCard: React.FC<Omit<SkeletonProps, 'type'>> = (props) => (
  <Skeleton type="card" {...props} />
);

export const SkeletonList: React.FC<Omit<SkeletonProps, 'type'>> = (props) => (
  <Skeleton type="list" {...props} />
);

export default Skeleton;