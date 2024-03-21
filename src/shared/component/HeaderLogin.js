import React from 'react';
import './HeaderLogin.css';
import Logo from '../generic/Logo';

/**
 * @description                                     The header that is displayed as the header navbar
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * 
 * @returns                                         The header component
 */
function HeaderLogin(props){

    return (
        <div className='Header' isDarkMode={props.isDarkMode.toString()}>
            <div className='headerBody'>
                <Logo isDarkMode={props.isDarkMode} />
            </div>
        </div>
    )
}

export default HeaderLogin ;