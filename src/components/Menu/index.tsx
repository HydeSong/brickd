import React, { useState } from 'react';
import styles from './Menu.module.css';

interface MenuItemProps {
  key?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

interface SubMenuProps {
  key?: string;
  title: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

interface MenuProps {
  mode?: 'horizontal' | 'vertical';
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  disabled = false,
  onClick,
  className,
  children,
}) => {
  return (
    <li
      className={`
        ${styles.menuItem}
        ${disabled ? styles.disabled : ''}
        ${className || ''}
      `}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </li>
  );
};

const SubMenu: React.FC<SubMenuProps> = ({ title, className, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className={`${styles.subMenu} ${className || ''}`}>
      <div
        className={styles.subMenuTitle}
        onClick={() => setExpanded(!expanded)}
      >
        {title}
      </div>
      {expanded && <ul className={styles.subMenuList}>{children}</ul>}
    </li>
  );
};

interface MenuComponent extends React.FC<MenuProps> {
  Item: React.FC<MenuItemProps>;
  SubMenu: React.FC<SubMenuProps>;
}

const Menu: MenuComponent = ({
  mode = 'vertical',
  className,
  style,
  children,
}) => {
  return (
    <nav
      className={`${styles.menu} ${styles[mode]} ${className || ''}`}
      style={style}
    >
      <ul className={styles.menuList}>{children}</ul>
    </nav>
  );
};

Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu;
