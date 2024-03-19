import React from 'react';
import './CreateProjectOverlay.css';

/**
 * @description                                     Overlay Content (fits in Overlay component)
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * @param {function} setShowCreateProjectOverlay  props.setShowCreateProjectOverlay    Returns a boolean to display the overlay
 * 
 * @returns                                         Create Project Content
 */

export default function CreateProjectOverlay(props){
    return ( 
       <div class="createprojectoverlay" id={props.isDarkMode === true ? 'dark':''}>
        <h3>Créer un nouveau projet</h3>
        <form action='#'>
        <div id="inputs-row-project">
         <div class="input-data">
            <label for='projectname'>Nom du projet</label><br/>
            <input name='projectname' type="text" placeholder='My_Project' required/>
         </div>
         <div class="input-data">
         <label for='clientname'>Nom du client</label><br/>
            <input type="text" name='clientname'/>
         </div>
      </div>
      <div id="createprojectbuttons">
      <button onClick={() => props.setShowCreateProjectOverlay(false)}>Retour</button> 
      <button type="submit">Valider</button>
      </div>
        </form>
       </div>
    )
}

