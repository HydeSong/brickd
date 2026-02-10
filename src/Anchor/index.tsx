import React, { useState, useEffect, useRef } from 'react';
import styles from './Anchor.module.css';

interface AnchorLinkProps {
  href: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

interface AnchorProps {
  className?: string;
  style?: React.CSSProperties;
  offset?: number;
  children?: React.ReactNode;
}

const AnchorLink: React.FC<AnchorLinkProps> = ({ href, title, className, children }) => {
  return (
    <li className={`${styles.linkItem} ${className || ''}`}>
      <a href={href} className={styles.link}>
        {title}
      </a>
      {children && <ul className={styles.subMenu}>{children}</ul>}
    </li>
  );
};

const Anchor: React.FC<AnchorProps> = ({ className, style, offset = 0, children }) => {
  const [activeLink, setActiveLink] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始检查

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <div
      ref={containerRef}
      className={`${styles.anchor} ${className || ''}`}
      style={style}
    >
      <ul className={styles.menu}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<AnchorLinkProps>(child)) {
            const href = child.props.href.replace('#', '');
            const isActive = activeLink === href;
            return React.cloneElement(child, {
              className: `${child.props.className || ''} ${isActive ? styles.active : ''}`,
            });
          }
          return child;
        })}
      </ul>
    </div>
  );
};

Anchor.Link = AnchorLink;

export default Anchor;
