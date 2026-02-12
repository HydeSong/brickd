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

const Tab: React.FC<TabProps> = ({ className, children }) => {
  return (
    <div className={`${styles.tabContent} ${className || ''}`}>{children}</div>
  );
};

interface TabsComponent extends React.FC<TabsProps> {
  Tab: React.FC<TabProps>;
}

const Tabs: TabsComponent = ({
  activeKey,
  defaultActiveKey,
  onChange,
  className,
  style,
  children,
}) => {
  const [currentActiveKey, setCurrentActiveKey] = useState(
    activeKey || defaultActiveKey || '1',
  );

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
          const tabElement = tab as React.ReactElement<TabProps>;
          const key = tabElement.key || (index + 1).toString();
          const label = tabElement.props.label || `Tab ${index + 1}`;
          return (
            <button
              type="button"
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
          const tabElement = tab as React.ReactElement<TabProps>;
          const key = tabElement.key || (index + 1).toString();
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
