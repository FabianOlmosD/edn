import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Music from './pages/Music';
import NavBar from './pages/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import History from './pages/History';
import Dates from './pages/Dates';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/History" element={<History />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Dates" element={<Dates />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




