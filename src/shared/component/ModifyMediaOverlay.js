import React from 'react';
import './ModifyMediaOverlay.css';

function ModifyMediaOverlay(props){
    // console.log('ModifMediaIverlay DM : '+props.isDarkMode)
    
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
      <button>Retour</button>
      <button type="submit">Valider</button>
      </div>
        </form>
       </div>
    
    )
}

export default ModifyMediaOverlay ;