import React from 'react';
import './IconButton.css';

/**
 * @description                         A small icon that is a button. Executes passed on function when clicked
 * 
 * @param {object}      props 
 * @param {string}      icon            props.icon          The icon to be displayed in the button
 * @param {function}    buttonAction    props.buttonAction  Funcion that executes on click of the button
 * 
 * @returns                             IconButton component
 */
function IconButton(props){

    return (
        <button className='IconButton' onClick={props.buttonAction}>
            {props.icon}
        </button>
    )


}


export default IconButton ;