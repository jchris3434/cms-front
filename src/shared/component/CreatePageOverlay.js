import React from 'react';
import './CreatePageOverlay.css';

/**
 * @description                                     Overlay Content (fits in Overlay component)
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * @param {function} setShowCreatePageOverlay  props.setShowCreatePageOverlay    Returns a boolean to display the overlay
 * 
 * @returns                                         Create Page Content
 */

function CreatePageOverlay(props){
    return ( 
       <div class="createpageoverlay" id={props.isDarkMode === true ? 'darkcreatepageoverlay':''}>
        <h3>Créer une nouvelle page</h3>
        <form action='#'>
        <div id="inputs-row-page">
         <div class="input-data">
            <label for='pagename'>Nom de la page</label><br/>
            <input name='pagename' type="text" placeholder='My_Page' required/>
         </div>
         <div class="input-data">
         <label for='parentpage'>Page parente</label><br/>
         <select name="parentpage" id="parentpage">
            {props.pagesList.map((page) => {
              return <option value={'page'+page.id}>{page.website}</option>
            })}
         </select>            
         </div>
      </div>
      <div id="modifymediabuttons">
      <button onClick={() => props.setShowCreatePageOverlay(false)}>Retour</button> 
      <button type="submit">Valider</button>
      </div>
        </form>
       </div>
    )
}

export default CreatePageOverlay ;