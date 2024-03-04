import React, { useState } from 'react';

/**
 * @description                 The buttons that are displayed in the header navbar
 * 
 * @param {object}  props 
 * @param {boolean} darkmode    props.darkmode  Either 'true' or 'false'
 * @param {string}  icon        props.icon      The reference of the icon from the Boostrap library (example : bi-screwdriver)
 * @param {string}  text        props.text      The text that is displayed on the button
 * @param {string}  redirect    props.redirect  The link that the button redirects to
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

    return (
        <button 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            display:'inline-block',
            width:'100px', 
            height:'90px', 
            borderRadius:'5px',
            backgroundColor: props.darkmode== true ? (isHover == true ? 'var(--DTPink)' : 'var(--DTDarkGray)') : (isHover == true ? 'var(--LTPink)' : 'var(--LTWhiteLighter)'),
            padding:'10px 10px',
            alignContent:'center',
            verticalAlign: 'middle',
            border:'none',
            cursor:'pointer'
        }}> 
       
            
            <div
            style={{
                textAlign: 'center',
                marginBottom:'5px'
            }}>
            
                <i className={props.icon}
                style={{
                    color: props.darkmode== true ? ('var(--DTWhiteDarker)') : (isHover == true ? 'var(--LTWhiteLighter)' : 'var(--LTPink)'),
                    fontSize:'40px',
                    lineHeight:'40px',
                }}
                ></i>
            </div>
            
            <p
            style={{
                color : props.darkmode== true ? ('var(--DTWhiteDarker)') : (isHover == true ? 'var(--LTWhiteLighter)' : 'var(--LTPink)'),
                textAlign:'center',
                fontSize:'16px',
                lineHeight:'16px',
                margin:'0'   
            }}>
                    
                {props.text}
                
            </p>
        </button>
    )
}

export default HeaderButton ;