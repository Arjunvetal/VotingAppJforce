
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router'
import axios from 'axios';

import { toast } from 'react-toastify'
import Navbar from "./Navbar";

// Import React and any other necessary modules


function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  const handleLogin = () => {

    if(username=="arjun" && password=="arjun123") {
   
    sessionStorage.setItem('isLoggedIn', true)
    sessionStorage.setItem('username', username);
        navigate("/CandidateList");
    // const url = `http://localhost:8080/voting/admin`
    // axios.get(url).then((response) => {
    //     const result = response.data
    //         console.log("result all candidate :"+result)
            
    // })
}else{
    setErrorMessage('Invalid username or password');
}
    // Perform authentication logic here, and if successful:
   

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

export default AdminLogin;
