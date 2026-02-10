import React, { createContext, useContext, ReactNode } from 'react';

interface ConfigProviderProps {
  prefixCls?: string;
  theme?: 'light' | 'dark';
  locale?: any;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface ConfigContextType {
  prefixCls: string;
  theme: 'light' | 'dark';
  locale: any;
}

const defaultConfig: ConfigContextType = {
  prefixCls: 'brickd',
  theme: 'light',
  locale: {},
};

const ConfigContext = createContext<ConfigContextType>(defaultConfig);

export const useConfig = () => {
  return useContext(ConfigContext);
};

export const ConfigProvider: React.FC<ConfigProviderProps> = ({
  prefixCls,
  theme,
  locale,
  children,
  className = '',
  style = {},
}) => {
  const config: ConfigContextType = {
    prefixCls: prefixCls || defaultConfig.prefixCls,
    theme: theme || defaultConfig.theme,
    locale: locale || defaultConfig.locale,
  };

  return (
    <ConfigContext.Provider value={config}>
      <div className={className} style={style}>
        {children}
      </div>
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;