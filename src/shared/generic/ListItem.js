import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import IconButton from './IconButton';
import './ListItem.css';

/**
 * @description                             Card used as rows for a list. Similar to <tr> </tr>                               
 * 
 * @param {object}          props 
 * @param {array}           content         props.content       Array with each element to display on the line
 * @param {null | function} modifyButton    props.modifyButton  Either null or a function that is passed to the 'modify' IconButton element
 * @param {null | function} deleteButton    props.deleteButton  Either null or a function that is passed to the 'delete' IconButton element
 * 
 * @returns                                 ListItem component
 */


function ListItem(props){

    return ( 
        <Card className='ListItem' darkmode={props.darkmode.toString()}  style={{gridTemplateColumns:`repeat(${props.content.length} , 1fr) auto auto`}}>
            
            {props.content.map(function(data) {
                return (
                    <p key={data} className='textDefault'>
                        {data}
                    </p>
                )
            })}    

            {/* display IconButton if they are !== null in props and passes the defined function */}
            {props.modifyButton !== null ? <IconButton icon='bi-pencil-square' buttonAction={props.modifyButton}/>: null}
            {props.deleteButton !== null ? <IconButton icon='bi-x-circle' buttonAction={props.deleteButton}/> : null}

        </Card>
    )
}

export default ListItem ;