import React, { useState } from 'react';
import SidebarLeftNavigation from '../shared/component/SidebarLeftNavigation';
import getDarkModeFromLocalStorage from '../shared/getDarkModeFromLocalStorage'

function PageList() {
  const [isdarkmode, setDarkMode] = useState(getDarkModeFromLocalStorage());
  
  const pages = [
    { url: '/', label: 'Dashboard projet' },
    { url: '/createPage', label: 'Création de page' },
    { url: '/mediasList', label: 'Liste des médias' },
    { url: '/pagesList', label: 'Liste des pages' },
    { url: '/preview', label: 'Preview' }
];

    return (
      <div>
        <SidebarLeftNavigation isDarkMode={isdarkmode} items={pages}/>
      </div>
    );
  }
   export default PageList;