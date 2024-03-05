import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';

import './HeaderButton.css';

/**
 * @description                 The buttons that are displayed in the header navbar
 * 
 * @param {object}  props 
 * @param {boolean} darkmode    props.darkmode  Either true or false
 * @param {string}  icon        props.icon      The reference of the icon from the Boostrap library (example : bi-screwdriver)
 * @param {string}  text        props.text      The text that is displayed on the button
 * @param {string}  redirect    props.redirect  The url link that the button redirects to
 * @returns                     Button component 
 */

function HeaderButton(props){

    console.log(props.darkmode)
    
    const redirect = () => {
        window.location.href = props.redirect;
    };

    return ( 
        <Button darkmode={props.darkmode} className='HeaderButton' onClick={redirect}> 
            <i darkmode={props.darkmode} className={props.icon}></i>
            <label darkmode={props.darkmode} >{props.text}</label>
        </Button>
    )
}

export default HeaderButton ;