import React, { useState, useRef, useEffect } from 'react';
import styles from './Splitter.module.css';

interface SplitterProps {
  direction?: 'horizontal' | 'vertical';
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  className?: string;
  style?: React.CSSProperties;
  children: [React.ReactNode, React.ReactNode];
}

export const Splitter: React.FC<SplitterProps> = ({
  direction = 'horizontal',
  defaultSize = 50,
  minSize = 10,
  maxSize = 90,
  className = '',
  style = {},
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [size, setSize] = useState(defaultSize);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();

      let newSize: number;
      if (direction === 'horizontal') {
        const delta = e.clientX - containerRect.left;
        newSize = (delta / containerRect.width) * 100;
      } else {
        const delta = e.clientY - containerRect.top;
        newSize = (delta / containerRect.height) * 100;
      }

      // Clamp the size between minSize and maxSize
      newSize = Math.max(minSize, Math.min(maxSize, newSize));
      setSize(newSize);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, direction, minSize, maxSize]);

  const handleSplitterMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const getContainerClass = () => {
    const classes = [styles.splitter];
    if (direction === 'vertical') {
      classes.push(styles.vertical);
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  return (
    <div ref={containerRef} className={getContainerClass()} style={style}>
      <div 
        className={styles.panel} 
        style={{
          [direction === 'horizontal' ? 'width' : 'height']: `${size}%`,
        }}
      >
        {children[0]}
      </div>
      <div 
        className={styles.resizer} 
        style={{ cursor: direction === 'horizontal' ? 'col-resize' : 'row-resize' }}
        onMouseDown={handleSplitterMouseDown}
      />
      <div 
        className={styles.panel} 
        style={{
          [direction === 'horizontal' ? 'width' : 'height']: `${100 - size}%`,
        }}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default Splitter;