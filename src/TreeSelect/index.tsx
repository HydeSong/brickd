import React, { useState, useEffect, useRef } from 'react';
import styles from './TreeSelect.module.css';
import Tree from '../Tree';

interface TreeNode {
  key: string;
  title: React.ReactNode;
  children?: TreeNode[];
  disabled?: boolean;
}

interface TreeSelectProps {
  data: TreeNode[];
  value?: string | string[];
  defaultValue?: string | string[];
  placeholder?: string;
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  searchable?: boolean;
  treeExpandedKeys?: string[];
  treeDefaultExpandedKeys?: string[];
  treeCheckable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const TreeSelect: React.FC<TreeSelectProps> = ({
  data,
  value,
  defaultValue,
  placeholder = '请选择',
  onChange,
  multiple = false,
  searchable = false,
  treeExpandedKeys,
  treeDefaultExpandedKeys = [],
  treeCheckable = false,
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<string | string[]>(
    value !== undefined ? value : (defaultValue !== undefined ? defaultValue : (multiple ? [] : ''))
  );
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [expandedKeys, setExpandedKeys] = useState<string[]>(
    treeExpandedKeys !== undefined ? treeExpandedKeys : treeDefaultExpandedKeys
  );
  const selectRef = useRef<HTMLDivElement>(null);

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // 当外部 treeExpandedKeys 变化时，更新内部状态
  useEffect(() => {
    if (treeExpandedKeys !== undefined) {
      setExpandedKeys(treeExpandedKeys);
    }
  }, [treeExpandedKeys]);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleTreeSelect = (selectedKeys: string[]) => {
    const newValue = multiple ? selectedKeys : selectedKeys[0] || '';
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
    if (!multiple) {
      setOpen(false);
    }
  };

  const handleTreeExpand = (keys: string[]) => {
    setExpandedKeys(keys);
  };

  const getDisplayValue = () => {
    if (Array.isArray(internalValue)) {
      if (internalValue.length === 0) {
        return placeholder;
      }
      // 简单实现：显示选中的数量
      return `${internalValue.length} 项已选择`;
    }
    if (!internalValue) {
      return placeholder;
    }
    // 简单实现：显示第一个选中节点的标题
    const findNodeTitle = (key: string, nodes: TreeNode[]): React.ReactNode => {
      for (const node of nodes) {
        if (node.key === key) {
          return node.title;
        }
        if (node.children) {
          const found = findNodeTitle(key, node.children);
          if (found) {
            return found;
          }
        }
      }
      return '';
    };
    return findNodeTitle(internalValue, data) || placeholder;
  };

  return (
    <div className={`${styles.treeSelect} ${className}`} style={style} ref={selectRef}>
      <div 
        className={`${styles.treeSelectTrigger} ${open ? styles.treeSelectTriggerOpen : ''}`}
        onClick={handleToggle}
      >
        <span className={styles.treeSelectValue}>
          {getDisplayValue()}
        </span>
        <span className={`${styles.treeSelectArrow} ${open ? styles.treeSelectArrowOpen : ''}`}>
          {open ? '▼' : '►'}
        </span>
      </div>
      {open && (
        <div className={styles.treeSelectDropdown}>
          {searchable && (
            <div className={styles.treeSelectSearch}>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="搜索"
                className={styles.treeSelectSearchInput}
              />
            </div>
          )}
          <div className={styles.treeSelectTree}>
            <Tree
              data={data}
              expandedKeys={expandedKeys}
              onExpand={handleTreeExpand}
              selectedKeys={Array.isArray(internalValue) ? internalValue : (internalValue ? [internalValue] : [])}
              onSelect={handleTreeSelect}
              checkable={treeCheckable}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TreeSelect;