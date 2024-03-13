import './App.css';
import React, { useState } from 'react';
import getDarkModeFromLocalStorage from './shared/getDarkModeFromLocalStorage'

import Header from './shared/component/Header'

function App() {
  const [isdarkmode, setDarkMode] = useState(getDarkModeFromLocalStorage())
  return (
    <div>
      <Header isDarkMode={isdarkmode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;

