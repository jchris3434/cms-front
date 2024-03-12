import './App.css';
import UserSettings from './shared/generic/UserSettings'
import React, { useState } from 'react';
import getDarkModeFromLocalStorage from './shared/getDarkModeFromLocalStorage'

function App() {
  const [isdarkmode, setDarkMode] = useState(getDarkModeFromLocalStorage())
  return (
    <div>
      <UserSettings 
      isdarkmode={isdarkmode}
      setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;
