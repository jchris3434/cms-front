import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './UserSettings.css';
import ThemeButton from './ThemeButton';
import Logout from '../Logout';

function UserSettings(props){

    const [show, setShow] = useState(false);
    const username = sessionStorage.getItem("username");

    const showOverlay = () => {
        setShow(!show);
    };

    // Keyboard event handler
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            showOverlay();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!username) {
        return null;
    }

    return ( 
        <button 
            className="avatar-button" 
            id={props.isdarkmode ? 'dark' : ''}
            onClick={showOverlay}
            onKeyDown={handleKeyDown}
        >
            <span>
                {username.slice(0, 2).toUpperCase()}
            </span>
            {show && 
                <div id='overlay'>
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
        </button>
    );
}

UserSettings.propTypes = {
    isdarkmode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
};

export default UserSettings;
