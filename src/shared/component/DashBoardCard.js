import React from 'react';
import CardGeneric from '../generic/CardGeneric';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardCard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function DashBoardCard(props) {
  // Function to handle redirection when card is clicked
  const redirect = () => {
    window.location.href = props.redirect;
  };

  const displayOverlay = () => {
    props.show(true)
  }

  return (
    <CardGeneric isDarkMode={props.isDarkMode}>
        <Card.Body onClick={props.redirect ? redirect : displayOverlay} className="card-body-container" > 
            <div className="card-title-container">
                <Card.Title className="text-center">
                    <i class={props.icon}></i> 
                     {props.title}
                </Card.Title>
                <Card.Text className="card-text-container">{props.text}</Card.Text>
            </div>
        </Card.Body>
    </CardGeneric>
  );
}

export default DashBoardCard;
