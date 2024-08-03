import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardGeneric from '../generic/CardGeneric';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardCard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PropTypes from 'prop-types';

/**
 * DashBoardCard Component
 * 
 * This component represents a card in the dashboard with an optional redirect and overlay.
 * 
 * Props:
 * - isDarkMode (boolean): Determines if the dark mode is enabled.
 * - redirect (string): URL to navigate to when the card is clicked. If empty, no navigation occurs.
 * - title (string): Title of the card.
 * - text (string): Descriptive text for the card.
 * - icon (string): Icon class to be displayed in the card.
 * - show (function): Optional function to show an overlay.
 */


function DashBoardCard(props) {
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Function to handle redirection when the card is clicked
  const redirect = () => {
    if (props.redirect) {
      navigate(props.redirect); // Use navigate for redirection
    }
  };

  const displayOverlay = () => {
    if (props.show) {
      props.show(true);
    }
  };

  return (
    <CardGeneric isDarkMode={props.isDarkMode}>
      <Card.Body onClick={props.redirect ? redirect : displayOverlay} className="card-body-container">
        <div className="card-title-container">
          <Card.Title className="text-center">
            <i className={props.icon}></i>
            {props.title}
          </Card.Title>
          <Card.Text className="card-text-container">{props.text}</Card.Text>
        </div>
      </Card.Body>
    </CardGeneric>
  );
}

DashBoardCard.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and must be a boolean
  redirect: PropTypes.string, // redirect prop is optional and must be a string
  show: PropTypes.func, // show prop is optional and must be a function
  title: PropTypes.string.isRequired, // title prop is required and must be a string
  icon: PropTypes.string.isRequired, // icon prop is required and must be a string
  text: PropTypes.string.isRequired // text prop is required and must be a string
};

export default DashBoardCard;
