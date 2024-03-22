import React, { useState } from 'react';
import './buttonLogin.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ButtonLogin(props) {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      "usr_username": props.username,
      "usr_password": props.password
    }

    fetch('http://localhost:12000/users/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error during login');
      }
    })
    .then(data => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", props.username);
      navigate("/dashboard");
    })
    .catch(error => {
      console.log(error.message);
    });
  };

  return (
    <Button 
      className={`ButtonContainer ${isHover ? 'hover' : ''}`}
      variant="primary"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleSubmit}
    >
      <p className={`ButtonText`}>Connexion</p>
    </Button>
  );
}

export default ButtonLogin;
