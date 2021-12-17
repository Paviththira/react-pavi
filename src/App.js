import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Home from './components/home/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/services' element={Services} />
        <Route exact path='/products' element={Products} />
        <Route exact path='/contact-us' element={ContactUs} />
        <Route exact path='/sign-up' element={SignUp} />
        <Route exact path='/marketing' element={Marketing} />
        <Route exact path='/consulting' element={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;
