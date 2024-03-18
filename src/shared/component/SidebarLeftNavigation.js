import React, { useState } from 'react';
import './SidebarLeftNavigation.css';
import PropTypes from 'prop-types';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const SidebarLeftNavigation = ({ items, isDarkMode }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [contentDisplay, setContentDisplay] = useState('');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setContentDisplay(isOpen ? 'classClose' : '');
    };

    return (
        <div className={`sidebar-left ${contentDisplay} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className={`content ${contentDisplay}`}>
                <h5 className="pages-list-title">Navigation</h5>
                <ul className="pages-list">
                    {items.map((item, index) => (
                        <div className={`pages-bubble ${isDarkMode ? 'dark-mode' : 'light-mode'}`} key={index}>
                            <NavLink to={item.url} className="nav-link">{item.label}</NavLink>
                        </div>
                    ))}
                </ul>
            </div>
            <div className={`button-container ${contentDisplay}`}>
                <button className={`toggle-btn ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleSidebar}>
                    {isOpen ? <BsArrowLeft /> : <BsArrowRight />}
                </button>
            </div>
        </div>
    );
};

SidebarLeftNavigation.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    isDarkMode: PropTypes.bool.isRequired
};

export default SidebarLeftNavigation;
