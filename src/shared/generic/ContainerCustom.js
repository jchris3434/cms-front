import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './ContainerCustom.css';

/**
 * @description                 Versatile container for cards, lists, forms and other
 * 
 * @param {object}  props
 * @param {string}  darkmode    props.darkmode either 'true' or 'false'
 * @returns 
 */
function ContainerCustom(props){

    return ( 
        <Card className='ContainerCustom' darkmode={props.darkmode} >
            {props.children}
        </Card>
    )
}

export default ContainerCustom ;
