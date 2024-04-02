import React from 'react';
import './DeleteProjectOverlay.css';
import PropTypes from 'prop-types';

/**
 * @description                                                                        Overlay Content (fits in Overlay component)
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode                     props.isDarkMode                    Either true or false 
 * @param {function} setShowDeleteProjectOverlay   props.setShowDeleteProjectOverlay   Returns a boolean to display the overlay
 * 
 * @returns                                        Delete Project Content
 */

export default function DeleteProjectOverlay(props){
    return ( 
       <div className="deleteprojectoverlay" id={props.isDarkMode === true ? 'dark':''}>
        <h3>Etes-vous sûr de vouloir supprimer le projet ?</h3>
        <form action='#'>
      <div id="deleteprojectbuttons">
      <button onClick={() => props.setShowDeleteProjectOverlay(false)}>Retour</button> 
      <button type="submit">Valider</button>
      </div>
        </form>
       </div>
    )
}

DeleteProjectOverlay.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
  setShowDeleteProjectOverlay: PropTypes.func.isRequired // setShowDeleteProjectOverlay prop is required and should be a function
};