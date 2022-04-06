import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import './pages.css';

export default function Home() {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(localStorage.getItem("userInfo"))


    const [posts, setPosts] = useState(false)

     useEffect(function(){
        const userInfo = localStorage.getItem("userInfo");

            fetch(`${process.env.REACT_APP_API_URL}/posts`)
            .then(response => response.json())
            .then(response => setPosts([response]))
            .catch((err) => console.error(err))


    },[]);

    const clickHandler = (i) => {
        //navigate to view if not logged in, navigate to viewedit if logged in
       if (userInfo){
           navigate("/vieweditpost", {state: {title:i}})
       }
       else{
            navigate("/viewpost", {state: {title:i}})
       }

    }

    const checkLength = ((input) => {
        if (input.length > 300){
            let shortInput = `${input.slice(0, 100)}...`
            return shortInput
        }
        else return input
    })

    if (posts){

        return (
            <div className="row">
                <div className="column">
                <h1 className = "header">All Posts</h1>
                    {posts[0].map((posts, i) => {
                        return(
                            <div className="card">
                                <>
                                    <button onClick = {() => clickHandler(posts.title)}  className = "postButton" >
                                        <h4  >{posts.title} </h4>
                                        <p >{checkLength(posts.content)}</p>
                                        <p >{posts.created_at}</p>
                                    </button>
                                </>
                            </div>

                        )
                    })}

                </div>
            </div>
        )

    } else {
        return <h1>loading </h1>;
    }


};