import React, { useState, useRef, useEffect } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  autoplay?: boolean;
  autoplaySpeed?: number;
  defaultActiveIndex?: number;
  activeIndex?: number;
  onChange?: (current: number) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface CarouselItemProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  className = '',
  style = {},
  children,
}) => {
  return (
    <div className={`${styles.carouselItem} ${className}`} style={style}>
      {children}
    </div>
  );
};

const Carousel: React.FC<CarouselProps> & {
  Item: React.FC<CarouselItemProps>;
} = ({
  autoplay = true,
  autoplaySpeed = 3000,
  defaultActiveIndex = 0,
  activeIndex,
  onChange,
  className = '',
  style = {},
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(activeIndex !== undefined ? activeIndex : defaultActiveIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 当外部 activeIndex 变化时，更新内部状态
  useEffect(() => {
    if (activeIndex !== undefined) {
      setCurrentIndex(activeIndex);
    }
  }, [activeIndex]);

  // 计算子元素数量
  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.carouselItem');
      setItemsCount(items.length);
    }
  }, [children]);

  // 自动播放
  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, autoplaySpeed);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, autoplaySpeed, currentIndex, itemsCount]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % itemsCount;
    setCurrentIndex(nextIndex);
    if (onChange) {
      onChange(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + itemsCount) % itemsCount;
    setCurrentIndex(prevIndex);
    if (onChange) {
      onChange(prevIndex);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (onChange) {
      onChange(index);
    }
  };

  const getTransformStyle = () => {
    return {
      transform: `translateX(-${currentIndex * 100}%)`,
    };
  };

  return (
    <div className={`${styles.carousel} ${className}`} style={style}>
      <div className={styles.carouselContainer} ref={containerRef}>
        <div className={styles.carouselTrack} style={getTransformStyle()}>
          {children}
        </div>
      </div>
      {itemsCount > 1 && (
        <>
          <button className={`${styles.carouselArrow} ${styles.carouselArrowPrev}`} onClick={handlePrev}>
            &lt;
          </button>
          <button className={`${styles.carouselArrow} ${styles.carouselArrowNext}`} onClick={handleNext}>
            &gt;
          </button>
          <div className={styles.carouselDots}>
            {Array.from({ length: itemsCount }).map((_, index) => (
              <button
                key={index}
                className={`${styles.carouselDot} ${currentIndex === index ? styles.carouselDotActive : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

Carousel.Item = CarouselItem;

export default Carousel;