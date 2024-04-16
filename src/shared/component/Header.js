import React from 'react';
import './Header.css';
import Logo from '../generic/Logo';
import SearchBar from '../generic/SearchBar.js';
import UserSettings from '../generic/UserSettings';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <div className='Header' data-isDarkMode={props.isDarkMode}>
            <div className='headerBody'>
                <Logo isDarkMode={props.isDarkMode} />
                <p className='titleText'>{props.pageName || 'Nom de la page'}</p>
                <SearchBar customWidth='22.5rem' isDarkMode={props.isDarkMode} placeholder='Rechercher un projet' />
                <UserSettings isdarkmode={props.isDarkMode} setDarkMode={props.setDarkMode} />
            </div>
        </div>
    )
}

Header.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    pageName: PropTypes.string, 
    setDarkMode: PropTypes.func.isRequired 
};

export default Header ;
