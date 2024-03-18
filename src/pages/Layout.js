import React from 'react';
import Header from '../shared/component/Header';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
      <div>
        <Header isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode}/>
        <Outlet isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode}/>
      </div>
    );
  }
   export default Layout;