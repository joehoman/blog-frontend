import React, { useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
// import './pages.css';

export default function ViewPost() {
    const location = useLocation();
    const navigate = useNavigate();

    const [title, setTitle] = useState()
    const [postInfo,setPostInfo] = useState();

    const submitHandler = async (e) => {

        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/posts/specific/${title}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            setPostInfo(data)

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const clickSubmitHandler = async (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/posts/specific/${location.state.title}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            setPostInfo(data)

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    if (!postInfo){
        if (location.state){
            return (
                 <div className="forms">
                     <h1>View/Edit Post </h1>
                     <form className="create-post" onSubmit={clickSubmitHandler}>
                         <p>
                             <label>Title:</label>
                             <  input defaultValue = {location.state.title} type="text" />
                         </p>
                         <button type="submit" className = "submitBtn">View</button>
                     </form>
                 </div>
         )
         }

         else{
             return (
                 <div className="forms">
                     <h1>View/Edit Post </h1>
                     <form className="create-post" onSubmit={submitHandler}>
                         <p>
                             <label>Title:</label>
                             <  input  onChange={(e) => setTitle(e.target.value)} type="text" />
                         </p>
                         <button type="submit" className = "submitBtn">View</button>
                     </form>
                 </div>
             )
         }
    }
    else{
        return (
            <>
            <h1>{postInfo[0].title}</h1>
            <p>{postInfo[0].content}</p>
            </>
        )
    }


};

