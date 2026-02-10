import React from 'react';

interface AppProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const App: React.FC<AppProps> = ({
  children,
  className = '',
  style = {},
}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default App;