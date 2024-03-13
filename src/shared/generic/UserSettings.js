import React, { useState } from 'react';
import './UserSettings.css';
import ThemeButton from './ThemeButton';
import Logout from '../Logout'

/**
 * @description                     User Avatar and overlay for changing To Light/Dark Mode and Logout 
 * 
 * @param {object} props
 * @param {boolean} isdarkmode      props.isDarkMode either 'true' or 'false'
 * @param {function} setDarkMode    props.setDarkMode UseState in parent element
 * 
 * @returns                         JSX elements (Avatar + Overlay on click + ThemeButton)
 */

// Token simulation, will be created when authenticated
sessionStorage.setItem("username", "Sue Flay") 
sessionStorage.setItem("JWT", "fqzmifgqzmigfmkzqgrfmiz75JFJYFJ") 

const username = sessionStorage.getItem("username") 

function UserSettings(props){

    //Boolean changing Overlay visibility
    const [show, setShow] = useState(false);
    const showOverlay = () => {
        setShow(!show)
    }

    return ( 
        <div 
        class="avatar" 
        id={props.isdarkmode === true ? 'dark':''}
        >
            <span onClick={showOverlay}>
                {username.slice(0, 2).toUpperCase()}
            </span>
            {show && 
            <div isdarkmode={props.isdarkmode} id='overlay'>
                    <h2>{username}</h2>
                    <div class='subdiv'>
                        <p>Changer le thème</p>
                        <ThemeButton 
                        isdarkmode={props.isdarkmode}
                        setDarkMode={props.setDarkMode}
                        id="themebutton"
                        />
                    </div>
                    <div class='subdiv' onClick={Logout}>
                        <p>Déconnexion</p>
                    </div>
                    
            </div>}
            
        </div>
    )
}

export default UserSettings;
