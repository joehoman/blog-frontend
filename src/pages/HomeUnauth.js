import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
// import './pages.css';

export default function HomeUnauth() {
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo){
            navigate('/myposts')
            // history.push("/myposts")
        }


    }, [])

    const [posts, setPosts] = useState(false)

     useEffect(function(){
        const userInfo = localStorage.getItem("userInfo");
        if(userInfo){
            console.log('usestate user info called')
        }
        else {
            fetch(`${process.env.REACT_APP_API_URL}/posts`)
            .then(response => response.json())
            .then(response => setPosts([response]))
            .catch((err) => console.error(err))
        }

    },[]);

    if (posts){

        return (
            <div className="App">
                <div className="posts">
                    <h1> Posts </h1>
                    {posts[0].map(posts => {
                        return(
                            <>
                            <h4>{posts.title}</h4>
                            <p>{posts.content}</p>
                            <p>{posts.created_at}</p>
                            </>
                        )
                    })}

                </div>
            </div>
        )

    } else {
        return <h1>loading </h1>;
    }


};