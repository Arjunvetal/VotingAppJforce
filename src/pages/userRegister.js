// Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'


function Registration() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        emailId: '',
        phoneno: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       

        const url = `http://localhost:8080/user/register`
        axios.post(url,formData).then((response) => {
            const result = response.data
                console.log(result)
                if (result['status'] === 'success') {
                    console.log("success register   ");
                    setErrorMessage('');
                    navigate('/userLogin');
                    toast.success('Successfully signed up new user')

                    // navigate to the signin page
                   // navigate('/userLogin');
                   
                } else {
                    setErrorMessage(' userame already registered');
                   // navigate('/userLogin');
                    console.log("error  aaa");
                    toast.error(result['error'])
                }
        })

        // Send the form data to your server for registration
        console.log(formData); // Replace with your registration API call
    };

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="emailId"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phoneno"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default Registration;




