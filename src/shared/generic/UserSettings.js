import React, { useState } from 'react';
import './UserSettings.css';
import ThemeButton from './ThemeButton';
import Logout from '../Logout'
import PropTypes from 'prop-types';

/**
 * @description                     User Avatar and overlay for changing To Light/Dark Mode and Logout 
 * 
 * @param {object} props
 * @param {boolean} isdarkmode      props.isDarkMode either 'true' or 'false'
 * @param {function} setDarkMode    props.setDarkMode UseState in parent element
 * 
 * @returns                         JSX elements (Avatar + Overlay on click + ThemeButton)
 */


const username = sessionStorage.getItem("username");

function UserSettings(props){

    const [show, setShow] = useState(false);

    const showOverlay = () => {
        setShow(!show);
    };

    return ( 
        <div 
            className="avatar" 
            id={props.isdarkmode === true ? 'dark':''}
        >
            <span onClick={showOverlay}>
                {username.slice(0, 2).toUpperCase()}
            </span>
            {show && 
                <div isdarkmode={props.isdarkmode} id='overlay'>
                    <h2>{username}</h2>
                    <div className='subdiv'>
                        <label htmlFor="themebutton">Changer le thème</label>
                        <ThemeButton 
                            isdarkmode={props.isdarkmode}
                            setDarkMode={props.setDarkMode}
                            id="themebutton"
                        />
                    </div>
                    <div className='subdiv' onClick={Logout}>
                        <p>Déconnexion</p>
                    </div>
                </div>
            }
        </div>
    );
}

UserSettings.propTypes = {
    isdarkmode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
};

export default UserSettings;
