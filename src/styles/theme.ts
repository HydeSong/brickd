// 主题配置文件
export interface Theme {
  // 颜色系统
  colors: {
    // 主色
    primary: string;
    primaryHover: string;
    primaryActive: string;
    
    // 辅助色
    success: string;
    warning: string;
    error: string;
    info: string;
    
    // 中性色
    text: string;
    textSecondary: string;
    textDisabled: string;
    border: string;
    borderLight: string;
    background: string;
    backgroundLight: string;
    backgroundDisabled: string;
    
    // 功能色
    white: string;
    black: string;
    transparent: string;
  };
  
  // 间距系统
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  
  // 字体系统
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      bold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      loose: number;
    };
  };
  
  // 圆角系统
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  
  // 阴影系统
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  // 过渡动画
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
}

// 默认主题
export const defaultTheme: Theme = {
  colors: {
    // 主色
    primary: '#1890ff',
    primaryHover: '#40a9ff',
    primaryActive: '#096dd9',
    
    // 辅助色
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
    info: '#1890ff',
    
    // 中性色
    text: '#333333',
    textSecondary: '#666666',
    textDisabled: '#999999',
    border: '#d9d9d9',
    borderLight: '#e8e8e8',
    background: '#ffffff',
    backgroundLight: '#f5f5f5',
    backgroundDisabled: '#f0f0f0',
    
    // 功能色
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 600,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      loose: 1.8,
    },
  },
  
  borderRadius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 2px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 4px 16px rgba(0, 0, 0, 0.2)',
    xl: '0 8px 32px rgba(0, 0, 0, 0.25)',
  },
  
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
};

// 深色主题
export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#1890ff',
    primaryHover: '#40a9ff',
    primaryActive: '#096dd9',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    textDisabled: '#707070',
    border: '#434343',
    borderLight: '#333333',
    background: '#1f1f1f',
    backgroundLight: '#2c2c2c',
    backgroundDisabled: '#262626',
  },
};

export default defaultTheme;