import React, { useState } from 'react';
import Header from '../shared/component/Header';
import { Outlet } from 'react-router-dom';
import getDarkModeFromLocalStorage from '../shared/getDarkModeFromLocalStorage'

function Layout() {
  const [isdarkmode, setDarkMode] = useState(getDarkModeFromLocalStorage())
  
    return (
      <div>
        <Header isDarkMode={isdarkmode} setDarkMode={setDarkMode}/>
        <Outlet isDarkMode={isdarkmode} setDarkMode={setDarkMode}/>
      </div>
    );
  }
   export default Layout;