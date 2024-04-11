import React from "react";
import './ThemeButton.css'
import getDarkModeFromLocalStorage from '../getDarkModeFromLocalStorage'
import PropTypes from 'prop-types';

/**
 * @description                     Theme Button for changing To Light/Dark Mode 
 * 
 * @param {object} props
 * @param {boolean} isDarkMode      props.isDarkMode either 'true' or 'false'
 * @param {function} setDarkMode    props.setDarkMode UseState in parent element
 * 
 * @returns                         JSX elements (ThemeButton)
 */

function ThemeButton(props) {
    function toggleMode() {
        props.setDarkMode(!props.isDarkMode);
        localStorage.setItem("isdarkmode", !props.isDarkMode);
    } // Updates state in app.jss, then inverts boolean in localStorage

    return (
        <div>
            <label htmlFor='darkModeToggle'></label>
            <label className='toggle-switch' htmlFor='darkModeToggle'>
                <input 
                    id='darkModeToggle'
                    type='checkbox' 
                    checked={props.isDarkMode} 
                    onChange={toggleMode}
                />
                <span className='slider'></span>
            </label>
        </div>
    );
}

ThemeButton.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
};

export default ThemeButton;
