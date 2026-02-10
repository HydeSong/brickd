import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';

interface DropdownMenuProps {
  className?: string;
  children?: React.ReactNode;
}

interface DropdownMenuItemProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

interface DropdownMenuSeparatorProps {
  className?: string;
}

interface DropdownProps {
  trigger?: 'click' | 'hover';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ className, children }) => {
  return (
    <ul className={`${styles.menu} ${className || ''}`}>
      {children}
    </ul>
  );
};

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ onClick, className, children }) => {
  return (
    <li className={`${styles.menuItem} ${className || ''}`} onClick={onClick}>
      {children}
    </li>
  );
};

const DropdownMenuSeparator: React.FC<DropdownMenuSeparatorProps> = ({ className }) => {
  return <li className={`${styles.separator} ${className || ''}`} />;
};

const Dropdown: React.FC<DropdownProps> = ({ trigger = 'click', className, style, children }) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 分离触发元素和菜单元素
  const childrenArray = React.Children.toArray(children);
  const triggerElement = childrenArray.find(child => !React.isValidElement<DropdownMenuProps>(child));
  const menuElement = childrenArray.find(child => React.isValidElement<DropdownMenuProps>(child));

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible]);

  // 处理触发事件
  const handleTriggerClick = () => {
    if (trigger === 'click') {
      setVisible(!visible);
    }
  };

  const handleTriggerMouseEnter = () => {
    if (trigger === 'hover') {
      setVisible(true);
    }
  };

  const handleTriggerMouseLeave = () => {
    if (trigger === 'hover') {
      setVisible(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.dropdown} ${className || ''}`}
      style={style}
      onMouseEnter={handleTriggerMouseEnter}
      onMouseLeave={handleTriggerMouseLeave}
    >
      <div
        className={styles.trigger}
        onClick={handleTriggerClick}
        onMouseEnter={handleTriggerMouseEnter}
        onMouseLeave={handleTriggerMouseLeave}
      >
        {triggerElement}
      </div>
      {visible && menuElement && (
        <div className={styles.menuContainer}>
          {menuElement}
        </div>
      )}
    </div>
  );
};

Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;
Dropdown.MenuSeparator = DropdownMenuSeparator;

export default Dropdown;
