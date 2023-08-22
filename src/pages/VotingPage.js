import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router'
import axios from 'axios';
import { Button} from 'react-bootstrap';

import { toast } from 'react-toastify'
import Navbar from "./Navbar";

const VotingPage=()=>{

    const [votedFor, setCandidate] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const navigate = useNavigate()
    const name=sessionStorage.getItem('username');
    const voteSubmit = (e) => {
        e.preventDefault();
        
        console.log("session name: " + name);
        console.log("votedFor  "+votedFor);
        const body={
            name,
            votedFor
        }
        console.log(body);
        const url = `http://localhost:8080/voting/vote`
        axios.post(url,body).then((response) => {
            const result = response.data
                console.log("result after api "+result)
                if (result === 'success') {
                    setErrorMessage('Your Vote was successfully');
                    toast.success('Successfully signed up new user')

                    // navigate to the signin page
                    navigate('/userLogin');
                   // navigate('/userLogin')
                } else {
                    setErrorMessage("Already voted for Candidate")
                    //navigate('/userLogin');
                    toast.error(result['error'])
                }
        })

        // Send the form data to your server for registration
        console.log(name); // Replace with your registration API call
    };

    return(
       <div>
    <Navbar/>

<form  onClick={voteSubmit}>
<h2>Wrlcome {name}, Give your  Vote</h2>
    <input type="radio" name="fruit" value="CANDIDATE 1"     onClick={(e) => {
                 setCandidate(e.target.value)
            }} />CANDIDATE 1 <br/>
    <input type="radio" name="fruit" value="CANDIDATE 2"     onClick={(e) => {
                 setCandidate(e.target.value)
            }} />CANDIDATE 2<br/>

    <input type="radio" name="fruit" value="CANDIDATE 3"     onClick={(e) => {
                 setCandidate(e.target.value)
            }} />CANDIDATE 3<br/>
    <input type="radio" name="fruit" value="CANDIDATE 4"     onClick={(e) => {
                 setCandidate(e.target.value)
            }} />CANDIDATE 4<br/>

{errorMessage && <p>{errorMessage}</p>}
</form></div>

    
        
    )
}

export default VotingPage;