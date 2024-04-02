import React, { useState, useEffect } from 'react'
import './CreatePageOverlay.css';
import PropTypes from 'prop-types';

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

   const [pagesList, setPagesList] = useState([]);
   useEffect(()=> {
      fetch("http://localhost:12000/pages") //Fake API until we have the right DB
              .then((res) => res.json())
              .then((res) => {setPagesList(res)})
              .catch((err) => console.error(err))
      }, [])

    return ( 
       <div className="createpageoverlay" id={props.isDarkMode === true ? 'darkcreatepageoverlay':''}>
        <h3>Créer une nouvelle page</h3>
        <form action='#'>
        <div id="inputs-row-page">
         <div className="input-data">
            <label htmlFor='pagename'>Nom de la page</label><br/>
            <input name='pagename' type="text" placeholder='My_Page' required/>
         </div>
         <div className="input-data">
         <label htmlFor='parentpage'>Page parente</label><br/>
         <select name="parentpage" id="parentpage">
         <option value="">Aucune</option>
            {pagesList.map((page) => {
              return <option value={'page'+page.pag_id}>{page.pag_name}</option>
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
CreatePageOverlay.propTypes = {
   isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
   setShowCreatePageOverlay: PropTypes.func.isRequired // setShowCreatePageOverlay prop is required and should be a function
 };

export default CreatePageOverlay ;