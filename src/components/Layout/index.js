import React from 'react';
import './Layout.scss';

const Layout = ({ children, disableScroll }) => {
  const className = disableScroll ? "layout disable-scroll" : "layout";

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Layout;
