import React from 'react';
import Button from 'react-bootstrap/Button';

import './HeaderButton.css';

/**
 * @description                                     The buttons that are displayed in the header navbar
 * 
 * @param {object}  props 
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false
 * @param {string}  icon        props.icon          The reference of the icon from the Boostrap library (example : bi-screwdriver)
 * @param {string}  text        props.text          The text that is displayed on the button
 * @param {string}  redirect    props.redirect      The url link that the button redirects to
 * @returns                                         Button component 
 */

function HeaderButton(props){

    console.log(props.isDarkMode)
    
    const redirect = () => {
        window.location.href = props.redirect;
    };

    return ( 
        <Button isDarkMode={props.isDarkMode.toString()} className='HeaderButton' onClick={redirect}> 
            <i className={props.icon}></i>
            <label >{props.text}</label>
        </Button>
    )
}

export default HeaderButton ;