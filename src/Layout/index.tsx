
import styles from './Layout.module.css';

// 基础布局接口
interface BaseLayoutProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// Layout接口
interface LayoutProps extends BaseLayoutProps {
  hasSider?: boolean;
}

// Header接口
interface HeaderProps extends BaseLayoutProps {
  height?: string | number;
}

// Sider接口
interface SiderProps extends BaseLayoutProps {
  width?: string | number;
  collapsedWidth?: string | number;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

// Content接口
interface ContentProps extends BaseLayoutProps {
  style?: React.CSSProperties;
}

// Footer接口
interface FooterProps extends BaseLayoutProps {
  height?: string | number;
}

// Layout组件接口
interface LayoutComponent extends React.FC<LayoutProps> {
  Header: React.FC<HeaderProps>;
  Sider: React.FC<SiderProps>;
  Content: React.FC<ContentProps>;
  Footer: React.FC<FooterProps>;
}

// Layout组件
const Layout: LayoutComponent = ({ hasSider = false, className, style, children }) => {
  return (
    <div
      className={`
        ${styles.layout}
        ${hasSider ? styles['layout-has-sider'] : ''}
        ${className || ''}
      `}
      style={style}
    >
      {children}
    </div>
  );
};

// Header组件
const Header: React.FC<HeaderProps> = ({ height, className, style, children }) => {
  return (
    <header
      className={`${styles.header} ${className || ''}`}
      style={{
        ...style,
        height,
      }}
    >
      {children}
    </header>
  );
};

// Sider组件
const Sider: React.FC<SiderProps> = ({
  width = 200,
  collapsedWidth = 80,
  collapsed = false,
  className,
  style,
  children,
}) => {
  return (
    <aside
      className={`
        ${styles.sider}
        ${collapsed ? styles.siderCollapsed : ''}
        ${className || ''}
      `}
      style={{
        ...style,
        width: collapsed ? collapsedWidth : width,
      }}
    >
      {children}
    </aside>
  );
};

// Content组件
const Content: React.FC<ContentProps> = ({ className, style, children }) => {
  return (
    <main
      className={`${styles.content} ${className || ''}`}
      style={style}
    >
      {children}
    </main>
  );
};

// Footer组件
const Footer: React.FC<FooterProps> = ({ height, className, style, children }) => {
  return (
    <footer
      className={`${styles.footer} ${className || ''}`}
      style={{
        ...style,
        height,
      }}
    >
      {children}
    </footer>
  );
};

// 布局组件集合
Layout.Header = Header;
Layout.Sider = Sider;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
export { Header, Sider, Content, Footer };
