import React from 'react';
import './CreatePageOverlay.css';

function CreatePageOverlay(props){
    return ( 
       <div class="createpageoverlay" id={props.isDarkMode === true ? 'dark':''}>
        <h3>Créer une nouvelle page</h3>
        <form action='#'>
        <div id="inputs-row-page">
         <div class="input-data">
            <label for='pagename'>Nom de la page</label><br/>
            <input name='pagename' type="text" placeholder='My_Page' required/>
         </div>
         <div class="input-data">
         <label for='parentpage'>Page parente</label><br/>
            <input type="text" name='parentpage'/>
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