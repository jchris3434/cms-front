// Import necessary modules from React and react-bootstrap
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'; // Enables navigation between pages in React Router
import './Login.css'; // Import CSS styles for this component
import ButtonLogin from '../shared/generic/buttonLogin';


// Definition of the login form component
function Login() {
    // Declaration of state variables for username and password
    const [username, setUsername] = useState(''); // Use useState to create a state variable for username
    const [password, setPassword] = useState(''); // Use useState to create a state variable for password

    // Functions to update state variables when input fields change
    const handleUsernameChange = (event) => {
        setUsername(event.target.value); // Update the username state variable with the input field value
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value); // Update the password state variable with the input field value
    };

    // Render the login form using React-bootstrap
    return (
        <div>
            <div className="container">
                <div className="form-container">
                    <Form>
                        <p className='login'>Connexion</p>

                        {/* Input field for username */}
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label className='Text'>Identifiant</Form.Label>
                            <Form.Control type="text"  value={username} onChange={handleUsernameChange} />
                        </Form.Group>
                        {/* Input field for pass word */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='Text'>Mot de passe</Form.Label>
                            <Form.Control type="password" value={password} onChange={handlePasswordChange} />
                        </Form.Group>
                        {/* Submit button for the form */}
                        <div className="d-flex justify-content-end">
                            <ButtonLogin className="ButtonText" username={username} password={password} />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login; // Export the Login component
