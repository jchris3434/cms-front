import React from 'react';
import CardGeneric from '../generic/CardGeneric';
import IconButton from '../generic/IconButton';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MediaCard.css';
import { BsXCircleFill, BsPencil } from "react-icons/bs";

function MediaCard(props) {
  // Add an additional class to apply dark mode
  const cardClasses = props.isDarkMode ? 'CardGeneric dark-mode' : 'CardGeneric';

  // Function to handle redirection when card is clicked
  const redirect = () => {
    window.location.href = props.redirect;
  };

  // Check if props.isDarkMode exists before calling toString()
  const isDarkModeString = props.isDarkMode ? props.isDarkMode.toString() : '';

  return (

    <CardGeneric isDarkMode={isDarkModeString} className={cardClasses} onClick={redirect}>

      <Card.Body>

        <Card.Img src={props.src} alt={props.alt} />
        <Card.Text className="card-text">{props.text}</Card.Text>

        <div className="icon-button">
        <IconButton icon={<BsPencil />}/> 
        <IconButton icon={<BsXCircleFill />}/>
        </div>

      </Card.Body> 
      
    </CardGeneric>

  );
}

export default MediaCard;