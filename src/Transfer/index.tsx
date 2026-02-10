import React, { useState, useEffect } from 'react';
import styles from './Transfer.module.css';

interface TransferItem {
  key: string | number;
  label: React.ReactNode;
  disabled?: boolean;
  [key: string]: any;
}

interface TransferProps {
  disabled?: boolean;
  value?: (string | number)[];
  defaultValue?: (string | number)[];
  onChange?: (targetKeys: (string | number)[], direction: 'left' | 'right', moveKeys: (string | number)[]) => void;
  onSelectChange?: (sourceSelectedKeys: (string | number)[], targetSelectedKeys: (string | number)[]) => void;
  dataSource?: TransferItem[];
  titles?: [string, string];
  render?: (item: TransferItem) => React.ReactNode;
  listStyle?: React.CSSProperties[];
  className?: string;
  style?: React.CSSProperties;
}

export const Transfer: React.FC<TransferProps> = ({
  disabled = false,
  value,
  defaultValue = [],
  onChange,
  onSelectChange,
  dataSource = [],
  titles = ['源列表', '目标列表'],
  render,
  listStyle,
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState<(string | number)[]>(defaultValue);
  const [sourceSelectedKeys, setSourceSelectedKeys] = useState<(string | number)[]>([]);
  const [targetSelectedKeys, setTargetSelectedKeys] = useState<(string | number)[]>([]);
  const [sourceSearchValue, setSourceSearchValue] = useState('');
  const [targetSearchValue, setTargetSearchValue] = useState('');

  // 当外部 value 变化时，更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // 过滤源列表和目标列表
  const getSourceList = () => {
    return dataSource.filter(item => !internalValue.includes(item.key));
  };

  const getTargetList = () => {
    return dataSource.filter(item => internalValue.includes(item.key));
  };

  // 过滤搜索结果
  const getFilteredSourceList = () => {
    const sourceList = getSourceList();
    if (!sourceSearchValue) return sourceList;
    return sourceList.filter(item => 
      (item.label as string).toLowerCase().includes(sourceSearchValue.toLowerCase())
    );
  };

  const getFilteredTargetList = () => {
    const targetList = getTargetList();
    if (!targetSearchValue) return targetList;
    return targetList.filter(item => 
      (item.label as string).toLowerCase().includes(targetSearchValue.toLowerCase())
    );
  };

  // 处理源列表项选择
  const handleSourceItemSelect = (key: string | number, checked: boolean) => {
    let newSourceSelectedKeys;
    if (checked) {
      newSourceSelectedKeys = [...sourceSelectedKeys, key];
    } else {
      newSourceSelectedKeys = sourceSelectedKeys.filter(k => k !== key);
    }
    setSourceSelectedKeys(newSourceSelectedKeys);
    if (onSelectChange) {
      onSelectChange(newSourceSelectedKeys, targetSelectedKeys);
    }
  };

  // 处理目标列表项选择
  const handleTargetItemSelect = (key: string | number, checked: boolean) => {
    let newTargetSelectedKeys;
    if (checked) {
      newTargetSelectedKeys = [...targetSelectedKeys, key];
    } else {
      newTargetSelectedKeys = targetSelectedKeys.filter(k => k !== key);
    }
    setTargetSelectedKeys(newTargetSelectedKeys);
    if (onSelectChange) {
      onSelectChange(sourceSelectedKeys, newTargetSelectedKeys);
    }
  };

  // 处理源列表全选
  const handleSourceSelectAll = (checked: boolean) => {
    const filteredSourceList = getFilteredSourceList();
    const enabledKeys = filteredSourceList.filter(item => !item.disabled).map(item => item.key);
    const newSourceSelectedKeys = checked ? enabledKeys : [];
    setSourceSelectedKeys(newSourceSelectedKeys);
    if (onSelectChange) {
      onSelectChange(newSourceSelectedKeys, targetSelectedKeys);
    }
  };

  // 处理目标列表全选
  const handleTargetSelectAll = (checked: boolean) => {
    const filteredTargetList = getFilteredTargetList();
    const enabledKeys = filteredTargetList.filter(item => !item.disabled).map(item => item.key);
    const newTargetSelectedKeys = checked ? enabledKeys : [];
    setTargetSelectedKeys(newTargetSelectedKeys);
    if (onSelectChange) {
      onSelectChange(sourceSelectedKeys, newTargetSelectedKeys);
    }
  };

  // 处理向右移动
  const handleMoveRight = () => {
    const newInternalValue = [...internalValue, ...sourceSelectedKeys];
    setInternalValue(newInternalValue);
    setSourceSelectedKeys([]);
    if (onChange) {
      onChange(newInternalValue, 'right', sourceSelectedKeys);
    }
    if (onSelectChange) {
      onSelectChange([], targetSelectedKeys);
    }
  };

  // 处理向左移动
  const handleMoveLeft = () => {
    const newInternalValue = internalValue.filter(key => !targetSelectedKeys.includes(key));
    setInternalValue(newInternalValue);
    setTargetSelectedKeys([]);
    if (onChange) {
      onChange(newInternalValue, 'left', targetSelectedKeys);
    }
    if (onSelectChange) {
      onSelectChange(sourceSelectedKeys, []);
    }
  };

  // 处理向右移动全部
  const handleMoveRightAll = () => {
    const filteredSourceList = getFilteredSourceList();
    const enabledKeys = filteredSourceList.filter(item => !item.disabled).map(item => item.key);
    const newInternalValue = [...internalValue, ...enabledKeys];
    setInternalValue(newInternalValue);
    if (onChange) {
      onChange(newInternalValue, 'right', enabledKeys);
    }
  };

  // 处理向左移动全部
  const handleMoveLeftAll = () => {
    const filteredTargetList = getFilteredTargetList();
    const enabledKeys = filteredTargetList.filter(item => !item.disabled).map(item => item.key);
    const newInternalValue = internalValue.filter(key => !enabledKeys.includes(key));
    setInternalValue(newInternalValue);
    if (onChange) {
      onChange(newInternalValue, 'left', enabledKeys);
    }
  };

  // 渲染列表项
  const renderItem = (item: TransferItem, isSource: boolean) => {
    const selectedKeys = isSource ? sourceSelectedKeys : targetSelectedKeys;
    const isSelected = selectedKeys.includes(item.key);
    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isSource) {
        handleSourceItemSelect(item.key, e.target.checked);
      } else {
        handleTargetItemSelect(item.key, e.target.checked);
      }
    };

    return (
      <div
        className={`${styles.transferListItem} ${
          isSelected ? styles.transferListItemSelected : ''
        } ${
          item.disabled ? styles.transferListItemDisabled : ''
        }`}
      >
        <input
          type="checkbox"
          className={styles.transferListItemCheckbox}
          checked={isSelected}
          onChange={handleSelect}
          disabled={disabled || item.disabled}
        />
        <div className={styles.transferListItemContent}>
          {render ? render(item) : item.label}
        </div>
      </div>
    );
  };

  // 渲染列表
  const renderList = (title: string, isSource: boolean) => {
    const filteredList = isSource ? getFilteredSourceList() : getFilteredTargetList();
    const selectedKeys = isSource ? sourceSelectedKeys : targetSelectedKeys;
    const searchValue = isSource ? sourceSearchValue : targetSearchValue;
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isSource) {
        setSourceSearchValue(e.target.value);
      } else {
        setTargetSearchValue(e.target.value);
      }
    };
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isSource) {
        handleSourceSelectAll(e.target.checked);
      } else {
        handleTargetSelectAll(e.target.checked);
      }
    };

    const enabledItems = filteredList.filter(item => !item.disabled);
    const selectedEnabledItems = enabledItems.filter(item => selectedKeys.includes(item.key));
    const isAllSelected = enabledItems.length > 0 && selectedEnabledItems.length === enabledItems.length;

    return (
      <div className={styles.transferList} style={listStyle?.[isSource ? 0 : 1]}>
        <div className={styles.transferListHeader}>
          <span className={styles.transferListTitle}>
            {title}
            <span className={styles.transferListCount}>({filteredList.length})</span>
          </span>
        </div>

        <div className={styles.transferListSearch}>
          <input
            type="text"
            className={styles.transferListSearchInput}
            placeholder="搜索"
            value={searchValue}
            onChange={handleSearchChange}
            disabled={disabled}
          />
        </div>

        <div className={styles.transferListContent}>
          {filteredList.length === 0 ? (
            <div style={{ padding: '16px', textAlign: 'center', color: '#999' }}>
              无数据
            </div>
          ) : (
            filteredList.map(item => renderItem(item, isSource))
          )}
        </div>

        <div className={styles.transferListFooter}>
          <span className={styles.transferListFooterText}>
            {selectedEnabledItems.length}/{enabledItems.length}
          </span>
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={handleSelectAll}
            disabled={disabled || enabledItems.length === 0}
          />
          <span style={{ fontSize: '12px', color: '#666' }}>全选</span>
        </div>
      </div>
    );
  };

  // 检查是否可以向右移动
  const canMoveRight = sourceSelectedKeys.length > 0;
  // 检查是否可以向左移动
  const canMoveLeft = targetSelectedKeys.length > 0;

  return (
    <div className={`${styles.transfer} ${disabled ? styles.transferDisabled : ''} ${className}`} style={style}>
      {renderList(titles[0], true)}

      <div className={styles.transferOperations}>
        <button
          type="button"
          className={`${styles.transferOperationButton} ${
            canMoveRight ? styles.transferOperationButtonPrimary : styles.transferOperationButtonDisabled
          }`}
          onClick={handleMoveRight}
          disabled={disabled || !canMoveRight}
        >
          →
        </button>
        <button
          type="button"
          className={`${styles.transferOperationButton} ${
            canMoveLeft ? styles.transferOperationButtonPrimary : styles.transferOperationButtonDisabled
          }`}
          onClick={handleMoveLeft}
          disabled={disabled || !canMoveLeft}
        >
          ←
        </button>
        <button
          type="button"
          className={styles.transferOperationButton}
          onClick={handleMoveRightAll}
          disabled={disabled || getFilteredSourceList().filter(item => !item.disabled).length === 0}
        >
          ⇒
        </button>
        <button
          type="button"
          className={styles.transferOperationButton}
          onClick={handleMoveLeftAll}
          disabled={disabled || getFilteredTargetList().filter(item => !item.disabled).length === 0}
        >
          ⇐
        </button>
      </div>

      {renderList(titles[1], false)}
    </div>
  );
};

export default Transfer;