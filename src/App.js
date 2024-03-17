import './App.css';
import React, { useState } from 'react';
import getDarkModeFromLocalStorage from './shared/getDarkModeFromLocalStorage'

import Header from './shared/component/Header'
import SidebarLeftNavigation from './shared/component/SidebarLeftNavigation';

function App() {
  const [isdarkmode, setDarkMode] = useState(getDarkModeFromLocalStorage())
  const pages = [
    { url: '/dashboard-projet', label: 'Dashboard projet' },
    { url: '/creation-page', label: 'Création de page' },
    { url: '/liste-medias', label: 'Liste des médias' },
    { url: '/liste-pages', label: 'Liste des pages' },
    { url: '/preview', label: 'Preview' }
];

  return (
    <section className='section'>
      <Header isDarkMode={isdarkmode} setDarkMode={setDarkMode}/>
      <SidebarLeftNavigation isDarkMode={isdarkmode} items={pages}/>
    </section>
  );
}

export default App;

