import React, { useState, useEffect, useRef } from 'react';
import styles from './Select.module.css';

interface SelectOption {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
  [key: string]: any;
}

interface SelectProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  value?: string | number | (string | number)[];
  defaultValue?: string | number | (string | number)[];
  onChange?: (value: string | number | (string | number)[]) => void;
  onSelect?: (option: SelectOption, optionList: SelectOption[]) => void;
  onDeselect?: (option: SelectOption, optionList: SelectOption[]) => void;
  placeholder?: string;
  options?: SelectOption[];
  mode?: 'single' | 'multiple';
  allowClear?: boolean;
  filterOption?: boolean | ((inputValue: string, option: SelectOption) => boolean);
  showSearch?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Select: React.FC<SelectProps> = ({
  size = 'default',
  disabled = false,
  value,
  defaultValue = '',
  onChange,
  onSelect,
  onDeselect,
  placeholder = '请选择',
  options = [],
  mode = 'single',
  allowClear = false,
  filterOption = true,
  showSearch = false,
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<string | number | (string | number)[]>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterOptions, setFilterOptions] = useState<SelectOption[]>(options);
  const [searchValue, setSearchValue] = useState('');
  
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // 当选项变化时，更新过滤选项
  useEffect(() => {
    filterOptionsBySearch(searchValue);
  }, [options, filterOption]);

  // 根据搜索值过滤选项
  const filterOptionsBySearch = (inputValue: string) => {
    if (!showSearch || !inputValue) {
      setFilterOptions(options);
      return;
    }

    if (typeof filterOption === 'function') {
      setFilterOptions(options.filter(option => filterOption(inputValue, option)));
    } else if (filterOption) {
      setFilterOptions(options.filter(option => 
        (option.label as string).toLowerCase().includes(inputValue.toLowerCase())
      ));
    } else {
      setFilterOptions(options);
    }
  };

  // 处理搜索输入变化
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    filterOptionsBySearch(value);
    setActiveIndex(0);
  };

  // 处理选项选择
  const handleOptionSelect = (option: SelectOption) => {
    if (option.disabled) return;

    let newValue: string | number | (string | number)[];

    if (mode === 'multiple') {
      const currentValues = Array.isArray(internalValue) ? internalValue : [];
      if (currentValues.includes(option.value)) {
        // 移除已选中的选项
        newValue = currentValues.filter(val => val !== option.value);
        if (onDeselect) {
          onDeselect(option, options);
        }
      } else {
        // 添加新选项
        newValue = [...currentValues, option.value];
        if (onSelect) {
          onSelect(option, options);
        }
      }
    } else {
      // 单选模式
      newValue = option.value;
      if (onSelect) {
        onSelect(option, options);
      }
      setIsOpen(false);
    }

    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  // 处理清空按钮点击
  const handleClear = () => {
    const newValue = mode === 'multiple' ? [] : '';
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
    setIsOpen(false);
  };

  // 处理触发器点击
  const handleTriggerClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
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

  // 处理键盘事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => 
          prev < filterOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => 
          prev > 0 ? prev - 1 : filterOptions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (filterOptions[activeIndex]) {
          handleOptionSelect(filterOptions[activeIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // 获取触发器类名
  const getTriggerClass = () => {
    const classes = [styles.selectTrigger];

    if (size !== 'default') {
      classes.push(styles[`selectSize${size.charAt(0).toUpperCase() + size.slice(1)}`]);
    }

    if (disabled) {
      classes.push(styles.selectTriggerDisabled);
    }

    return classes.join(' ');
  };

  // 获取显示值
  const getDisplayValue = () => {
    if (mode === 'multiple') {
      const values = Array.isArray(internalValue) ? internalValue : [];
      if (values.length === 0) {
        return <span className={styles.selectPlaceholder}>{placeholder}</span>;
      }

      return (
        <div className={styles.selectValue}>
          {values.map(val => {
            const option = options.find(opt => opt.value === val);
            return option ? (
              <span key={val} className={styles.selectMultiValue}>
                {option.label}
                <span 
                  className={styles.selectMultiValueRemove}
                  onClick={(e) => {
                    e.stopPropagation();
                    const newValue = values.filter(v => v !== val);
                    setInternalValue(newValue);
                    if (onChange) {
                      onChange(newValue);
                    }
                    if (onDeselect) {
                      onDeselect(option, options);
                    }
                  }}
                >
                  ×
                </span>
              </span>
            ) : null;
          })}
        </div>
      );
    } else {
      // 单选模式
      if (!internalValue) {
        return <span className={styles.selectPlaceholder}>{placeholder}</span>;
      }

      const option = options.find(opt => opt.value === internalValue);
      return option ? option.label : internalValue;
    }
  };

  // 渲染搜索框
  const renderSearch = () => {
    if (!showSearch) return null;

    return (
      <input
        ref={inputRef}
        type="text"
        className={styles.selectInput}
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="搜索"
        onKeyDown={handleKeyDown}
      />
    );
  };

  // 渲染选项菜单
  const renderMenu = () => {
    if (!isOpen) return null;

    return (
      <div ref={menuRef} className={styles.selectMenu}>
        {renderSearch()}
        {filterOptions.length === 0 ? (
          <div className={styles.selectEmpty}>无匹配选项</div>
        ) : (
          filterOptions.map((option, index) => {
            const isSelected = mode === 'multiple' 
              ? Array.isArray(internalValue) && internalValue.includes(option.value)
              : internalValue === option.value;

            return (
              <div
                key={option.value}
                className={`${styles.selectMenuItem} ${
                  index === activeIndex ? styles.selectMenuItemActive : ''
                } ${
                  option.disabled ? styles.selectMenuItemDisabled : ''
                } ${
                  isSelected ? styles.selectMenuItemSelected : ''
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </div>
            );
          })
        )}
      </div>
    );
  };

  return (
    <div className={`${styles.select} ${className}`} style={style}>
      <div
        ref={triggerRef}
        className={getTriggerClass()}
        onClick={handleTriggerClick}
        onKeyDown={handleKeyDown}
      >
        {getDisplayValue()}
        {allowClear && internalValue && (
          <span className={styles.selectClear} onClick={handleClear}>
            ×
          </span>
        )}
        <span className={`${styles.selectArrow} ${isOpen ? styles.selectArrowOpen : ''}`}>
          ▼
        </span>
      </div>
      {renderMenu()}
    </div>
  );
};

export default Select;