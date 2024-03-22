import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import './CardGeneric.css'

function CardGeneric(props) {
    
    const cardClasses = `CardGeneric ${props.isDarkMode ? 'darkmode' : ''}`;

    return (
        <div className="CardContainer">
            <Card 
                className={cardClasses} 
                id={props.id} 
                isdarkmode={props.isDarkMode.toString()}
            >
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardGeneric;