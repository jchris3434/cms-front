import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import './CardGeneric.css'
import '../../index.css';

function CardGeneric(props) {
    // Déterminez les classes à appliquer en fonction de l'état du mode sombre
    const cardClasses = `CardGeneric ${props.darkMode ? 'darkmode' : ''}`;

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

