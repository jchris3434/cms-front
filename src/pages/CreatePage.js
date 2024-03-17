import React, { useState } from 'react';
import SidebarLeftWidgets from '../shared/component/SidebarLeftWidgets';
import getDarkModeFromLocalStorage from '../shared/getDarkModeFromLocalStorage'

function CreatePage() {
  const [isdarkmode, setDarkMode] = useState(getDarkModeFromLocalStorage());
  
    return (
      <div>
        <SidebarLeftWidgets isDarkMode={isdarkmode}/>
      </div>
    );
  }
   export default CreatePage;