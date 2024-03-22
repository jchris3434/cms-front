import React, { useState } from 'react';
import ContainerCustom from '../shared/generic/ContainerCustom'
import DashBoardCard from '../shared/component/DashBoardCard'
import Overlay from '../shared/component/Overlay'
import DeleteProjectOverlay from '../shared/component/DeleteProjectOverlay'
import CreatePageOverlay from '../shared/component/CreatePageOverlay'
import 'bootstrap/dist/css/bootstrap.css';
import './DashboardProject.css'

export default function DashboardProject(props) {
  const [showdeleteprojectoverlay, setShowDeleteProjectOverlay] = useState(false);
  const [showcreatepageoverlay, setShowCreatePageOverlay] = useState(false);

    return (
      <div id={props.isDarkMode === true ? 'dashboardprojectdark':''}>
        <div class="rounded-pill" id="projectstatusbar">
        <span>Projet: Blog animalier</span>
        <span>Client: Sue Flay</span>
        <span>Statut: Développement</span>
        </div>

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
              show={setShowCreatePageOverlay} 
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

        {/* Overlays */}
         {showdeleteprojectoverlay && 
           <Overlay 
           component={
              <DeleteProjectOverlay 
                  isDarkMode={props.isDarkMode}
                  setShowDeleteProjectOverlay={setShowDeleteProjectOverlay}
              />}
           />
            }

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
