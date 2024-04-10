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
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            showOverlay();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []); // Le tableau de dépendances vide signifie que cet effet s'exécute uniquement une fois après le rendu initial

    if (!username) {
        return null;
    }

    return ( 
        <div 
            className="avatar" 
            id={props.isdarkmode === true ? 'dark':''}
            tabIndex="0" // Ajouter tabIndex pour rendre l'élément focusable
            onClick={showOverlay}
            onKeyPress={handleKeyPress} // Ajouter le gestionnaire d'événements clavier
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
        </div>
    );
}

UserSettings.propTypes = {
    isdarkmode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
};

export default UserSettings;