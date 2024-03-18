import React from 'react';
import './CreateUserOverlay.css';

function CreateUserOverlay(props){
 
    return ( 
       <div class="createuseroverlay" id={props.isDarkMode === true ? 'dark':''}>
        <h3>Ajouter un utilisateur</h3>
        <form action='#'>
        <div id="inputs-row">
         <div class="input-data">
            <label for='username'>Nom d'utilisateur</label><br/>
            <input name='username' type="text" placeholder='User_1' required/>
         </div>
         <div class="input-data">
         <label for='password'>Mot de passe</label><br/>
            <input type="password" name='password' required/>
         </div>
         <div class="input-data">
         <label for='role'>Role</label><br/>
         <select name="role" id="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="super_admin">Super Admin</option>
         </select>
         </div>
      </div>
      <div id="createuserbuttons">
      <button onClick={() => props.setShowCreateUserOverlay(false)}>Retour</button> 
      <button type="submit">Valider</button>
      </div>
        </form>
       </div>
    )
}

export default CreateUserOverlay ;