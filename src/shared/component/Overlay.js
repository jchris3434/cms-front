import React from 'react';
import './Overlay.css';

function Overlay(props){
    return ( 
       <div id="voidoverlay">
       {props.component}
       </div>
    )
}

export default Overlay ;