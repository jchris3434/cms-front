import React from 'react';
import ContainerCustom from '../generic/ContainerCustom';
import ListHeader from '../generic/ListHeader';
import ListItem from '../generic/ListItem';

/**
 * @description                             Versatile container for cards, lists, forms and other
 * 
 * @param {object}          props
 * @param {boolean}         isDarkMode      props.isDarkMode    Either 'true' or 'false'
 * @param {array}           listHeaders     props.listHeaders   An array with the header of the list
 * @param {array}           listRows        props.listRows      An array with the contents of the list where 1 index = 1 row
 * @param {null | function} modifyButton    props.modifyButton  Either null or a function that is passed to the 'modify' IconButton element
 * @param {null | function} deleteButton    props.deleteButton  Either null or a function that is passed to the 'delete' IconButton element
 * 
 * 
 * 
 * @returns                         ContainerCustom component
 */

function List(props){

    return ( 
        <ContainerCustom className='List' isDarkMode={props.isDarkMode.toString()}>
            <ListHeader content={props.listHeaders} modifyButton={props.modifyButton} deleteButton={props.deleteButton} />
            
            {props.listRows.map(function(data) {
                return (
                    <ListItem  
                        isDarkMode={props.isDarkMode} 
                        content={data} 
                        modifyButton={props.modifyButton} 
                        deleteButton={props.deleteButton}  
                    />
                )
            })}  
                
        </ContainerCustom>
    )
}

export default List ;
