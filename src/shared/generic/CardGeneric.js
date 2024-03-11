import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card } from 'react-bootstrap';

function CardGeneric(props) {
    return (
        <div className={`CardGeneric ${props.darkMode ? 'darkmode' : ''}`}>
            <Card>
                <Card.Body>
                {props.children}
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardGeneric;
