import React, { useEffect, useState, useRef } from 'react';
import styles from './Masonry.module.css';

interface MasonryProps {
  columns?: number;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Masonry: React.FC<MasonryProps> = ({
  columns = 3,
  gap = 16,
  className,
  style,
  children,
}) => {
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 将children转换为数组
    if (React.Children.count(children) > 0) {
      const childrenArray = React.Children.toArray(children);
      setItems(childrenArray);
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={`
        ${styles.masonry}
        ${className || ''}
      `}
      style={{
        ...style,
        columnCount: columns,
        gap: `${gap}px`,
      }}
    >
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
