import React, { useState } from 'react';
import './HeaderButton.css';
import '../../index.css';

/**
 * @description                 The buttons that are displayed in the header navbar
 * 
 * @param {object} props 
 * @param {string} darkmode     props.darkmode  Either 'true' or 'false'
 * @param {string} lightmode    props.lightmode Either 'true' or 'false'
 * @param {string} icon         props.icon      The reference of the icon from the Boostrap library (example : bi-screwdriver)
 * @param {string} text         props.text      The text that is displayed on the button
 * @param {string} redirect     props.redirect  The link that the button redirects to
 * @returns                     Button component 
 */
function HeaderButton(props){

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    // juste pour tester j ai mis une url random
    const redirect = () => {
        window.location.href = props.redirect;
    };

    return (

        // penses a changer par <button>, <span>, <label>
        <div className={`HeaderButtonContainer ${props.darkmode ? 'darkmode' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={redirect}
        >
            {/* ici je pense que tu peux directement mettre la balise <i> sans la ré englober, a tester) */}
            <div className="IconContainer">
                <i className={props.icon}></i>
            </div>
            
            <p className={`ButtonText ${props.darkmode ? 'darkmode' : ''}`}>{props.text}</p>
        </div>
    );
    
}

export default HeaderButton ;