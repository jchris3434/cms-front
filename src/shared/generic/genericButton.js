import React, { useState } from 'react';
import './genericButton'
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
    if (props.redirectTo !== undefined) {
    props.navigate(props.redirectTo); // Utilisez la fonction navigate pour rediriger
};
  };

return (
    <Button 
        className={`ButtonContainer ${isHover ? 'hover' : ''}`}
        variant="primary"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={redirect} // Utilisez la fonction redirect lors du clic sur le bouton
    >
        <div className="IconContainer">
            {props.icon}
        </div>
        <p className={`ButtonText`}>{props.text}</p>
    </Button>
);

}

export default CustomButton;

