import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeUnauth from './pages/HomeUnauth.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';

function App() {
return (
  <>
  <main>
    <Routes>
      <Route path = '/' element = {<HomeUnauth />} />
      <Route path = '/login' element = {<Login />} />
      <Route path = '/register' element = {<Register />} />
    </Routes>
  </main>
  </>
);
}

export default App;
