
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router'
import axios from 'axios';

import { toast } from 'react-toastify'
import Navbar from "./Navbar";

// Import React and any other necessary modules


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  const handleLogin = () => {
    const body={
        username,
        password
    }
    // Perform authentication logic here, and if successful:
    const url = `http://localhost:8080/login`
        axios.post(url,body).then((response) => {
            const result = response.data
                console.log(result)
                if (result === 'success') {
                 
                  navigate('/VotingPage');
                    toast.success('Successfully signed up new user')
                    setErrorMessage('');

                    // navigate to the signin page
                   
                   // navigate('/userLogin')
                } else {
                  setErrorMessage('Invalid username or password');
                    console.error("Bad request");
                    toast.error(result['error'])
                }
        })

        sessionStorage.setItem('isLoggedIn', true)
    sessionStorage.setItem('username', username);
  };

  return (
    
    <div>
      <Navbar/>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;
