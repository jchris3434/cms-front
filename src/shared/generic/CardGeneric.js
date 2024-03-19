import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import './CardGeneric.css'

function CardGeneric(props) {
    
    const cardClasses = `CardGeneric ${props.isDarkMode ? 'darkmode' : ''}`;

    return (
        <div className="CardContainer">
            <Card className={cardClasses}>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardGeneric;

