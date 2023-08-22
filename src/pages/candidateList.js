import React, { useState, useEffect } from 'react';
import './table.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router'

function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Step 2: Fetch candidate data from your backend
    fetch('http://localhost:8080/voting/admin') // Replace with your actual backend API endpoint
      .then((response) => response.json())
      .then((data) => {
        // Step 3: Store candidate data in state
        console.log(data);
        setCandidates(data);
      })
      .catch((error) => {
        console.error('Error fetching candidate data:', error);
      });
  }, []);


  const handleLogout = () => {
    // Perform logout logic here, e.g., clear user session
    // Then set isLoggedIn to false
   // sessionStorage.setItem('isLoggedIn', false);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userName');
    //navigate("/");

  };
  
  return (
    <div className="center-table">
        <li>
          <a href="/"  onClick={handleLogout}>For Home Page</a>
         
        </li>
      <h2>Candidate List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}

export default CandidateList;
