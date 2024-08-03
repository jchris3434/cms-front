import React, { useState } from 'react';
import ContainerCustom from '../shared/generic/ContainerCustom';
import DashBoardCard from '../shared/component/DashBoardCard';
import Overlay from '../shared/component/Overlay';
import PropTypes from 'prop-types';
import DeleteProjectOverlay from '../shared/component/DeleteProjectOverlay';
import CreatePageOverlay from '../shared/component/CreatePageOverlay';
import 'bootstrap/dist/css/bootstrap.css';
import './DashboardProject.css';
import DeleteButton from '../shared/component/DeleteButton';

/**
 * DashboardProject Component
 * 
 * This component represents the dashboard interface for a project, displaying various actions 
 * that the user can take, such as viewing pages, media, creating new pages, and previewing the site. 
 * It also provides options to delete the project or create a new page through overlay modals.
 * 
 * Props:
 * - isDarkMode (boolean): Determines if dark mode is enabled, impacting the overall style.
 * 
 * State:
 * - showdeleteprojectoverlay (boolean): Controls the visibility of the Delete Project overlay.
 * - showcreatepageoverlay (boolean): Controls the visibility of the Create Page overlay.
 * - username (string): Retrieves and stores the username from localStorage.
 */

export default function DashboardProject(props) {
  // State to manage the visibility of the Delete Project overlay
  const [showdeleteprojectoverlay, setShowDeleteProjectOverlay] = useState(false);
  // State to manage the visibility of the Create Page overlay
  const [showcreatepageoverlay, setShowCreatePageOverlay] = useState(false);
  // Retrieve the username from localStorage
  const [username] = useState(localStorage.getItem('username') || ''); 

  return (
    <div id={props.isDarkMode === true ? 'dashboardprojectdark' : ''}>
      {/* Project status bar displaying project details */}
      <div className="rounded-pill" id="projectstatusbar">
        <span>Projet: Blog animalier</span>
        <span>Client: {username.toUpperCase()}</span>
        <span>Statut: Développement</span>
      </div>

      {/* Container for the dashboard cards */}
      <ContainerCustom displayStyle='dashboard' isDarkMode={props.isDarkMode} id="custom">
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
          title='Previsualiser'
          text='Accéder à la previsualisation de votre site'
          icon="bi bi-eye-fill"
          redirect='/preview'
        />
      </ContainerCustom> 

      {/* Delete button positioned at the bottom of the dashboard */}
      <div className="deleteButtonContainer">
        <DeleteButton 
          show={setShowDeleteProjectOverlay} 
          text="Supprimer"
        />
      </div>

      {/* Conditionally render the overlays based on the state */}
      {showdeleteprojectoverlay && 
        <Overlay 
          component={
            <DeleteProjectOverlay 
              isDarkMode={props.isDarkMode}
              setShowDeleteProjectOverlay={setShowDeleteProjectOverlay}
            />
          }
        />
      }

      {showcreatepageoverlay && 
        <Overlay 
          component={
            <CreatePageOverlay 
              isDarkMode={props.isDarkMode}
              setShowCreatePageOverlay={setShowCreatePageOverlay}
            />
          }
        />
      }
    </div>
  );
}

// PropTypes validation for the DashboardProject component
DashboardProject.propTypes = {
  isDarkMode: PropTypes.bool.isRequired // isDarkMode prop is required and should be a boolean
};
