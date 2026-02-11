import React, { useState } from 'react';
import styles from './Collapse.module.css';

interface CollapseProps {
  activeKey?: string | string[];
  defaultActiveKey?: string | string[];
  onChange?: (key: string | string[]) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface CollapsePanelProps {
  panelKey?: string;
  title?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const CollapsePanel: React.FC<CollapsePanelProps> = ({ children }) => {
  return <>{children}</>;
};

const Collapse: React.FC<CollapseProps> & {
  Panel: React.FC<CollapsePanelProps>;
} = ({ 
  activeKey, 
  defaultActiveKey, 
  onChange, 
  className = '', 
  style = {}, 
  children 
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState<string | string[]>(
    activeKey !== undefined ? activeKey : (defaultActiveKey || '')
  );

  const isActive = (key: string): boolean => {
    if (Array.isArray(internalActiveKey)) {
      return internalActiveKey.includes(key);
    }
    return internalActiveKey === key;
  };

  const handleToggle = (key: string) => {
    let newActiveKey: string | string[];
    if (Array.isArray(internalActiveKey)) {
      if (internalActiveKey.includes(key)) {
        newActiveKey = internalActiveKey.filter(k => k !== key);
      } else {
        newActiveKey = [...internalActiveKey, key];
      }
    } else {
      newActiveKey = internalActiveKey === key ? '' : key;
    }
    setInternalActiveKey(newActiveKey);
    if (onChange) {
      onChange(newActiveKey);
    }
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && child.type === CollapsePanel) {
        const { panelKey, title, className: panelClassName = '', style: panelStyle = {}, children: panelChildren } = child.props;
        const key = panelKey || `panel-${index}`;
        
        const active = isActive(key);
        
        return (
          <div 
            key={key} 
            className={`${styles.collapsePanel} ${panelClassName}`} 
            style={panelStyle}
          >
            <div 
              className={`${styles.collapseHeader} ${active ? styles.collapseHeaderActive : ''}`}
              onClick={() => handleToggle(key)}
            >
              <div className={styles.collapseTitle}>{title}</div>
              <div className={`${styles.collapseArrow} ${active ? styles.collapseArrowActive : ''}`}>
                {active ? '▼' : '►'}
              </div>
            </div>
            <div 
              className={`${styles.collapseContent} ${active ? styles.collapseContentActive : ''}`}
            >
              {panelChildren}
            </div>
          </div>
        );
      }
      return child;
    });
  };

  return (
    <div className={`${styles.collapse} ${className}`} style={style}>
      {renderChildren()}
    </div>
  );
};

Collapse.Panel = CollapsePanel;

export default Collapse;