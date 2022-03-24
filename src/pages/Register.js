import React from 'react';
// import './pages.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Register (){


    const navigate = useNavigate();
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo){
            navigate('/myposts')
        }


    }, [])


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState(false);
    const[loading, setLoading] = useState(false);




    const submitHandler = async (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"username": username, "password": password, first_name: firstName, last_name:lastName}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            localStorage.setItem('userInfo', JSON.stringify(data))
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };


    return(
    <div className="forms">
        <h1>Register Your Account</h1>
            <form className='register-form' onSubmit={submitHandler}>
                <p>
                    <label>Username:</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                </p>
                <p>
                    <label >Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </p>
                <p>
                    <label >First Name:</label>
                    <input type="text" input onChange={(e) => setFirstName(e.target.value)}/>
                </p>
                <p>
                    <label>Last Name:</label>
                    <input type="text" input onChange={(e) => setLastName(e.target.value)}/>
                </p>
                <button type="submit" className = "submitBtn">Create Account</button>
            </form>
    </div>
    )

};