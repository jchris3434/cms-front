// Import necessary modules from React and react-bootstrap
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'; // Enables navigation between pages in React Router
import './Login.css'; // Import CSS styles for this component
import CustomButton from '../shared/generic/genericButton';


// Definition of the login form component
function Login() {
    // Declaration of state variables for username and password
    const [username, setUsername] = useState(''); // Use useState to create a state variable for username
    const [password, setPassword] = useState(''); // Use useState to create a state variable for password
    const navigate = useNavigate(); // Use useNavigate to get a navigation function from React Router

    // Functions to update state variables when input fields change
    const handleUsernameChange = (event) => {
        setUsername(event.target.value); // Update the username state variable with the input field value
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value); // Update the password state variable with the input field value
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        // Create a FormData object to send form data to the server
        const formData = new FormData();
        formData.append('identifiant', username); // Add the username to the FormData object
        formData.append('password', password); // Add the password to the FormData object

        // Send a POST HTTP request to the server with form data
        fetch('http://localhost:3000/users/login', {
            method: 'POST', // Use POST method to send data
            body: formData // Use the FormData object as the request body
        })
        .then(response => {
            if (response.ok) { // Check if the server response is successful
                return response.json(); // Convert the response to JSON
            } else {
                throw new Error('Error during login'); // Throw an error if login fails
            }
        })
        .then(data => {
            localStorage.setItem("token", data.token); // Store the authentication token in local storage
            localStorage.setItem("username", username); // Store the username in local storage
            navigate("/dashboard"); // Redirect the user to "/Dashboard" page
        })
        .catch(error => {
            console.log(error.message); // Log errors to the console
        });
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
                            <CustomButton className="ButtonText"  type="submit" onClick={handleSubmit} text="Connexion" />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login; // Export the Login component
