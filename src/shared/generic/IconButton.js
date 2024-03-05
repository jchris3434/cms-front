import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './IconButton.css';

/**
 * 
 * @param {object} props 
 * @param {string} icon             props.icon          The icon to be displayed in the button
 * @param {function} buttonAction   props.buttonAction  Funcion that executes on click of the button
 * 
 * @returns                         IconButton component
 */
function IconButton(props){

    return (<>
        <Button className='IconButton' onClick={props.buttonAction}>
            <i className={props.icon}></i>
        </Button>


    </>)


}


export default IconButton ;