import React from 'react';
import SidebarLeftWidgets from '../shared/component/SidebarLeftWidgets';

function CreatePage(props) {
    return (
      <div>
        <SidebarLeftWidgets isDarkMode={props.isDarkMode}/>
      </div>
    );
  }
   export default CreatePage;