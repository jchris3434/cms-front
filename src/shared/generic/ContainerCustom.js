import React from 'react';
import Card from 'react-bootstrap/Card';
import './ContainerCustom.css';

/**
 * @description                     Versatile container for cards, lists, forms and other
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode      props.isDarkMode either 'true' or 'false'
 * 
 * @returns                         ContainerCustom component
 */

function ContainerCustom(props){

    return ( 
        <Card className='ContainerCustom' isdarkmode={props.isDarkMode.toString()} >
            {props.children}
        </Card>
    )
}

export default ContainerCustom ;
