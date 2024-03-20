import React, { useState, useEffect } from 'react'
import ContainerCustom from '../shared/generic/ContainerCustom'
import PageCard from '../shared/component/PageCard'
import SidebarLeftNavigation from '../shared/component/SidebarLeftNavigation';
import SearchBar from'../shared/generic/SearchBar'
import './PagesList.css';
import Overlay from '../shared/component/Overlay'
import CreatePageOverlay from '../shared/component/CreatePageOverlay'
import AddButton from '../shared/component/AddButton'

function PageList(props) {
  
  const pages = [
    { url: '/projectdashboard', label: 'Dashboard projet' },
    { url: '/createPage', label: 'Création de page' },
    { url: '/mediasList', label: 'Liste des médias' },
    { url: '/pagesList', label: 'Liste des pages' },
    { url: '/preview', label: 'Preview' }
];

const [showcreatepageoverlay, setShowCreatePageOverlay] = useState(false);

const [pagesList, setPagesList] = useState([]);
   useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/users") //Fake API until we have the right DB
              .then((res) => res.json())
              .then((res) => {setPagesList(res)})
              .catch((err) => console.error(err))
      }, [])

    return (
      <div className='pagelist' id={props.isDarkMode === true ? 'pageslistdark':''}>
        <SidebarLeftNavigation isDarkMode={props.isDarkMode} items={pages}/>
        <div id='contentpagelistitems'>
          <div>
              <SearchBar customWidth='22.5rem' isDarkMode={props.isDarkMode} placeholder='Rechercher une page'/>
              <AddButton 
                show={setShowCreatePageOverlay} 
                text='Ajouter '
                id='addbuttonpagelist'
              />
          </div>
          <div>
          <ContainerCustom 
              isDarkMode={props.isDarkMode} 
              id='containerpagelist'
          >
            {pagesList.map((page) => {
              return <PageCard id={'page'+page.id} pageName={page.website} isDarkMode={props.isDarkMode}/>
            })}
          </ContainerCustom>
        </div>
        </div>
        
      {showcreatepageoverlay && 
           <Overlay 
           component={
              <CreatePageOverlay 
                  isDarkMode={props.isDarkMode} 
                  setShowCreatePageOverlay={setShowCreatePageOverlay}
              />}
           />
            }
      </div>
      
      
    );
  }
   export default PageList;