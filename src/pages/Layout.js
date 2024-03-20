import React from 'react';
import Header from '../shared/component/Header';
import { Outlet, useLocation } from 'react-router-dom';

function Layout(props) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div>
      {isLoginPage ? (
        <Outlet isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />
      ) : (
        <div>
          <Header isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />
          <Outlet isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />
        </div>
      )}
    </div>
  );
}

export default Layout;