import React, { useEffect, useState } from 'react';
import './App.css';


import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Section from './Pages/Section';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Section/>
      <Section/>
    </div>
  );
}

export default App;
