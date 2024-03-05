import React, { useState } from 'react';
import './genericButton.css';
import { Button } from 'react-bootstrap';

function CustomButton(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const redirect = () => {
    window.location.href = props.redirect;
  };

  return (
    <Button 
    className= {`ButtonContainer ${isHover ? 'hover' : ''}`}
      variant="primary"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={redirect}
    >
    <div className="IconContainer">
        {props.icon}
    </div>
      <p className={`ButtonText`}>{props.text}</p>
    </Button>
  );
}

export default CustomButton;
