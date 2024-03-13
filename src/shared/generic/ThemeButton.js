import React from "react";
import './ThemeButton.css'
import getDarkModeFromLocalStorage from '../getDarkModeFromLocalStorage'

/**
 * @description                     Theme Button for changing To Light/Dark Mode 
 * 
 * @param {object} props
 * @param {boolean} isdarkmode      props.isDarkMode either 'true' or 'false'
 * @param {function} setDarkMode    props.setDarkMode UseState in parent element
 * 
 * @returns                         JSX elements (ThemeButton)
 */

function ThemeButton(props) {
	function toggleMode() {
		localStorage.setItem("isdarkmode", !getDarkModeFromLocalStorage());
        props.setDarkMode(getDarkModeFromLocalStorage());
	} // Inverts boolean in localStorage, then updates state in app.js

	return (
            <label class = 'toggle-switch'>
                <input 
                    type = 'checkbox' 
                    checked={props.isdarkmode} 
                    onChange={toggleMode}
                />
                <span class = 'slider'></span>
            </label>
	);
}

export default ThemeButton;