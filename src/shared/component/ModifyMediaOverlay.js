import React from 'react';
import './ModifyMediaOverlay.css';

/**
 * @description                                     Overlay Content (fits in Overlay component)
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * @param {function} setShowModifyMedia  props.setShowModifyMedia    Returns a boolean to display the overlay
 * 
 * @returns                                         Modify Media Content
 */


function ModifyMediaOverlay(props){
 
    return ( 
       <div class="modifymediaoverlay" id={props.isDarkMode === true ? 'dark':''}>
        <h3>Modifier un media</h3>
        <form action='#'>
        <div id="inputs-row">
         <div class="input-data">
            <label for='medianame'>Nom du Media</label><br/>
            <input name='medianame' type="text" placeholder='MonMedia.jpg' required/>
         </div>
         <div class="input-data">
         <label for='altmedianame'>Texte alternatif</label><br/>
            <input type="text" name='altmedianame'/>
         </div>
      </div>
      <div id="modifymediabuttons">
      <button onClick={() => props.setShowModifyMedia(false)}>Retour</button> 
      <button type="submit">Valider</button>
      </div>
        </form>
       </div>
    )
}

export default ModifyMediaOverlay ;