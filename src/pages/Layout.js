import React from 'react';
import Header from '../shared/component/Header';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderLogin from '../shared/component/HeaderLogin';

function Layout(props) {  
  const location = useLocation();  
  const isLoginPage = location.pathname === '/'; 
  
  return (    
    <div>      
      {isLoginPage ? (
        <>
          <HeaderLogin isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />
          <Outlet isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />     
        </>
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
