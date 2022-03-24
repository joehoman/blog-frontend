import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar(){

    const [userInfo, setUserInfo] = useState(localStorage.getItem("userInfo"))
    if (userInfo){
        return(
            <>
            <div className = "topnav">
                <b>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        Home
                    </Link>
                </b>
                <b>
                    <Link to="/myposts" style={{ textDecoration: 'none' }}>
                        My Posts
                    </Link>
                </b>
                <b>
                    <Link to="/createpost" style={{ textDecoration: 'none' }}>
                        Create Post
                    </Link>
                </b>
                <b>
                    <Link to="/vieweditpost" style={{ textDecoration: 'none' }}>
                        View/Edit Post
                    </Link>
                </b>
                <b>
                    <Link to="/deletepost" style={{ textDecoration: 'none' }}>
                        Delete Post
                    </Link>
                </b>
                <b>
                    <Link to="/logout" style={{ textDecoration: 'none' }}>
                        Log Out
                    </Link>
                </b>

            </div>
            </>
        )
    }
    else {
        return(
            <>
            <div className = "topnav" style={{ textDecoration: 'none' }}>
                <b>
                    <Link to="/"  style={{ textDecoration: 'none' }}>
                        Home
                    </Link>
                </b>
                <b>
                    <Link to="/Login" style={{ textDecoration: 'none' }}>
                        Login
                    </Link>
                </b>
                <b>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        Register
                    </Link>
                </b>
                <b>
                    <Link to="/viewpost" style={{ textDecoration: 'none' }}>
                        View Post
                    </Link>
                </b>
            </div>
            </>
        )
    }

}
export default Navbar;