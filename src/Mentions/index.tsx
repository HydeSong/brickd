import React, { useState, useRef, useEffect } from 'react';
import styles from './Mentions.module.css';

interface MentionsOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  [key: string]: any;
}

interface MentionsProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  options?: MentionsOption[];
  onChange?: (value: string) => void;
  onSelect?: (option: MentionsOption, prefix: string) => void;
  placeholder?: string;
  prefix?: string | string[];
  split?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Mentions: React.FC<MentionsProps> = ({
  size = 'default',
  disabled = false,
  value,
  defaultValue = '',
  options = [],
  onChange,
  onSelect,
  placeholder = '请输入内容',
  prefix = '@',
  split = ' ',
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<string>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterOptions, setFilterOptions] = useState<MentionsOption[]>([]);
  const [currentPrefix, setCurrentPrefix] = useState<string>('');
  const [inputValue, setInputValue] = useState('');
  
  const inputRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // 处理输入变化
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const newInputValue = target.textContent || '';
    setInputValue(newInputValue);
    
    // 检查是否触发提及
    const prefixes = Array.isArray(prefix) ? prefix : [prefix];
    let triggered = false;
    
    for (const p of prefixes) {
      const lastIndex = newInputValue.lastIndexOf(p);
      if (lastIndex !== -1) {
        const textAfterPrefix = newInputValue.substring(lastIndex + p.length);
        if (!textAfterPrefix.includes(' ') && !textAfterPrefix.includes('\n')) {
          // 触发提及
          setCurrentPrefix(p);
          setIsOpen(true);
          
          // 过滤选项
          const filtered = options.filter(option => 
            !option.disabled && 
            (option.label as string).toLowerCase().includes(textAfterPrefix.toLowerCase())
          );
          setFilterOptions(filtered);
          setActiveIndex(0);
          triggered = true;
          break;
        }
      }
    }
    
    if (!triggered) {
      setIsOpen(false);
    }
  };

  // 处理选项选择
  const handleOptionSelect = (option: MentionsOption) => {
    if (option.disabled) return;
    
    // 构建新的输入值，替换当前的提及文本
    const currentText = inputValue;
    const prefixIndex = currentText.lastIndexOf(currentPrefix);
    
    if (prefixIndex !== -1) {
      const beforePrefix = currentText.substring(0, prefixIndex);
      const newText = `${beforePrefix}${currentPrefix}${option.value}${split}`;
      setInputValue(newText);
      setInternalValue(newText);
      
      if (onChange) {
        onChange(newText);
      }
      if (onSelect) {
        onSelect(option, currentPrefix);
      }
    }
    
    setIsOpen(false);
    setFilterOptions([]);
  };

  // 处理键盘事件
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
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

  // 处理点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node) && 
          menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 获取输入框类名
  const getInputClass = () => {
    const classes = [styles.mentionsInput];
    
    if (size !== 'default') {
      classes.push(styles[`mentionsInputSize${size.charAt(0).toUpperCase() + size.slice(1)}`]);
    }
    
    if (disabled) {
      classes.push(styles.mentionsInputDisabled);
    }
    
    return classes.join(' ');
  };

  // 渲染提及菜单
  const renderMenu = () => {
    if (!isOpen || filterOptions.length === 0) return null;

    return (
      <div ref={menuRef} className={styles.mentionsMenu}>
        {filterOptions.map((option, index) => (
          <div
            key={option.value}
            className={`${styles.mentionsMenuItem} ${
              index === activeIndex ? styles.mentionsMenuItemActive : ''
            } ${
              option.disabled ? styles.mentionsMenuItemDisabled : ''
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    );
  };



  return (
    <div className={`${styles.mentions} ${className}`} style={style}>
      <div
        ref={inputRef}
        className={getInputClass()}
        contentEditable={!disabled}
        suppressContentEditableWarning={true}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        dangerouslySetInnerHTML={{ __html: internalValue || '' }}
      />
      {!internalValue && placeholder && (
        <div className={styles.placeholder}>{placeholder}</div>
      )}
      {renderMenu()}
    </div>
  );
};

export default Mentions;