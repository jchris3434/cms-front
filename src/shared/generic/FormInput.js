import React from 'react';
import './FormInput.css';

function FormInput(props){

    return ( 
        <div className='FormInput' isdarkmode={props.isDarkMode.toString()}>
            <label className='textDefault'>{props.label}</label>
            {props.children}
        </div>
    )
}

export default FormInput ;
