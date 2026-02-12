import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './AutoComplete.module.css';

interface AutoCompleteOption {
  value: string;
  label?: string;
  disabled?: boolean;
}

type AutoCompleteOptions = AutoCompleteOption[] | string[];

interface AutoCompleteProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  options?: AutoCompleteOptions;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSelect?: (option: AutoCompleteOption | string) => void;
  onSearch?: (value: string) => void;
  loading?: boolean;
  filterOption?: (
    inputValue: string,
    option: AutoCompleteOption | string,
  ) => boolean;
  renderOption?: (
    option: AutoCompleteOption | string,
    inputValue: string,
  ) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  size = 'default',
  disabled = false,
  readOnly = false,
  error = false,
  options = [],
  value,
  defaultValue,
  placeholder,
  onChange,
  onSelect,
  onSearch,
  loading = false,
  filterOption,
  renderOption,
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue || '',
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [filteredOptions, setFilteredOptions] = useState<
    (AutoCompleteOption | string)[]
  >([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // 当输入值或选项变化时，过滤选项
  useEffect(() => {
    if (internalValue && options.length > 0) {
      const filtered = options.filter((option) => {
        if (filterOption) {
          return filterOption(internalValue, option);
        }

        // 默认过滤逻辑
        if (typeof option === 'string') {
          return option.toLowerCase().includes(internalValue.toLowerCase());
        } else {
          return (
            option.label?.toLowerCase().includes(internalValue.toLowerCase()) ||
            option.value.toLowerCase().includes(internalValue.toLowerCase())
          );
        }
      });
      setFilteredOptions(filtered);
      setActiveIndex(-1);
      setIsOpen(true);
    } else {
      setFilteredOptions([]);
      setIsOpen(false);
    }
  }, [internalValue, options, filterOption]);

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
    if (onSearch) {
      onSearch(newValue);
    }
  };

  const handleSelect = (option: AutoCompleteOption | string) => {
    let selectedValue: string;
    if (typeof option === 'string') {
      selectedValue = option;
    } else {
      selectedValue = option.value;
    }

    setInternalValue(selectedValue);
    setIsOpen(false);

    if (onChange) {
      onChange(selectedValue);
    }
    if (onSelect) {
      onSelect(option);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown') {
        setIsOpen(true);
        setActiveIndex(0);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) => {
          if (prev < filteredOptions.length - 1) {
            return prev + 1;
          }
          return prev;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
          return 0;
        });
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
          const option = filteredOptions[activeIndex];
          if (typeof option !== 'string' && option.disabled) {
            return;
          }
          handleSelect(option);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleFocus = () => {
    if (internalValue && filteredOptions.length > 0) {
      setIsOpen(true);
    }
  };

  const getInputClass = () => {
    const classes = [styles.autoCompleteInput];

    // Add size class
    if (size !== 'default') {
      classes.push(
        styles[
          `autoCompleteSize${size.charAt(0).toUpperCase() + size.slice(1)}`
        ],
      );
    }

    // Add error class
    if (error) {
      classes.push(styles.autoCompleteError);
    }

    return classes.join(' ');
  };

  const renderOptionItem = (
    option: AutoCompleteOption | string,
    index: number,
  ) => {
    const isActive = index === activeIndex;
    const isDisabled = typeof option !== 'string' && option.disabled;

    const getOptionClass = () => {
      const classes = [styles.autoCompleteOption];
      if (isActive) {
        classes.push(styles.autoCompleteOptionActive);
      }
      if (isDisabled) {
        classes.push(styles.autoCompleteOptionDisabled);
      }
      return classes.join(' ');
    };

    const getOptionLabel = () => {
      if (renderOption) {
        return renderOption(option, internalValue);
      }
      if (typeof option === 'string') {
        return option;
      }
      return option.label || option.value;
    };

    return (
      <div
        key={typeof option === 'string' ? option : option.value}
        className={getOptionClass()}
        onClick={() => !isDisabled && handleSelect(option)}
      >
        {getOptionLabel()}
      </div>
    );
  };

  return (
    <div className={`${styles.autoComplete} ${className}`} style={style}>
      <input
        ref={inputRef}
        type="text"
        className={getInputClass()}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        value={internalValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />

      {isOpen && (
        <div ref={dropdownRef} className={styles.autoCompleteDropdown}>
          {loading ? (
            <div className={styles.autoCompleteLoading}>加载中...</div>
          ) : filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) =>
              renderOptionItem(option, index),
            )
          ) : (
            <div className={styles.autoCompleteEmpty}>无匹配选项</div>
          )}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
