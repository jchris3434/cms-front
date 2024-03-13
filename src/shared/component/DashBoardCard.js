import React from 'react';
import CardGeneric from '../generic/CardGeneric';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardCard.css';

function DashBoardCard(props) {
  // Add an additional class to apply dark mode
  const cardClasses = props.isDarkMode ? 'CardGeneric.dark-mode' : 'CardGeneric';

  // Function to handle redirection when card is clicked
  const redirect = () => {
    window.location.href = props.redirect;
  };

  return (
    <CardGeneric isDarkMode={props.isDarkMode.toString()} className={cardClasses} onClick={redirect}>
      <Card.Body className="card-body-container">
        {/* Icon container */}
        <div className="icon icon-large mr-2 mt-1">
          {props.icon}
        </div>
        {/* Card title and text container */}
        <div className="card-title-container">
          <Card.Title className="text-center">{props.title}</Card.Title>
          <Card.Text className="card-text-container">{props.text}</Card.Text>
        </div>
      </Card.Body>
    </CardGeneric>
  );
}

export default DashBoardCard;
