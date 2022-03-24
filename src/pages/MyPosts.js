import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import './pages.css';

export default function MyPosts() {
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        // if(userInfo){
        //     navigate('/myposts')
        // }
    }, [])

    const [posts, setPosts] = useState(false)
    const [userInfo, setUserInfo] =useState(JSON.parse(localStorage.getItem("userInfo")))

     useEffect(function(){

        // if(userInfo){
        //     console.log('usestate user info called')
        // }
        // else {
            fetch(`${process.env.REACT_APP_API_URL}/posts/user/${userInfo.user}`)
            .then(response => response.json())
            .then(response => setPosts([response]))
            .catch((err) => console.error(err))
        // }

    },[]);



    const checkLength = ((input) => {
        if (input.length > 100){
            let shortInput = `${input.slice(0, 100)}...`
            return shortInput
        }
        else return input
    })

    const clickHandler = (i) => {
        console.log(i)
    }
    if (posts){

        return (
            <div className="row">
            <div className="column">
            <h1 className = "header">My Posts</h1>
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