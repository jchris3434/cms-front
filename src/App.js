import React, { useState } from 'react';
import './App.css';
import HeaderButton from './shared/generic/HeaderButton';

function App() {

  // la logique que tu auras besoin pour le composant tu la mettras avant le return, quelque soit la page tu mets 
  // tes variables que tu vas utiliser, jamais de dur dans le composant saux exception

  const buttonLabel = 'Clients';
  const redirectUrl = "https://ryan-chavatte.atlassian.net/jira/software/projects/CMS/boards/3?selectedIssue=CMS-123";
  const [isDarkMode, setIsDarkMode] = useState(true);
  const icon = "bi-people-fill";

  return (
    // tu peux rajouter plein de classes differentes que tu utiliseras ailleurs si besoin
    // ici je mets des classes random, chacune peut correspondre a un css particulier exempl App jc test classe43 ect popo
    <div className="App jc test classe43 ect popo">
      <HeaderButton
        darkmode={isDarkMode}
        icon={icon}
        text={buttonLabel}
        redirect={redirectUrl}
      />
    </div>
  );
}

export default App;
