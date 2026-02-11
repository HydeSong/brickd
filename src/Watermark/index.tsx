import React, { useMemo } from 'react';
import styles from './Watermark.module.css';

interface WatermarkProps {
  content?: React.ReactNode;
  width?: number;
  height?: number;
  rotate?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  opacity?: number;
  gap?: [number, number];
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Watermark: React.FC<WatermarkProps> = ({
  content = 'Watermark',
  width = 120,
  height = 64,
  rotate = -22,
  fontSize = 14,
  fontWeight = 400,
  color = 'rgba(0, 0, 0, 0.15)',
  opacity = 1,
  gap = [100, 100],
  zIndex = 9999,
  className,
  style,
  children,
}) => {
  const watermarkStyle = useMemo(() => {
    return {
      '--watermark-width': `${width}px`,
      '--watermark-height': `${height}px`,
      '--watermark-rotate': `${rotate}deg`,
      '--watermark-font-size': `${fontSize}px`,
      '--watermark-font-weight': `${fontWeight}`,
      '--watermark-color': color,
      '--watermark-opacity': opacity,
      '--watermark-gap-x': `${gap[0]}px`,
      '--watermark-gap-y': `${gap[1]}px`,
      '--watermark-z-index': zIndex,
    } as React.CSSProperties;
  }, [width, height, rotate, fontSize, fontWeight, color, opacity, gap, zIndex]);

  return (
    <div className={`${styles.watermarkContainer} ${className || ''}`} style={style}>
      <div className={styles.watermark} style={watermarkStyle}>
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div key={rowIndex} className={styles.watermarkRow}>
            {Array.from({ length: 10 }).map((_, colIndex) => (
              <div key={colIndex} className={styles.watermarkItem}>
                {content}
              </div>
            ))}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Watermark;