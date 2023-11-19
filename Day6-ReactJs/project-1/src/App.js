import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Service from './components/Service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
