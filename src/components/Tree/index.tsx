import React, { useEffect, useState } from 'react';
import styles from './Tree.module.css';

interface TreeNode {
  key: string;
  title: React.ReactNode;
  children?: TreeNode[];
  disabled?: boolean;
}

interface TreeProps {
  data: TreeNode[];
  defaultExpandedKeys?: string[];
  expandedKeys?: string[];
  defaultSelectedKeys?: string[];
  selectedKeys?: string[];
  onExpand?: (expandedKeys: string[]) => void;
  onSelect?: (
    selectedKeys: string[],
    event: { node: TreeNode; selected: boolean },
  ) => void;
  showLine?: boolean;
  checkable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Tree: React.FC<TreeProps> = ({
  data,
  defaultExpandedKeys = [],
  expandedKeys,
  defaultSelectedKeys = [],
  selectedKeys,
  onExpand,
  onSelect,
  showLine = false,
  checkable = false,
  className = '',
  style = {},
}) => {
  const [internalExpandedKeys, setInternalExpandedKeys] = useState<string[]>(
    expandedKeys !== undefined ? expandedKeys : defaultExpandedKeys,
  );
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<string[]>(
    selectedKeys !== undefined ? selectedKeys : defaultSelectedKeys,
  );

  // 当外部 expandedKeys 变化时，更新内部状态
  useEffect(() => {
    if (expandedKeys !== undefined) {
      setInternalExpandedKeys(expandedKeys);
    }
  }, [expandedKeys]);

  // 当外部 selectedKeys 变化时，更新内部状态
  useEffect(() => {
    if (selectedKeys !== undefined) {
      setInternalSelectedKeys(selectedKeys);
    }
  }, [selectedKeys]);

  const handleExpand = (key: string) => {
    let newExpandedKeys: string[];
    if (internalExpandedKeys.includes(key)) {
      newExpandedKeys = internalExpandedKeys.filter((k) => k !== key);
    } else {
      newExpandedKeys = [...internalExpandedKeys, key];
    }
    setInternalExpandedKeys(newExpandedKeys);
    if (onExpand) {
      onExpand(newExpandedKeys);
    }
  };

  const handleSelect = (key: string, node: TreeNode) => {
    let newSelectedKeys: string[];
    if (internalSelectedKeys.includes(key)) {
      newSelectedKeys = internalSelectedKeys.filter((k) => k !== key);
    } else {
      newSelectedKeys = [...internalSelectedKeys, key];
    }
    setInternalSelectedKeys(newSelectedKeys);
    if (onSelect) {
      onSelect(newSelectedKeys, {
        node,
        selected: newSelectedKeys.includes(key),
      });
    }
  };

  const isExpanded = (key: string): boolean => {
    return internalExpandedKeys.includes(key);
  };

  const isSelected = (key: string): boolean => {
    return internalSelectedKeys.includes(key);
  };

  const hasChildren = (node: TreeNode): boolean => {
    return !!(node.children && node.children.length > 0);
  };

  const renderTreeNode = (node: TreeNode, level: number = 0) => {
    const expanded = isExpanded(node.key);
    const selected = isSelected(node.key);
    const hasChild = hasChildren(node);

    return (
      <div key={node.key} className={styles.treeNode}>
        <div
          className={`${styles.treeNodeContent} ${
            selected ? styles.treeNodeSelected : ''
          } ${node.disabled ? styles.treeNodeDisabled : ''}`}
          onClick={() => !node.disabled && handleSelect(node.key, node)}
        >
          {hasChild && (
            <span
              className={`${styles.treeNodeSwitcher} ${
                expanded ? styles.treeNodeSwitcherExpanded : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                if (!node.disabled) {
                  handleExpand(node.key);
                }
              }}
            >
              {expanded ? '▼' : '►'}
            </span>
          )}
          {!hasChild && showLine && (
            <span className={styles.treeNodeSwitcherPlaceholder} />
          )}
          {checkable && (
            <span className={styles.treeNodeCheckbox}>
              <input
                type="checkbox"
                checked={selected}
                onChange={() => {}}
                onClick={(e) => e.stopPropagation()}
                disabled={node.disabled}
              />
            </span>
          )}
          <span className={styles.treeNodeTitle}>{node.title}</span>
        </div>
        {hasChild && expanded && (
          <div
            className={styles.treeNodeChildren}
            style={{ paddingLeft: `${level * 20 + 20}px` }}
          >
            {node.children?.map((child) => renderTreeNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`${styles.tree} ${
        showLine ? styles.treeShowLine : ''
      } ${className}`}
      style={style}
    >
      {data.map((node) => renderTreeNode(node))}
    </div>
  );
};

export default Tree;
