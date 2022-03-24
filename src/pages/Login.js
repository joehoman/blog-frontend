import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Login() {
const navigate = useNavigate();
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo){
            navigate('/myposts')
        }


    }, [])

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const[loading, setLoading] = useState(false);


    const submitHandler = async (e) => {
        console.log('asdf', e)
        console.log('process.env.DATABASE_URL', process.env.DATABASE_URL)
        e.preventDefault()
        fetch(process.env.REACT_APP_LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"username": username, "password": password}),
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

    return (
        <div className="forms">
            <h1>Please Login</h1>
            <form className="login-form" onSubmit={submitHandler}>
                <p>
                    <label>Username:</label>
                    <  input onChange={(e) => setUsername(e.target.value)} type="text" />
                </p>
                <p >
                    <label >Password:</label>
                    <input  type="password" onChange={(e) => setPassword(e.target.value)} />
                </p>
                <button type="submit" className = "submitBtn">Login</button>
            </form>

            <h2>Don't have an account?</h2>
            <form>
                <Link to="/register">
                    <button type="button" className = "submitBtn">Register Here</button>
                </Link>
            </form>
        </div>
    )

};