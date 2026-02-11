import React, { useState, useEffect, useRef } from 'react';
import styles from './ColorPicker.module.css';

interface ColorPickerProps {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

const presetColors = [
  '#f5222d', '#fa541c', '#fa8c16', '#faad14', '#a0d911', '#52c41a',
  '#13c2c2', '#1890ff', '#722ed1', '#eb2f96', '#fa8c16', '#a0d911',
  '#f759ab', '#722ed1', '#531dab', '#2f54eb', '#1890ff', '#13c2c2',
  '#52c41a', '#73d13d', '#ebec13', '#faad14', '#fa8c16', '#fa541c',
  '#f5f5f5', '#f0f0f0', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#595959',
  '#262626', '#1f1f1f', '#141414', '#000000', '#ffffff', '#fff2e8',
  '#ffbb96', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff',
  '#bdb2ff', '#ffc6ff', '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf'
];

export const ColorPicker: React.FC<ColorPickerProps> = ({
  size = 'default',
  disabled = false,
  value,
  defaultValue = '#1890ff',
  onChange,
  onOpenChange,
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<string>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>(defaultValue);
  
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
      setInputValue(value);
    }
  }, [value]);

  // 处理颜色选择
  const handleColorSelect = (color: string) => {
    setInternalValue(color);
    setInputValue(color);
    if (onChange) {
      onChange(color);
    }
  };

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 处理确认按钮点击
  const handleConfirm = () => {
    // 简单验证颜色格式
    if (/^#([0-9A-F]{3}){1,2}$/i.test(inputValue)) {
      setInternalValue(inputValue);
      if (onChange) {
        onChange(inputValue);
      }
    }
    setIsOpen(false);
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  // 处理取消按钮点击
  const handleCancel = () => {
    setInputValue(internalValue);
    setIsOpen(false);
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  // 处理触发器点击
  const handleTriggerClick = () => {
    if (!disabled) {
      const newOpenState = !isOpen;
      setIsOpen(newOpenState);
      if (onOpenChange) {
        onOpenChange(newOpenState);
      }
    }
  };

  // 处理点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node) && 
          menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (onOpenChange) {
          onOpenChange(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOpenChange]);

  // 获取触发器类名
  const getTriggerClass = () => {
    const classes = [styles.colorPickerTrigger];
    
    if (size !== 'default') {
      classes.push(styles[`colorPickerSize${size.charAt(0).toUpperCase() + size.slice(1)}`]);
    }
    
    if (disabled) {
      classes.push(styles.colorPickerTriggerDisabled);
    }
    
    return classes.join(' ');
  };

  // 渲染颜色选择面板
  const renderColorPanel = () => {
    if (!isOpen) return null;

    return (
      <div ref={menuRef} className={styles.colorPickerMenu}>
        <div className={styles.colorPickerPanel}>
          {/* 预设颜色网格 */}
          <div className={styles.colorPickerGrid}>
            {presetColors.map((color) => (
              <div
                key={color}
                className={`${styles.colorPickerItem} ${internalValue === color ? styles.colorPickerItemActive : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </div>
          
          {/* 颜色输入 */}
          <div className={styles.colorPickerInput}>
            <div className={styles.colorPickerInputRow}>
              <span className={styles.colorPickerInputLabel}>Hex</span>
              <input
                type="text"
                className={styles.colorPickerInputField}
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.colorPickerInputRow}>
              <span className={styles.colorPickerInputLabel}>Preview</span>
              <div
                className={styles.colorPreview}
                style={{ backgroundColor: inputValue }}
              />
            </div>
          </div>
          
          {/* 操作按钮 */}
          <div className={styles.colorPickerActions}>
            <button
              type="button"
              className={styles.colorPickerButton}
              onClick={handleCancel}
            >
              取消
            </button>
            <button
              type="button"
              className={`${styles.colorPickerButton} ${styles.colorPickerButtonPrimary}`}
              onClick={handleConfirm}
            >
              确定
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.colorPicker} ${className}`} style={style}>
      <div
        ref={triggerRef}
        className={getTriggerClass()}
        onClick={handleTriggerClick}
      >
        <div
          className={styles.colorPreview}
          style={{ backgroundColor: internalValue }}
        />
        <span>{internalValue}</span>
        <span>{isOpen ? '▼' : '▶'}</span>
      </div>
      {renderColorPanel()}
    </div>
  );
};

export default ColorPicker;