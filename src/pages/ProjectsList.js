import React, { useState } from 'react';
import ContainerCustom from '../shared/generic/ContainerCustom'
import DashBoardCard from '../shared/component/DashBoardCard'
import Overlay from '../shared/component/Overlay'
import DeleteProjectOverlay from '../shared/component/DeleteProjectOverlay'
import './ProjectsList.css'

export default function ProjectsList(props) {
  const [showdeleteprojectoverlay, setShowDeleteProjectOverlay] = useState(false);

    return (
      <div id={props.isDarkMode === true ? 'projectlistdark':''}>
        <ContainerCustom displayStyle='dashboard' isDarkMode={props.isDarkMode}>
            <DashBoardCard 
              isDarkMode={props.isDarkMode} 
              text='Accéder à la liste de toutes les pages de ce projet' 
              title='Liste Des pages'
              icon="bi bi-folder-fill"
              redirect='/pagesList'
            />
            <DashBoardCard 
              isDarkMode={props.isDarkMode}
              text='Accéder à la liste de tous les média de ce projet'
              title='Liste Des Média'
              icon="bi bi-card-image"
              redirect='/mediasList'
            />
            <DashBoardCard 
              isDarkMode={props.isDarkMode}
              text='Accéder au mode création de pages'
              title='Créer une page'
              icon="bi bi-plus-circle-fill"
              redirect='/pagesList'
            />
            <DashBoardCard 
              isDarkMode={props.isDarkMode}
              title='Preview'
              text='Accéder au mode preview de votre site'
              icon="bi bi-eye-fill"
              redirect='/preview'
            />
            <DashBoardCard 
              isDarkMode={props.isDarkMode}
              title='Supprimer'
              text='Supprimer le projet en cours'
              icon="bi-x-circle-fill"
              show={setShowDeleteProjectOverlay} 
            />
        </ContainerCustom> 
         {showdeleteprojectoverlay && 
           <Overlay 
           component={
              <DeleteProjectOverlay 
                  isDarkMode={props.isDarkMode}
                  setShowDeleteProjectOverlay={setShowDeleteProjectOverlay}
              />}
           />
            }


      </div>
    );
  }
