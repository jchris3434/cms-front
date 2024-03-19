import SidebarLeftNavigation from '../shared/component/SidebarLeftNavigation' 

function Preview(props) {
  const pages = [
    { url: '/', label: 'Dashboard projet' },
    { url: '/createPage', label: 'Création de page' },
    { url: '/mediasList', label: 'Liste des médias' },
    { url: '/pagesList', label: 'Liste des pages' },
    { url: '/preview', label: 'Preview' }
];
    return (
      <div>
        <div>
          <SidebarLeftNavigation isDarkMode={props.isDarkMode} items={pages}/>
        </div>
      <div>
        <h1>This is the preview page</h1></div>
      </div>
    );
  }
   export default Preview;