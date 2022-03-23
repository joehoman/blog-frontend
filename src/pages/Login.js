import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";



export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const[loading, setLoading] = useState(false);


    const submitHandler = async (e) => {
        e.preventDefault()
        fetch(process.env.REACT_APP_LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"username": "qwerty", "password": "qwerty"}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            localStorage.setItem('userInfo', JSON.stringify(data))
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        // try{
        //     const config = {
        //         headers: {
        //             "Content-type":"application/json"
        //         }
        //     }

        //     setLoading(true)
        //     const { data } = await axios.post(
        //         console.log(process.env.REACT_APP_LOGIN_URL)
        //         (process.env.REACT_APP_LOGIN_URL),
        //         {
        //             username: username,
        //             password: password,
        //         },
        //         config
        //     );
        //         console.log(data, 'asdfasdf')
        //         localStorage.setItem('userInfo',JSON.stringify(data));
        //     setLoading(false)
        // }catch{
        //     console.log('error')
        // };
    };

    return (
        <div className="forms">
            <h1>Please Login</h1>
            <form className="login-form" onSubmit={submitHandler}>
                <p>
                    <label>Username:</label>
                    <  input  onChange={(e) => setUsername(e.target.value)} type="text" />
                </p>
                <p >
                    <label >Password:</label>
                    <input  type="password" onChange={(e) => setPassword(e.target.value)} />
                </p>
                {/* <Link to="/myposts"> */}
                <button type="submit" className = "submitBtn">Login</button>
                {/* </Link> */}
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