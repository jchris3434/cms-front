import React from 'react';
import './Preview.css';
import SidebarLeftNavigation from '../shared/component/SidebarLeftNavigation';

function Preview(props) {
  const pages = [
    { url: '/', label: 'Dashboard projet' },
    { url: '/createPage', label: 'Création de page' },
    { url: '/mediasList', label: 'Liste des médias' },
    { url: '/pagesList', label: 'Liste des pages' },
    { url: '/preview', label: 'Preview' }
  ];
  

  return (
    <div className="Prevdiv"> 
      <SidebarLeftNavigation className="Sidebar" isDarkMode={props.isDarkMode} items={pages}/>
      <div className="MainContent">
        <h1 className='projectName'>Nom projet</h1>
        <div className='prevProject'></div>
      </div>
    </div>
  );
}

export default Preview;
