import React, { useState, useEffect } from 'react'
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

   const [clientsList, setClientsList] = useState([]);
   useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/users") //Fake API until we have the right DB
              .then((res) => res.json())
              .then((res) => {setClientsList(res)})
              .catch((err) => console.error(err))
      }, [])

    return ( 
       <div className="createprojectoverlay" id={props.isDarkMode === true ? 'dark':''}>
        <h3>Créer un nouveau projet</h3>
        <form action='#'>
        <div id="inputs-row-project">
         <div class="input-data">
            <label htmlFor='projectname'>Nom du projet</label><br/>
            <input name='projectname' type="text" placeholder='My_Project' required/>
         </div>
         <div className="input-data">
         <label htmlFor='clientname'>Nom du client</label><br/>
         <select name="clientname" id="clientname" required>
            <option value="-"></option>
            {clientsList.map((user) => {
              return <option value={user.id}>{user.username}</option>
            })}
         </select>
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

