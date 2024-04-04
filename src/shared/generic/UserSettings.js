import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './UserSettings.css';
import ThemeButton from './ThemeButton';
import Logout from '../Logout';

function UserSettings(props){
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetch('/users/getAllUsers')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête réseau');
            }
            return response.json();
        })
        .then(data => setUsername(data.username))
        .catch(error => console.error('Erreur lors de la récupération de l\'username:', error));
    
    }, []);

    const showOverlay = () => {
        setShow(!show);
    };

    if (!username) {
        return null;
    }

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
