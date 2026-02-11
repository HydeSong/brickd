import React, { useState, useEffect, useRef } from 'react';
import styles from './Cascader.module.css';

interface CascaderOption {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
  children?: CascaderOption[];
}

interface CascaderProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  options?: CascaderOption[];
  value?: (string | number)[];
  defaultValue?: (string | number)[];
  placeholder?: string;
  onChange?: (value: (string | number)[]) => void;
  onSelect?: (value: (string | number)[], option: CascaderOption) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Cascader: React.FC<CascaderProps> = ({
  size = 'default',
  disabled = false,
  options = [],
  value,
  defaultValue = [],
  placeholder = '请选择',
  onChange,
  onSelect,
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<(string | number)[]>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState<(string | number)[]>([]);
  const [menuItems, setMenuItems] = useState<CascaderOption[][]>([]);
  
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 更新菜单项目
  const updateMenuItems = (path: (string | number)[]) => {
    const newMenuItems: CascaderOption[][] = [];
    let currentOptions = options;
    
    for (const value of path) {
      newMenuItems.push(currentOptions);
      const nextOption = currentOptions.find(option => option.value === value);
      if (nextOption && nextOption.children) {
        currentOptions = nextOption.children;
      } else {
        break;
      }
    }
    
    setMenuItems(newMenuItems);
  };

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
      setActivePath(value);
      updateMenuItems(value);
    }
  }, [value]);

  // 初始化菜单
  useEffect(() => {
    if (options.length > 0) {
      setMenuItems([options]);
    }
  }, [options]);

  // 处理选项点击
  const handleMenuItemClick = (option: CascaderOption, level: number) => {
    if (option.disabled) return;
    
    const newPath = [...activePath.slice(0, level), option.value];
    
    if (option.children && option.children.length > 0) {
      // 有子选项，展开下一级
      setActivePath(newPath);
      updateMenuItems(newPath);
    } else {
      // 没有子选项，选择完成
      setInternalValue(newPath);
      setIsOpen(false);
      
      if (onChange) {
        onChange(newPath);
      }
      if (onSelect) {
        onSelect(newPath, option);
      }
    }
  };

  // 处理点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node) && 
          menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 处理触发器点击
  const handleTriggerClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen && internalValue.length > 0) {
        setActivePath(internalValue);
        updateMenuItems(internalValue);
      }
    }
  };

  // 获取选中值的标签
  const getDisplayValue = () => {
    if (internalValue.length === 0) {
      return <span className={styles.cascaderPlaceholder}>{placeholder}</span>;
    }
    
    const labels: React.ReactNode[] = [];
    let currentOptions = options;
    
    for (const value of internalValue) {
      const option = currentOptions.find(opt => opt.value === value);
      if (option) {
        labels.push(option.label);
        if (option.children) {
          currentOptions = option.children;
        } else {
          break;
        }
      }
    }
    
    return (
      <div className={styles.cascaderValue}>
        {labels.join(' / ')}
      </div>
    );
  };

  // 渲染菜单项
  const renderMenuItem = (option: CascaderOption, level: number) => {
    const isActive = activePath[level] === option.value;
    const isDisabled = option.disabled;
    const hasChildren = option.children && option.children.length > 0;
    
    const getMenuItemClass = () => {
      const classes = [styles.cascaderMenuItem];
      if (isActive) {
        classes.push(styles.cascaderMenuItemActive);
      }
      if (isDisabled) {
        classes.push(styles.cascaderMenuItemDisabled);
      }
      if (hasChildren) {
        classes.push(styles.cascaderMenuItemHasChildren);
      }
      return classes.join(' ');
    };

    return (
      <li
        key={option.value}
        className={getMenuItemClass()}
        onClick={() => handleMenuItemClick(option, level)}
      >
        {option.label}
      </li>
    );
  };

  // 渲染菜单
  const renderMenu = () => {
    if (!isOpen || menuItems.length === 0) return null;

    return (
      <div ref={menuRef} className={styles.cascaderMenu}>
        {menuItems.map((items, level) => (
          <ul key={level} className={styles.cascaderMenuList}>
            {items.map(option => renderMenuItem(option, level))}
          </ul>
        ))}
      </div>
    );
  };

  const getTriggerClass = () => {
    const classes = [styles.cascaderTrigger];
    
    // Add size class
    if (size !== 'default') {
      classes.push(styles[`cascaderSize${size.charAt(0).toUpperCase() + size.slice(1)}`]);
    }
    
    return classes.join(' ');
  };

  return (
    <div className={`${styles.cascader} ${className}`} style={style}>
      <div
        ref={triggerRef}
        className={getTriggerClass()}
        onClick={handleTriggerClick}
      >
        {getDisplayValue()}
        <span>{isOpen ? '▼' : '▶'}</span>
      </div>
      {renderMenu()}
    </div>
  );
};

export default Cascader;