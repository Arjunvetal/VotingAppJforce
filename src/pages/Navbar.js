import React, { useState } from 'react';
import './index.css'; // Import a CSS file for styling
import { useNavigate } from 'react-router'

function Navbar() {
  const isLoggedIn =sessionStorage.getItem('isLoggedIn');
  const navigate = useNavigate()
  //const { loginStatus, userName } = sessionStorage

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here, e.g., clear user session
    // Then set isLoggedIn to false
   // sessionStorage.setItem('isLoggedIn', false);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userName');
    navigate("/");

  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="/" >Home</a>
        </li>
        <li>
          <a href="/userLogin">Login</a>
        </li>
        <li>
          <a href="/userRegister">Registration</a>
        </li>
        <li>
              <a href="/adminLogin">Admin Login</a>
            </li>
        {isLoggedIn ? (
          <>
           
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navbar;
