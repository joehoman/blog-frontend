import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import MyPosts from './pages/MyPosts.js';
import CreatePost from './pages/CreatePost.js';
import DeletePost from './pages/DeletePost.js';
import Logout from './pages/Logout.js';
import ViewEditPost from './pages/ViewEditPost.js';
import ViewPost from './pages/ViewPost.js';

//componenets
import Navbar from './components/Navbar.js';

function App() {
return (
  <>
  <main>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/login' element = {<Login />} />
      <Route path = '/register' element = {<Register />} />
      <Route path = '/myposts' element = {<MyPosts />} />
      <Route path = '/createpost' element = {<CreatePost />} />
      <Route path = '/deletepost' element = {<DeletePost />} />
      <Route path = '/logout' element = {<Logout />} />
      <Route path = '/viewpost' element = {<ViewPost />} />
      <Route path = '/vieweditpost' element = {<ViewEditPost />} />
      <Route path = '/editpost' element = {<ViewEditPost />} />
    </Routes>
  </main>
  </>
);
}

export default App;
