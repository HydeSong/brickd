import React, { useState } from 'react';
import styles from './Tabs.module.css';

interface TabProps {
  key?: string;
  label: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

interface TabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, className, children }) => {
  return <div className={`${styles.tabContent} ${className || ''}`}>{children}</div>;
};

const Tabs: React.FC<TabsProps> = ({ activeKey, defaultActiveKey, onChange, className, style, children }) => {
  const [currentActiveKey, setCurrentActiveKey] = useState(activeKey || defaultActiveKey || '0');

  const tabs = React.Children.toArray(children);

  const handleTabClick = (key: string) => {
    setCurrentActiveKey(key);
    if (onChange) {
      onChange(key);
    }
  };

  return (
    <div className={`${styles.tabs} ${className || ''}`} style={style}>
      <div className={styles.tabList}>
        {tabs.map((tab, index) => {
          const key = React.isValidElement<TabProps>(tab) ? tab.key || index.toString() : index.toString();
          const label = React.isValidElement<TabProps>(tab) ? tab.props.label : `Tab ${index + 1}`;
          return (
            <button
              key={key}
              className={`
                ${styles.tab}
                ${key === currentActiveKey ? styles.active : ''}
              `}
              onClick={() => handleTabClick(key)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className={styles.tabContentWrapper}>
        {tabs.map((tab, index) => {
          const key = React.isValidElement<TabProps>(tab) ? tab.key || index.toString() : index.toString();
          if (key === currentActiveKey) {
            return tab;
          }
          return null;
        })}
      </div>
    </div>
  );
};

Tabs.Tab = Tab;

export default Tabs;
