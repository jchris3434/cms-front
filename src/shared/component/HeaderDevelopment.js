import React from 'react';
import './Header.css';
import Logo from '../generic/Logo';
import SearchBar from '../generic/SearchBar.js';
import HeaderButton from '../generic/HeaderButton';
import UserSettings from '../generic/UserSettings';
import PropTypes from 'prop-types';

/**
 * @description                                     The header that is displayed as the header navbar
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * 
 * @returns                                         The header component
 */
function HeaderDev(props){

    return (
        <div className='Header' isDarkMode={props.isDarkMode.toString()}>
            <div className='headerBody'>
                <Logo isDarkMode={props.isDarkMode} />
                <p className='titleText'> {props.pageName || 'Nom de la page'} </p>
                <SearchBar customWidth='22.5rem' isDarkMode={props.isDarkMode} placeholder='Rechercher un projet'/>
                <HeaderButton isDarkMode={props.isDarkMode} icon='bi-archive-fill' text='Projets' redirect='/projectsList'/>
                <HeaderButton isDarkMode={props.isDarkMode} icon='bi-people-fill' text='Clients' redirect='/pagesList'/> 
                <UserSettings isdarkmode={props.isDarkMode} setDarkMode={props.setDarkMode}/>
            </div>
        </div>
    )
}

HeaderDev.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
    pageName: PropTypes.string, // pageName prop is optional and should be a string
    setDarkMode: PropTypes.func.isRequired // setDarkMode prop is required and should be a function
  };

export default HeaderDev ;