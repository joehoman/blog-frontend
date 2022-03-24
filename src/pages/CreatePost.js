import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
// import './pages.css';

export default function CreatePost() {
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(!userInfo){
            navigate('/register')
        }

    }, [])

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);
    const[loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] =useState(JSON.parse(localStorage.getItem("userInfo")))


    const submitHandler = async (e) => {

        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"title": title,"content": content,"created_by": userInfo.user}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            navigate('/myposts')
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="forms">
            <h1>Create Post</h1>
            <form className="create-post" onSubmit={submitHandler}>
                 <p>
                    <label>Title:</label>
                    <  input  onChange={(e) => setTitle(e.target.value)} type="text" />
                </p>
                <p>
                    <label>Content:</label>
                    <  input  onChange={(e) => setContent(e.target.value)} type="text" />
                </p>
                <button type="submit" className = "submitBtn">Post</button>
            </form>
        </div>
    )

};

