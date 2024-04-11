import React from 'react';
import './CreateClientOverlay.css';
import PropTypes from 'prop-types';


/**
 * @description                                     Overlay Content (fits in Overlay component)
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * @param {function} setShowCreateUserOverlay  props.setShowCreateUserOverlay    Returns a boolean to display the overlay
 * 
 * @returns                                         Create User Content
 */

function CreateClientOverlay(props){
 
    return ( 
       <div className="createclientoverlay" id={props.isDarkMode === true ? 'dark':''}>
        <h3>Ajouter un nouveau client</h3>
        <form action='#'>
        <div id="inputs-row">
         <div className="input-data">
            <label htmlFor='username'>Nom d'utilisateur</label><br/>
            <input name='username' type="text" placeholder='User_1' required/>
         </div>
         <div className="input-data">
         <label htmlFor='password'>Mot de passe</label><br/>
            <input type="password" name='password' required/>
         </div>
         <div className="input-data">
         <label htmlFor='role'>Role</label><br/>
         <select name="role" id="role">
            <option value="Client">Client</option>
         </select>
         </div>
      </div>
      <div id="createclientbuttons">
      <button onClick={() => props.setShowCreateUserOverlay(false)}>Retour</button> 
      <button type="submit">Valider</button>
      </div>
        </form>
       </div>
    )
}

CreateClientOverlay.propTypes = {
   isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
   setShowCreateUserOverlay: PropTypes.func.isRequired // setShowCreateUserOverlay prop is required and should be a function
 };

export default CreateClientOverlay ;