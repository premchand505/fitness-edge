// App.jsx
import React from 'react';



import Home from './Pages/Home';
import Facilities from './Pages/Facilities';
import Pricing from './Pages/Pricing';
import Nutrition from './Pages/Nutrition';

import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
   
      <div className="app-container">
       <Navbar/>
       <Home/>
       <Pricing/>
       <Facilities/>
       <Nutrition/>
       <Footer/>
      </div>
  
  );
}

export default App;
