import React from 'react';
import CardGeneric from '../generic/card-generic'; // Import the CardGeneric component
import { Card } from 'react-bootstrap'; // Import the Card component from React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillPersonFill } from 'react-icons/bs'; // Import the icon from react-icons package
import './dashboard-card.css';


function DashBoardCard() {
    return (
        <CardGeneric darkMode={true} className="card-generic"> 
            {/* Ajoutez la classe "card-generic" pour appliquer l'ombre */}
            <Card.Body className="card-body-container"> 
                <div className="icon icon-large mr-2 mt-1"> 
                    <BsFillPersonFill/>
                </div>
                
                <div className="card-title-container">
                    <Card.Title className="text-center">Titre de la page</Card.Title>
                    <Card.Text className="card-text-container"> 
                        Accéder à la liste de tous les clients et leurs informations
                    </Card.Text>
                </div>
            </Card.Body>
        </CardGeneric>
    );
}

export default DashBoardCard;