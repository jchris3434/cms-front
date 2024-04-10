import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './UserSettings.css';
import ThemeButton from './ThemeButton';
import Logout from '../Logout';

// Définir les éléments de stockage de session
sessionStorage.setItem("username", "Sue Flay");
sessionStorage.setItem("JWT", "fqzmifgqzmigfmkzqgrfmiz75JFJYFJ");

function UserSettings(props){

    const [show, setShow] = useState(false);
    const username = sessionStorage.getItem("username");

    const showOverlay = () => {
        setShow(!show);
    };

    // Gestionnaire d'événements de clavier
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
    }, []); // Le tableau de dépendances vide signifie que cet effet s'exécute uniquement une fois après le rendu initial

    if (!username) {
        return null;
    }

    return (
        <button
            className="avatar-button"
            id={props.isdarkmode === true ? 'dark' : ''}
            onClick={showOverlay}
            onKeyDown={handleKeyDown} // Utiliser onKeyDown au lieu de onKeyPress
            role="button" // Adding role to make it behave like a button
            tabIndex={0} // Allowing keyboard focus
        >
            <span>
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
        </button>
    );
    
}

UserSettings.propTypes = {
    isdarkmode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
};

export default UserSettings;