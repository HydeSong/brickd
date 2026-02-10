import React, { useState, useEffect, useRef } from 'react';
import styles from './Affix.module.css';

interface AffixProps {
  offsetTop?: number;
  offsetBottom?: number;
  target?: () => HTMLElement | null;
  onChange?: (affixed: boolean) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Affix: React.FC<AffixProps> = ({
  offsetTop = 0,
  offsetBottom,
  target,
  onChange,
  children,
  className = '',
  style = {},
}) => {
  const [affixed, setAffixed] = useState(false);
  const [position, setPosition] = useState<'fixed' | 'absolute' | 'relative'>('relative');
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({});
  const affixRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!affixRef.current) return;

      const element = affixRef.current;
      const rect = element.getBoundingClientRect();
      const placeholderRect = placeholderRef.current?.getBoundingClientRect();

      let newAffixed = false;
      let newPosition: 'fixed' | 'absolute' | 'relative' = 'relative';
      const newStyle: React.CSSProperties = {};

      if (offsetBottom !== undefined) {
        // 底部固定逻辑
        if (rect.bottom > offsetBottom) {
          newAffixed = true;
          newPosition = 'fixed';
          newStyle.bottom = offsetBottom;
          newStyle.width = placeholderRect?.width;
          newStyle.left = placeholderRect?.left;
        }
      } else {
        // 顶部固定逻辑
        if (rect.top <= offsetTop) {
          newAffixed = true;
          newPosition = 'fixed';
          newStyle.top = offsetTop;
          newStyle.width = placeholderRect?.width;
          newStyle.left = placeholderRect?.left;
        }
      }

      setAffixed(newAffixed);
      setPosition(newPosition);
      setContainerStyle(newStyle);

      if (onChange && newAffixed !== affixed) {
        onChange(newAffixed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // 初始计算
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [offsetTop, offsetBottom, target, onChange, affixed]);

  const getContainerClass = () => {
    const classes = [styles.affix];

    if (position === 'fixed') {
      classes.push(styles.affixFixed);
    } else if (position === 'absolute') {
      classes.push(styles.affixAbsolute);
    }

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  };

  return (
    <>
      <div ref={placeholderRef} style={{ height: affixed ? affixRef.current?.offsetHeight : 0 }} />
      <div
        ref={affixRef}
        className={getContainerClass()}
        style={{ ...style, ...containerStyle }}
      >
        {children}
      </div>
    </>
  );
};

export default Affix;